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
        const ChatSession = db.collection("chatsessions");

        const session = await ChatSession.findOne({ sessionId: "mon6khw7mfm6bymgsga" });
        if (!session) {
            console.log("Session not found!");
            await mongoose.disconnect();
            return;
        }

        console.log("\n=== MESSAGE KEYS AND SIZES ===");
        if (session.messages) {
            session.messages.forEach((m, i) => {
                console.log(`\nMessage #${i}:`);
                Object.keys(m).forEach(key => {
                    const val = m[key];
                    const size = JSON.stringify(val).length;
                    console.log(`  - Key: "${key}" | Type: ${typeof val} | Size: ${(size / 1024).toFixed(2)} KB (${size} bytes)`);
                    if (size > 100000) {
                        console.log(`    [LARGE FIELD DETECTED] Snippet of "${key}": ${JSON.stringify(val).substring(0, 200)}...`);
                    }
                });
            });
        }

        await mongoose.disconnect();
        console.log("Disconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
