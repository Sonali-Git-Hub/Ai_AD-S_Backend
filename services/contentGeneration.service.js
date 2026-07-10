import OpenAI from 'openai';
import logger from '../utils/logger.js';
import { buildOptimizedPrompt } from './promptBuilder.service.js';

export const generatePostContent = async (post, regenerateSection = null) => {
  try {
    logger.info(`[ContentAI] Prompt Building`);
    const prompt = buildOptimizedPrompt(post, regenerateSection);

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      throw new Error('OPENAI_API_KEY is not defined in environment variables');
    }

    logger.info(`[ContentAI] Sending Request`);
    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      response_format: { type: "json_object" },
      messages: [
        {
          role: "system",
          content: "You are a professional social media manager. You only return valid JSON. Do not write markdown tags or extra explanations."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      max_tokens: 1500
    });

    const resultText = completion.choices[0]?.message?.content;
    logger.info(`[ContentAI] Response Received`);

    return JSON.parse(resultText);

  } catch (error) {
    logger.error(`[ContentAI] Generation failed: ${error.message}`);
    throw error;
  }
};
