import OpenAI from 'openai';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
import { fileURLToPath } from 'url';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getLocalOrRemoteImageBase64 = async (imagePath) => {
  if (imagePath.startsWith('http')) {
    const response = await axios.get(imagePath, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data, 'binary');
    const mimeType = response.headers['content-type'] || 'image/png';
    return `data:${mimeType};base64,${buffer.toString('base64')}`;
  }

  const filename = path.basename(imagePath);
  const localPath = path.join(__dirname, '../public/uploads', filename);

  if (fs.existsSync(localPath)) {
    const buffer = fs.readFileSync(localPath);
    const ext = path.extname(filename).toLowerCase();
    let mimeType = 'image/png';
    if (ext === '.jpg' || ext === '.jpeg') mimeType = 'image/jpeg';
    else if (ext === '.webp') mimeType = 'image/webp';
    else if (ext === '.gif') mimeType = 'image/gif';

    return `data:${mimeType};base64,${buffer.toString('base64')}`;
  }

  throw new Error(`File not found: ${imagePath}`);
};

export const analyzeImageWithAI = async (imageUrl, workspaceId, postId) => {
  try {
    logger.info(`[VisionAI] Analysis started for post ${postId} in workspace ${workspaceId}`);
    
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not defined in environment variables');
    }

    const base64ImageUrl = await getLocalOrRemoteImageBase64(imageUrl);
    logger.info(`[VisionAI] Sending image to OpenAI`);

    const openai = new OpenAI({ apiKey });

    const systemPrompt = `You are an AI Vision analyzer. Analyze the provided image and return ONLY a valid JSON object matching the format below.
Do NOT return any markdown formatting, do NOT wrap your response in backticks or \`\`\`json, and do NOT include any introductory or explanatory text. Your response must be parseable as a single JSON object.

Format:
{
  "scene": "string describing the overall scene",
  "objects": ["array", "of", "detected", "objects"],
  "people": ["array", "of", "detected", "people", "or", "activities"],
  "colors": ["array", "of", "dominant", "colors"],
  "mood": "string describing the mood/emotion",
  "industry": "string matching the industry",
  "environment": "indoor or outdoor",
  "composition": "portrait, landscape, close-up, wide, etc.",
  "lighting": "bright, dark, natural, studio, etc.",
  "logoDetected": true/false,
  "brandName": "brand name if visible or empty string",
  "detectedText": "all OCR text extracted from the image",
  "socialCategory": "suggested social media category",
  "confidence": 0.0 to 1.0 confidence score
}`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: systemPrompt
        },
        {
          role: "user",
          content: [
            {
              type: "text",
              text: "Analyze this image according to the system instructions."
            },
            {
              type: "image_url",
              image_url: {
                url: base64ImageUrl
              }
            }
          ]
        }
      ],
      max_tokens: 1000
    });

    const resultText = completion.choices[0]?.message?.content;
    const visionAnalysis = JSON.parse(resultText);

    logger.info(`[VisionAI] Analysis completed successfully`);
    return visionAnalysis;

  } catch (error) {
    logger.error(`[VisionAI] Analysis failed: ${error.message}`);
    throw error;
  }
};
