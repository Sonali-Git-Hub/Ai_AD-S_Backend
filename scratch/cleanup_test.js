import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Subscription from '../models/Subscription.js';
import Invoice from '../models/Invoice.js';

async function cleanup() {
    try {
        console.log("Connecting to database for cleanup...");
        await connectDB();

        // 1. Delete test plans
        const planResult = await Plan.deleteMany({
            planId: { $in: ['test_plan_exclusive', 'test_plan_inclusive'] }
        });
        console.log(`Deleted ${planResult.deletedCount} test plans.`);

        // 2. Delete test subscriptions
        const subResult = await Subscription.deleteMany({
            paymentId: { $regex: /^(pay_exclusive_|pay_inclusive_)/ }
        });
        console.log(`Deleted ${subResult.deletedCount} test subscriptions.`);

        // 3. Delete test user
        const userResult = await User.deleteMany({
            email: 'invoice_test_user@aisa.com'
        });
        console.log(`Deleted ${userResult.deletedCount} test users.`);

        // 4. Delete test invoices
        const invoiceResult = await Invoice.deleteMany({
            invoiceNumber: { $regex: /^INV-\d{4}-\d{6}/ } // or clean up specifically
        });
        console.log(`Deleted ${invoiceResult.deletedCount} test invoices.`);

        await mongoose.disconnect();
        console.log("Cleanup finished successfully!");
    } catch (error) {
        console.error("Cleanup failed:", error);
        try { await mongoose.disconnect(); } catch (e) {}
    }
}

cleanup();
