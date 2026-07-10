import * as manualPostService from '../services/manualPost.service.js';
import { analyzeImageWithAI } from '../services/visionAI.service.js';
import * as contentGenerationService from '../services/contentGeneration.service.js';
import logger from '../utils/logger.js';

export const createManualPost = async (req, res, next) => {
  try {
    logger.info(`[ManualPost] Request received`);

    const {
      platform,
      contentType,
      targetAudience,
      tone,
      description,
      language,
      cta,
      contentLength,
      enhancements
    } = req.body;

    // 1. Validation Checks
    if (!platform) {
      logger.error(`[ManualPost] Validation failed: Platform is required`);
      return res.status(400).json({ success: false, message: 'Platform is required' });
    }
    if (!contentType) {
      logger.error(`[ManualPost] Validation failed: Content Type is required`);
      return res.status(400).json({ success: false, message: 'Content Type is required' });
    }
    if (!description) {
      logger.error(`[ManualPost] Validation failed: Description is required`);
      return res.status(400).json({ success: false, message: 'Description is required' });
    }
    if (description.length < 20 || description.length > 3000) {
      logger.error(`[ManualPost] Validation failed: Description length must be between 20 and 3000 characters`);
      return res.status(400).json({
        success: false,
        message: 'Description must be between 20 and 3000 characters'
      });
    }

    // 2. Map Tone array
    let toneArray = [];
    if (tone) {
      if (Array.isArray(tone)) {
        toneArray = tone;
      } else if (typeof tone === 'string') {
        try {
          toneArray = JSON.parse(tone);
        } catch (e) {
          toneArray = tone.split(',').map(t => t.trim()).filter(Boolean);
        }
      }
    }

    // 3. Map Enhancements
    let parsedEnhancements = {};
    if (enhancements) {
      if (typeof enhancements === 'object') {
        parsedEnhancements = enhancements;
      } else if (typeof enhancements === 'string') {
        try {
          parsedEnhancements = JSON.parse(enhancements);
        } catch (e) {
          parsedEnhancements = { raw: enhancements };
        }
      }
    }

    // 4. Map uploaded media
    const uploadedMediaPaths = req.files ? req.files.map(file => `/uploads/${file.filename}`) : [];
    logger.info(`[ManualPost] Upload complete: ${uploadedMediaPaths.length} files processed`);

    // 5. Call Service to Save in MongoDB
    const post = await manualPostService.createManualPost({
      platform,
      contentType,
      targetAudience,
      tone: toneArray,
      description,
      language,
      cta,
      contentLength,
      uploadedMedia: uploadedMediaPaths,
      enhancements: parsedEnhancements,
      status: 'pending'
    });

    logger.info(`[ManualPost] Saved successfully: ID ${post._id}`);

    res.status(201).json({
      success: true,
      postId: post._id,
      uploadedMedia: uploadedMediaPaths,
      status: "pending",
      message: "Manual post saved successfully."
    });

  } catch (error) {
    logger.error(`[ManualPost] Error: ${error.message}`);
    next(error);
  }
};

export const getManualPost = async (req, res, next) => {
  try {
    logger.info(`[ManualPost] Fetching post with ID: ${req.params.id}`);
    const post = await manualPostService.getManualPostById(req.params.id);
    if (!post) {
      logger.error(`[ManualPost] Post not found with ID: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Manual post not found' });
    }
    res.status(200).json({ success: true, post });
  } catch (error) {
    logger.error(`[ManualPost] Error fetching post: ${error.message}`);
    next(error);
  }
};

export const updateManualPost = async (req, res, next) => {
  try {
    logger.info(`[ManualPost] Updating post with ID: ${req.params.id}`);
    const post = await manualPostService.updateManualPostById(req.params.id, req.body);
    if (!post) {
      logger.error(`[ManualPost] Post not found for update with ID: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Manual post not found' });
    }
    logger.info(`[ManualPost] Post updated successfully with ID: ${req.params.id}`);
    res.status(200).json({ success: true, post, message: 'Manual post updated successfully' });
  } catch (error) {
    logger.error(`[ManualPost] Error updating post: ${error.message}`);
    next(error);
  }
};

export const deleteManualPost = async (req, res, next) => {
  try {
    logger.info(`[ManualPost] Deleting post with ID: ${req.params.id}`);
    const post = await manualPostService.deleteManualPostById(req.params.id);
    if (!post) {
      logger.error(`[ManualPost] Post not found for deletion with ID: ${req.params.id}`);
      return res.status(404).json({ success: false, message: 'Manual post not found' });
    }
    logger.info(`[ManualPost] Post deleted successfully with ID: ${req.params.id}`);
    res.status(200).json({ success: true, message: 'Manual post deleted successfully' });
  } catch (error) {
    logger.error(`[ManualPost] Error deleting post: ${error.message}`);
    next(error);
  }
};

export const analyzeImage = async (req, res, next) => {
  try {
    const { postId, workspaceId, imageUrl } = req.body;

    if (!postId || !workspaceId || !imageUrl) {
      logger.error(`[ManualPost] Validation failed: postId, workspaceId, and imageUrl are required`);
      return res.status(400).json({ success: false, message: 'postId, workspaceId, and imageUrl are required' });
    }

    const visionAnalysis = await analyzeImageWithAI(imageUrl, workspaceId, postId);

    const post = await manualPostService.updateManualPostById(postId, { visionAnalysis });
    if (!post) {
      logger.error(`[ManualPost] Post not found to save vision analysis: ID ${postId}`);
      return res.status(404).json({ success: false, message: 'Manual post not found' });
    }

    logger.info(`[VisionAI] Saved to ManualPost`);

    res.status(200).json({
      success: true,
      visionAnalysis
    });

  } catch (error) {
    logger.error(`[ManualPost] Vision analysis error: ${error.message}`);
    next(error);
  }
};

export const generateContent = async (req, res, next) => {
  try {
    const { postId, workspaceId, regenerateSection } = req.body;

    if (!postId || !workspaceId) {
      return res.status(400).json({ success: false, message: 'postId and workspaceId are required' });
    }

    const post = await manualPostService.getManualPostById(postId);
    if (!post) {
      return res.status(404).json({ success: false, message: 'Manual post not found' });
    }

    // Validation checks
    if (!post.visionAnalysis) {
      return res.status(400).json({ success: false, message: 'Vision Analysis is missing. Please analyze image first.' });
    }
    if (!post.uploadedMedia || post.uploadedMedia.length === 0) {
      return res.status(400).json({ success: false, message: 'Uploaded image missing. Please upload reference image.' });
    }
    if (!post.description) {
      return res.status(400).json({ success: false, message: 'Description empty.' });
    }
    if (!post.platform) {
      return res.status(400).json({ success: false, message: 'Platform missing.' });
    }

    const aiResult = await contentGenerationService.generatePostContent(post, regenerateSection);

    let updatedContent = {};
    if (regenerateSection) {
      const currentContent = post.generatedContent || {};
      updatedContent = {
        ...currentContent,
        ...aiResult,
        generatedAt: new Date()
      };
    } else {
      updatedContent = {
        ...aiResult,
        generatedAt: new Date()
      };
    }

    const updatedPost = await manualPostService.updateManualPostById(postId, {
      generatedContent: updatedContent,
      status: 'generated'
    });

    logger.info(`[ContentAI] Saved Successfully`);

    res.status(200).json({
      success: true,
      generatedContent: updatedPost.generatedContent
    });

  } catch (error) {
    logger.error(`[ContentAI] Error during content generation: ${error.message}`);
    next(error);
  }
};
