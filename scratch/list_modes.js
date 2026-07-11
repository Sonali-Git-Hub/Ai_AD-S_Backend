import mongoose from 'mongoose';
import ChatSession from '../models/ChatSession.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const MONGODB_ATLAS_URI = 'mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_ATLAS_URI, { family: 4 });
        console.log('[DB] Connected successfully');

        const modes = await ChatSession.distinct('detectedMode');
        console.log('Distinct Modes in ChatSession database:', modes);

        const tools = await ChatSession.distinct('activeTool');
        console.log('Distinct Active Tools in ChatSession database:', tools);

        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
