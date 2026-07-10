import mongoose from 'mongoose';
import dotenv from 'dotenv';
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

        const db = mongoose.connection.db;
        const User = db.collection("users");
        const Subscription = db.collection("subscriptions");
        const Invoice = db.collection("invoices");

        const targetEmail = "acc.gchawla@gmail.com";
        const targetPaymentId = "pay_TBLVbJWqakE5Z1";

        console.log(`\n1. Searching for user with email: ${targetEmail}`);
        const user = await User.findOne({ email: targetEmail });
        if (user) {
            console.log("Found User:", {
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                createdAt: user.createdAt
            });

            console.log(`\n2. Searching for subscriptions for User ID: ${user._id}`);
            const subs = await Subscription.find({ userId: user._id }).toArray();
            console.log(`Found ${subs.length} subscriptions:`);
            subs.forEach((s, idx) => {
                console.log(`- Sub #${idx}: ID=${s._id} | paymentId=${s.paymentId} | status=${s.subscriptionStatus} | planId=${s.planId} | Start=${s.subscriptionStart}`);
            });
        } else {
            console.log("User not found!");
        }

        console.log(`\n3. Searching for subscriptions by paymentId: ${targetPaymentId}`);
        const subByPay = await Subscription.findOne({ paymentId: targetPaymentId });
        if (subByPay) {
            console.log("Found Subscription by Payment ID:", subByPay);
        } else {
            console.log("No subscription found for this paymentId.");
        }

        console.log(`\n4. Searching for invoices by paymentId: ${targetPaymentId}`);
        const invoice = await Invoice.findOne({ paymentId: targetPaymentId });
        if (invoice) {
            console.log("Found Invoice by Payment ID:", invoice);
        } else {
            console.log("No invoice found for this paymentId.");
        }

        await mongoose.disconnect();
        console.log("\nDisconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
