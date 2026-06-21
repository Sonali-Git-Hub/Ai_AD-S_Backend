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

import User from '../models/User.js';
import { getUserPlan } from '../services/subscriptionService.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGO_URI || process.env.MONGODB_URI || process.env.MONGO_URL || process.env.MONGODB_ATLAS_URI;

async function verify() {
    if (!MONGO_URI) {
        console.error('❌ MongoDB URI not found in .env file.');
        process.exit(1);
    }
    console.log('🌱 Connecting to database...');
    await mongoose.connect(MONGO_URI);
    console.log('✅ Connected successfully.\n');

    const users = await User.find({}).limit(5);
    console.log(`🔍 Checking active plan quotas for first ${users.length} users:`);
    
    for (const u of users) {
        const plan = await getUserPlan(u._id);
        console.log(`--------------------------------------------------`);
        console.log(`👤 Email:       ${u.email}`);
        console.log(`🔑 Plan ID:     ${plan.planKey}`);
        console.log(`💬 Chat Limit:  ${plan.chatLimit === -1 ? 'Unlimited' : plan.chatLimit}`);
        console.log(`🖼️ Image Gen:   ${plan.imageLimit} / day`);
        console.log(`🎥 Video Gen:   ${plan.videoLimit} / day`);
        console.log(`🎨 Edit Image:  ${plan.editImageAllowed ? 'Allowed' : 'Locked'}`);
        console.log(`📈 Cashflow:    ${plan.cashflowAllowed ? 'Allowed' : 'Locked'}`);
        console.log(`📅 Renewal:     ${plan.renewalDate ? new Date(plan.renewalDate).toLocaleDateString() : 'N/A (Free)'}`);
    }

    console.log(`--------------------------------------------------`);
    await mongoose.disconnect();
    process.exit(0);
}

verify().catch(err => {
    console.error('❌ Verification failed:', err);
    process.exit(1);
});
