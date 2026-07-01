import mongoose from 'mongoose';
import 'dotenv/config';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Subscription from '../models/Subscription.js';
import Plan from '../models/Plan.js'; // Register Plan schema

async function run() {
    await connectDB();
    const email = 'yugamcteam@gmail.com';
    const user = await User.findOne({ email });
    if (!user) {
        console.log("No user found with email:", email);
        process.exit(1);
    }
    const plans = await Plan.find().lean();
    console.log("All Plans in DB:", plans);

    console.log("User found:", {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
        founderStatus: user.founderStatus
    });

    const activeSubs = await Subscription.find({ userId: user._id }).populate('planId');
    console.log("Subscriptions:", activeSubs.map(s => ({
        id: s._id,
        planName: s.planId?.planName || 'Unknown Plan',
        planIdString: s.planId?.planId || 'Unknown',
        status: s.subscriptionStatus,
        renewalDate: s.renewalDate
    })));

    process.exit(0);
}

run().catch(console.error);
