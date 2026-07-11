import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Invoice from '../models/Invoice.js';

async function run() {
    try {
        console.log("Connecting to database for invoice cleanup...");
        await connectDB();

        // Delete all invoices that are free (amount = 0) or mock payments
        const result = await Invoice.deleteMany({
            $or: [
                { paymentId: { $regex: /^mock_/ } },
                { paymentId: 'mock_payment_id' },
                { totalAmount: 0 }
            ]
        });

        console.log(`Successfully deleted ${result.deletedCount} mock/free invoices.`);
        await mongoose.disconnect();
    } catch (e) {
        console.error("Cleanup failed:", e);
        try { await mongoose.disconnect(); } catch (err) {}
    }
}

run();
