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

        console.log("\n=== LARGEST DOCUMENTS BY RAW BSON SIZE ===");
        // WiredTiger statistics / object size can be estimated using Object.bsonsize() in MongoDB
        // In node, we can do an aggregation or retrieve sample fields to estimate size
        const sessions = await ChatSession.find({}, { projection: { sessionId: 1, userId: 1, title: 1, messages: 1 } }).toArray();
        
        // Sort by length of JSON stringification as a proxy for BSON size
        const sizedSessions = sessions.map(s => {
            const size = JSON.stringify(s).length;
            // check if it has base64 file conversion
            let hasBase64 = false;
            let base64Len = 0;
            if (s.messages) {
                for (const m of s.messages) {
                    if (m.conversion && m.conversion.file) {
                        hasBase64 = true;
                        base64Len += m.conversion.file.length;
                    }
                }
            }
            return {
                id: s._id,
                sessionId: s.sessionId,
                title: s.title,
                sizeMB: (size / 1024 / 1024).toFixed(2),
                sizeRaw: size,
                hasBase64,
                base64LenMB: (base64Len / 1024 / 1024).toFixed(2)
            };
        });

        sizedSessions.sort((a, b) => b.sizeRaw - a.sizeRaw);

        console.log("Top 15 largest sessions:");
        for (const s of sizedSessions.slice(0, 15)) {
            console.log(`- Session: ${s.sessionId} | Title: "${s.title}" | Total Size: ${s.sizeMB} MB | Has Base64 File: ${s.hasBase64} (${s.base64LenMB} MB)`);
        }

        const totalJSONSize = sizedSessions.reduce((acc, curr) => acc + curr.sizeRaw, 0);
        console.log(`\nTotal estimated size of all documents: ${(totalJSONSize / 1024 / 1024).toFixed(2)} MB`);

        await mongoose.disconnect();
        console.log("Disconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
