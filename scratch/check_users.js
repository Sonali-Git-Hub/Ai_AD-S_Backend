import connectDB from '../config/db.js';
import User from '../models/User.js';
import mongoose from 'mongoose';

await connectDB();

const total = await User.countDocuments({});
const roleUser = await User.countDocuments({ role: 'user' });
const roleAdmin = await User.countDocuments({ role: 'admin' });
const noRole = await User.countDocuments({ role: { $exists: false } });
const roleNull = await User.countDocuments({ role: null });

console.log('=== USER STATS ===');
console.log('Total users in DB:', total);
console.log('role = "user":', roleUser);
console.log('role = "admin":', roleAdmin);
console.log('role field missing:', noRole);
console.log('role = null:', roleNull);

const sample = await User.find({}).select('name email role isBlocked').limit(10);
console.log('\nSample users:');
sample.forEach(u => console.log(` - ${u.name} | ${u.email} | role: ${u.role}`));

await mongoose.connection.close();
process.exit(0);
