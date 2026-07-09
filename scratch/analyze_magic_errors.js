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
            console.log(msg);
            out += msg + '\n';
        };

        log('[DB] Connected successfully');

        // Fetch ALL sessions for magic tools
        const modes = ['IMAGE_GENERATION', 'VIDEO_GENERATION', 'IMAGE_EDIT', 'AUDIO_CONVERT', 'DOCUMENT_CONVERT'];
        log(`\nFetching sessions for modes: ${modes.join(', ')}`);
        
        const sessions = await ChatSession.find({
            detectedMode: { $in: modes }
        }).sort({ updatedAt: -1 });

        log(`Total sessions found: ${sessions.length}`);

        const errorsByMode = {};
        modes.forEach(m => errorsByMode[m] = []);

        let totalMsgsChecked = 0;
        let totalErrorsFound = 0;

        for (const session of sessions) {
            const mode = session.detectedMode;
            for (const msg of session.messages) {
                if (msg.role === 'model' || msg.role === 'assistant') {
                    totalMsgsChecked++;
                    const content = msg.content || '';
                    
                    // Look for common error, failure, refusal, or block indicators
                    const hasError = /error|failed|failure|unable to|sorry|limit|exception|cannot|could not|❌/i.test(content);
                    if (hasError) {
                        totalErrorsFound++;
                        errorsByMode[mode].push({
                            sessionId: session.sessionId,
                            userId: session.userId,
                            messageId: msg._id,
                            content: content.trim(),
                            createdAt: session.updatedAt
                        });
                    }
                }
            }
        }

        log(`\nAnalyzed ${totalMsgsChecked} assistant messages. Found ${totalErrorsFound} potential errors/issues.`);

        log('\n=========================================');
        log('DETAILED BREAKDOWN OF PROBLEMS BY MAGIC CARD:');
        log('=========================================');

        for (const mode of modes) {
            log(`\n>>> CARD / MODE: ${mode} (${errorsByMode[mode].length} issues found)`);
            if (errorsByMode[mode].length === 0) {
                log('  No issues/errors detected.');
                continue;
            }

            // Group similar errors to summarize them
            const uniqueProblems = new Map();
            errorsByMode[mode].forEach(err => {
                let genericKey = err.content
                    .replace(/[0-9a-fA-F]{24}/g, '[ID]')
                    .replace(/\d+/g, '[NUM]')
                    .replace(/(http|https):\/\/[^\s]+/g, '[URL]')
                    .substring(0, 150); // first 150 chars as fingerprint
                
                if (!uniqueProblems.has(genericKey)) {
                    uniqueProblems.set(genericKey, {
                        sample: err.content,
                        count: 0,
                        sessions: []
                    });
                }
                const record = uniqueProblems.get(genericKey);
                record.count++;
                if (record.sessions.length < 3) {
                    record.sessions.push(err.sessionId);
                }
            });

            // Sort by frequency and display
            const sortedProblems = Array.from(uniqueProblems.values()).sort((a, b) => b.count - a.count);
            sortedProblems.forEach((prob, idx) => {
                log(`\n  Problem #${idx + 1} (Occurred ${prob.count} times):`);
                log(`  -----------------------------------------`);
                log(`  Sample: "${prob.sample.replace(/\n/g, ' ')}"`);
                log(`  Affected Session IDs: ${prob.sessions.join(', ')}`);
            });
        }

        fs.writeFileSync('scratch/magic_errors_report.txt', out, 'utf8');
        log('\nReport written to scratch/magic_errors_report.txt successfully.');
        process.exit(0);
    } catch (err) {
        console.error('Error running script:', err);
        process.exit(1);
    }
}

run();
