import mongoose from 'mongoose';
import ChatSession from '../models/ChatSession.js';
import dns from 'dns';
import fs from 'fs';

dns.setServers(['8.8.8.8', '8.8.4.4']);
dns.setDefaultResultOrder('ipv4first');

const MONGODB_ATLAS_URI = 'mongodb+srv://admin_db_user:gwmmWiKmK4wCit1L@cluster0.u5wdauj.mongodb.net/AISA?appName=Cluster0';

async function run() {
    try {
        await mongoose.connect(MONGODB_ATLAS_URI, { family: 4 });
        let out = '';
        const log = (msg) => {
            out += msg + '\n';
        };

        const sessionIds = ['mremcscf8jy5c33cdic'];
        for (const sid of sessionIds) {
            log(`\n=========================================`);
            log(`SESSION: ${sid}`);
            log(`=========================================`);
            const session = await ChatSession.findOne({ sessionId: sid });
            if (!session) {
                log('Session not found.');
                continue;
            }
            log(`Detected Mode: ${session.detectedMode}`);
            log(`Messages:`);
            session.messages.forEach((msg, idx) => {
                log(`  [${idx + 1}] [${msg.role}]`);
                log(`  Content: "${msg.content}"`);
                if (msg.attachments && msg.attachments.length > 0) {
                    log(`  Attachments: ${JSON.stringify(msg.attachments)}`);
                }
            });
        }
        
        fs.writeFileSync('scratch/inspect_session_report.txt', out, 'utf8');
        console.log('Session details written successfully.');
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

run();
