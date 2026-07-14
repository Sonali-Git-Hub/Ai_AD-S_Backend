import express from 'express';
import * as campaignController from '../controllers/campaign.controller.js';
import { verifyToken } from '../middleware/authorization.js';
import { creditMiddleware } from '../middleware/creditSystem.js';

const router = express.Router();

// Apply authorization middleware to all campaign routes
router.use(verifyToken);

router.post('/create-campaign', campaignController.createCampaign);
router.post('/generate-dates', campaignController.generateDates);
router.get('/:campaignId', campaignController.getCampaign);
router.post('/post', campaignController.createCampaignPost);
router.put('/post/:id', campaignController.updateCampaignPost);
router.delete('/post/:id', campaignController.deleteCampaignPost);
router.post('/post/:id/generate', creditMiddleware, campaignController.generateSinglePost);
router.post('/generate-all', creditMiddleware, campaignController.generateAllPosts);
router.post('/regenerate-all', creditMiddleware, campaignController.regenerateAllPosts);
router.post('/export', campaignController.exportCampaign);

export default router;
