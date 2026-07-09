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

async function checkValidity(email) {
  const User = (await import('../models/User.js')).default;
  const Subscription = (await import('../models/Subscription.js')).default;
  const Plan = (await import('../models/Plan.js')).default;

  const user = await User.findOne({ email });
  if (!user) {
    console.log(`\nUser: ${email}`);
    console.log(`Status: NOT FOUND`);
    return;
  }

  console.log(`\n========================================`);
  console.log(`User Profile:`);
  console.log(`========================================`);
  console.log(`Email:          ${user.email}`);
  console.log(`ID:             ${user._id}`);
  console.log(`Name:           ${user.name}`);
  console.log(`Role:           ${user.role}`);
  console.log(`Credits:        ${user.credits}`);
  console.log(`Founder Status: ${user.founderStatus}`);
  console.log(`Created At:     ${user.createdAt}`);

  const subscriptions = await Subscription.find({ userId: user._id });
  console.log(`\n========================================`);
  console.log(`Subscriptions (${subscriptions.length} found):`);
  console.log(`========================================`);

  if (subscriptions.length === 0) {
    console.log(`No active subscriptions found in the database (likely on Free Tier).`);
  } else {
    for (const sub of subscriptions) {
      const plan = await Plan.findById(sub.planId);
      console.log(`- Subscription ID:   ${sub._id}`);
      console.log(`  Plan Name:         ${plan ? plan.planName : 'Unknown Plan'} (${plan ? plan.planId : sub.planId})`);
      console.log(`  Status:            ${sub.subscriptionStatus}`);
      console.log(`  Billing Cycle:     ${sub.billingCycle}`);
      console.log(`  Start Date:        ${sub.subscriptionStart}`);
      console.log(`  Renewal Date:      ${sub.renewalDate}`);
      console.log(`  App Store Expire:  ${sub.expiresDate || 'N/A'}`);
      console.log(`  Credits Remaining: ${sub.creditsRemaining}`);
      console.log(`  --------------------------------------`);
    }
  }
}

async function run() {
  await mongoose.connect(MONGO_URI);
  await checkValidity('sanskar@uwo24.com');
  await mongoose.disconnect();
}

run().catch(console.error);
