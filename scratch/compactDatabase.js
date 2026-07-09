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

        const db = mongoose.connection.db;

        console.log("\nRunning COMPACT command on 'chatsessions' collection (forced)...");
        // Running compact command with force: true
        const compactResult = await db.command({ compact: "chatsessions", force: true });
        console.log("Compact Result:", compactResult);

        console.log("\n=== DATABASE STATS AFTER COMPACTION ===");
        const stats = await db.stats();
        console.log(`Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);

        await mongoose.disconnect();
        console.log("\nCompaction finished successfully.");
    } catch (err) {
        console.error("Error during compaction:", err);
    }
}

run();
