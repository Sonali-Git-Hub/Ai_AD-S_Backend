import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js';
import User from '../models/User.js';
import UserQuota from '../models/UserQuota.js';
import { getUserPlan, getOrCreateUserQuota } from '../services/subscriptionService.js';
import Razorpay from 'razorpay';
import crypto from 'crypto';

// Initialize Razorpay
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy',
    key_secret: process.env.RAZORPAY_KEY_SECRET || 'dummy_secret'
});

/**
 * GET /subscription
 * Returns the user's active subscription plan + current quota usage.
 */
export const getSubscriptionDetails = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        const subscription = await Subscription.findOne({ userId, subscriptionStatus: 'active' }).populate('planId');
        const user = await User.findById(userId).select('founderStatus role');
        const plan = await getUserPlan(userId);
        const quota = await getOrCreateUserQuota(userId);

        res.status(200).json({
            success: true,
            subscription,
            founderStatus: user?.founderStatus || false,
            // New quota info
            plan: {
                planKey: plan.planKey,
                chatLimit: plan.chatLimit,
                chatScope: plan.chatScope,
                imageLimit: plan.imageLimit,
                carouselLimit: plan.carouselLimit,
                videoLimit: plan.videoLimit,
                editImageAllowed: plan.editImageAllowed,
                cashflowAllowed: plan.cashflowAllowed,
                renewalDate: plan.renewalDate,
            },
            usage: {
                chatUsed: quota.chatUsed,
                imagesUsed: quota.imagesUsed,
                carouselsUsed: quota.carouselsUsed,
                videosUsed: quota.videosUsed,
                date: quota.date,
                planActivatedAt: quota.planActivatedAt,
            },
            // Legacy compat: send credits as 0 so frontend doesn't crash on old references
            credits: 0,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * GET /subscription/quota-status
 * Returns current plan + today's usage (lightweight, for frequent polling).
 */
export const getQuotaStatus = async (req, res) => {
    try {
        const userId = req.user.id || req.user._id;
        const plan = await getUserPlan(userId);
        const quota = await getOrCreateUserQuota(userId);

        // Check if free plan has expired
        let planExpired = false;
        if (plan.planKey === 'Plan_0') {
            const activatedAt = quota.planActivatedAt || new Date();
            const expiryMs = activatedAt.getTime() + (plan.validityDays * 24 * 60 * 60 * 1000);
            planExpired = Date.now() > expiryMs;
        }

        res.status(200).json({
            success: true,
            planKey: plan.planKey,
            planExpired,
            limits: {
                chat:      plan.chatLimit,
                chatScope: plan.chatScope,
                images:    plan.imageLimit,
                carousels: plan.carouselLimit,
                videos:    plan.videoLimit,
                editImage: plan.editImageAllowed,
                cashflow:  plan.cashflowAllowed,
            },
            usage: {
                chat:      quota.chatUsed,
                images:    quota.imagesUsed,
                carousels: quota.carouselsUsed,
                videos:    quota.videosUsed,
            },
            planActivatedAt: quota.planActivatedAt,
            renewalDate: plan.renewalDate,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * POST /subscription/create-order
 * Creates a Razorpay order for a plan purchase.
 */
export const createOrder = async (req, res) => {
    try {
        const { planId, billingCycle } = req.body;
        let amount = 0;

        if (planId) {
            const plan = await Plan.findById(planId);
            if (!plan) return res.status(404).json({ success: false, message: 'Plan not found' });
            amount = billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly;
        } else {
            return res.status(400).json({ success: false, message: 'Invalid request' });
        }

        if (amount === 0) {
            return res.status(200).json({ success: true, isFree: true });
        }

        const options = {
            amount: amount * 100, // INR in paise
            currency: 'INR',
            receipt: `order_rcptid_${Date.now()}`
        };

        const order = await razorpay.orders.create(options);
        res.status(200).json({
            success: true,
            order,
            key: process.env.RAZORPAY_KEY_ID || 'rzp_test_dummy'
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

/**
 * POST /subscription/purchase
 * Activates a purchased plan for the user.
 */
export const purchasePlan = async (req, res) => {
    try {
        const { planId, billingCycle } = req.body;
        const userId = req.user.id || req.user._id;

        const plan = await Plan.findById(planId);
        if (!plan) return res.status(404).json({ success: false, message: 'Plan not found' });

        const user = await User.findById(userId);

        if (plan.planName === 'Founder Plan') {
            const founderCount = await User.countDocuments({ founderStatus: true });
            if (founderCount >= 500 && !user.founderStatus) {
                return res.status(400).json({ success: false, message: 'Founder plan limit reached.' });
            }
            user.founderStatus = true;
        }

        // Cancel any existing active subscriptions
        await Subscription.updateMany({ userId, subscriptionStatus: 'active' }, { subscriptionStatus: 'cancelled' });

        // VALIDITY: Calculate renewal/expiry date
        let renewalDate = new Date();
        if (plan.planName.toLowerCase().includes('founder')) {
            renewalDate.setFullYear(renewalDate.getFullYear() + 100);
        } else if (billingCycle === 'yearly') {
            const months = plan.validityYearly || 12;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        } else {
            const months = plan.validityMonthly || 1;
            renewalDate.setMonth(renewalDate.getMonth() + months);
        }

        const newSubscription = await Subscription.create({
            userId,
            planId: plan._id,
            creditsRemaining: 0, // No longer used
            billingCycle,
            subscriptionStart: new Date(),
            renewalDate,
            subscriptionStatus: 'active',
            paymentId: 'mock_payment_id_for_now'
        });

        // Reset quota usage on plan upgrade (daily counters reset; chat counter preserved for upgrade tracking)
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

        res.status(200).json({
            success: true,
            subscription: newSubscription,
            message: 'Plan upgraded successfully.',
            // Return new quota limits so frontend can update immediately
            planKey: plan.planId || 'Plan_0',
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// ── LEGACY STUBS (kept so old routes don't 404) ──────────────────────────────

/** GET /subscription/credit-history — legacy stub, returns empty */
export const getCreditLogs = async (req, res) => {
    res.status(200).json({ success: true, logs: [] });
};

/** POST /subscription/buy-credits — no longer applicable */
export const purchaseCredits = async (req, res) => {
    res.status(410).json({
        success: false,
        message: 'Credit purchases are no longer available. Please upgrade your plan instead.',
        code: 'CREDITS_DEPRECATED'
    });
};

/** POST /subscription/deduct-credits — no longer applicable */
export const deductCredits = async (req, res) => {
    res.status(200).json({
        success: true,
        credits: 0,
        message: 'Credit system has been replaced with plan-based quotas. No deduction needed.',
    });
};
