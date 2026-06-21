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

async function testUpdate() {
    await mongoose.connect(MONGO_URI);
    const Plan = (await import('../models/Plan.js')).default;

    console.log('Testing plan update in DB...');
    // Find the plan with ID 69aebd45edcbbe240e00ec84
    const plan = await Plan.findById('69aebd45edcbbe240e00ec84');
    if (!plan) {
        console.log('Plan not found!');
        await mongoose.disconnect();
        return;
    }

    console.log('Current plan:', plan.toObject());
    
    // Attempt update
    plan.planName = 'Starter Test';
    await plan.save();
    
    console.log('Plan updated successfully via save()!');
    const updatedPlan = await Plan.findById('69aebd45edcbbe240e00ec84');
    console.log('Updated plan:', updatedPlan.toObject());

    // Restore to Starter
    updatedPlan.planName = 'Starter';
    await updatedPlan.save();
    console.log('Restored plan to Starter.');

    await mongoose.disconnect();
}

testUpdate().catch(err => {
    console.error('Update test failed:', err);
});
