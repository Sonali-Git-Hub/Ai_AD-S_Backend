import express from 'express';
import * as manualPostController from '../controllers/manualPost.controller.js';
import uploadMiddleware from '../middleware/upload.middleware.js';

const router = express.Router();

router.post('/create', uploadMiddleware, manualPostController.createManualPost);
router.get('/:id', manualPostController.getManualPost);
router.put('/:id', manualPostController.updateManualPost);
router.delete('/:id', manualPostController.deleteManualPost);
router.post('/analyze-image', manualPostController.analyzeImage);
router.post('/generate-content', manualPostController.generateContent);
export default router;
