/**
 * adminBillingController.js
 * ─────────────────────────────────────────────────────────────────────────────
 * Finance & Invoice Management for the Admin Panel.
 *
 * Data source priority:
 *   1. Invoice collection  — populated by Razorpay sync & invoice service
 *   2. Subscriptions fallback — used ONLY when Invoice collection is empty
 *      (and only for real gateway payments, never admin-assigned plans)
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Invoice from '../models/Invoice.js';
import Subscription from '../models/Subscription.js';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import { syncRazorpayPayments } from '../services/razorpaySync.service.js';

// ── Date boundary helpers ────────────────────────────────────────────────────
const getDateBoundaries = () => {
    const now = new Date();
    const startOfToday = new Date(now); startOfToday.setHours(0, 0, 0, 0);
    const startOfWeek  = new Date(now); startOfWeek.setDate(now.getDate() - now.getDay()); startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const startOfYear  = new Date(now.getFullYear(), 0, 1);
    const startOfLastMonth = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const endOfLastMonth   = new Date(now.getFullYear(), now.getMonth(), 0, 23, 59, 59, 999);
    return { now, startOfToday, startOfWeek, startOfMonth, startOfYear, startOfLastMonth, endOfLastMonth };
};

// ── Strict whitelist: only real gateway payment IDs ──────────────────────────
// Razorpay: pay_XXXXXXXX
// Google Pay via Razorpay: gpay_XXXXXXXXXX (captured in our DB from webhook)
// PayPal: paypal-*, pay-XXXXXXXXX
// ─────────────────────────────────────────────────────────────────────────────
const REAL_PAYMENT_QUERY = {
    paymentId: {
        $exists: true,
        $ne: null,
        $regex: '^(pay_|gpay_|paypal-|pp-|pay-[A-Z0-9])',
        $options: 'i'
    }
};

// Helper: compute revenue from subscription plan price (fallback only)
const getRevenueFromSub = (sub) => {
    if (!sub.planId) return 0;
    return sub.billingCycle === 'yearly'
        ? (sub.planId.priceYearly || 0)
        : (sub.planId.priceMonthly || 0);
};

// ────────────────────────────────────────────────────────────────────────────
// 1. TRIGGER RAZORPAY SYNC (admin-only)
// ────────────────────────────────────────────────────────────────────────────
export const triggerRazorpaySync = async (req, res) => {
    try {
        const { daysBack = 90 } = req.query;
        console.log(`[Admin] Razorpay sync triggered by admin. daysBack=${daysBack}`);

        const stats = await syncRazorpayPayments(parseInt(daysBack));

        res.status(200).json({
            success: true,
            message: `Razorpay sync complete. ${stats.synced} new payments synced.`,
            stats,
        });
    } catch (error) {
        console.error('[RAZORPAY SYNC ERROR]', error);
        res.status(500).json({ success: false, message: error.message });
    }
};

// ────────────────────────────────────────────────────────────────────────────
// 2. FINANCE DASHBOARD STATS
// ────────────────────────────────────────────────────────────────────────────
export const getFinanceDashboardStats = async (req, res) => {
    try {
        const { startOfToday, startOfWeek, startOfMonth, startOfYear, startOfLastMonth, endOfLastMonth } = getDateBoundaries();

        // ── Check invoice source ──────────────────────────────────────────
        const invoiceCount = await Invoice.countDocuments({ paymentStatus: 'captured' });

        let stats;

        if (invoiceCount > 0) {
            // ━━━━ PRIMARY: Invoice collection (populated by Razorpay sync) ━━━━
            const capturedFilter = { paymentStatus: 'captured' };

            const [
                totalAgg, todayAgg, weekAgg, monthAgg, yearAgg, lastMonthAgg,
                gatewayAgg, statusAgg, planAgg, monthlySeriesAgg, dailySeriesAgg,
            ] = await Promise.all([
                Invoice.aggregate([{ $match: capturedFilter }, {
                    $group: { _id: null,
                        totalRevenue: { $sum: '$totalAmount' }, totalBase: { $sum: '$baseAmount' },
                        totalGst: { $sum: '$gstAmount' }, totalCgst: { $sum: '$cgst' },
                        totalSgst: { $sum: '$sgst' }, totalIgst: { $sum: '$igst' },
                        count: { $sum: 1 }
                    }
                }]),
                Invoice.aggregate([{ $match: { ...capturedFilter, createdAt: { $gte: startOfToday } } }, { $group: { _id: null, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }]),
                Invoice.aggregate([{ $match: { ...capturedFilter, createdAt: { $gte: startOfWeek } } }, { $group: { _id: null, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }]),
                Invoice.aggregate([{ $match: { ...capturedFilter, createdAt: { $gte: startOfMonth } } }, { $group: { _id: null, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }]),
                Invoice.aggregate([{ $match: { ...capturedFilter, createdAt: { $gte: startOfYear } } }, { $group: { _id: null, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }]),
                Invoice.aggregate([{ $match: { ...capturedFilter, createdAt: { $gte: startOfLastMonth, $lte: endOfLastMonth } } }, { $group: { _id: null, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }]),

                // Gateway distribution
                Invoice.aggregate([{ $match: capturedFilter }, { $group: { _id: '$paymentGateway', revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } }, { $sort: { revenue: -1 } }]),

                // Status breakdown (all statuses)
                Invoice.aggregate([{ $group: { _id: '$paymentStatus', count: { $sum: 1 }, revenue: { $sum: '$totalAmount' } } }]),

                // Plan distribution
                Invoice.aggregate([
                    { $match: capturedFilter },
                    { $lookup: { from: 'plans', localField: 'planId', foreignField: '_id', as: 'plan' } },
                    { $unwind: { path: '$plan', preserveNullAndEmptyArrays: true } },
                    { $group: { _id: { $ifNull: ['$plan.planName', 'Unknown Plan'] }, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } },
                    { $sort: { revenue: -1 } }
                ]),

                // Monthly revenue series (last 12 months)
                Invoice.aggregate([
                    { $match: { ...capturedFilter, createdAt: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 11, 1)) } } },
                    { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } },
                    { $sort: { '_id.year': 1, '_id.month': 1 } }
                ]),

                // Daily revenue series (last 30 days)
                Invoice.aggregate([
                    { $match: { ...capturedFilter, createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } },
                    { $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' }, day: { $dayOfMonth: '$createdAt' } }, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 } } },
                    { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
                ]),
            ]);

            const total = totalAgg[0] || {};
            const month = monthAgg[0] || { revenue: 0, count: 0 };
            const lastMonth = lastMonthAgg[0] || { revenue: 0 };
            const revenueGrowth = lastMonth.revenue > 0
                ? (((month.revenue - lastMonth.revenue) / lastMonth.revenue) * 100).toFixed(1)
                : (month.revenue > 0 ? '100.0' : '0.0');

            const statusMap = {};
            statusAgg.forEach(s => { statusMap[s._id] = { count: s.count, revenue: s.revenue }; });

            stats = {
                totalRevenue:     total.totalRevenue || 0,
                todayRevenue:     (todayAgg[0] || {}).revenue || 0,
                weekRevenue:      (weekAgg[0] || {}).revenue || 0,
                monthRevenue:     month.revenue || 0,
                yearRevenue:      (yearAgg[0] || {}).revenue || 0,
                lastMonthRevenue: lastMonth.revenue || 0,
                revenueGrowth:    parseFloat(revenueGrowth),
                totalGst:   total.totalGst  || 0,
                totalCgst:  total.totalCgst || 0,
                totalSgst:  total.totalSgst || 0,
                totalIgst:  total.totalIgst || 0,
                netRevenue:   total.totalBase    || 0,
                grossRevenue: total.totalRevenue || 0,
                totalTransactions:  total.count || 0,
                todayTransactions:  (todayAgg[0] || {}).count || 0,
                monthTransactions:  month.count || 0,
                avgOrderValue: (total.count || 0) > 0 ? Math.round((total.totalRevenue / total.count) * 100) / 100 : 0,
                statusBreakdown:     statusMap,
                gatewayDistribution: gatewayAgg,
                planDistribution:    planAgg,
                monthlyRevenueSeries: monthlySeriesAgg,
                dailyRevenueSeries:   dailySeriesAgg,
                dataSource: 'invoices',
                lastSyncedAt: await Invoice.findOne({ syncedFromGateway: true }).sort({ syncedAt: -1 }).select('syncedAt').then(d => d?.syncedAt || null),
            };
        } else {
            // ━━━━ FALLBACK: Subscriptions collection (only real gateway payments) ━━━━
            const [allPaidSubs, monthlySeriesAgg, dailySeriesAgg] = await Promise.all([
                Subscription.find(REAL_PAYMENT_QUERY)
                    .populate('planId', 'planName priceMonthly priceYearly')
                    .lean(),
                Subscription.aggregate([
                    { $match: { ...REAL_PAYMENT_QUERY, createdAt: { $gte: new Date(new Date().setMonth(new Date().getMonth() - 11, 1)) } } },
                    { $lookup: { from: 'plans', localField: 'planId', foreignField: '_id', as: 'plan' } },
                    { $unwind: { path: '$plan', preserveNullAndEmptyArrays: true } },
                    { $group: {
                        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
                        revenue: { $sum: { $cond: [{ $eq: ['$billingCycle', 'yearly'] }, { $ifNull: ['$plan.priceYearly', 0] }, { $ifNull: ['$plan.priceMonthly', 0] }] } },
                        count: { $sum: 1 }
                    }},
                    { $sort: { '_id.year': 1, '_id.month': 1 } }
                ]),
                Subscription.aggregate([
                    { $match: { ...REAL_PAYMENT_QUERY, createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) } } },
                    { $lookup: { from: 'plans', localField: 'planId', foreignField: '_id', as: 'plan' } },
                    { $unwind: { path: '$plan', preserveNullAndEmptyArrays: true } },
                    { $group: {
                        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' }, day: { $dayOfMonth: '$createdAt' } },
                        revenue: { $sum: { $cond: [{ $eq: ['$billingCycle', 'yearly'] }, { $ifNull: ['$plan.priceYearly', 0] }, { $ifNull: ['$plan.priceMonthly', 0] }] } },
                        count: { $sum: 1 }
                    }},
                    { $sort: { '_id.year': 1, '_id.month': 1, '_id.day': 1 } }
                ]),
            ]);

            let totalRevenue = 0, todayRevenue = 0, weekRevenue = 0, monthRevenue = 0, yearRevenue = 0, lastMonthRevenue = 0;
            let todayCount = 0, monthCount = 0;
            const gatewayMap = {}, planMap = {};

            const { startOfToday: sToday, startOfWeek: sWeek, startOfMonth: sMon, startOfYear: sYear, startOfLastMonth: sLastMon, endOfLastMonth: eLastMon } = getDateBoundaries();

            for (const sub of allPaidSubs) {
                const price = getRevenueFromSub(sub);
                const createdAt = new Date(sub.createdAt);
                totalRevenue += price;
                if (createdAt >= sToday) { todayRevenue += price; todayCount++; }
                if (createdAt >= sWeek) weekRevenue += price;
                if (createdAt >= sMon) { monthRevenue += price; monthCount++; }
                if (createdAt >= sYear) yearRevenue += price;
                if (createdAt >= sLastMon && createdAt <= eLastMon) lastMonthRevenue += price;

                const gw = 'razorpay';
                if (!gatewayMap[gw]) gatewayMap[gw] = { revenue: 0, count: 0 };
                gatewayMap[gw].revenue += price;
                gatewayMap[gw].count++;

                const planName = sub.planId?.planName || 'Unknown';
                if (!planMap[planName]) planMap[planName] = { revenue: 0, count: 0 };
                planMap[planName].revenue += price;
                planMap[planName].count++;
            }

            const totalCount = allPaidSubs.length;
            const totalGst = Math.round((totalRevenue - totalRevenue / 1.18) * 100) / 100;
            const netRevenue = Math.round((totalRevenue / 1.18) * 100) / 100;
            const revenueGrowth = lastMonthRevenue > 0
                ? (((monthRevenue - lastMonthRevenue) / lastMonthRevenue) * 100).toFixed(1)
                : (monthRevenue > 0 ? '100.0' : '0.0');

            stats = {
                totalRevenue: Math.round(totalRevenue * 100) / 100,
                todayRevenue: Math.round(todayRevenue * 100) / 100,
                weekRevenue:  Math.round(weekRevenue * 100) / 100,
                monthRevenue: Math.round(monthRevenue * 100) / 100,
                yearRevenue:  Math.round(yearRevenue * 100) / 100,
                lastMonthRevenue: Math.round(lastMonthRevenue * 100) / 100,
                revenueGrowth: parseFloat(revenueGrowth),
                totalGst:  Math.round(totalGst * 100) / 100,
                totalCgst: Math.round((totalGst / 2) * 100) / 100,
                totalSgst: Math.round((totalGst / 2) * 100) / 100,
                totalIgst: 0,
                netRevenue:   Math.round(netRevenue * 100) / 100,
                grossRevenue: Math.round(totalRevenue * 100) / 100,
                totalTransactions: totalCount,
                todayTransactions: todayCount,
                monthTransactions: monthCount,
                avgOrderValue: totalCount > 0 ? Math.round((totalRevenue / totalCount) * 100) / 100 : 0,
                statusBreakdown: {
                    active:    { count: allPaidSubs.filter(s => s.subscriptionStatus === 'active').length, revenue: 0 },
                    expired:   { count: allPaidSubs.filter(s => s.subscriptionStatus === 'expired').length, revenue: 0 },
                    cancelled: { count: allPaidSubs.filter(s => s.subscriptionStatus === 'cancelled').length, revenue: 0 },
                },
                gatewayDistribution: Object.entries(gatewayMap).map(([k, v]) => ({ _id: k, ...v })).sort((a, b) => b.revenue - a.revenue),
                planDistribution:    Object.entries(planMap).map(([k, v]) => ({ _id: k, ...v })).sort((a, b) => b.revenue - a.revenue),
                monthlyRevenueSeries: monthlySeriesAgg,
                dailyRevenueSeries:   dailySeriesAgg,
                dataSource: 'subscriptions_fallback',
                syncRequired: true, // Signal to frontend to suggest running sync
            };
        }

        // Always attach live subscription & user counts (from DB)
        const [activeSubscriptions, cancelledSubscriptions, totalUsers, newUsersThisMonth] = await Promise.all([
            Subscription.countDocuments({ subscriptionStatus: 'active' }),
            Subscription.countDocuments({ subscriptionStatus: { $in: ['cancelled', 'expired'] } }),
            User.countDocuments({}),
            User.countDocuments({ createdAt: { $gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1) } }),
        ]);

        stats.activeSubscriptions  = activeSubscriptions;
        stats.cancelledSubscriptions = cancelledSubscriptions;
        stats.totalUsers         = totalUsers;
        stats.newUsersThisMonth  = newUsersThisMonth;

        res.status(200).json({ success: true, stats });
    } catch (error) {
        console.error('[FINANCE DASHBOARD STATS ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch finance stats.', error: error.message });
    }
};

// ────────────────────────────────────────────────────────────────────────────
// 3. INVOICE LEDGER
// ────────────────────────────────────────────────────────────────────────────
export const getFinanceInvoices = async (req, res) => {
    try {
        const {
            search = '', page = 1, limit = 20,
            gateway, status, startDate, endDate, month, year,
            sortBy = 'createdAt', sortOrder = 'desc',
        } = req.query;

        const invoiceCount = await Invoice.countDocuments({ paymentStatus: 'captured' });

        if (invoiceCount > 0) {
            // ── Invoice collection ────────────────────────────────────────
            let query = {};
            if (gateway)  query.paymentGateway = gateway;
            if (status)   query.paymentStatus  = status;

            if (month && year) {
                query.createdAt = { $gte: new Date(parseInt(year), parseInt(month) - 1, 1), $lte: new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999) };
            } else if (startDate || endDate) {
                query.createdAt = {};
                if (startDate) query.createdAt.$gte = new Date(startDate);
                if (endDate)   { const e = new Date(endDate); e.setHours(23, 59, 59, 999); query.createdAt.$lte = e; }
            } else if (year) {
                query.createdAt = { $gte: new Date(parseInt(year), 0, 1), $lte: new Date(parseInt(year), 11, 31, 23, 59, 59, 999) };
            }

            if (search) {
                const matchingUsers = await User.find({
                    $or: [{ email: { $regex: search, $options: 'i' } }, { name: { $regex: search, $options: 'i' } }]
                }).select('_id');
                query.$or = [
                    { invoiceNumber: { $regex: search, $options: 'i' } },
                    { paymentId:     { $regex: search, $options: 'i' } },
                    { 'billingDetails.name': { $regex: search, $options: 'i' } },
                    { userId: { $in: matchingUsers.map(u => u._id) } }
                ];
            }

            const pageNum = parseInt(page), limitNum = parseInt(limit);
            const sortObj = { [sortBy]: sortOrder === 'asc' ? 1 : -1 };

            const [invoices, totalCount, filterTotalsAgg] = await Promise.all([
                Invoice.find(query)
                    .populate('userId', 'name email')
                    .populate('planId', 'planName')
                    .populate({ path: 'subscriptionId', populate: { path: 'planId', select: 'planName' } })
                    .sort(sortObj).skip((pageNum - 1) * limitNum).limit(limitNum),
                Invoice.countDocuments(query),
                Invoice.aggregate([{ $match: query }, { $group: { _id: null, totalRevenue: { $sum: '$totalAmount' }, totalBase: { $sum: '$baseAmount' }, totalGst: { $sum: '$gstAmount' }, count: { $sum: 1 } } }]),
            ]);

            return res.status(200).json({
                success: true, invoices,
                filterTotals: filterTotalsAgg[0] || { totalRevenue: 0, totalBase: 0, totalGst: 0, count: 0 },
                pagination: { total: totalCount, page: pageNum, limit: limitNum, pages: Math.ceil(totalCount / limitNum) },
                dataSource: 'invoices',
            });
        }

        // ── Fallback: Subscriptions ───────────────────────────────────────
        let subQuery = { ...REAL_PAYMENT_QUERY };
        if (status) {
            const statusMap = { captured: 'active', success: 'active', pending: 'pending', cancelled: 'cancelled', failed: 'expired', refunded: 'cancelled' };
            subQuery.subscriptionStatus = statusMap[status] || status;
        }
        if (month && year) {
            subQuery.createdAt = { $gte: new Date(parseInt(year), parseInt(month) - 1, 1), $lte: new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999) };
        } else if (year) {
            subQuery.createdAt = { $gte: new Date(parseInt(year), 0, 1), $lte: new Date(parseInt(year), 11, 31, 23, 59, 59, 999) };
        } else if (startDate || endDate) {
            subQuery.createdAt = {};
            if (startDate) subQuery.createdAt.$gte = new Date(startDate);
            if (endDate)   { const e = new Date(endDate); e.setHours(23, 59, 59, 999); subQuery.createdAt.$lte = e; }
        }

        if (search) {
            const matchingUsers = await User.find({
                $or: [{ email: { $regex: search, $options: 'i' } }, { name: { $regex: search, $options: 'i' } }]
            }).select('_id');
            subQuery.$or = [{ paymentId: { $regex: search, $options: 'i' } }, { userId: { $in: matchingUsers.map(u => u._id) } }];
        }

        const pageNum = parseInt(page), limitNum = parseInt(limit);
        const totalCount = await Subscription.countDocuments(subQuery);
        const subs = await Subscription.find(subQuery)
            .populate('userId', 'name email')
            .populate('planId', 'planName priceMonthly priceYearly')
            .sort({ createdAt: sortOrder === 'asc' ? 1 : -1 })
            .skip((pageNum - 1) * limitNum).limit(limitNum);

        const statusMap = { active: 'captured', expired: 'expired', cancelled: 'refunded', pending: 'pending' };
        const invoices = subs.map(sub => {
            const price = getRevenueFromSub(sub);
            const gstAmt  = Math.round((price - price / 1.18) * 100) / 100;
            const baseAmt = Math.round((price / 1.18) * 100) / 100;
            return {
                _id: sub._id,
                invoiceNumber: `SUB-${String(sub._id).slice(-6).toUpperCase()}`,
                invoiceDate: sub.createdAt, createdAt: sub.createdAt,
                userId: sub.userId,
                subscriptionId: { _id: sub._id, planId: sub.planId },
                planId: sub.planId,
                paymentId: sub.paymentId, paymentGateway: 'razorpay',
                paymentStatus: statusMap[sub.subscriptionStatus] || sub.subscriptionStatus,
                billingDetails: { name: sub.userId?.name || 'Customer' },
                baseAmount: baseAmt, gstAmount: gstAmt,
                cgst: Math.round((gstAmt / 2) * 100) / 100,
                sgst: Math.round((gstAmt / 2) * 100) / 100,
                igst: 0,
                totalAmount: price, currency: 'INR',
                billingCycle: sub.billingCycle,
                _isSubscriptionData: true,
            };
        });

        const totalRev  = invoices.reduce((s, i) => s + i.totalAmount, 0);
        const totalBase = invoices.reduce((s, i) => s + i.baseAmount, 0);
        const totalGst  = invoices.reduce((s, i) => s + i.gstAmount, 0);

        res.status(200).json({
            success: true, invoices,
            filterTotals: { totalRevenue: Math.round(totalRev * 100) / 100, totalBase: Math.round(totalBase * 100) / 100, totalGst: Math.round(totalGst * 100) / 100, count: invoices.length },
            pagination: { total: totalCount, page: pageNum, limit: limitNum, pages: Math.ceil(totalCount / limitNum) },
            dataSource: 'subscriptions_fallback',
        });
    } catch (error) {
        console.error('[FINANCE INVOICES ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch invoices.', error: error.message });
    }
};

// ────────────────────────────────────────────────────────────────────────────
// 4. MONTHLY REPORT
// ────────────────────────────────────────────────────────────────────────────
export const getMonthlyReport = async (req, res) => {
    try {
        const { month, year } = req.query;
        const m = parseInt(month) || new Date().getMonth() + 1;
        const y = parseInt(year)  || new Date().getFullYear();
        const startDate = new Date(y, m - 1, 1);
        const endDate   = new Date(y, m, 0, 23, 59, 59, 999);
        const monthNames = ['January','February','March','April','May','June','July','August','September','October','November','December'];

        const invoiceCount = await Invoice.countDocuments({ createdAt: { $gte: startDate, $lte: endDate }, paymentStatus: 'captured' });

        if (invoiceCount > 0) {
            const query = { createdAt: { $gte: startDate, $lte: endDate }, paymentStatus: 'captured' };
            const [summaryAgg, gatewayBreakdown, planBreakdown, allInvoices] = await Promise.all([
                Invoice.aggregate([{ $match: query }, { $group: { _id: null,
                    totalRevenue: { $sum: '$totalAmount' }, totalBase: { $sum: '$baseAmount' },
                    totalGst: { $sum: '$gstAmount' }, totalCgst: { $sum: '$cgst' },
                    totalSgst: { $sum: '$sgst' }, totalIgst: { $sum: '$igst' }, count: { $sum: 1 }
                }}]),
                Invoice.aggregate([{ $match: query }, { $group: { _id: '$paymentGateway', revenue: { $sum: '$totalAmount' }, count: { $sum: 1 }, gst: { $sum: '$gstAmount' } } }, { $sort: { revenue: -1 } }]),
                Invoice.aggregate([
                    { $match: query },
                    { $lookup: { from: 'plans', localField: 'planId', foreignField: '_id', as: 'plan' } },
                    { $unwind: { path: '$plan', preserveNullAndEmptyArrays: true } },
                    { $group: { _id: { $ifNull: ['$plan.planName', 'Unknown Plan'] }, revenue: { $sum: '$totalAmount' }, count: { $sum: 1 }, gst: { $sum: '$gstAmount' } } },
                    { $sort: { revenue: -1 } }
                ]),
                Invoice.find(query)
                    .populate('userId', 'name email')
                    .populate('planId', 'planName')
                    .populate({ path: 'subscriptionId', populate: { path: 'planId', select: 'planName' } })
                    .sort({ createdAt: -1 }),
            ]);
            const summary = summaryAgg[0] || { totalRevenue: 0, totalBase: 0, totalGst: 0, totalCgst: 0, totalSgst: 0, totalIgst: 0, count: 0 };
            return res.status(200).json({ success: true, report: { month: m, year: y, monthName: monthNames[m - 1], period: `${monthNames[m - 1]} ${y}`, summary, gatewayBreakdown, planBreakdown, invoices: allInvoices, generatedAt: new Date().toISOString(), dataSource: 'invoices' } });
        }

        // Fallback: subscriptions
        const subQuery = { ...REAL_PAYMENT_QUERY, createdAt: { $gte: startDate, $lte: endDate } };
        const subs = await Subscription.find(subQuery)
            .populate('userId', 'name email')
            .populate('planId', 'planName priceMonthly priceYearly')
            .sort({ createdAt: -1 });

        let totalRevenue = 0, totalBase = 0, totalGst = 0;
        const gatewayMap = {}, planMap = {};
        const invoices = subs.map(sub => {
            const price = getRevenueFromSub(sub);
            const gstAmt  = Math.round((price - price / 1.18) * 100) / 100;
            const baseAmt = Math.round((price / 1.18) * 100) / 100;
            totalRevenue += price; totalBase += baseAmt; totalGst += gstAmt;
            if (!gatewayMap['razorpay']) gatewayMap['razorpay'] = { revenue: 0, count: 0, gst: 0 };
            gatewayMap['razorpay'].revenue += price; gatewayMap['razorpay'].count++; gatewayMap['razorpay'].gst += gstAmt;
            const planName = sub.planId?.planName || 'Unknown';
            if (!planMap[planName]) planMap[planName] = { revenue: 0, count: 0, gst: 0 };
            planMap[planName].revenue += price; planMap[planName].count++; planMap[planName].gst += gstAmt;
            const statusMap = { active: 'captured', expired: 'expired', cancelled: 'refunded', pending: 'pending' };
            return {
                _id: sub._id, invoiceNumber: `SUB-${String(sub._id).slice(-6).toUpperCase()}`,
                invoiceDate: sub.createdAt, createdAt: sub.createdAt,
                userId: sub.userId, subscriptionId: { _id: sub._id, planId: sub.planId }, planId: sub.planId,
                paymentId: sub.paymentId, paymentGateway: 'razorpay',
                paymentStatus: statusMap[sub.subscriptionStatus] || sub.subscriptionStatus,
                billingDetails: { name: sub.userId?.name || 'Customer' },
                baseAmount: baseAmt, gstAmount: gstAmt, totalAmount: price, currency: 'INR',
            };
        });

        const gatewayBreakdown = Object.entries(gatewayMap).map(([k, v]) => ({ _id: k, ...v })).sort((a, b) => b.revenue - a.revenue);
        const planBreakdown    = Object.entries(planMap).map(([k, v]) => ({ _id: k, ...v })).sort((a, b) => b.revenue - a.revenue);
        const summary = {
            totalRevenue: Math.round(totalRevenue * 100) / 100,
            totalBase: Math.round(totalBase * 100) / 100,
            totalGst:  Math.round(totalGst * 100) / 100,
            totalCgst: Math.round((totalGst / 2) * 100) / 100,
            totalSgst: Math.round((totalGst / 2) * 100) / 100,
            totalIgst: 0, count: subs.length,
        };
        res.status(200).json({ success: true, report: { month: m, year: y, monthName: monthNames[m - 1], period: `${monthNames[m - 1]} ${y}`, summary, gatewayBreakdown, planBreakdown, invoices, generatedAt: new Date().toISOString(), dataSource: 'subscriptions_fallback' } });
    } catch (error) {
        console.error('[MONTHLY REPORT ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to generate monthly report.', error: error.message });
    }
};

// ────────────────────────────────────────────────────────────────────────────
// 5. EXPORT CSV
// ────────────────────────────────────────────────────────────────────────────
export const exportInvoicesCSV = async (req, res) => {
    try {
        const { gateway, status, startDate, endDate, month, year } = req.query;
        const invoiceCount = await Invoice.countDocuments({ paymentStatus: 'captured' });

        let rows = [];
        const headers = ['Invoice #', 'Date', 'Customer Name', 'Customer Email', 'Plan', 'Billing Cycle', 'Payment Gateway', 'Payment ID', 'Base Amount (₹)', 'GST Amount (₹)', 'Total Amount (₹)', 'Status'];

        if (invoiceCount > 0) {
            let query = {};
            if (gateway) query.paymentGateway = gateway;
            if (status)  query.paymentStatus  = status;
            if (month && year) query.createdAt = { $gte: new Date(parseInt(year), parseInt(month) - 1, 1), $lte: new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999) };
            else if (startDate || endDate) { query.createdAt = {}; if (startDate) query.createdAt.$gte = new Date(startDate); if (endDate) { const e = new Date(endDate); e.setHours(23, 59, 59, 999); query.createdAt.$lte = e; } }

            const invoices = await Invoice.find(query)
                .populate('userId', 'name email')
                .populate('planId', 'planName')
                .populate({ path: 'subscriptionId', populate: { path: 'planId', select: 'planName billingCycle' } })
                .sort({ createdAt: -1 });

            rows = invoices.map(inv => {
                const planName = inv.planId?.planName || inv.subscriptionId?.planId?.planName || 'N/A';
                const billingCycle = inv.subscriptionId?.billingCycle || 'monthly';
                return [inv.invoiceNumber, new Date(inv.createdAt).toLocaleDateString('en-IN'), inv.billingDetails?.name || inv.userId?.name || 'N/A', inv.userId?.email || 'N/A', planName, billingCycle, inv.paymentGateway, inv.paymentId, (inv.baseAmount || 0).toFixed(2), (inv.gstAmount || 0).toFixed(2), (inv.totalAmount || 0).toFixed(2), inv.paymentStatus]
                    .map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',');
            });
        } else {
            let subQuery = { ...REAL_PAYMENT_QUERY };
            if (month && year) subQuery.createdAt = { $gte: new Date(parseInt(year), parseInt(month) - 1, 1), $lte: new Date(parseInt(year), parseInt(month), 0, 23, 59, 59, 999) };
            else if (startDate || endDate) { subQuery.createdAt = {}; if (startDate) subQuery.createdAt.$gte = new Date(startDate); if (endDate) { const e = new Date(endDate); e.setHours(23, 59, 59, 999); subQuery.createdAt.$lte = e; } }

            const subs = await Subscription.find(subQuery).populate('userId', 'name email').populate('planId', 'planName priceMonthly priceYearly').sort({ createdAt: -1 });
            rows = subs.map(sub => {
                const price   = getRevenueFromSub(sub);
                const gstAmt  = Math.round((price - price / 1.18) * 100) / 100;
                const baseAmt = Math.round((price / 1.18) * 100) / 100;
                const statusMap = { active: 'captured', expired: 'expired', cancelled: 'cancelled' };
                return [`SUB-${String(sub._id).slice(-6).toUpperCase()}`, new Date(sub.createdAt).toLocaleDateString('en-IN'), sub.userId?.name || 'N/A', sub.userId?.email || 'N/A', sub.planId?.planName || 'N/A', sub.billingCycle || 'monthly', 'razorpay', sub.paymentId || 'N/A', baseAmt.toFixed(2), gstAmt.toFixed(2), price.toFixed(2), statusMap[sub.subscriptionStatus] || sub.subscriptionStatus]
                    .map(v => `"${String(v ?? '').replace(/"/g, '""')}"`).join(',');
            });
        }

        const filename = (month && year)
            ? `AISA_Finance_${year}_${String(month).padStart(2, '0')}.csv`
            : `AISA_Finance_Export_${new Date().toISOString().split('T')[0]}.csv`;

        const csv = [headers.map(h => `"${h}"`).join(','), ...rows].join('\n');
        res.setHeader('Content-Type', 'text/csv; charset=utf-8');
        res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
        res.status(200).send('\uFEFF' + csv); // BOM for Excel compatibility
    } catch (error) {
        console.error('[EXPORT CSV ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to export CSV.' });
    }
};

// ── Backward compat exports ──────────────────────────────────────────────────
export const getAdminBillingStats = getFinanceDashboardStats;
export const getAdminInvoices     = getFinanceInvoices;
