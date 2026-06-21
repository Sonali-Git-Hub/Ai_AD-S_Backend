import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {
    console.warn('⚠️ Failed to set custom DNS servers:', e.message);
}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Subscription from '../models/Subscription.js';
import UserQuota from '../models/UserQuota.js';

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_ATLAS_URI;

async function upgrade() {
    if (!MONGO_URI) {
        console.error('❌ MongoDB URI not found in .env file.');
        process.exit(1);
    }

    const email = process.argv[2] || 'sanskarsahu1511@gmail.com';
    const targetPlanId = process.argv[3] || 'Plan_2'; // Default to Pro

    console.log(`🌱 Connecting to database...`);
    await mongoose.connect(MONGO_URI);
    console.log(`✅ Connected successfully.`);

    // Find User
    const user = await User.findOne({ email });
    if (!user) {
        console.error(`❌ User ${email} not found!`);
        await mongoose.disconnect();
        process.exit(1);
    }

    // Find Plan
    const plan = await Plan.findOne({ planId: targetPlanId });
    if (!plan) {
        console.error(`❌ Plan ${targetPlanId} not found in database! Make sure you seeded plans.`);
        await mongoose.disconnect();
        process.exit(1);
    }

    // Deactivate previous active subscriptions
    await Subscription.updateMany({ userId: user._id, subscriptionStatus: 'active' }, { subscriptionStatus: 'cancelled' });

    // Create Subscription
    const renewalDate = new Date();
    renewalDate.setMonth(renewalDate.getMonth() + 1);

    const subscription = await Subscription.create({
        userId: user._id,
        planId: plan._id,
        creditsRemaining: 0,
        subscriptionStart: new Date(),
        renewalDate,
        subscriptionStatus: 'active',
        billingCycle: 'monthly',
        paymentId: 'MANUAL_UPGRADE_DEV'
    });

    // Reset Quotas
    await UserQuota.findOneAndUpdate(
        { userId: user._id },
        {
            $set: {
                imagesUsed: 0,
                carouselsUsed: 0,
                videosUsed: 0,
                chatUsed: 0,
                planActivatedAt: new Date(),
            }
        },
        { upsert: true, new: true }
    );

    console.log(`\n🎉 Success! Upgraded ${email} to ${plan.planName} (${plan.planId})`);
    console.log(`📋 Subscription ID: ${subscription._id}`);
    console.log(`⏱️ Limits activated:`);
    console.log(`   - Chat Limit:  ${plan.chatLimit === -1 ? 'Unlimited' : plan.chatLimit}`);
    console.log(`   - Image Limit: ${plan.imageLimit} / day`);
    console.log(`   - Video Limit: ${plan.videoLimit} / day`);
    console.log(`   - Edit Image:  ${plan.editImageAllowed}`);
    console.log(`   - Cashflow:    ${plan.cashflowAllowed}`);

    await mongoose.disconnect();
    process.exit(0);
}

upgrade().catch(err => {
    console.error('❌ Upgrade failed:', err);
    process.exit(1);
});
