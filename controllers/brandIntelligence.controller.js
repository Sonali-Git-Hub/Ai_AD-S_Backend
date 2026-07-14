import {
  BrandProfile,
  BrandCompanyInformation,
  BrandIdentity,
  BrandPersonality,
  BrandVoice,
  BrandTargetAudience,
  BrandProducts,
  BrandKeywords,
  BrandContentStrategy,
  BrandCTA,
  BrandSocial,
  BrandCompetitors,
  BrandVisualIdentity,
  BrandSWOT,
  BrandPreferences
} from '../models/BrandProfile.js';
import * as brandService from '../services/brandIntelligence.service.js';
import * as brandProcessor from '../services/brandProcessor.service.js';
import { extractBrandMetadata } from '../utils/brandScraper.js';
import logger from '../utils/logger.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getOrCreateBrand = async (workspaceId) => {
  let brand = await BrandProfile.findOne({ workspaceId });
  if (!brand) {
    brand = new BrandProfile({ workspaceId });
    await brand.save();
  }
  return brand;
};

const getModelBySection = (sectionName) => {
  const map = {
    companyInfo:           BrandCompanyInformation,
    brandIdentity:         BrandIdentity,
    brandPersonality:      BrandPersonality,
    brandVoice:            BrandVoice,
    audienceProfile:       BrandTargetAudience,
    productsServices:      BrandProducts,
    seoKeywords:           BrandKeywords,
    contentStrategy:       BrandContentStrategy,
    ctaStrategy:           BrandCTA,
    socialRecommendation:  BrandSocial,
    competitorIntelligence:BrandCompetitors,
    visualIdentity:        BrandVisualIdentity,
    swotAnalysis:          BrandSWOT,
    contentPreferences:    BrandPreferences
  };
  return map[sectionName];
};

const saveSectionData = async (workspaceId, sectionName, data, updatedBy = 'system') => {
  const model = getModelBySection(sectionName);
  if (!model) return null;

  // Find the current active document to calculate version
  const current = await model.findOne({ workspaceId, isCurrent: true });
  const nextVersion = current ? (current.version + 1) : 1;

  // Deactivate previous active version
  if (current) {
    current.isCurrent = false;
    await current.save();
  }

  // Strip core meta fields from the raw data fields to avoid conflict during model creation
  const cleanData = { ...data };
  delete cleanData.workspaceId;
  delete cleanData.aiConfidence;
  delete cleanData.isApproved;
  delete cleanData.regeneratedAt;
  delete cleanData.updatedBy;
  delete cleanData.version;
  delete cleanData.isCurrent;
  delete cleanData.lastUpdated;
  delete cleanData._id;
  delete cleanData.__v;

  const newDoc = new model({
    workspaceId,
    ...cleanData,
    aiConfidence:   data.aiConfidence !== undefined ? Number(data.aiConfidence) : (current ? current.aiConfidence : 85),
    isApproved:     data.isApproved !== undefined ? Boolean(data.isApproved) : (current ? current.isApproved : false),
    regeneratedAt:  data.regeneratedAt || (current ? current.regeneratedAt : null),
    updatedBy:      updatedBy,
    version:        nextVersion,
    isCurrent:      true
  });

  await newDoc.save();
  return newDoc;
};

const syncSectionToParent = (brand, sectionName, savedDoc) => {
  if (!savedDoc) return;
  const data = savedDoc.toObject();
  
  // Clean auto-generated database keys to prevent validation/casting of immutable keys
  delete data._id;
  delete data.__v;
  delete data.createdAt;
  delete data.updatedAt;
  delete data.workspaceId;
  delete data.isCurrent;
  delete data.version;
  delete data.updatedBy;
  delete data.regeneratedAt;

  brand[sectionName] = {
    ...data,
    lastUpdated: new Date()
  };
};

// ─── ANALYZE FROM URL ─────────────────────────────────────────────────────────

