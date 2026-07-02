import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import axios from 'axios';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}


const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;
const PORT = process.env.PORT || 8080;

async function run() {
    await mongoose.connect(MONGO_URI);
    const Session = (await import('../models/Session.js')).default;
    const User = (await import('../models/User.js')).default;
    
    const user = await User.findOne({ email: "sanskarsahu1511@gmail.com" }).lean();
    if (!user) {
        console.error("User sanskarsahu1511@gmail.com not found in DB!");
        await mongoose.disconnect();
        return;
    }
    
    const sess = await Session.findOne({ userId: user._id }).sort({ updatedAt: -1 }).lean();
    if (!sess) {
        console.error("No active session found for user!");
        await mongoose.disconnect();
        return;
    }
    
    const token = sess.token;
    console.log(`Found session token for ${user.email}.`);
    await mongoose.disconnect();

    console.log("\nCalling local `/api/payment/verify/apple` endpoint...");
    try {
        const response = await axios.post(`http://localhost:${PORT}/api/payment/verify/apple`, {
            receipt: 'test_bypass_token',
            productId: 'aisa_creator_monthly',
            transactionId: `mock_iap_${Date.now()}`
        }, {
            headers: { 'Authorization': `Bearer ${token}` }
        });
        console.log("Success Response:", response.data);
    } catch (err) {
        console.error("Failed with error:", err.response ? { status: err.response.status, data: err.response.data } : err.message);
    }
}

run().catch(console.error);
