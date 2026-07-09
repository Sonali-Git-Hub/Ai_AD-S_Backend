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

        console.log("\n=== MESSAGE SIZES ===");
        if (session.messages) {
            session.messages.forEach((m, i) => {
                const size = JSON.stringify(m).length;
                console.log(`Msg #${i} | Role: ${m.role} | Size: ${(size / 1024 / 1024).toFixed(4)} MB (${size} bytes)`);
                
                // Let's also print the keys and their sizes if this message is larger than 0.1 MB
                if (size > 100000) {
                    console.log("  Large fields inside this message:");
                    Object.keys(m).forEach(key => {
                        const fieldSize = JSON.stringify(m[key]).length;
                        console.log(`    - "${key}": ${(fieldSize / 1024 / 1024).toFixed(4)} MB (${fieldSize} bytes)`);
                        if (fieldSize > 100000) {
                            console.log(`      Snippet of "${key}": ${JSON.stringify(m[key]).substring(0, 150)}...`);
                        }
                    });
                }
            });
        }

        await mongoose.disconnect();
        console.log("Disconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
