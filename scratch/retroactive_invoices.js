import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import Subscription from '../models/Subscription.js';
import Invoice from '../models/Invoice.js';
import User from '../models/User.js';
import { createInvoice } from '../services/invoiceService.js';

async function run() {
    try {
        console.log("Connecting to database...");
        await connectDB();

        // 1. Fetch subscriptions from the last 24 hours
        const oneDayAgo = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const subscriptions = await Subscription.find({
            createdAt: { $gte: oneDayAgo }
        });

        console.log(`Found ${subscriptions.length} subscriptions in the last 24 hours.`);

        let createdCount = 0;
        for (const sub of subscriptions) {
            // Check if invoice already exists
            const existingInvoice = await Invoice.findOne({ subscriptionId: sub._id });
            if (!existingInvoice) {
                console.log(`Generating missing invoice for subscription ${sub._id}...`);
                const user = await User.findById(sub.userId);
                if (!user) {
                    console.log(`Skipping: user not found for userId ${sub.userId}`);
                    continue;
                }
                
                // Fallback billing details if user doesn't have them
                const billingDetails = user.billingDetails || {
                    billingName: user.name || 'Valued Customer',
                    addressLine1: 'Not Provided',
                    city: 'Not Provided',
                    state: 'Not Provided',
                    postalCode: '000000',
                    country: 'IN'
                };

                const invoice = await createInvoice(sub._id, billingDetails);
                console.log(`Successfully generated invoice ${invoice.invoiceNumber} for user ${user.email}`);
                createdCount++;
            } else {
                console.log(`Invoice ${existingInvoice.invoiceNumber} already exists for subscription ${sub._id}.`);
            }
        }

        console.log(`\nRetroactive invoice generation complete. Created ${createdCount} invoices.`);
        await mongoose.disconnect();
    } catch (error) {
        console.error("Retroactive run failed:", error);
        try { await mongoose.disconnect(); } catch (e) {}
    }
}

run();
