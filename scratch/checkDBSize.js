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
        console.log("\n=== DATABASE STATS ===");
        const stats = await db.stats();
        console.log(`Database Name: ${stats.db}`);
        console.log(`Collections count: ${stats.collections}`);
        console.log(`Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`Index Size: ${(stats.indexSize / 1024 / 1024).toFixed(2)} MB`);

        console.log("\n=== COLLECTIONS DETAILS ===");
        const collections = await db.listCollections().toArray();
        for (const col of collections) {
            try {
                const colStats = await db.command({ collStats: col.name });
                console.log(`- ${col.name}:`);
                console.log(`  Count: ${colStats.count}`);
                console.log(`  Size: ${(colStats.size / 1024 / 1024).toFixed(2)} MB`);
                console.log(`  Storage Size: ${(colStats.storageSize / 1024 / 1024).toFixed(2)} MB`);
                console.log(`  Total Index Size: ${(colStats.totalIndexSize / 1024 / 1024).toFixed(2)} MB`);
            } catch (errCol) {
                console.log(`- ${col.name}: Failed to get stats - ${errCol.message}`);
            }
        }

        await mongoose.disconnect();
        console.log("\nDisconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
