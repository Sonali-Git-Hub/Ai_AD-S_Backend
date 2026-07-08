import dns from 'dns';
try {
    dns.setDefaultResultOrder('ipv4first');
    dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {}

import 'dotenv/config';
import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Subscription from '../models/Subscription.js';
import Invoice from '../models/Invoice.js';
import { createInvoice } from '../services/invoiceService.js';
import fs from 'fs';
import path from 'path';

async function run() {
    try {
        console.log("Connecting to database...");
        await connectDB();
        console.log("Connected successfully!");

        // 1. Find or create a test user
        let user = await User.findOne({ email: 'invoice_test_user@aisa.com' });
        if (!user) {
            user = await User.create({
                name: 'Invoice Test User',
                email: 'invoice_test_user@aisa.com',
                password: 'password123',
                isVerified: true,
                billingDetails: {
                    companyName: 'AISA Testing Corp',
                    billingName: 'Invoice Test User',
                    gstin: '27AASCA8481G1Z3',
                    addressLine1: '404 Debugging Street, Code Park',
                    city: 'Mumbai',
                    state: 'Maharashtra',
                    postalCode: '400001',
                    country: 'IN'
                }
            });
            console.log("Created test user:", user.email);
        } else {
            console.log("Found existing test user:", user.email);
        }

        // 2. Find or create test plans
        // Plan A: GST Exclusive (Base: 500, total paid should be 590)
        let planExclusive = await Plan.findOne({ planId: 'test_plan_exclusive' });
        if (!planExclusive) {
            planExclusive = await Plan.create({
                planId: 'test_plan_exclusive',
                planName: 'Test Plan Exclusive',
                priceMonthly: 500,
                priceYearly: 5000,
                isGstInclusive: false,
                chatLimit: 100,
                imageLimit: 10,
                carouselLimit: 5,
                videoLimit: 2,
                validityDays: 30
            });
            console.log("Created GST Exclusive plan.");
        } else {
            console.log("Found existing GST Exclusive plan.");
        }

        // Plan B: GST Inclusive (Total Paid: 590, base should be 500)
        let planInclusive = await Plan.findOne({ planId: 'test_plan_inclusive' });
        if (!planInclusive) {
            planInclusive = await Plan.create({
                planId: 'test_plan_inclusive',
                planName: 'Test Plan Inclusive',
                priceMonthly: 590,
                priceYearly: 5900,
                isGstInclusive: true,
                chatLimit: 100,
                imageLimit: 10,
                carouselLimit: 5,
                videoLimit: 2,
                validityDays: 30
            });
            console.log("Created GST Inclusive plan.");
        } else {
            console.log("Found existing GST Inclusive plan.");
        }

        // 3. Test Exclusive Plan Invoice Generation
        console.log("\n--- Testing GST EXCLUSIVE Invoice Generation ---");
        const subExclusive = await Subscription.create({
            userId: user._id,
            planId: planExclusive._id,
            creditsRemaining: 0,
            billingCycle: 'monthly',
            subscriptionStart: new Date(),
            renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            subscriptionStatus: 'active',
            paymentId: 'pay_exclusive_' + Date.now()
        });

        const invoiceExcl = await createInvoice(subExclusive._id, user.billingDetails);
        console.log(">> EXCLUSIVE PLAN CALCULATIONS CHECK:");
        console.log(`Base Price (Plan): ₹${planExclusive.priceMonthly}`);
        console.log(`Invoice Base Amount (Calculated): ₹${invoiceExcl.baseAmount} (Expected: 500)`);
        console.log(`Invoice GST Amount (Calculated): ₹${invoiceExcl.gstAmount} (Expected: 90)`);
        console.log(`Invoice Total Amount (Calculated): ₹${invoiceExcl.totalAmount} (Expected: 590)`);
        console.log(`PDF Saved Local Path: ${invoiceExcl.invoiceUrl}`);

        if (invoiceExcl.baseAmount === 500 && invoiceExcl.gstAmount === 90 && invoiceExcl.totalAmount === 590) {
            console.log("✅ GST Exclusive calculations passed!");
        } else {
            console.error("❌ GST Exclusive calculations mismatch!");
        }

        // 4. Test Inclusive Plan Invoice Generation
        console.log("\n--- Testing GST INCLUSIVE Invoice Generation ---");
        const subInclusive = await Subscription.create({
            userId: user._id,
            planId: planInclusive._id,
            creditsRemaining: 0,
            billingCycle: 'monthly',
            subscriptionStart: new Date(),
            renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            subscriptionStatus: 'active',
            paymentId: 'pay_inclusive_' + Date.now()
        });

        const invoiceIncl = await createInvoice(subInclusive._id, user.billingDetails);
        console.log(">> INCLUSIVE PLAN CALCULATIONS CHECK:");
        console.log(`Base Price (Plan): ₹${planInclusive.priceMonthly}`);
        console.log(`Invoice Base Amount (Calculated): ₹${invoiceIncl.baseAmount} (Expected: 500)`);
        console.log(`Invoice GST Amount (Calculated): ₹${invoiceIncl.gstAmount} (Expected: 90)`);
        console.log(`Invoice Total Amount (Calculated): ₹${invoiceIncl.totalAmount} (Expected: 590)`);
        console.log(`PDF Saved Local Path: ${invoiceIncl.invoiceUrl}`);

        if (invoiceIncl.baseAmount === 500 && invoiceIncl.gstAmount === 90 && invoiceIncl.totalAmount === 590) {
            console.log("✅ GST Inclusive calculations passed!");
        } else {
            console.error("❌ GST Inclusive calculations mismatch!");
        }

        // 5. Test Custom Override (Paid amount: ₹1.00 via PayPal)
        console.log("\n--- Testing Custom Paid Amount Override (e.g. ₹1.00 Test Payment) ---");
        const subOverride = await Subscription.create({
            userId: user._id,
            planId: planExclusive._id,
            creditsRemaining: 0,
            billingCycle: 'monthly',
            subscriptionStart: new Date(),
            renewalDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
            subscriptionStatus: 'active',
            paymentId: 'pay_override_' + Date.now()
        });

        const invoiceOverride = await createInvoice(subOverride._id, user.billingDetails, 'paypal', 1.00);
        console.log(">> OVERRIDE CALCULATIONS CHECK:");
        console.log(`Expected Total Paid: ₹1.00`);
        console.log(`Invoice Total Amount (Calculated): ₹${invoiceOverride.totalAmount} (Expected: 1)`);
        console.log(`Invoice Base Amount (Calculated): ₹${invoiceOverride.baseAmount} (Expected: 0.85)`);
        console.log(`Invoice GST Amount (Calculated): ₹${invoiceOverride.gstAmount} (Expected: 0.15)`);
        console.log(`Logged Gateway: ${invoiceOverride.paymentGateway} (Expected: paypal)`);

        if (invoiceOverride.totalAmount === 1 && invoiceOverride.baseAmount === 0.85 && invoiceOverride.gstAmount === 0.15 && invoiceOverride.paymentGateway === 'paypal') {
            console.log("✅ Custom Paid Amount Override passed!");
        } else {
            console.error("❌ Custom Paid Amount Override failed!");
        }

        // 6. Test Duplicate Invoice Prevention
        console.log("\n--- Testing Duplicate Invoice Prevention ---");
        // Attempt to generate invoice for the same subscription ID again
        const duplicateInvoice = await createInvoice(subInclusive._id, user.billingDetails);
        if (duplicateInvoice._id.toString() === invoiceIncl._id.toString()) {
            console.log("✅ Duplicate prevention verified! Returned the existing invoice doc.");
        } else {
            console.error("❌ Duplicate prevention failed! Created a new invoice document.");
        }

        // Verify PDF file exists on disk
        const pathExcl = path.join(process.cwd(), 'public', invoiceExcl.invoiceUrl);
        const pathIncl = path.join(process.cwd(), 'public', invoiceIncl.invoiceUrl);
        
        console.log(`\nVerifying physical PDF files on disk...`);
        if (fs.existsSync(pathExcl)) {
            console.log(`✅ Exclusive PDF exists: ${pathExcl}`);
        } else {
            console.error(`❌ Exclusive PDF missing: ${pathExcl}`);
        }
        if (fs.existsSync(pathIncl)) {
            console.log(`✅ Inclusive PDF exists: ${pathIncl}`);
        } else {
            console.error(`❌ Inclusive PDF missing: ${pathIncl}`);
        }

        console.log("\nCleaning up test data from database...");
        await Plan.deleteMany({ planId: { $in: ['test_plan_exclusive', 'test_plan_inclusive'] } });
        await Subscription.deleteMany({ userId: user._id });
        await Invoice.deleteMany({ userId: user._id });
        await User.deleteOne({ _id: user._id });
        console.log("Cleaned up database records.");

        console.log("\nAll tests completed. Disconnecting database...");
        await mongoose.disconnect();
        console.log("Disconnected successfully.");

    } catch (err) {
        console.error("Test execution failed with error:", err);
        try {
            await mongoose.disconnect();
        } catch (e) {}
    }
}

run();
