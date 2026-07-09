import axios from 'axios';
import dotenv from 'dotenv';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const PORT = process.env.PORT || 8080;
const LOCAL_API = `http://127.0.0.1:${PORT}/api`;

async function test() {
    console.log(`🧪 Testing local create-order endpoint at ${LOCAL_API}/subscription/create-order...`);
    try {
        // Let's first log in or get a token. Since we just need to hit the endpoint, we can use a mock token or bypass if it's verifyToken.
        // Wait, verifyToken requires a valid JWT. Let's sign a mock admin token or fetch a real one.
        // Since we are running the test on the local server, we can print out the local response from the controller directly by importing mongoose and calling the function, OR making a local HTTP request with a mock token.
        // Let's import mongoose and do it directly, it's 100% reliable.
        console.log('Importing models and controllers directly...');
        const { default: mongoose } = await import('mongoose');
        const { default: Plan } = await import('../models/Plan.js');
        const { createOrder } = await import('../controllers/subscriptionController.js');

        const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI || process.env.MONGODB_URI;
        await mongoose.connect(MONGO_URI);

        const plan = await Plan.findOne({ planId: 'Plan_1' });
        if (!plan) throw new Error('Seeded Plan_1 not found');

        // Mock req/res
        const req = {
            body: {
                planId: plan._id.toString(),
                billingCycle: 'monthly'
            }
        };

        let responseData = null;
        const res = {
            status: (code) => {
                console.log(`Response Status: ${code}`);
                return {
                    json: (data) => {
                        responseData = data;
                    }
                };
            }
        };

        await createOrder(req, res);

        console.log('\n--- createOrder Output ---');
        console.log(JSON.stringify(responseData, null, 2));

        if (responseData && responseData.success && responseData.order) {
            const amountPaise = responseData.order.amount;
            console.log(`\nAmount in paise: ${amountPaise} (₹${amountPaise / 100})`);
            if (amountPaise === 58882) {
                console.log('✅ SUCCESS: Local backend calculated and returned GST inclusive amount (₹588.82).');
            } else {
                console.error(`❌ ERROR: Local backend returned old amount (₹${amountPaise / 100}).`);
            }
        } else {
            console.error('❌ Failed to get order data');
        }

        await mongoose.disconnect();
    } catch (e) {
        console.error('Test failed:', e);
    }
}

test();
