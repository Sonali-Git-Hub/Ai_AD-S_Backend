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

async function forceStarterId() {
    await mongoose.connect(MONGO_URI);
    const Plan = (await import('../models/Plan.js')).default;

    console.log('Updating Plan ID to starter...');
    const result = await Plan.updateOne(
        { _id: '69aebd45edcbbe240e00ec84' },
        { $set: { planId: 'starter' } }
    );
    
    console.log('Update result:', result);
    await mongoose.disconnect();
}

forceStarterId().catch(err => {
    console.error('Failed to update:', err);
});
