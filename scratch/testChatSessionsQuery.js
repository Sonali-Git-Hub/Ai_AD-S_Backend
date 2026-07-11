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

        console.log("\nRunning the ChatSession aggregation pipeline that failed earlier...");
        const start = Date.now();

        // Count total matching sessions (simulating the count aggregation pipeline)
        const countPipeline = [
            { $match: {} },
            // Join user info
            {
                $lookup: {
                    from: 'users',
                    localField: 'userId',
                    foreignField: '_id',
                    as: 'userInfo'
                }
            },
            { $unwind: { path: '$userInfo', preserveNullAndEmptyArrays: true } },
            // Compute derived fields
            {
                $addFields: {
                    totalMessages: { $size: { $ifNull: ['$messages', []] } },
                    userName: { $ifNull: ['$userInfo.name', 'Guest'] },
                    userEmail: { $ifNull: ['$userInfo.email', 'N/A'] }
                }
            },
            { $count: 'total' }
        ];

        const [countResult] = await ChatSession.aggregate(countPipeline).toArray();
        const duration = Date.now() - start;
        console.log(`Aggregation successful! Duration: ${duration}ms`);
        console.log(`Total sessions counted: ${countResult ? countResult.total : 0}`);

        await mongoose.disconnect();
        console.log("\nVerification finished successfully.");
    } catch (err) {
        console.error("Aggregation failed with error:", err);
    }
}

run();
