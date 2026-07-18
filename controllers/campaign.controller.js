import Campaign from '../models/Campaign.js';
import CampaignPost from '../models/CampaignPost.js';
import * as aiService from '../services/ai.service.js';
import * as vertexService from '../services/vertex.service.js';
import * as openaiService from '../services/openai.service.js';
import * as socialAgentService from '../services/socialAgent.service.js';
import xlsx from 'xlsx';
import mongoose from 'mongoose';

/**
 * Utility: Calculate publishing dates based on start date, end date, and posting frequency
 */
export const calculatePublishingDates = (startDate, endDate, frequency) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  console.log(`[calculatePublishingDates] Input - Start: ${startDate}, End: ${endDate}, Freq: "${frequency}"`);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
    console.warn(`[calculatePublishingDates] ⚠️ Invalid date range!`);
    return [];
  }

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;
  console.log(`[calculatePublishingDates] Date Span diffDays: ${diffDays}`);

  const dates = [];
  const normalizedFreq = (frequency || '').trim().toLowerCase();

  if (normalizedFreq === 'daily') {
    for (let i = 0; i < diffDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      dates.push(d);
    }
  } else if (normalizedFreq.endsWith('per week') || normalizedFreq === 'weekly' || normalizedFreq.startsWith('2x') || normalizedFreq.startsWith('3x')) {
    let countPerWeek = 1;
    if (normalizedFreq.startsWith('2x')) countPerWeek = 2;
    else if (normalizedFreq.startsWith('3x')) countPerWeek = 3;
    else if (normalizedFreq.startsWith('4x')) countPerWeek = 4;
    else if (normalizedFreq.startsWith('5x')) countPerWeek = 5;

    let currentWeekStart = new Date(start);
    while (currentWeekStart <= end) {
      const currentWeekEnd = new Date(currentWeekStart);
      currentWeekEnd.setDate(currentWeekStart.getDate() + 6);

      const actualEnd = currentWeekEnd > end ? end : currentWeekEnd;
      const daysInThisWeek = Math.ceil((actualEnd - currentWeekStart) / (1000 * 60 * 60 * 24)) + 1;

      const step = daysInThisWeek / countPerWeek;
      for (let i = 0; i < countPerWeek; i++) {
        const offset = Math.floor(i * step + step / 2);
        if (offset < daysInThisWeek) {
          const d = new Date(currentWeekStart);
          d.setDate(currentWeekStart.getDate() + offset);
          if (d <= end) dates.push(d);
        }
      }

      currentWeekStart.setDate(currentWeekStart.getDate() + 7);
    }
  } else if (normalizedFreq === 'bi weekly' || normalizedFreq === 'biweekly') {
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 14);
    }
  } else if (normalizedFreq === 'monthly') {
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
    }
  } else {
    // Default fallback: daily
    console.warn(`[calculatePublishingDates] Unknown frequency "${frequency}". Falling back to Daily.`);
    for (let i = 0; i < diffDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      dates.push(d);
    }
  }

  // Ensure unique dates only
  const uniqueDatesMap = {};
  const uniqueDates = [];
  for (const d of dates) {
    const key = d.toISOString().split('T')[0];
    if (!uniqueDatesMap[key]) {
      uniqueDatesMap[key] = true;
      uniqueDates.push(d);
    }
  }

  const sortedDates = uniqueDates.sort((a, b) => a.getTime() - b.getTime());
  console.log(`[calculatePublishingDates] Generated ${sortedDates.length} dates:`, sortedDates.map(d => d.toISOString().split('T')[0]));
  return sortedDates;
};

/**
 * POST /api/calendar/generate-dates
 * Validate and calculate dates array before campaign creation
 */
