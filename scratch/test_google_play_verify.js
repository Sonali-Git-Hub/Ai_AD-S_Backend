import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import User from '../models/User.js';
import Plan from '../models/Plan.js';
import Subscription from '../models/Subscription.js';
import UserQuota from '../models/UserQuota.js';
import { verifyGooglePlaySubscription } from '../controllers/googlePlayController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '../.env') });

const runTest = async () => {
    try {
        await connectDB();
        
        // Find or create test user
        let user = await User.findOne({ email: 'iaptest@aisa.com' });
        if (!user) {
            user = await User.create({
                name: 'IAP Test User',
                username: 'iaptest',
                email: 'iaptest@aisa.com',
                password: 'hashedpassword123',
                isVerified: true,
                role: 'user'
            });
        }
        
        console.log(`Using test user: ${user.email} (ID: ${user._id})`);
        
        // Mock express req and res
        const req = {
            user: { id: user._id },
            body: {
                productId: 'aisa_startup', // maps to Plan_2 (Startup)
                purchaseToken: 'test_bypass_token',
                transactionId: 'test_gplay_trans_123',
                cycle: 'yearly'
            }
        };
        
        let responseData = null;
        let responseStatus = null;
        
        const res = {
            status: function(code) {
                responseStatus = code;
                return this;
            },
            json: function(data) {
                responseData = data;
                return this;
            }
        };
        
        console.log('Calling verifyGooglePlaySubscription with mock request...');
        await verifyGooglePlaySubscription(req, res);
        
        console.log('\n--- RESPONSE ---');
        console.log(`Status Code: ${responseStatus || 200}`);
        console.log('Data:', JSON.stringify(responseData, null, 2));
        
        // Verify changes in database
        const updatedSub = await Subscription.findOne({ userId: user._id, subscriptionStatus: 'active' }).populate('planId');
        console.log('\n--- VERIFYING MONGO DATABASE STATE ---');
        if (updatedSub) {
            console.log(`✅ Active Subscription Found!`);
            console.log(`Plan Name: ${updatedSub.planId?.planName}`);
            console.log(`Plan Key: ${updatedSub.planId?.planId}`);
            console.log(`Billing Cycle: ${updatedSub.billingCycle}`);
            console.log(`Renewal Date: ${updatedSub.renewalDate}`);
        } else {
            console.log('❌ No active subscription found for test user!');
        }
        
        const quota = await UserQuota.findOne({ userId: user._id });
        if (quota) {
            console.log(`✅ Quota Found: Daily limits reset.`);
            console.log(`Images Used: ${quota.imagesUsed}`);
            console.log(`Carousels Used: ${quota.carouselsUsed}`);
            console.log(`Videos Used: ${quota.videosUsed}`);
        } else {
            console.log('❌ No quota document found!');
        }
        
        // Clean up test user subscription
        await Subscription.deleteMany({ userId: user._id });
        await UserQuota.deleteOne({ userId: user._id });
        await User.deleteOne({ _id: user._id });
        console.log('\nCleaned up test data.');
        
        process.exit(0);
    } catch (err) {
        console.error("Test failed:", err);
        process.exit(1);
    }
};

runTest();
