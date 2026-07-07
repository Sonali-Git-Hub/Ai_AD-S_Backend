import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function run() {
    await mongoose.connect(MONGO_URI);
    const Subscription = (await import('../models/Subscription.js')).default;
    const docs = await Subscription.find({
        $or: [
            { transactionId: "2000001200430595" },
            { originalTransactionId: "2000001200430595" }
        ]
    }).lean();
    console.log("Matching Documents:", JSON.stringify(docs, null, 2));
    await mongoose.disconnect();
}

run().catch(console.error);