export const generateDates = async (req, res) => {
  try {
    const { startDate, endDate, postingFrequency } = req.body;
    if (!startDate || !endDate || !postingFrequency) {
      return res.status(400).json({ success: false, error: 'startDate, endDate, and postingFrequency are required' });
    }

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      return res.status(400).json({ success: false, error: 'Start Date cannot be greater than End Date' });
    }

    const calculated = calculatePublishingDates(startDate, endDate, postingFrequency);
    return res.json({ success: true, count: calculated.length, dates: calculated });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/create-campaign
 * Creates a campaign and generates its day cards
 */
export const createCampaign = async (req, res) => {
  try {
    const { workspaceId, campaignName, campaignGoal, campaignMonth, startDate, endDate, postingFrequency, platforms } = req.body;

    try {
      const fs = await import('fs');
      fs.appendFileSync('./campaign_creation.log', `[${new Date().toISOString()}] Incoming request: name="${campaignName}", start="${startDate}", end="${endDate}", freq="${postingFrequency}"\n`);
    } catch (e) {
      console.error("Log write failed:", e);
    }

    // Validations
    if (!workspaceId) return res.status(400).json({ success: false, error: 'workspaceId required' });
    if (!campaignName) return res.status(400).json({ success: false, error: 'Campaign name required' });
    if (!postingFrequency) return res.status(400).json({ success: false, error: 'Posting frequency required' });
    if (!startDate || !endDate) return res.status(400).json({ success: false, error: 'Start and End dates required' });

    // 1. Fetch Brand Profile for workspace (Brand DNA)
    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const brand = await BrandProfile.findOne({ workspaceId });
    const companyName = brand?.companyName || 'our brand';
    const industry = brand?.targetIndustry || 'our industry';
    const audience = Array.isArray(brand?.targetAudience) ? brand.targetAudience.join(', ') : (brand?.targetAudience || 'general audience');
    const tone = Array.isArray(brand?.toneOfVoice) ? brand.toneOfVoice.join(', ') : (brand?.toneOfVoice || 'professional');

    // Fallbacks for campaignGoal and platforms (removed from UI form)
    let finalGoal = campaignGoal;
    if (!finalGoal) {
      finalGoal = brand?.structuredIdentity?.goal || 'Brand Awareness';
    }

    let finalPlatforms = platforms;
    if (!finalPlatforms || !finalPlatforms.length) {
      finalPlatforms = brand?.structuredIdentity?.platform_focus || [];
    }
    if (!finalPlatforms || !finalPlatforms.length) {
      finalPlatforms = ['Instagram', 'LinkedIn'];
    }
    // Standardize naming to capitalized form
    finalPlatforms = finalPlatforms.map(p => p.charAt(0).toUpperCase() + p.slice(1));

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      return res.status(400).json({ success: false, error: 'Start Date cannot be greater than End Date' });
    }

    // 2. Create the Campaign document
    const campaign = new Campaign({
      workspaceId,
      campaignName,
      campaignGoal: finalGoal,
      campaignMonth,
      startDate: start,
      endDate: end,
      postingFrequency,
      platforms: finalPlatforms,
      status: 'Active',
      createdBy: req.user?.email || 'system'
    });
    await campaign.save();

    // 3. Calculate publishing dates
    const calculatedDates = calculatePublishingDates(startDate, endDate, postingFrequency);

    try {
      const fs = await import('fs');
      fs.appendFileSync('./campaign_creation.log', `[${new Date().toISOString()}] Calculated dates count: ${calculatedDates.length}, dates: ${JSON.stringify(calculatedDates.map(d => d.toISOString().split('T')[0]))}\n`);
    } catch (e) {
      console.error("Log write failed:", e);
    }

    // Only Image and Carousel are supported content types now
    const contentTypes = ['Image', 'Carousel'];

    // Helper to get logical postFor based on campaign stage
    const getPostForByStage = (stage, index) => {
      const awarenessOpts = [
        "Brand Awareness", "Educational", "Behind The Scenes", "Company Culture", 
        "FAQ", "Brand Story", "Quote", "Motivational Quote", "Industry Insights", "CSR Activity"
      ];
      const considerationOpts = [
        "Product Promotion", "Customer Testimonial", "Customer Success Story", "Tips & Tricks", 
        "How To Guide", "Team Introduction", "Feature Highlight", "Case Study", "Before & After"
      ];
      const conversionOpts = [
        "Special Offer", "Festival Offer", "Flash Sale", "Discount", "Product Launch", 
        "Event Promotion", "Announcement", "Poll", "Contest", "Giveaway", "Engagement Post",
        "Seasonal Campaign", "Limited Time Offer", "New Arrival", "Service Highlight", 
        "Partnership", "Milestone Celebration", "User Generated Content"
      ];

      if (stage === 'Awareness') {
        return awarenessOpts[index % awarenessOpts.length];
      } else if (stage === 'Consideration') {
        return considerationOpts[index % considerationOpts.length];
      } else {
        return conversionOpts[index % conversionOpts.length];
      }
    };

    // 4. Build raw campaign posts list
    const rawPosts = [];
    const totalPosts = calculatedDates.length;

    for (let i = 0; i < totalPosts; i++) {
      const pubDate = calculatedDates[i];
      const platform = finalPlatforms[i % finalPlatforms.length];
      const postType = contentTypes[i % contentTypes.length]; // Image or Carousel
      const carouselImages = postType === 'Carousel' ? (2 + (i % 4)) : 0; // 2, 3, 4, or 5 images
      
      let campaignStage = 'Awareness';
      let postObjective = 'Awareness';

      const progressFraction = i / totalPosts;
      if (progressFraction < 0.35) {
        campaignStage = 'Awareness';
        const objectives = ['Awareness', 'Educational', 'FAQ'];
        postObjective = objectives[i % objectives.length];
      } else if (progressFraction < 0.7) {
        campaignStage = 'Consideration';
        const objectives = ['Behind The Scenes', 'Product Feature', 'Customer Story', 'Testimonial'];
        postObjective = objectives[i % objectives.length];
      } else {
        campaignStage = 'Conversion';
        const objectives = ['Offer', 'CTA'];
        postObjective = objectives[i % objectives.length];
      }

      const postFor = getPostForByStage(campaignStage, i);
      const day = pubDate.toLocaleDateString('en-US', { weekday: 'long' });
      const dateStr = pubDate.toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' });

      rawPosts.push({
        pubDate,
        day,
        platform,
        postType,
        carouselImages,
        campaignStage,
        postObjective,
        postFor,
        dateStr
      });
    }

    // 5. Generate AI Image Prompts and Caption Prompts dynamically in batches of 5
    const batchSize = 5;
    const allGeneratedPrompts = [];

    const personality = brand?.brandPersonality?.traits ? brand.brandPersonality.traits.join(', ') : 'Professional, modern';
    const colors = brand?.brandColors || brand?.visualIdentity?.brandColors || ['Blue', 'Orange'];
    const colorsStr = Array.isArray(colors) ? colors.join(', ') : colors;
    const visualStyle = brand?.visualIdentity?.visualTheme || brand?.visualIdentity?.designStyle || 'premium, clean, vibrant';
    const productsServices = brand?.structuredIdentity?.products_services || brand?.productsServices?.products || ['our products and services'];
    const productsStr = Array.isArray(productsServices) ? productsServices.join(', ') : productsServices;

    for (let i = 0; i < rawPosts.length; i += batchSize) {
      const batch = rawPosts.slice(i, i + batchSize);
      
      const systemInstruction = `You are a world-class Social Media Creative Director and AI Prompt Engineer.
Your goal is to write extremely detailed, production-ready AI Image Prompts (for Flux, Midjourney, DALL-E) and separate AI Caption Prompts (outlining Hook, Story angle, CTA, hashtags direction).
You must output strictly a valid JSON array matching the requested schema. No markdown, no HTML, no explanation — only raw JSON array.`;

      const promptText = `Generate dynamic, brand-customized prompts for a batch of social media posts.

BRAND DNA:
- Brand Name: ${companyName}
- Industry: ${industry}
- Target Audience: ${audience}
- Brand Colors: ${colorsStr}
- Visual Theme/Style: ${visualStyle}
- Products/Services: ${productsStr}
- Personality/Voice: ${personality} (${tone})

CAMPAIGN:
- Name: ${campaignName}
- Goal: ${finalGoal}

BATCH OF POSTS TO GENERATE PROMPTS FOR:
${batch.map((p, idx) => `Post #${i + idx + 1}:
  - Date: ${p.dateStr} (${p.day})
  - Platform: ${p.platform}
  - Post Type: ${p.postType}
  - Carousel Images: ${p.carouselImages > 0 ? `${p.carouselImages} slides` : 'N/A'}
  - Post For (Objective): ${p.postFor}
  - Campaign Stage: ${p.campaignStage}
`).join('\n')}

CRITICAL REQUIREMENTS:
1. Every card MUST be different. Vary the creative concept, scene setup, background setting, camera angle, composition, lighting style, color scheme, and focus across all posts. Even if Goal/Stage is same, make it feel unique!
2. Prompts must be brand-relevant. Do NOT use generic prompts. Incorporate the brand name (${companyName}) and key brand properties.
3. The AI Image Prompt must be detailed and production-ready for image generators like Flux/Midjourney. Avoid vague instructions. Include background details, camera style, colors, visual metaphors.
4. The AI Caption Prompt must be a structured prompt outlining: Hook direction, Story angle, Key messaging, Brand voice tone, CTA style, Hashtag direction, Emoji style.
5. Return strictly a JSON array of objects with the exact structure:
[
  {
    "imagePrompt": "Detailed visual prompt here...",
    "captionPrompt": "Detailed caption prompt specifying hook, story, key message, voice, CTA, hashtags..."
  },
  ...
]
`;

      try {
        const aiRes = await aiService.chat(promptText, null, { systemInstruction });
        let responseText = aiRes?.text || '[]';
        responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const batchResults = JSON.parse(responseText);

        if (Array.isArray(batchResults)) {
          allGeneratedPrompts.push(...batchResults);
        } else {
          throw new Error('Response is not an array');
        }
      } catch (err) {
        console.error(`Prompt generation failed for batch starting at ${i}, using fallback`, err);
        // Fallback prompts
        batch.forEach((p, idx) => {
          allGeneratedPrompts.push({
            imagePrompt: `Design a premium, high-converting visual for ${companyName} featuring ${productsStr} for ${p.postFor}. Highlight brand colors ${colorsStr} with professional composition and modern lighting.`,
            captionPrompt: `Write an engaging caption for ${companyName} audience (${audience}) focusing on ${p.postFor}. Style: Hook focusing on value, Story angle around brand benefits, CTA pointing to bio link, 5 relevant hashtags, friendly emoji tone.`
          });
        });
      }
    }

    // 6. Create CampaignPost records in database
    const createdPosts = [];
    for (let i = 0; i < totalPosts; i++) {
      const p = rawPosts[i];
      const promptsForPost = allGeneratedPrompts[i] || {
        imagePrompt: `Design a premium, high-converting visual for ${companyName} featuring ${productsStr} for ${p.postFor}. Highlight brand colors ${colorsStr} with professional composition and modern lighting.`,
        captionPrompt: `Write an engaging caption for ${companyName} audience (${audience}) focusing on ${p.postFor}. Style: Hook focusing on value, Story angle around brand benefits, CTA pointing to bio link, 5 relevant hashtags, friendly emoji tone.`
      };

      const campaignPost = new CampaignPost({
        campaignId: campaign._id,
        workspaceId,
        date: p.pubDate,
        day: p.day,
        platform: p.platform,
        contentType: p.postType, // Keep contentType for legacy compatibility
        postType: p.postType,
        carouselImages: p.carouselImages,
        postFor: p.postFor,
        imagePrompt: promptsForPost.imagePrompt,
        captionPrompt: promptsForPost.captionPrompt,
        campaignStage: p.campaignStage,
        postObjective: p.postObjective,
        prompt: promptsForPost.imagePrompt, // Map prompt field for legacy compatibility
        status: 'Draft',
        approvalStatus: 'Pending',
        bestPostingTime: '11:00 AM'
      });

      await campaignPost.save();
      createdPosts.push(campaignPost);
    }

    return res.status(201).json({ success: true, campaign, posts: createdPosts });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * GET /api/calendar/:campaignId
 * Load campaign details and all post cards
 */
export const getCampaign = async (req, res) => {
  try {
    const { campaignId } = req.params;
    let campaign = null;
    let wsId = null;

    if (mongoose.Types.ObjectId.isValid(campaignId)) {
      campaign = await Campaign.findById(campaignId);
      if (campaign) {
        wsId = campaign.workspaceId;
      } else {
        // Fallback: try finding the most recent active campaign for this workspaceId
        campaign = await Campaign.findOne({ workspaceId: campaignId }).sort({ createdAt: -1 });
        wsId = campaignId;
      }
    }

    if (!campaign) {
      // If no campaign generated yet, try to find any existing ones to populate history
      const campaigns = wsId ? await Campaign.find({ workspaceId: wsId }).sort({ createdAt: -1 }) : [];
      return res.json({ success: true, campaign: null, posts: [], campaigns });
    }

    const posts = await CampaignPost.find({ campaignId: campaign._id }).sort({ date: 1 });
    const campaigns = await Campaign.find({ workspaceId: wsId || campaign.workspaceId }).sort({ createdAt: -1 });
    return res.json({ success: true, campaign, posts, campaigns });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * PUT /api/calendar/post/:id
 * Updates specific card details
 */
export const updateCampaignPost = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedPost = await CampaignPost.findByIdAndUpdate(id, { $set: updateData }, { new: true });
    if (!updatedPost) {
      return res.status(404).json({ success: false, error: 'Campaign post not found' });
    }

    return res.json({ success: true, post: updatedPost });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * DELETE /api/calendar/post/:id
 * Deletes a post card
 */
export const deleteCampaignPost = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await CampaignPost.findByIdAndDelete(id);
    if (!deleted) {
      return res.status(404).json({ success: false, error: 'Campaign post not found' });
    }
    return res.json({ success: true, message: 'Card deleted successfully' });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * Helper: Call Gemini to generate post content from card prompt
 */
const generateCampaignPostContent = async (post, brandProfile) => {
  const companyName = brandProfile?.companyName || 'our company';
  const website = brandProfile?.website || '';
  const tone = Array.isArray(brandProfile?.toneOfVoice) ? brandProfile.toneOfVoice.join(', ') : (brandProfile?.toneOfVoice || 'professional');

  const systemInstruction = `You are a Senior Social Media Strategist and Copywriter for ${companyName}.
Your goal is to write high-converting, professional, and channel-optimized social media posts.
You must output strictly a valid JSON object without any markdown wrapping (no \`\`\`json blocks).
JSON schema to return:
{
  "caption": "Your compelling post caption text here (do not include hashtags here)",
  "hashtags": ["tag1", "tag2", "tag3"],
  "cta": "The matching Call To Action line here",
  "expectedReach": number (an integer reach estimate e.g. between 500 and 5000),
  "expectedEngagement": number (an integer engagement estimate e.g. between 30 and 400),
  "aiScore": number (overall score integer e.g. between 85 and 99),
  "bestPostingTime": "string formatted time e.g. '03:30 PM'"
}`;

  const promptText = `Generate post copy for ${post.platform} matching the post format type ${post.postType || post.contentType || 'Image'}.
We have pre-defined prompts that we must strictly follow:
1. Strategic AI Image Prompt:
"${post.imagePrompt || post.prompt}"

2. Strategic AI Caption Prompt:
"${post.captionPrompt}"

Brand DNA info:
- Website: ${website}
- Brand Voice/Tone: ${tone}

Based strictly on the strategic AI Caption Prompt ("${post.captionPrompt}"), write the actual social media copy. The caption must closely match the specified hook, story angle, CTA, emojis, and hashtags style from the prompt.
Generate the actual caption, hashtags, cta, expected engagement, expected reach, aiScore, and bestPostingTime. Return ONLY the strict JSON object.`;

  const aiRes = await aiService.chat(promptText, null, { systemInstruction });
  let responseText = aiRes?.text || '';

  // Clean markdown json prefix/suffix if present
  responseText = responseText.replace(/```json/g, '').replace(/```/g, '').trim();

  let data;
  try {
    data = JSON.parse(responseText);
  } catch (err) {
    console.warn("JSON parsing failed, falling back to simple regex extraction.", err);
    // Simple fallback parsing
    const captionMatch = responseText.match(/"caption"\s*:\s*"([^"]+)"/);
    const ctaMatch = responseText.match(/"cta"\s*:\s*"([^"]+)"/);
    data = {
      caption: captionMatch ? captionMatch[1] : responseText.substring(0, 200),
      hashtags: ['social', 'marketing', 'aiads'],
      cta: ctaMatch ? ctaMatch[1] : 'Click link in bio to learn more!',
      expectedReach: Math.floor(Math.random() * 2000) + 500,
      expectedEngagement: Math.floor(Math.random() * 250) + 20,
      aiScore: Math.floor(Math.random() * 15) + 84,
      bestPostingTime: '01:00 PM'
    };
  }

  return data;
};

/**
 * POST /api/calendar/post/:id/generate
 * Generates copy and metrics for a single card
 */
export const generateSinglePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await CampaignPost.findById(id);
    if (!post) {
      return res.status(404).json({ success: false, error: 'Campaign post not found' });
    }

    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const brand = await BrandProfile.findOne({ workspaceId: post.workspaceId });

    // 1. Generate social post copy / caption matching strategic prompts
    const content = await generateCampaignPostContent(post, brand);

    post.caption = content.caption;
    post.hashtags = content.hashtags || [];
    post.cta = content.cta || '';
    post.expectedReach = content.expectedReach || 1000;
    post.expectedEngagement = content.expectedEngagement || 80;
    post.aiScore = content.aiScore || 90;
    post.bestPostingTime = content.bestPostingTime || '11:00 AM';

    // 2. Generate the actual AI image following the displayed imagePrompt
    const imagePrompt = post.imagePrompt || post.prompt;
    if (imagePrompt) {
      try {
        let buffer;
        try {
          buffer = await vertexService.generateImageImagen(imagePrompt);
        } catch (err) {
          console.warn("Imagen generation failed, trying Dalle...", err.message);
          buffer = await openaiService.generateImageDalle(imagePrompt);
        }

        if (buffer) {
          const folder = `brands/${post.workspaceId}/generated`;
          const fileName = `calendar_${post._id}_${Date.now()}.png`;
          const uploadResult = await socialAgentService.uploadBufferToGCS(buffer, fileName, 'image/png', folder);
          post.generatedImage = uploadResult.url;
        }
      } catch (imgErr) {
        console.error(`Failed to generate image for post ID ${post._id}:`, imgErr);
      }
    }

    post.status = 'Generated';
    post.approvalStatus = 'Pending';

    await post.save();
    return res.json({ success: true, post });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/generate-all
 * Generate content for all Draft/Failed cards in a campaign
 */
export const generateAllPosts = async (req, res) => {
  try {
    const { campaignId } = req.body;
    if (!campaignId) return res.status(400).json({ success: false, error: 'campaignId is required' });

    const posts = await CampaignPost.find({ campaignId, status: { $in: ['Draft', 'Failed'] } });
    if (!posts.length) {
      return res.json({ success: true, message: 'No pending posts to generate.' });
    }

    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const firstPost = posts[0];
    const brand = await BrandProfile.findOne({ workspaceId: firstPost.workspaceId });

    const results = [];
    for (const post of posts) {
      try {
        const content = await generateCampaignPostContent(post, brand);
        post.caption = content.caption;
        post.hashtags = content.hashtags || [];
        post.cta = content.cta || '';
        post.expectedReach = content.expectedReach || 1000;
        post.expectedEngagement = content.expectedEngagement || 80;
        post.aiScore = content.aiScore || 90;
        post.bestPostingTime = content.bestPostingTime || '11:00 AM';
        post.status = 'Generated';
        post.approvalStatus = 'Pending';
        await post.save();
        results.push(post);
      } catch (err) {
        console.error(`Failed to generate post ID ${post._id}:`, err);
        post.status = 'Failed';
        await post.save();
      }
    }

    const allCampaignPosts = await CampaignPost.find({ campaignId }).sort({ date: 1 });
    return res.json({ success: true, generatedCount: results.length, posts: allCampaignPosts });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/regenerate-all
 * Reset all posts to Draft status and generate new AI copy
 */
export const regenerateAllPosts = async (req, res) => {
  try {
    const { campaignId } = req.body;
    if (!campaignId) return res.status(400).json({ success: false, error: 'campaignId is required' });

    // Reset status to Draft
    await CampaignPost.updateMany({ campaignId }, {
      $set: {
        status: 'Draft',
        caption: '',
        hashtags: [],
        cta: '',
        generatedImage: null,
        expectedReach: 0,
        expectedEngagement: 0,
        aiScore: 0,
        approvalStatus: 'Pending'
      }
    });

    const posts = await CampaignPost.find({ campaignId });
    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const firstPost = posts[0];
    const brand = await BrandProfile.findOne({ workspaceId: firstPost.workspaceId });

    const results = [];
    for (const post of posts) {
      try {
        const content = await generateCampaignPostContent(post, brand);
        post.caption = content.caption;
        post.hashtags = content.hashtags || [];
        post.cta = content.cta || '';
        post.expectedReach = content.expectedReach || 1000;
        post.expectedEngagement = content.expectedEngagement || 80;
        post.aiScore = content.aiScore || 90;
        post.bestPostingTime = content.bestPostingTime || '11:00 AM';
        post.status = 'Generated';
        post.approvalStatus = 'Pending';
        await post.save();
        results.push(post);
      } catch (err) {
        console.error(`Failed to regenerate post ID ${post._id}:`, err);
        post.status = 'Failed';
        await post.save();
      }
    }

    const allCampaignPosts = await CampaignPost.find({ campaignId }).sort({ date: 1 });
    return res.json({ success: true, regeneratedCount: results.length, posts: allCampaignPosts });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/export
 * Generates an XLSX spreadsheet buffer from the campaign posts
 */
export const exportCampaign = async (req, res) => {
  try {
    const { campaignId } = req.body;
    if (!campaignId) return res.status(400).json({ success: false, error: 'campaignId is required' });

    const campaign = await Campaign.findById(campaignId);
    if (!campaign) return res.status(404).json({ success: false, error: 'Campaign not found' });

    const posts = await CampaignPost.find({ campaignId }).sort({ date: 1 });
    if (!posts.length) {
      return res.status(404).json({ success: false, error: 'No posts found to export' });
    }

    const data = posts.map(item => {
      return {
        "Publishing Date": item.date ? new Date(item.date).toLocaleDateString() : 'TBD',
        "Day": item.day || '',
        "Platform": item.platform || '',
        "Content Type": item.contentType || '',
        "Campaign Stage": item.campaignStage || '',
        "Post Objective": item.postObjective || '',
        "Prompt / Hook": item.prompt || '',
        "Caption": item.caption || '',
        "Hashtags": (item.hashtags || []).join(' '),
        "CTA": item.cta || '',
        "Best Posting Time": item.bestPostingTime || '',
        "AI Score": item.aiScore || 0,
        "Expected Reach": item.expectedReach || 0,
        "Expected Engagement": item.expectedEngagement || 0,
        "Status": item.status || 'Draft'
      };
    });

    const worksheet = xlsx.utils.json_to_sheet(data);
    const workbook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(workbook, worksheet, "AI Campaign Plan");

    const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', `attachment; filename="Campaign_${campaign.campaignName.replace(/\s+/g, '_')}.xlsx"`);
    res.send(buffer);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/post
 * Create a new campaign post (manually or via duplication)
 */
export const createCampaignPost = async (req, res) => {
  try {
    const postData = req.body;
    const newPost = new CampaignPost(postData);
    await newPost.save();
    return res.status(201).json({ success: true, post: newPost });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

/**
 * POST /api/calendar/recommendations
 * Calls Gemini AI to generate dynamic, context-aware campaign recommendations
 * based on the campaign's date span, platforms, goals, and brand DNA.
 */
export const getAIRecommendations = async (req, res) => {
  try {
    const { workspaceId, startDate, endDate, platforms, campaignGoals, campaignGoal, campaignName, postingFrequency } = req.body;

    if (!workspaceId) return res.status(400).json({ success: false, error: 'workspaceId required' });

    // Fetch Brand DNA
    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const brand = await BrandProfile.findOne({ workspaceId });
    const companyName = brand?.companyName || 'our brand';
    const industry = brand?.targetIndustry || 'general industry';
    const audience = Array.isArray(brand?.targetAudience)
      ? brand.targetAudience.join(', ')
      : (brand?.targetAudience || 'general audience');
    const tone = Array.isArray(brand?.toneOfVoice)
      ? brand.toneOfVoice.join(', ')
      : (brand?.toneOfVoice || 'professional');
    const usp = brand?.usp || '';

    // Format date range for AI context
    const start = startDate ? new Date(startDate) : new Date();
    const end = endDate ? new Date(endDate) : new Date(start.getTime() + 30 * 24 * 60 * 60 * 1000);
    const startFormatted = start.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const endFormatted = end.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
    const totalDays = Math.ceil((end - start) / (1000 * 60 * 60 * 24)) + 1;

    const platformsList = Array.isArray(platforms) ? platforms.join(', ') : (platforms || 'Instagram');
    const goalsList = Array.isArray(campaignGoals) && campaignGoals.length > 0
      ? campaignGoals.join(', ')
      : (campaignGoal || 'Brand Awareness');

    const systemInstruction = `You are an expert social media strategist and campaign planner.
You specialize in identifying high-impact engagement opportunities for brands based on their campaign timeline, selected platforms, and target audience.
You must return ONLY a valid JSON array. No markdown, no explanation, no preamble — just the raw JSON array.`;

    const promptText = `Analyze the following campaign and generate exactly 4 highly specific, actionable recommendations to maximize engagement and reach.

BRAND CONTEXT:
- Company: ${companyName}
- Industry: ${industry}
- Target Audience: ${audience}
- Tone of Voice: ${tone}
- USP: ${usp}

CAMPAIGN DETAILS:
- Campaign Name: ${campaignName || 'New Campaign'}
- Date Range: ${startFormatted} to ${endFormatted} (${totalDays} days)
- Platforms: ${platformsList}
- Campaign Goals: ${goalsList}
- Posting Frequency: ${postingFrequency || '3x Per Week'}

INSTRUCTIONS:
1. Detect any major Indian festivals, events, or culturally significant dates within the date range (e.g., Diwali, Holi, Independence Day, IPL, Republic Day, etc.)
2. Identify the best-performing days/times for the selected platforms
3. Suggest specific content types or formats that work best for the stated goals
4. Recommend a strategic content mix that aligns with the brand's audience and tone

For each recommendation provide:
- title: Short punchy title (max 7 words, uppercase style)
- desc: One actionable sentence describing the opportunity and what to do
- impact: "High" | "Medium" (predicted engagement impact)
- type: A short identifier slug like "festival_diwali", "best_day_tuesday", "content_reels", "platform_instagram" — used to categorize the suggestion

Return ONLY this exact JSON array format (no extra text):
[
  { "title": "...", "desc": "...", "impact": "High", "type": "..." },
  { "title": "...", "desc": "...", "impact": "Medium", "type": "..." },
  { "title": "...", "desc": "...", "impact": "High", "type": "..." },
  { "title": "...", "desc": "...", "impact": "Medium", "type": "..." }
]`;

    const aiRes = await aiService.chat(promptText, null, { systemInstruction });
    let responseText = aiRes?.text || '[]';

    // Strip markdown code fences if present
    responseText = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();

    let recommendations;
    try {
      recommendations = JSON.parse(responseText);
      if (!Array.isArray(recommendations)) throw new Error('Not an array');
    } catch (parseErr) {
      console.warn('AI recommendations JSON parse failed, using fallback', parseErr.message);
      recommendations = [
        {
          title: 'Best Engagement Window Detected',
          desc: `Posts on ${platformsList.split(',')[0]?.trim() || 'Instagram'} perform best between Tue–Thu. Align your highest-value posts to these days.`,
          impact: 'High',
          type: 'best_day'
        },
        {
          title: 'Audience-Optimized Content Mix',
          desc: `Mix Reels and Carousels to maximize reach for ${audience} on ${platformsList}.`,
          impact: 'Medium',
          type: 'content_mix'
        }
      ];
    }

    return res.json({ success: true, recommendations });
  } catch (error) {
    console.error('getAIRecommendations error:', error);
    return res.status(500).json({ success: false, error: error.message });
  }
};

