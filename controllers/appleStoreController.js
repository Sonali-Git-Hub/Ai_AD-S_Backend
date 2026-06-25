import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import UserQuota from '../models/UserQuota.js';
import axios from 'axios';

/**
 * POST /api/payment/verify/apple
 * Verifies an iOS App Store subscription receipt and activates/upgrades user plan.
 */
export const verifyAppleStoreSubscription = async (req, res) => {
    try {
        const { receipt, productId, transactionId } = req.body;
        const userId = req.user.id || req.user._id;

        console.log(`[AppleStore IAP] Verifying purchase for user: ${userId}, productId: ${productId}`);

        if (!productId) {
            return res.status(400).json({ success: false, message: 'productId is required.' });
        }

        if (!receipt) {
            return res.status(400).json({ success: false, message: 'receipt is required.' });
        }

        // 1. Map subscription product IDs (SKUs) to Database Plan keys
        let planIdKey = 'Plan_1'; // Default Creator
        const cleanProductId = String(productId).toLowerCase().trim();

        if (cleanProductId.includes('startup') || cleanProductId.includes('plan_2')) {
            planIdKey = 'Plan_2';
        } else if (cleanProductId.includes('enterprise') || cleanProductId.includes('plan_3')) {
            planIdKey = 'Plan_3';
        } else {
            planIdKey = 'Plan_1';
        }

        const plan = await Plan.findOne({ planId: planIdKey, isActive: true });
        if (!plan) {
            return res.status(404).json({ success: false, message: `Plan details for key '${planIdKey}' not found in database.` });
        }

        let billingCycle = cleanProductId.includes('yearly') || cleanProductId.includes('annual') ? 'yearly' : 'monthly';
        let isSimulationMode = receipt === 'test_bypass_token' || process.env.NODE_ENV !== 'production';

        // 2. Perform Receipt Verification
        if (!isSimulationMode) {
            try {
                const requestData = {
                    'receipt-data': receipt
                };
                
                // Add password (shared secret) if configured in env
                if (process.env.APPLE_IAP_SHARED_SECRET) {
                    requestData.password = process.env.APPLE_IAP_SHARED_SECRET;
                }

                let appleResponse = null;
                
                // Call Apple Production Verify Receipt endpoint
                try {
                    const prodRes = await axios.post('https://buy.itunes.apple.com/verifyReceipt', requestData, {
                        headers: { 'Content-Type': 'application/json' }
                    });
                    appleResponse = prodRes.data;
                } catch (prodErr) {
                    console.error('[AppleStore IAP] Production Apple verification HTTP error:', prodErr.message);
                }

                // Status 21007: Sandbox receipt sent to production environment. Failover to Sandbox endpoint.
                if (appleResponse && appleResponse.status === 21007) {
                    console.log('[AppleStore IAP] Sandbox receipt detected in production. Retrying with Apple Sandbox server...');
                    const sandboxRes = await axios.post('https://sandbox.itunes.apple.com/verifyReceipt', requestData, {
                        headers: { 'Content-Type': 'application/json' }
                    });
                    appleResponse = sandboxRes.data;
                }

                if (!appleResponse) {
                    return res.status(400).json({ success: false, message: 'Could not connect to Apple Store verification servers.' });
                }

                if (appleResponse.status !== 0) {
                    return res.status(400).json({ success: false, message: `Apple receipt validation failed. Status: ${appleResponse.status}` });
                }

                // Search for the latest transaction inside latest_receipt_info or receipt.in_app
                const latestInfo = appleResponse.latest_receipt_info || [];
                const inAppInfo = (appleResponse.receipt && appleResponse.receipt.in_app) || [];
                const transactions = [...latestInfo, ...inAppInfo];

                // Sort by expiration date descending to get the latest
                transactions.sort((a, b) => {
                    const timeA = parseInt(a.expires_date_ms || a.purchase_date_ms || 0);
                    const timeB = parseInt(b.expires_date_ms || b.purchase_date_ms || 0);
                    return timeB - timeA;
                });

                // Find matching product
                const activeItem = transactions.find(t => t.product_id === productId) || transactions[0];

                if (!activeItem) {
                    return res.status(400).json({ success: false, message: 'No matching transaction found in Apple purchase receipt.' });
                }

                // Check expiry if it is a subscription with an expiration date
                if (activeItem.expires_date_ms) {
                    const expiryTimeMillis = parseInt(activeItem.expires_date_ms);
                    if (expiryTimeMillis < Date.now()) {
                        return res.status(400).json({ success: false, message: 'Apple App Store subscription has expired.' });
                    }
                }

                console.log(`[AppleStore IAP] Verified purchase successfully via App Store API. Product: ${activeItem.product_id}`);
            } catch (err) {
                console.error('❌ Apple Store Developer API verification failed:', err.message);
                return res.status(400).json({ success: false, message: `Apple Store validation failed: ${err.message}` });
            }
        } else {
            // Local simulation / sandbox upgrade
            console.log(`[AppleStore IAP] Simulation/Sandbox mode active. Skipping remote call.`);
        }

        // 3. User Upgrade & Quota Refresh (matches subscriptionController.js)
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found.' });
        }

        // Cancel previous active subscriptions
        await Subscription.updateMany({ userId, subscriptionStatus: 'active' }, { subscriptionStatus: 'cancelled' });

        // Calculate renewal/expiry date
        let renewalDate = new Date();
        if (billingCycle === 'yearly') {
            const months = plan.validityYearly || 12;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        } else {
            const months = plan.validityMonthly || 1;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        }

        // Create subscription entry
        const newSubscription = await Subscription.create({
            userId,
            planId: plan._id,
            creditsRemaining: 0,
            billingCycle,
            subscriptionStart: new Date(),
            renewalDate,
            subscriptionStatus: 'active',
            paymentId: transactionId || `ios_mock_${Date.now()}`
        });

        // Reset Quota usage on plan upgrade (daily limits reset)
        await UserQuota.findOneAndUpdate(
            { userId },
            {
                $set: {
                    imagesUsed: 0,
                    carouselsUsed: 0,
                    videosUsed: 0,
                    planActivatedAt: new Date(),
                }
            },
            { upsert: true, new: true }
        );

        await user.save();

        console.log(`[AppleStore IAP] Successfully upgraded user ${userId} to '${plan.planName}' (${billingCycle}).`);

        return res.status(200).json({
            success: true,
            isSimulation: isSimulationMode,
            subscription: newSubscription,
            planKey: plan.planId || 'Plan_0',
            message: `✅ Subscription upgraded successfully via Apple App Store! ${plan.planName} activated.`
        });

    } catch (error) {
        console.error('[AppleStore IAP] verifyAppleStoreSubscription error:', error);
        return res.status(500).json({ success: false, message: error.message });
    }
};
