import connectDB from '../config/db.js';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import mongoose from 'mongoose';

await connectDB();

console.log('Testing fixed /user/all route logic...\n');

const users = await User.find({ 
    role: { $ne: 'admin' },
    email: { $ne: 'admin@uwo24.com' }
})
    .select('-password')
    .sort({ createdAt: -1 });

console.log('✅ Users found:', users.length);

const subscriptions = await Subscription.find({}).populate('planId');
const subMap = subscriptions.reduce((acc, sub) => {
    acc[sub.userId.toString()] = sub.planId?.planName || 'Free Plan';
    return acc;
}, {});

const result = users.slice(0, 5).map(user => ({
    name: user.name,
    email: user.email,
    plan: subMap[user._id.toString()] || 'Free Plan',
    credits: user.credits || 0,
}));

console.log('\nFirst 5 users:');
result.forEach(u => console.log(` - ${u.name} | ${u.email} | ${u.plan}`));

await mongoose.connection.close();
process.exit(0);
