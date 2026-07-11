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

        const collections = await db.listCollections().toArray();
        console.log(`Found ${collections.length} collections. Starting compaction...`);

        for (const col of collections) {
            try {
                console.log(`Compacting collection: ${col.name}...`);
                const result = await db.command({ compact: col.name, force: true });
                console.log(`  Result for ${col.name}: ok=${result.ok}`);
            } catch (errCol) {
                console.log(`  Failed to compact ${col.name}: ${errCol.message}`);
            }
        }

        console.log("\n=== DATABASE STATS AFTER FULL COMPACTION ===");
        const stats = await db.stats();
        console.log(`Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);

        await mongoose.disconnect();
        console.log("\nFull compaction completed.");
    } catch (err) {
        console.error("Error during full compaction:", err);
    }
}

run();
