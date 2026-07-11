/**
 * razorpaySync.service.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Syncs all CAPTURED Razorpay payments into our Invoice collection.
 *
 * • Fetches payments from the Razorpay API (paginated, up to `maxDays` back)
 * • Matches each payment to a User (via notes.email or subscription paymentId)
 * • Upserts an Invoice record with the ACTUAL Razorpay amount
 * • Computes proper GST breakdown (18% inclusive — CGST/SGST or IGST)
 * • Skips payments already synced (idempotent)
 * • Logs every action for full audit trail
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Razorpay from 'razorpay';
import Invoice from '../models/Invoice.js';
import Subscription from '../models/Subscription.js';
import User from '../models/User.js';
import Plan from '../models/Plan.js';

const SELLER_STATE = (process.env.SELLER_STATE || 'Maharashtra').trim().toLowerCase();
const GST_RATE = 0.18;

// ── Razorpay client ──────────────────────────────────────────────────────────
const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// ── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Convert paise → INR (2 decimal places)
 */
const paiseToINR = (paise) => Math.round((paise / 100) * 100) / 100;

/**
 * Determine gateway from payment method field
 */
const detectGateway = (payment) => {
    const method = (payment.method || '').toLowerCase();
    if (method === 'upi') return 'razorpay';
    if (method === 'card') return 'razorpay';
    if (method === 'netbanking') return 'razorpay';
    if (method === 'wallet') return 'razorpay';
    if (method === 'emi') return 'razorpay';
    return 'razorpay'; // All Razorpay API payments are Razorpay
};

/**
 * Compute GST breakdown from inclusive total amount
 * Returns { baseAmount, totalGst, cgst, sgst, igst, gstPercentage }
 */
const computeGST = (totalAmount, buyerState = '') => {
    const normalizedBuyerState = buyerState.trim().toLowerCase();
    const baseAmount = Math.round((totalAmount / (1 + GST_RATE)) * 100) / 100;
    const totalGst = Math.round((totalAmount - baseAmount) * 100) / 100;
    let cgst = 0, sgst = 0, igst = 0;

    if (normalizedBuyerState && normalizedBuyerState === SELLER_STATE) {
        // Same state → CGST + SGST (9% + 9%)
        cgst = Math.round((totalGst / 2) * 100) / 100;
        sgst = Math.round((totalGst / 2) * 100) / 100;
    } else {
        // Different state or unknown → IGST (18%)
        igst = totalGst;
    }

    return { baseAmount, totalGst, cgst, sgst, igst, gstPercentage: 18 };
};

/**
 * Generate sequential invoice number: INV-YYYY-XXXXXX
 */
const generateInvoiceNumber = async () => {
    const currentYear = new Date().getFullYear();
    const count = await Invoice.countDocuments({
        invoiceNumber: { $regex: `^INV-${currentYear}-` }
    });
    const sequence = String(count + 1).padStart(6, '0');
    return `INV-${currentYear}-${sequence}`;
};

/**
 * Fetch all captured Razorpay payments from the last `daysBack` days.
 * Razorpay returns max 100 per page — this function handles pagination.
 */
const fetchAllRazorpayPayments = async (daysBack = 90) => {
    const fromTimestamp = Math.floor((Date.now() - daysBack * 24 * 60 * 60 * 1000) / 1000);
    const toTimestamp = Math.floor(Date.now() / 1000);

    let allPayments = [];
    let skip = 0;
    const count = 100;

    while (true) {
        const response = await razorpay.payments.all({
            from: fromTimestamp,
            to: toTimestamp,
            count,
            skip,
        });

        const items = response.items || [];
        allPayments = allPayments.concat(items);

        if (items.length < count) break; // Last page
        skip += count;

        // Safety: max 2000 payments
        if (allPayments.length >= 2000) break;
    }

    return allPayments;
};

/**
 * Core sync function.
 * Returns { synced, skipped, errors, total }
 */
