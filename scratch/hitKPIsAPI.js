import mongoose from 'mongoose';
import connectDB from '../config/db.js';
import User from '../models/User.js';
import Session from '../models/Session.js';
import axios from 'axios';

const run = async () => {
    try {
        await connectDB();
        
        // Find admin user
        const adminUser = await User.findOne({
            $or: [{ role: 'admin' }, { email: 'admin@uwo24.com' }]
        });

        if (!adminUser) {
            console.log('No admin user found in database.');
            return;
        }

        console.log(`Found Admin User: ${adminUser.email} (${adminUser._id})`);

        // Find session for this admin
        const session = await Session.findOne({ userId: adminUser._id }).sort({ lastActive: -1 });
        if (!session) {
            console.log(`No active session found for admin user ${adminUser.email}`);
            return;
        }

        console.log('Using token from session:', session.token.substring(0, 15) + '...');
        
        const res = await axios.get('http://127.0.0.1:8080/api/incidents/kpis', {
            headers: {
                Authorization: `Bearer ${session.token}`
            },
            params: {
                range: '7d'
            }
        });

        console.log('Response Status:', res.status);
        console.log('Response Data:', JSON.stringify(res.data, null, 2));

    } catch (e) {
        if (e.response) {
            console.error('Error Status:', e.response.status);
            console.error('Error Body:', JSON.stringify(e.response.data, null, 2));
        } else {
            console.error('Error Message:', e.message);
        }
    } finally {
        await mongoose.connection.close();
    }
};

run();
