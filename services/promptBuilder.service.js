export const buildOptimizedPrompt = (post, regenerateSection = null) => {
  const {
    platform,
    contentType,
    targetAudience,
    tone,
    description,
    language,
    cta,
    contentLength,
    enhancements,
    visionAnalysis
  } = post;

  const toneStr = Array.isArray(tone) ? tone.join(', ') : tone;
  const analysisStr = visionAnalysis ? JSON.stringify(visionAnalysis) : 'None';
  const enhancementsStr = enhancements ? JSON.stringify(enhancements) : 'None';

  let prompt = ``;

  if (regenerateSection) {
    prompt = `You are a professional social media manager. We previously generated a post, and now we only want to REGENERATE the "${regenerateSection}" section.
Do NOT change the other parts of the post. Preserve the tone, language, and context.
Original User Description: "${description}"
Platform: ${platform}
Content Type: ${contentType}
Target Audience: ${targetAudience}
Tone: ${toneStr}
Language: ${language}
CTA Style: ${cta}
Content Length: ${contentLength}
AI Image Analysis Context: ${analysisStr}

Generate a new, highly engaging and platform-specific "${regenerateSection}" for this post.
Return a JSON object containing ONLY the modified field. E.g.:
{
  "${regenerateSection}": "..."
}
`;
    if (regenerateSection === 'hashtags') {
      prompt += `\nEnsure hashtags are relevant to the scene and objects, following platform rules. Return them as a JSON array of strings under key "hashtags".`;
    }
  } else {
    prompt = `You are a professional social media manager and content creator. Create a complete social media post based on the following information:
- User Description: "${description}"
- Target Platform: ${platform}
- Content Type: ${contentType}
- Target Audience: ${targetAudience}
- Tone: ${toneStr}
- Language: ${language}
- Call to Action (CTA): ${cta}
- Desired Content Length: ${contentLength}
- AI Image Analysis Context: ${analysisStr}
- Requested AI Enhancements: ${enhancementsStr}

CRITICAL RULES:
1. Use the uploaded image context from the Vision Analysis.
2. If a logo was detected, do not ignore it.
3. Respect platform rules and formatting:
   - Instagram: Engaging, emoji-friendly, 8-20 relevant hashtags.
   - Facebook: Storytelling-focused, friendly, 3-5 hashtags.
   - LinkedIn: Professional, insightful, 3-5 hashtags.
   - Twitter (X): Short, punchy, 2-5 hashtags.
   - Pinterest: SEO-optimized descriptions.
   - TikTok: Modern, trending style.
4. Generates three distinct variations (Version A, Version B, Version C) in the "variations" field. Each must use a different hook, a different CTA strategy, a different writing style, and a different hashtag strategy.
5. Alt Text: Create a description of the image for accessibility.
6. Image Prompt: Describe a new optimized social media visual scene inspired by this image.
7. Return ONLY valid JSON matching the exact schema below. Do not wrap in markdown or include extra explanations.

Response Schema:
{
  "title": "string (a catchy title/hook)",
  "caption": "string (the main caption body with spacings and readable formatting)",
  "hashtags": ["array", "of", "strings"],
  "cta": "string (the call to action)",
  "seoKeywords": ["array", "of", "relevant", "keywords"],
  "altText": "string (accessibility description)",
  "imagePrompt": "string (visual prompt for image generation model)",
  "bestPostingTime": "string indicating ideal posting window",
  "contentTips": "string with specific tips for this post",
  "variations": [
    {
      "title": "Variation Title",
      "caption": "Variation Caption",
      "hashtags": ["variation", "hashtags"]
    }
  ]
}`;
  }

  return prompt;
};
