import express from 'express';
import multer from 'multer';
import { verifyToken } from '../middleware/authorization.js';
import {
  analyzeFromUrl,
  analyzeFromDocs,
  saveBrandDNA,
  getBrandDNA,
  getSection,
  updateSection,
  getSectionHistory,
  rollbackSection,
  regenerateSection,
  uploadBrandAsset,
  getBrandAssets,
  deleteBrandAsset
} from '../controllers/brandIntelligence.controller.js';
import {
  discoverAssets,
  saveDiscoveredAssets,
  getAllBrandAssets,
  deleteBrandAssetById
} from '../controllers/brandAssetAgent.controller.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 50 * 1024 * 1024 } });

// Analysis
router.post('/analyze-url',  verifyToken, analyzeFromUrl);
router.post('/analyze-docs', verifyToken, upload.array('files', 10), analyzeFromDocs);

// Parent CRUD
router.post('/save',          verifyToken, saveBrandDNA);
router.get('/:workspaceId',   verifyToken, getBrandDNA);

// Independent Section CRUD / Versioning APIs
router.get('/:workspaceId/section/:sectionName',          verifyToken, getSection);
router.put('/:workspaceId/section/:sectionName',          verifyToken, updateSection);
router.get('/:workspaceId/section/:sectionName/history',  verifyToken, getSectionHistory);
router.post('/:workspaceId/section/:sectionName/rollback/:version', verifyToken, rollbackSection);
router.post('/:workspaceId/section/:sectionName/regenerate', verifyToken, regenerateSection);

// ── Brand Intelligence Agent: Asset Auto-Discovery ───────────────────────────
router.post('/:workspaceId/assets/discover',        verifyToken, upload.array('files', 10), discoverAssets);
router.post('/:workspaceId/assets/save-discovered', verifyToken, saveDiscoveredAssets);
router.get('/:workspaceId/assets/all',              verifyToken, getAllBrandAssets);
router.delete('/:workspaceId/assets/by-id/:assetId', verifyToken, deleteBrandAssetById);

// Legacy Assets (file-upload based)
router.post('/assets/upload',                  verifyToken, upload.array('files', 20), uploadBrandAsset);
router.get('/assets/:workspaceId',             verifyToken, getBrandAssets);
router.delete('/assets/:workspaceId/:filename',verifyToken, deleteBrandAsset);

export default router;

