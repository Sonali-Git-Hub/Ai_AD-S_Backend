import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Subscription from '../models/Subscription.js';
import User from '../models/User.js';
import { createInvoice } from '../services/invoiceService.js';
import dns from 'dns';
dotenv.config();

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.MONGODB_ATLAS_URI || "mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0";

async function run() {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(uri, { family: 4 });
        console.log("Connected successfully!");

        const subId = "6a4f6281c3bb9fee2014f9e4";
        const subscription = await Subscription.findById(subId).populate('planId');
        if (!subscription) {
            console.log("Subscription not found!");
            await mongoose.disconnect();
            return;
        }

        const user = await User.findById(subscription.userId);
        if (!user) {
            console.log("User not found!");
            await mongoose.disconnect();
            return;
        }

        console.log("Creating invoice for Gourav Chawla...");
        const invoice = await createInvoice(
            subscription._id, 
            user.billingDetails || { name: 'GOURAV CHAWLA', country: 'AE' }, 
            'razorpay', 
            588.82
        );

        console.log("Invoice created successfully:", invoice);

        await mongoose.disconnect();
        console.log("\nDisconnected.");
    } catch (err) {
        console.error("Failed to generate invoice:", err);
    }
}

run();