export const analyzeFromUrl = async (req, res) => {
  try {
    const { url, workspaceId } = req.body;
    if (!url) return res.status(400).json({ success: false, error: 'URL is required' });

    console.log('[BrandIntelligence] Starting DEEP website analysis for:', url);

    let webData;
    try {
      webData = await extractBrandMetadata(url);
    } catch (scrapeErr) {
      console.error('[BrandIntelligence] Deep scrape failed:', scrapeErr.message);
      return res.status(400).json({
        success: false,
        error: 'Could not reach the website. Please check the URL and try again.'
      });
    }

    if (!webData || (!webData.siteContext && !webData.description)) {
      return res.status(400).json({
        success: false,
        error: 'Could not extract any content from the website. The site may be blocking crawlers or may be JavaScript-rendered only.'
      });
    }

    const rawText = `
SOURCE TYPE: Website Deep Crawl
WEBSITE URL: ${url}
DOMAIN: ${webData.domain || ''}
BRAND NAME: ${webData.brandName || ''}
INDUSTRY: ${webData.industry || ''}
DESCRIPTION: ${webData.description || ''}
TONE OF VOICE: ${webData.toneOfVoice || ''}
CTA STYLE: ${webData.ctaStyle || ''}
TARGET REGION: ${webData.targetRegion || ''}
BRAND COLORS: ${(webData.brandColors || []).join(', ')}
LOGO URL: ${webData.logoUrl || ''}
WEBSITE CONTENT:
${webData.siteContext || 'No detailed content extracted.'}
    `.trim();

    const { success, dna, error } = await brandService.extractFullBrandDNA(rawText, 'url', {
      brandName: webData.brandName,
      industry: webData.industry,
      description: webData.description,
      toneOfVoice: webData.toneOfVoice,
      ctaStyle: webData.ctaStyle,
      targetRegion: webData.targetRegion,
      brandColors: webData.brandColors,
      domain: webData.domain
    });

    if (!success) {
      return res.status(500).json({ success: false, error: error || 'AI extraction failed' });
    }

    // Merge meta information into brand schemas
    if (dna.companyInfo) {
      if (!dna.companyInfo.website) dna.companyInfo.website = url;
      if (!dna.companyInfo.brandName && webData.brandName) dna.companyInfo.brandName = webData.brandName;
      if (!dna.companyInfo.industry && webData.industry) dna.companyInfo.industry = webData.industry;
      if (!dna.companyInfo.description && webData.description) dna.companyInfo.description = webData.description;
    }
    if (dna.visualIdentity) {
      if ((!dna.visualIdentity.brandColors || dna.visualIdentity.brandColors.length === 0) && webData.brandColors?.length) {
        dna.visualIdentity.brandColors = webData.brandColors;
      }
    }
    if (dna.brandVoice) {
      if (!dna.brandVoice.toneOfVoice && webData.toneOfVoice) dna.brandVoice.toneOfVoice = webData.toneOfVoice;
      if (!dna.brandVoice.ctaStyle && webData.ctaStyle) dna.brandVoice.ctaStyle = webData.ctaStyle;
    }

    return res.json({
      success: true,
      dna,
      logoUrl: webData.logoUrl || webData.faviconUrl || null,
      rawKnowledgeBase: rawText
    });
  } catch (err) {
    logger.error('[BrandIntelligence] analyzeFromUrl error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── ANALYZE FROM DOCUMENTS ───────────────────────────────────────────────────

export const analyzeFromDocs = async (req, res) => {
  try {
    const files = req.files || [];
    const { workspaceId } = req.body;

    if (files.length === 0) return res.status(400).json({ success: false, error: 'No files uploaded' });

    let allText = '';
    for (const file of files) {
      const text = await brandProcessor.parseBrandDocument(file.buffer, file.mimetype);
      if (text) {
        allText += `\n══ FILE: ${file.originalname} ══\n${text}\n───────────────────\n`;
      }
    }

    if (!allText.trim()) return res.status(400).json({ success: false, error: 'Could not extract text from the uploaded files.' });

    const { success, dna, error } = await brandService.extractFullBrandDNA(allText, 'document');
    if (!success) return res.status(500).json({ success: false, error: error || 'AI extraction failed' });

    return res.json({ success: true, dna, rawKnowledgeBase: allText });
  } catch (err) {
    logger.error('[BrandIntelligence] analyzeFromDocs error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── SAVE BRAND DNA (Multiple Sections) ───────────────────────────────────────

export const saveBrandDNA = async (req, res) => {
  try {
    const { workspaceId, dna, logoUrl, rawKnowledgeBase, sourceType, completed } = req.body;
    if (!workspaceId) return res.status(400).json({ success: false, error: 'workspaceId required' });

    const brand = await getOrCreateBrand(workspaceId);
    const updatedBy = req.user?.email || 'system';

    const sections = [
      'companyInfo', 'brandIdentity', 'brandPersonality', 'brandVoice',
      'audienceProfile', 'productsServices', 'seoKeywords', 'contentStrategy',
      'ctaStrategy', 'socialRecommendation', 'competitorIntelligence',
      'visualIdentity', 'swotAnalysis', 'contentPreferences'
    ];

    for (const section of sections) {
      if (dna && dna[section]) {
        // Save to normalized independent table/collection
        const savedDoc = await saveSectionData(workspaceId, section, dna[section], updatedBy);
        
        // Sync to parent BrandProfile document (for backwards compatibility cache)
        if (savedDoc) {
          syncSectionToParent(brand, section, savedDoc);
        }
      }
    }

    // Sync legacy fields
    const brandName = dna?.companyInfo?.brandName;
    if (brandName)  brand.companyName  = brandName;
    if (dna?.companyInfo?.website)    brand.website      = dna.companyInfo.website;
    if (dna?.brandVoice?.toneOfVoice) brand.toneOfVoice  = dna.brandVoice.toneOfVoice;
    if (dna?.visualIdentity?.brandColors?.length) brand.brandColors = dna.visualIdentity.brandColors;
    if (logoUrl) brand.logoUrl = logoUrl;

    brand.dnaStatus        = 'draft';
    brand.dnaGeneratedAt   = new Date();
    brand.sourceType       = sourceType || 'mixed';
    if (rawKnowledgeBase)  brand.rawKnowledgeBase = rawKnowledgeBase;

    await brand.save();

    // ── Keep SocialAgentWorkspace in sync with brand name & last access ──────
    // This is critical for Brand History — getAllWorkspaces uses workspaceName for display
    const { default: SocialAgentWorkspace } = await import('../models/SocialAgentWorkspace.js');
    const wsUpdate = { lastAccessedAt: new Date() };
    if (brandName) wsUpdate.workspaceName = brandName;
    if (logoUrl) wsUpdate.logoUrl = logoUrl;  // some workspaces carry a top-level logoUrl
    if (completed) {
      wsUpdate['onboarding.completed'] = true;
    }
    await SocialAgentWorkspace.findByIdAndUpdate(workspaceId, { $set: wsUpdate }).catch(() => {});


    // Prepare response showing active versions from normalized tables
    const brandObj = brand.toObject();
    for (const section of sections) {
      const activeDoc = await getModelBySection(section).findOne({ workspaceId, isCurrent: true });
      if (activeDoc) brandObj[section] = activeDoc.toObject();
    }

    return res.json({ success: true, brand: brandObj });
  } catch (err) {
    logger.error('[BrandIntelligence] saveBrandDNA error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET BRAND DNA ────────────────────────────────────────────────────────────

export const getBrandDNA = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    let brand = await BrandProfile.findOne({ workspaceId });
    if (!brand) {
      brand = new BrandProfile({ workspaceId });
      await brand.save();
    }

    const sections = [
      'companyInfo', 'brandIdentity', 'brandPersonality', 'brandVoice',
      'audienceProfile', 'productsServices', 'seoKeywords', 'contentStrategy',
      'ctaStrategy', 'socialRecommendation', 'competitorIntelligence',
      'visualIdentity', 'swotAnalysis', 'contentPreferences'
    ];

    // Fetch the active version for each section
    const fullDNA = {};
    for (const section of sections) {
      const model = getModelBySection(section);
      if (model) {
        const activeDoc = await model.findOne({ workspaceId, isCurrent: true });
        if (activeDoc) {
          fullDNA[section] = activeDoc.toObject();
        } else {
          fullDNA[section] = brand[section] || {};
        }
      }
    }

    // Merge active section contents into the returned brand object
    const brandObj = brand.toObject();
    for (const section of sections) {
      brandObj[section] = fullDNA[section];
    }

    return res.json({ success: true, brand: brandObj });
  } catch (err) {
    logger.error('[BrandIntelligence] getBrandDNA error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET SINGLE SECTION ───────────────────────────────────────────────────────

export const getSection = async (req, res) => {
  try {
    const { workspaceId, sectionName } = req.params;
    const model = getModelBySection(sectionName);
    if (!model) return res.status(400).json({ success: false, error: `Invalid section name: ${sectionName}` });

    const activeDoc = await model.findOne({ workspaceId, isCurrent: true });
    return res.json({ success: true, section: activeDoc || null });
  } catch (err) {
    logger.error('[BrandIntelligence] getSection error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── UPDATE SINGLE SECTION (Create New Version) ──────────────────────────────

export const updateSection = async (req, res) => {
  try {
    const { workspaceId, sectionName } = req.params;
    const { data } = req.body;

    const brand = await getOrCreateBrand(workspaceId);
    const updatedBy = req.user?.email || 'user';

    // 1. Save new version in the normalized collection
    const savedDoc = await saveSectionData(workspaceId, sectionName, data, updatedBy);
    if (!savedDoc) return res.status(400).json({ success: false, error: `Invalid section name: ${sectionName}` });

    // 2. Sync to parent legacy BrandProfile document
    syncSectionToParent(brand, sectionName, savedDoc);
    await brand.save();

    return res.json({ success: true, section: savedDoc.toObject() });
  } catch (err) {
    logger.error('[BrandIntelligence] updateSection error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET SECTION VERSION HISTORY ──────────────────────────────────────────────

export const getSectionHistory = async (req, res) => {
  try {
    const { workspaceId, sectionName } = req.params;
    const model = getModelBySection(sectionName);
    if (!model) return res.status(400).json({ success: false, error: `Invalid section name: ${sectionName}` });

    const history = await model.find({ workspaceId }).sort({ version: -1 });
    return res.json({ success: true, history });
  } catch (err) {
    logger.error('[BrandIntelligence] getSectionHistory error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── ROLLBACK SECTION TO VERSION ─────────────────────────────────────────────

export const rollbackSection = async (req, res) => {
  try {
    const { workspaceId, sectionName, version } = req.params;
    const model = getModelBySection(sectionName);
    if (!model) return res.status(400).json({ success: false, error: `Invalid section name: ${sectionName}` });

    const targetVersion = Number(version);
    const targetDoc = await model.findOne({ workspaceId, version: targetVersion });
    if (!targetDoc) return res.status(404).json({ success: false, error: `Version ${version} not found` });

    // Mark current active as not current
    await model.updateMany({ workspaceId, isCurrent: true }, { isCurrent: false });

    // Mark target as current
    targetDoc.isCurrent = true;
    targetDoc.updatedBy = req.user?.email || 'system-rollback';
    targetDoc.regeneratedAt = new Date();
    await targetDoc.save();

    // Sync to parent BrandProfile
    const brand = await getOrCreateBrand(workspaceId);
    syncSectionToParent(brand, sectionName, targetDoc);
    await brand.save();

    return res.json({ success: true, section: targetDoc.toObject() });
  } catch (err) {
    logger.error('[BrandIntelligence] rollbackSection error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── REGENERATE SINGLE SECTION ────────────────────────────────────────────────

export const regenerateSection = async (req, res) => {
  try {
    const { workspaceId, sectionName } = req.params;
    const brand = await BrandProfile.findOne({ workspaceId });
    if (!brand) return res.status(404).json({ success: false, error: 'Brand not found' });

    const { success, sectionData, error } = await brandService.regenerateSection(
      sectionName,
      brand.toObject(),
      brand.rawKnowledgeBase || ''
    );

    if (!success) return res.status(500).json({ success: false, error });

    const updatedBy = 'AI';
    const savedDoc = await saveSectionData(workspaceId, sectionName, {
      ...sectionData,
      regeneratedAt: new Date()
    }, updatedBy);

    // Sync to parent legacy BrandProfile document
    syncSectionToParent(brand, sectionName, savedDoc);
    await brand.save();

    return res.json({ success: true, section: savedDoc.toObject() });
  } catch (err) {
    logger.error('[BrandIntelligence] regenerateSection error stack: ' + (err.stack || err));
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── UPLOAD BRAND ASSET ───────────────────────────────────────────────────────

export const uploadBrandAsset = async (req, res) => {
  try {
    const files = req.files || (req.file ? [req.file] : []);
    const { workspaceId, category } = req.body;

    if (files.length === 0) return res.status(400).json({ success: false, error: 'No file uploaded' });

    const uploadDir = path.join(__dirname, '..', 'public', 'brand-assets', workspaceId);
    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

    const savedFiles = [];
    for (const file of files) {
      const ext = path.extname(file.originalname);
      const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`;
      const filePath = path.join(uploadDir, filename);
      fs.writeFileSync(filePath, file.buffer);
      savedFiles.push({
        filename,
        originalName: file.originalname,
        mimetype: file.mimetype,
        size: file.size,
        category: category || 'general',
        url: `/brand-assets/${workspaceId}/${filename}`
      });
    }

    return res.json({ success: true, assets: savedFiles });
  } catch (err) {
    logger.error('[BrandIntelligence] uploadBrandAsset error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET BRAND ASSETS ─────────────────────────────────────────────────────────

export const getBrandAssets = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const assetDir = path.join(__dirname, '..', 'public', 'brand-assets', workspaceId);

    if (!fs.existsSync(assetDir)) return res.json({ success: true, assets: [] });

    const files = fs.readdirSync(assetDir).map(filename => ({
      filename,
      url: `/brand-assets/${workspaceId}/${filename}`,
      mimetype: getMimeType(filename)
    }));

    return res.json({ success: true, assets: files });
  } catch (err) {
    logger.error('[BrandIntelligence] getBrandAssets error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── DELETE BRAND ASSET ───────────────────────────────────────────────────────

export const deleteBrandAsset = async (req, res) => {
  try {
    const { workspaceId, filename } = req.params;
    const filePath = path.join(__dirname, '..', 'public', 'brand-assets', workspaceId, filename);

    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);

    return res.json({ success: true });
  } catch (err) {
    logger.error('[BrandIntelligence] deleteBrandAsset error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── Helpers ──────────────────────────────────────────────────────────────────

const getMimeType = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  const map = { '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.pdf': 'application/pdf', '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation', '.ttf': 'font/ttf', '.otf': 'font/otf', '.woff': 'font/woff', '.woff2': 'font/woff2' };
  return map[ext] || 'application/octet-stream';
};
