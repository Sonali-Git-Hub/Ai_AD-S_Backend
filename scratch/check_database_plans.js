import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
    console.warn('Failed to set custom DNS servers:', e.message);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function checkDatabase() {
    console.log('Connecting to database...');
    await mongoose.connect(MONGO_URI);
    console.log('Connected!');

    const Plan = (await import('../models/Plan.js')).default;
    const Subscription = (await import('../models/Subscription.js')).default;

    console.log('\n--- ACTIVE PLANS IN DB ---');
    const plans = await Plan.find({ isActive: true }).lean();
    plans.forEach(p => {
        console.log(JSON.stringify(p, null, 2));
    });

    console.log('\n--- INACTIVE PLANS IN DB ---');
    const inactivePlans = await Plan.find({ isActive: false });
    inactivePlans.forEach(p => {
        console.log(`Plan ID: ${p.planId}, Name: ${p.planName}, Price: ₹${p.priceMonthly}`);
    });

    console.log('\n--- ACTIVE SUBSCRIPTIONS IN DB ---');
    const activeSubs = await Subscription.find({ subscriptionStatus: 'active' }).populate('planId');
    console.log(`Total Active Subscriptions: ${activeSubs.length}`);
    activeSubs.slice(0, 10).forEach(sub => {
        console.log(`Sub ID: ${sub._id}, User ID: ${sub.userId}, Plan: ${sub.planId?.planName || 'NULL (legacy)'}`);
    });

    await mongoose.disconnect();
    console.log('\nDisconnected.');
}

checkDatabase().catch(err => {
    console.error('Error:', err);
});
