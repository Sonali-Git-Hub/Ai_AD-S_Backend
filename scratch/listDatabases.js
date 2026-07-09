import mongoose from 'mongoose';
import dotenv from 'dotenv';
import dns from 'dns';
dotenv.config();

dns.setDefaultResultOrder('ipv4first');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const uri = process.env.MONGODB_ATLAS_URI || "mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0";

async function run() {
    try {
        console.log("Connecting to database...");
        await mongoose.connect(uri, { family: 4 });
        console.log("Connected successfully!");

        const adminDb = mongoose.connection.client.db().admin();
        console.log("\n=== DATABASES ON THIS CLUSTER ===");
        const dbs = await adminDb.listDatabases();
        
        dbs.databases.forEach(dbInfo => {
            console.log(`- Database Name: "${dbInfo.name}" | Size on disk: ${(dbInfo.sizeOnDisk / 1024 / 1024).toFixed(2)} MB`);
        });

        await mongoose.disconnect();
        console.log("\nDisconnected.");
    } catch (err) {
        console.error("Error listing databases:", err);
    }
}

run();
