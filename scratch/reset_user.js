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

async function reset(email) {
  const User = (await import('../models/User.js')).default;
  const Subscription = (await import('../models/Subscription.js')).default;
  const UserQuota = (await import('../models/UserQuota.js')).default;

  const user = await User.findOne({ email });
  if (!user) {
    console.log(`User ${email} not found.`);
    return;
  }

  console.log(`Resetting user: ${user.email} (${user._id})`);

  // Delete all subscriptions
  const deleteResult = await Subscription.deleteMany({ userId: user._id });
  console.log(`Deleted ${deleteResult.deletedCount} subscriptions for ${email}.`);

  // Reset user quota
  await UserQuota.deleteMany({ userId: user._id });
  console.log(`Reset user quotas for ${email}.`);

  // Reset founderStatus
  user.founderStatus = false;
  await user.save();
  console.log(`Reset founderStatus to false.`);
}

async function run() {
  await mongoose.connect(MONGO_URI);
  await reset('gurumukhahuja@icloud.com');
  await reset('sanskarsahu1511@gmail.com');
  console.log('All test subscriptions reset to Free successfully!');
  await mongoose.disconnect();
}

run().catch(console.error);
