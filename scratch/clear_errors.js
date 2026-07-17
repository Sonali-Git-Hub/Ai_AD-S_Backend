import mongoose from 'mongoose';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const MONGODB_ATLAS_URI = 'mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0';

// Register models
import '../models/ErrorOccurrence.js';
import '../models/Incident.js';

async function run() {
    try {
        await mongoose.connect(MONGODB_ATLAS_URI, { family: 4 });
        console.log('[DB] Connected successfully');

        const ErrorOccurrence = mongoose.model('ErrorOccurrence');
        const Incident = mongoose.model('Incident');

        const occurrencesResult = await ErrorOccurrence.deleteMany({});
        console.log(`[DB] Deleted ${occurrencesResult.deletedCount} documents from ErrorOccurrence.`);

        const incidentsResult = await Incident.deleteMany({});
        console.log(`[DB] Deleted ${incidentsResult.deletedCount} documents from Incident.`);

        console.log('[DB] Database error counters have been reset to 0.');
        process.exit(0);
    } catch (err) {
        console.error('Error running script:', err);
        process.exit(1);
    }
}

run();
