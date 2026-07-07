import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';
import Plan from '../models/Plan.js';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI || process.env.MONGODB_URI;

async function check() {
    await mongoose.connect(MONGO_URI);
    const plans = await Plan.find({ isActive: true });
    console.log('--- Active Plans in DB ---');
    plans.forEach(p => {
        console.log(`Plan Name: ${p.planName} | priceMonthly: ${p.priceMonthly} | priceYearly: ${p.priceYearly}`);
    });
    await mongoose.disconnect();
}

check().catch(console.error);
