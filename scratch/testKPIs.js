import mongoose from 'mongoose';
import * as incidentService from '../services/incidentService.js';
import connectDB from '../config/db.js';

const run = async () => {
    try {
        await connectDB();
        console.log('DB Connected.');
        const stats = await incidentService.getIncidentStats('7d');
        console.log('Stats Result:', JSON.stringify(stats, null, 2));
    } catch (e) {
        console.error('Error:', e);
    } finally {
        await mongoose.connection.close();
    }
};

run();
