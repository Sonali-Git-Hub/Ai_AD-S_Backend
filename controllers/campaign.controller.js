import Campaign from '../models/Campaign.js';
import CampaignPost from '../models/CampaignPost.js';
import * as aiService from '../services/ai.service.js';
import xlsx from 'xlsx';
import mongoose from 'mongoose';

/**
 * Utility: Calculate publishing dates based on start date, end date, and posting frequency
 */
export const calculatePublishingDates = (startDate, endDate, frequency) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime()) || start > end) {
    return [];
  }

  const diffTime = Math.abs(end - start);
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1;

  const dates = [];

  if (frequency === 'Daily') {
    for (let i = 0; i < diffDays; i++) {
      const d = new Date(start);
      d.setDate(start.getDate() + i);
      dates.push(d);
    }
  } else if (frequency.endsWith('Per Week') || frequency === 'Weekly') {
    let countPerWeek = 1;
    if (frequency === '2x Per Week') countPerWeek = 2;
    else if (frequency === '3x Per Week') countPerWeek = 3;
    else if (frequency === '4x Per Week') countPerWeek = 4;
    else if (frequency === '5x Per Week') countPerWeek = 5;

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
  } else if (frequency === 'Bi Weekly') {
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setDate(current.getDate() + 14);
    }
  } else if (frequency === 'Monthly') {
    let current = new Date(start);
    while (current <= end) {
      dates.push(new Date(current));
      current.setMonth(current.getMonth() + 1);
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

  return uniqueDates.sort((a, b) => a.getTime() - b.getTime());
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

    // Validations
    if (!workspaceId) return res.status(400).json({ success: false, error: 'workspaceId required' });
    if (!campaignName) return res.status(400).json({ success: false, error: 'Campaign name required' });
    if (!campaignGoal) return res.status(400).json({ success: false, error: 'Campaign goal required' });
    if (!postingFrequency) return res.status(400).json({ success: false, error: 'Posting frequency required' });
    if (!startDate || !endDate) return res.status(400).json({ success: false, error: 'Start and End dates required' });
    if (!platforms || !platforms.length) return res.status(400).json({ success: false, error: 'Campaign must contain at least one platform' });

    const start = new Date(startDate);
    const end = new Date(endDate);

    if (start > end) {
      return res.status(400).json({ success: false, error: 'Start Date cannot be greater than End Date' });
    }

    // 1. Fetch Brand Profile for workspace (Brand DNA)
    const { default: BrandProfile } = await import('../models/BrandProfile.js');
    const brand = await BrandProfile.findOne({ workspaceId });
    const companyName = brand?.companyName || 'our brand';
    const industry = brand?.targetIndustry || 'our industry';
    const audience = Array.isArray(brand?.targetAudience) ? brand.targetAudience.join(', ') : (brand?.targetAudience || 'general audience');
    const tone = Array.isArray(brand?.toneOfVoice) ? brand.toneOfVoice.join(', ') : (brand?.toneOfVoice || 'professional');

    // 2. Create the Campaign document
    const campaign = new Campaign({
      workspaceId,
      campaignName,
      campaignGoal,
      campaignMonth,
      startDate: start,
      endDate: end,
      postingFrequency,
      platforms,
      status: 'Active',
      createdBy: req.user?.email || 'system'
    });
    await campaign.save();

    // 3. Calculate publishing dates
    const calculatedDates = calculatePublishingDates(startDate, endDate, postingFrequency);

    // Content Types
    const contentTypes = ['Image', 'Carousel', 'Video', 'Reel', 'Infographic'];

    // 4. Create day cards distributed intelligently
    const createdPosts = [];
    const totalPosts = calculatedDates.length;

    for (let i = 0; i < totalPosts; i++) {
      const pubDate = calculatedDates[i];
      
      // Platform cyclic distribution
      const platform = platforms[i % platforms.length];

      // Content Type distribution
      const contentType = contentTypes[i % contentTypes.length];

      // Campaign Stage funnel distribution
      let campaignStage = 'Awareness';
      let postObjective = 'Awareness';

      const progressFraction = i / totalPosts;
      if (progressFraction < 0.35) {
        campaignStage = 'Awareness';
        // Distribute Awareness objectives
        const objectives = ['Awareness', 'Educational', 'FAQ'];
        postObjective = objectives[i % objectives.length];
      } else if (progressFraction < 0.7) {
        campaignStage = 'Consideration';
        // Distribute Consideration objectives
        const objectives = ['Behind The Scenes', 'Product Feature', 'Customer Story', 'Testimonial'];
        postObjective = objectives[i % objectives.length];
      } else {
        campaignStage = 'Conversion';
        // Distribute Conversion objectives
        const objectives = ['Offer', 'CTA'];
        postObjective = objectives[i % objectives.length];
      }

      // Day name
      const day = pubDate.toLocaleDateString('en-US', { weekday: 'long' });

      // Prompt Generation using Brand DNA
      const prompt = `Create an engaging ${platform} ${contentType} post for ${companyName} (industry: ${industry}).
Campaign Stage: ${campaignStage}
Post Objective: ${postObjective}
Goal: ${campaignGoal}
Target Audience: ${audience}
Tone of Voice: ${tone}
Write a high-converting caption, including trending hashtags and a strong CTA matching the objective.`;

      const campaignPost = new CampaignPost({
        campaignId: campaign._id,
        workspaceId,
        date: pubDate,
        day,
        platform,
        contentType,
        campaignStage,
        postObjective,
        prompt,
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

    if (mongoose.Types.ObjectId.isValid(campaignId)) {
      campaign = await Campaign.findById(campaignId);
      if (!campaign) {
        // Fallback: try finding the most recent active campaign for this workspaceId
        campaign = await Campaign.findOne({ workspaceId: campaignId }).sort({ createdAt: -1 });
      }
    }

    if (!campaign) {
      return res.json({ success: true, campaign: null, posts: [] });
    }

    const posts = await CampaignPost.find({ campaignId: campaign._id }).sort({ date: 1 });
    return res.json({ success: true, campaign, posts });
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

  const promptText = `Generate post copy for ${post.platform} with format ${post.contentType}.
The objective is ${post.postObjective} during the ${post.campaignStage} stage of our marketing campaign.
Brand DNA info:
- Website: ${website}
- Brand Voice/Tone: ${tone}

Prompt context from user:
"${post.prompt}"

Generate the caption, hashtags, cta, expected engagement, expected reach, aiScore, and bestPostingTime. Return ONLY the strict JSON object.`;

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
