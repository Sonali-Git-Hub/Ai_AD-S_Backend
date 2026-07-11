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

        // Find the user id for admin@uwo24.com
        const adminUser = await db.collection("users").findOne({ email: "admin@uwo24.com" });
        if (!adminUser) {
            console.log("Admin user admin@uwo24.com not found!");
            await mongoose.disconnect();
            return;
        }
        const adminId = adminUser._id;
        console.log(`Admin User ID: ${adminId}`);

        const totalAdminSessions = await ChatSession.countDocuments({ userId: adminId });
        console.log(`Total Admin Sessions: ${totalAdminSessions}`);

        const emptyAdminSessions = await ChatSession.countDocuments({ userId: adminId, messages: { $size: 0 } });
        console.log(`Admin Sessions with 0 messages: ${emptyAdminSessions}`);

        const smallAdminSessions = await ChatSession.countDocuments({ userId: adminId, $or: [
            { messages: { $size: 0 } },
            { messages: { $size: 1 } },
            { messages: { $size: 2 } }
        ] });
        console.log(`Admin Sessions with <= 2 messages: ${smallAdminSessions}`);

        const guestSessions = await ChatSession.countDocuments({ guestId: { $ne: null } });
        console.log(`Total Guest Sessions: ${guestSessions}`);

        const smallGuestSessions = await ChatSession.countDocuments({ guestId: { $ne: null }, $or: [
            { messages: { $size: 0 } },
            { messages: { $size: 1 } },
            { messages: { $size: 2 } }
        ] });
        console.log(`Guest Sessions with <= 2 messages: ${smallGuestSessions}`);

        await mongoose.disconnect();
        console.log("Disconnected.");
    } catch (err) {
        console.error("Error:", err);
    }
}

run();
