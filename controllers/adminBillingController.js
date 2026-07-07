import Invoice from '../models/Invoice.js';
import Subscription from '../models/Subscription.js';
import User from '../models/User.js';

export const getAdminBillingStats = async (req, res) => {
    try {
        const statsArray = await Invoice.aggregate([
            {
                $group: {
                    _id: null,
                    totalRevenue: { $sum: '$totalAmount' },
                    totalBase: { $sum: '$baseAmount' },
                    totalCgst: { $sum: '$cgst' },
                    totalSgst: { $sum: '$sgst' },
                    totalIgst: { $sum: '$igst' }
                }
            }
        ]);

        const stats = statsArray[0] || {
            totalRevenue: 0,
            totalBase: 0,
            totalCgst: 0,
            totalSgst: 0,
            totalIgst: 0
        };

        const activeSubscriptions = await Subscription.countDocuments({ subscriptionStatus: 'active' });
        const totalInvoices = await Invoice.countDocuments({});

        res.status(200).json({
            success: true,
            stats: {
                ...stats,
                activeSubscriptions,
                totalInvoices
            }
        });
    } catch (error) {
        console.error('[ADMIN BILLING STATS ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch billing stats.' });
    }
};

export const getAdminInvoices = async (req, res) => {
    try {
        const { search, limit = 50, page = 1 } = req.query;
        let query = {};

        if (search) {
            // Find users matching search for email/name
            const matchingUsers = await User.find({
                $or: [
                    { email: { $regex: search, $options: 'i' } },
                    { name: { $regex: search, $options: 'i' } }
                ]
            }).select('_id');

            const matchingUserIds = matchingUsers.map(u => u._id);

            query.$or = [
                { invoiceNumber: { $regex: search, $options: 'i' } },
                { paymentId: { $regex: search, $options: 'i' } },
                { 'billingDetails.name': { $regex: search, $options: 'i' } },
                { userId: { $in: matchingUserIds } }
            ];
        }

        const invoices = await Invoice.find(query)
            .populate('userId', 'name email')
            .populate({
                path: 'subscriptionId',
                populate: { path: 'planId', select: 'planName' }
            })
            .sort({ createdAt: -1 })
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit));

        const totalInvoices = await Invoice.countDocuments(query);

        res.status(200).json({
            success: true,
            invoices,
            pagination: {
                total: totalInvoices,
                limit: Number(limit),
                page: Number(page),
                pages: Math.ceil(totalInvoices / Number(limit))
            }
        });
    } catch (error) {
        console.error('[ADMIN INVOICES LIST ERROR]', error);
        res.status(500).json({ success: false, message: 'Failed to fetch invoices list.' });
    }
};
