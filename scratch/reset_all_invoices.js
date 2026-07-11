import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Invoice from '../models/Invoice.js';

async function run() {
    try {
        console.log("Connecting to database for complete invoice reset...");
        await connectDB();

        // Delete ALL invoices in the database to start completely fresh
        const result = await Invoice.deleteMany({});

        console.log(`Successfully deleted all ${result.deletedCount} invoices.`);
        await mongoose.disconnect();
    } catch (e) {
        console.error("Reset failed:", e);
        try { await mongoose.disconnect(); } catch (err) {}
    }
}

run();
