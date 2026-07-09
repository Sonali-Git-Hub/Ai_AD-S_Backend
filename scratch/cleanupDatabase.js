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
        const User = db.collection("users");

        // 1. Find admin user
        const adminUser = await User.findOne({ email: "admin@uwo24.com" });
        if (!adminUser) {
            console.log("Admin user not found. Deletion aborted.");
            await mongoose.disconnect();
            return;
        }
        const adminId = adminUser._id;
        console.log(`Admin User ID: ${adminId}`);

        // 2. Identify sessions to delete
        console.log("Identifying sessions to delete...");
        
        // Admin sessions with <= 2 messages
        const adminSessionsToDelete = await ChatSession.find({
            userId: adminId,
            $or: [
                { messages: { $size: 0 } },
                { messages: { $size: 1 } },
                { messages: { $size: 2 } }
            ]
        }, { projection: { _id: 1 } }).toArray();
        const adminSessionIds = adminSessionsToDelete.map(s => s._id);
        console.log(`Found ${adminSessionIds.length} admin sessions with <= 2 messages.`);

        // Guest sessions with <= 2 messages
        const guestSessionsToDelete = await ChatSession.find({
            guestId: { $ne: null },
            $or: [
                { messages: { $size: 0 } },
                { messages: { $size: 1 } },
                { messages: { $size: 2 } }
            ]
        }, { projection: { _id: 1 } }).toArray();
        const guestSessionIds = guestSessionsToDelete.map(s => s._id);
        console.log(`Found ${guestSessionIds.length} guest sessions with <= 2 messages.`);

        const allIdsToDelete = [...adminSessionIds, ...guestSessionIds];
        console.log(`Total sessions to delete: ${allIdsToDelete.length}`);

        if (allIdsToDelete.length === 0) {
            console.log("No sessions to delete. Exiting.");
            await mongoose.disconnect();
            return;
        }

        // 3. Delete from chatsessions collection
        console.log("Deleting sessions from chatsessions collection...");
        const deleteResult = await ChatSession.deleteMany({ _id: { $in: allIdsToDelete } });
        console.log(`Successfully deleted ${deleteResult.deletedCount} sessions.`);

        // 4. Clean up user references
        console.log("Cleaning up chatSessions references in users collection...");
        
        // Remove from admin user
        if (adminSessionIds.length > 0) {
            const adminUpdateResult = await User.updateOne(
                { _id: adminId },
                { $pull: { chatSessions: { $in: adminSessionIds } } }
            );
            console.log(`Updated admin user document: matched ${adminUpdateResult.matchedCount}, modified ${adminUpdateResult.modifiedCount}`);
        }

        // Also clean up other users if any references got deleted
        const generalUpdateResult = await User.updateMany(
            { chatSessions: { $in: allIdsToDelete } },
            { $pull: { chatSessions: { $in: allIdsToDelete } } }
        );
        console.log(`Updated other user documents: matched ${generalUpdateResult.matchedCount}, modified ${generalUpdateResult.modifiedCount}`);

        // 5. Check new stats
        console.log("\n=== UPDATED DATABASE STATS ===");
        const stats = await db.stats();
        console.log(`New Data Size: ${(stats.dataSize / 1024 / 1024).toFixed(2)} MB`);
        console.log(`New Storage Size: ${(stats.storageSize / 1024 / 1024).toFixed(2)} MB`);

        const newChatSessionCount = await ChatSession.countDocuments();
        console.log(`New chatsessions collection count: ${newChatSessionCount}`);

        await mongoose.disconnect();
        console.log("\nCleanup finished successfully.");
    } catch (err) {
        console.error("Error during cleanup:", err);
    }
}

run();
