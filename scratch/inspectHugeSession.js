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

        console.log("\n=== SESSION DETAILS ===");
        console.log(`Session ID: ${session.sessionId}`);
        console.log(`Title: ${session.title}`);
        console.log(`Messages Count: ${session.messages ? session.messages.length : 0}`);

        if (session.messages) {
            console.log("\n=== MESSAGES DETAIL ===");
            session.messages.forEach((m, index) => {
                const textLength = m.content ? m.content.length : 0;
                let details = "";
                if (m.conversion) {
                    details += ` | Has conversion: keys=[${Object.keys(m.conversion).join(', ')}]`;
                    if (m.conversion.file) {
                        details += `, fileLen=${m.conversion.file.length}`;
                    }
                }
                if (m.sources) {
                    details += ` | Has sources: count=${m.sources.length}`;
                }
                if (m.suggestions) {
                    details += ` | Has suggestions: count=${m.suggestions.length}`;
                }
                console.log(`Msg #${index}: Role=${m.role} | Content Len=${textLength}${details}`);
                if (textLength > 1000) {
                    console.log(`  Snippet (first 100 chars): ${m.content.substring(0, 100)}`);
                    console.log(`  Snippet (last 100 chars): ${m.content.substring(m.content.length - 100)}`);
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
