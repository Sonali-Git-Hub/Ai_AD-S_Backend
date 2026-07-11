import mongoose from 'mongoose';
import ChatSession from '../models/ChatSession.js';
import dns from 'dns';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const MONGODB_ATLAS_URI = 'mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_ATLAS_URI, { family: 4 });
        console.log('[DB] Connected successfully');

        // Let's find recent sessions with errors in any of the magic modes.
        const errorKeywords = ['❌', 'failed', 'error', 'timeout', 'sorry, i', 'unable to', 'could not'];
        const keywordRegexes = errorKeywords.map(kw => new RegExp(kw, 'i'));

        console.log('\n--- FETCHING ERROR SESSIONS ---');
        const sessions = await ChatSession.find({
            detectedMode: { $in: ['IMAGE_GENERATION', 'VIDEO_GENERATION', 'IMAGE_EDIT', 'AUDIO_CONVERT', 'DOCUMENT_CONVERT', 'CODE_WRITER'] }
        }).sort({ updatedAt: -1 }).limit(100);

        console.log(`Found ${sessions.length} sessions for Magic Tools.`);

        let errorCount = 0;
        for (const session of sessions) {
            const errorMessages = session.messages.filter(msg => {
                if (msg.role !== 'model' && msg.role !== 'assistant') return false;
                return keywordRegexes.some(rx => rx.test(msg.content));
            });

            if (errorMessages.length > 0) {
                errorCount++;
                console.log(`\n=========================================`);
                console.log(`Session ID: ${session.sessionId}`);
                console.log(`User ID: ${session.userId || 'Guest'}`);
                console.log(`Mode: ${session.detectedMode}`);
                console.log(`Created: ${session.createdAt}`);
                console.log(`Errors in this session:`);
                errorMessages.forEach((msg, idx) => {
                    console.log(`  [Error ${idx + 1}]`);
                    console.log(`  Content: "${msg.content.trim()}"`);
                });
            }
        }

        console.log(`\nFound ${errorCount} magic tool sessions with error keywords.`);

        // Also let's check for any mention of "anu" or "magic" in messages to see if there's something specific.
        console.log('\n--- SEARCHING FOR ANY "anu" OR "magic" MENTION ---');
        const mentionSessions = await ChatSession.find({
            'messages.content': { $regex: /anu|magic/i }
        }).limit(20);

        console.log(`Found ${mentionSessions.length} sessions containing 'anu' or 'magic'.`);
        for (const session of mentionSessions) {
            console.log(`\nSession ID: ${session.sessionId} | Mode: ${session.detectedMode}`);
            const matchingMsgs = session.messages.filter(msg => /anu|magic/i.test(msg.content));
            matchingMsgs.forEach(msg => {
                console.log(`  [${msg.role}]: "${msg.content.trim().substring(0, 300)}"`);
            });
        }

        process.exit(0);
    } catch (err) {
        console.error('Error running script:', err);
        process.exit(1);
    }
}

run();
