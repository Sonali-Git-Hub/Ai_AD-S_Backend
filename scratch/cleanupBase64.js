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

        const sessions = await ChatSession.find({}).toArray();
        let totalBase64Fields = 0;
        let totalBytesCleared = 0;
        let sessionsUpdated = 0;

        for (const session of sessions) {
            let sessionModified = false;
            if (session.messages) {
                for (const msg of session.messages) {
                    // Check attachments
                    if (msg.attachments && Array.isArray(msg.attachments)) {
                        for (const attachment of msg.attachments) {
                            if (attachment.url && attachment.url.startsWith("data:")) {
                                totalBase64Fields++;
                                totalBytesCleared += attachment.url.length;
                                attachment.url = "[REMOVED_BASE64_FOR_SPACE_SAVING]";
                                sessionModified = true;
                            }
                        }
                    }
                    // Check conversion
                    if (msg.conversion && msg.conversion.file && msg.conversion.file.startsWith("data:")) {
                        totalBase64Fields++;
                        totalBytesCleared += msg.conversion.file.length;
                        msg.conversion.file = "[REMOVED_BASE64_FOR_SPACE_SAVING]";
                        sessionModified = true;
                    }
                    if (msg.conversion && msg.conversion.file && msg.conversion.file.length > 1000) {
                        // In case it doesn't start with data: but is still raw base64
                        totalBase64Fields++;
                        totalBytesCleared += msg.conversion.file.length;
                        msg.conversion.file = "[REMOVED_BASE64_FOR_SPACE_SAVING]";
                        sessionModified = true;
                    }
                }
            }

            if (sessionModified) {
                sessionsUpdated++;
                await ChatSession.updateOne({ _id: session._id }, { $set: { messages: session.messages } });
            }
        }

        console.log(`\n=== CLEANUP BASE64 SUMMARY ===`);
        console.log(`Sessions scanned: ${sessions.length}`);
        console.log(`Sessions modified: ${sessionsUpdated}`);
        console.log(`Base64 fields cleared: ${totalBase64Fields}`);
        console.log(`Total data size cleared: ${(totalBytesCleared / 1024 / 1024).toFixed(2)} MB`);

        if (sessionsUpdated > 0) {
            console.log("\nRunning compaction to release space...");
            const compactResult = await db.command({ compact: "chatsessions", force: true });
            console.log("Compact Result:", compactResult);

            console.log("\n=== UPDATED DATABASE STATS ===");
            const stats = await db.stats();
            console.log(`New Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
            console.log(`New Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);
        }

        await mongoose.disconnect();
        console.log("\nDisconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
