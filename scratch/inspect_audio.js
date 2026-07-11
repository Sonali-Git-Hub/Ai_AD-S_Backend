import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
import dns from 'dns';

try {
    dns.setServers(['8.8.8.8', '1.1.1.1']);
} catch (e) {}

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, '..', '.env') });

const MONGO_URI = process.env.MONGODB_ATLAS_URI || process.env.MONGO_URI;

async function inspect() {
  await mongoose.connect(MONGO_URI);
  const ChatSession = (await import('../models/ChatSession.js')).default;
  const session = await ChatSession.findOne({ sessionId: 'mrd7phfgajof4c4vj8s' });
  if (!session) {
    console.log("Session not found");
    return;
  }

  const modelMsg = session.messages.find(m => m.role === 'model' && m.conversion && m.conversion.file);
  if (!modelMsg) {
    console.log("Model conversion message not found in session");
    return;
  }

  const base64Data = modelMsg.conversion.file;
  const buffer = Buffer.from(base64Data, 'base64');
  console.log(`Audio File Info:`);
  console.log(`FileName: ${modelMsg.conversion.fileName}`);
  console.log(`MimeType: ${modelMsg.conversion.mimeType}`);
  console.log(`Base64 String Length: ${base64Data.length}`);
  console.log(`Buffer Byte Length: ${buffer.length}`);

  // Write to scratch directory
  const outputPath = join(__dirname, 'test.mp3');
  fs.writeFileSync(outputPath, buffer);
  console.log(`Saved output file to: ${outputPath}`);

  await mongoose.disconnect();
}

inspect().catch(console.error);