export const syncRazorpayPayments = async (daysBack = 90) => {
    const stats = { synced: 0, skipped: 0, errors: 0, total: 0, details: [] };

    if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
        throw new Error('Razorpay credentials not configured in environment variables.');
    }

    console.log(`[RazorpaySync] Starting sync for last ${daysBack} days...`);

    // 1. Fetch all payments from Razorpay API
    let payments;
    try {
        payments = await fetchAllRazorpayPayments(daysBack);
    } catch (err) {
        throw new Error(`Failed to fetch payments from Razorpay API: ${err.message}`);
    }

    // Only process CAPTURED payments — these are actual successful charges
    const capturedPayments = payments.filter(p => p.status === 'captured');
    stats.total = capturedPayments.length;
    console.log(`[RazorpaySync] Found ${payments.length} total payments, ${capturedPayments.length} captured.`);

    for (const payment of capturedPayments) {
        try {
            const paymentId = payment.id;

            // ── Skip if already synced ────────────────────────────────────
            const existingInvoice = await Invoice.findOne({ paymentId });
            if (existingInvoice) {
                stats.skipped++;
                continue;
            }

            const totalAmountINR = paiseToINR(payment.amount);
            const paymentDate = new Date(payment.created_at * 1000);

            // ── Find matching user ─────────────────────────────────────────
            // Try 1: notes.email from Razorpay payment notes
            const notesEmail = payment.notes?.email || payment.email || null;
            let user = null;
            if (notesEmail) {
                user = await User.findOne({ email: notesEmail.toLowerCase().trim() });
            }

            // Try 2: Find via subscription that has this paymentId
            let subscription = null;
            if (!user) {
                subscription = await Subscription.findOne({ paymentId }).populate('userId');
                if (subscription?.userId) {
                    user = await User.findById(subscription.userId._id || subscription.userId);
                }
            }

            // Try 3: Find subscription by paymentId even if user found
            if (!subscription) {
                subscription = await Subscription.findOne({ paymentId })
                    .populate('planId');
            }

            // Skip if we cannot identify the user at all
            if (!user) {
                console.warn(`[RazorpaySync] Cannot identify user for payment ${paymentId} (amount: ₹${totalAmountINR}). Skipping.`);
                stats.skipped++;
                stats.details.push({ paymentId, status: 'skipped', reason: 'user_not_found', amount: totalAmountINR });
                continue;
            }

            // ── Find matching plan via subscription ────────────────────────
            let plan = null;
            let billingCycle = 'monthly';
            if (subscription) {
                plan = subscription.planId
                    ? (typeof subscription.planId === 'object' ? subscription.planId : await Plan.findById(subscription.planId))
                    : null;
                billingCycle = subscription.billingCycle || 'monthly';
            }

            // If still no subscription, try to find most recent subscription for this user around payment date
            if (!subscription) {
                subscription = await Subscription.findOne({
                    userId: user._id,
                    createdAt: {
                        $gte: new Date(paymentDate.getTime() - 5 * 60 * 1000), // 5 min before
                        $lte: new Date(paymentDate.getTime() + 60 * 60 * 1000), // 1 hour after
                    }
                }).populate('planId');
                if (subscription) {
                    plan = subscription.planId
                        ? (typeof subscription.planId === 'object' ? subscription.planId : await Plan.findById(subscription.planId))
                        : null;
                    billingCycle = subscription.billingCycle || 'monthly';
                }
            }

            // ── Compute GST from actual amount ─────────────────────────────
            const buyerState = payment.notes?.state || '';
            const gst = computeGST(totalAmountINR, buyerState);

            // ── Generate invoice number ────────────────────────────────────
            const invoiceNumber = await generateInvoiceNumber();

            // ── Build billing details ──────────────────────────────────────
            const billingDetails = {
                name: payment.notes?.name || user.name || user.email.split('@')[0],
                companyName: payment.notes?.company || '',
                gstin: payment.notes?.gstin || '',
                addressLine1: payment.notes?.address || '',
                city: payment.notes?.city || '',
                state: payment.notes?.state || '',
                postalCode: payment.notes?.postal_code || '',
                country: payment.notes?.country || 'IN',
            };

            // ── Create Invoice ─────────────────────────────────────────────
            const invoice = new Invoice({
                invoiceNumber,
                userId: user._id,
                subscriptionId: subscription?._id || null,
                planId: plan?._id || null,
                paymentGateway: detectGateway(payment),
                paymentId,
                paymentStatus: 'captured',
                billingDetails,
                planPrice: plan ? (billingCycle === 'yearly' ? plan.priceYearly : plan.priceMonthly) : totalAmountINR,
                baseAmount: gst.baseAmount,
                cgst: gst.cgst,
                sgst: gst.sgst,
                igst: gst.igst,
                gstPercentage: gst.gstPercentage,
                gstAmount: gst.totalGst,
                totalAmount: totalAmountINR, // ← ACTUAL Razorpay amount, not plan price
                currency: (payment.currency || 'INR').toUpperCase(),
                invoiceDate: paymentDate,
                createdAt: paymentDate,
            });

            await invoice.save();

            stats.synced++;
            stats.details.push({
                paymentId,
                invoiceNumber,
                status: 'synced',
                amount: totalAmountINR,
                user: user.email,
                plan: plan?.planName || 'Unknown',
                date: paymentDate.toISOString(),
            });

            console.log(`[RazorpaySync] ✓ Synced ${paymentId} | ₹${totalAmountINR} | ${user.email} | ${invoiceNumber}`);

        } catch (err) {
            stats.errors++;
            console.error(`[RazorpaySync] ✗ Error processing payment ${payment.id}:`, err.message);
            stats.details.push({ paymentId: payment.id, status: 'error', reason: err.message });
        }
    }

    console.log(`[RazorpaySync] Complete. Synced: ${stats.synced} | Skipped: ${stats.skipped} | Errors: ${stats.errors} | Total: ${stats.total}`);
    return stats;
};

/**
 * Lightweight sync — only the last 7 days (for scheduled/cron use)
 */
export const syncRazorpayRecent = () => syncRazorpayPayments(7);

/**
 * Full historical sync — last 365 days (for initial setup / manual trigger)
 */
export const syncRazorpayFull = () => syncRazorpayPayments(365);
