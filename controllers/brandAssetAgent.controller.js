import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { discoverBrandAssets } from '../utils/brandScraper.js';
import { BrandProfile } from '../models/BrandProfile.js';
import UploadAsset from '../models/UploadAsset.js';
import * as brandProcessor from '../services/brandProcessor.service.js';
import { AskVertexRaw } from '../services/vertex.service.js';
import logger from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Helper to get mime type for manual document parsing
const getMimeType = (filename) => {
  const ext = path.extname(filename).toLowerCase();
  const map = {
    '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.gif': 'image/gif', '.webp': 'image/webp', '.svg': 'image/svg+xml',
    '.mp4': 'video/mp4', '.mov': 'video/quicktime', '.pdf': 'application/pdf',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.txt': 'text/plain'
  };
  return map[ext] || 'application/octet-stream';
};

// ─── DISCOVER BRAND ASSETS FROM MULTIPLE SOURCES (INTELLIGENT AGENT) ─────────

export const discoverAssets = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const { url } = req.body;

    console.log(`[AssetAgent] Building comprehensive asset library for workspace ${workspaceId}...`);

    // 1. Fetch Brand Setup Profile Information
    const brand = await BrandProfile.findOne({ workspaceId });
    const targetUrl = url?.trim() || brand?.website?.trim();

    // 2. Parse any document files uploaded in the request (e.g. from Setup tab onboarding)
    let manualDocsText = '';
    const reqFiles = req.files || [];
    for (const file of reqFiles) {
      try {
        const text = await brandProcessor.parseBrandDocument(file.buffer, file.mimetype);
        if (text) {
          manualDocsText += `\n══ FILE: ${file.originalname} ══\n${text}\n───────────────────\n`;
        }
        
        // Save the setup file to public/brand-assets/:workspaceId so it's persisted in the library
        const uploadDir = path.join(process.cwd(), 'public', 'brand-assets', workspaceId);
        if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
        const ext = path.extname(file.originalname);
        const filename = `${Date.now()}-${Math.random().toString(36).substring(7)}${ext}`;
        const filePath = path.join(uploadDir, filename);
        fs.writeFileSync(filePath, file.buffer);
        
        // Register in UploadAsset model so the frontend sees it in the Brand Memory list
        await UploadAsset.findOneAndUpdate(
          { workspaceId, fileName: file.originalname },
          { workspaceId, assetType: 'document', fileName: file.originalname, gcsUrl: `/brand-assets/${workspaceId}/${filename}`, mimeType: file.mimetype, meta: { confidence: 100, source: 'Uploaded in Brand Setup' } },
          { upsert: true, new: true }
        );
      } catch (err) {
        console.warn(`[AssetAgent] Failed parsing request file ${file.originalname}:`, err.message);
      }
    }

    // 3. Scan Uploaded Brand Documents and Files (Manual Upload Library)
    const assetDir = path.join(process.cwd(), 'public', 'brand-assets', workspaceId);
    const manualImages = [];
    const manualLogos = [];
    const manualVideos = [];

    if (fs.existsSync(assetDir)) {
      const files = fs.readdirSync(assetDir);
      for (const filename of files) {
        const filePath = path.join(assetDir, filename);
        const ext = path.extname(filename).toLowerCase();
        const assetUrl = `/brand-assets/${workspaceId}/${filename}`;
        
        // PDF, Word, PowerPoint, Text parsing
        if (['.pdf', '.docx', '.doc', '.pptx', '.ppt', '.xlsx', '.xls', '.txt'].includes(ext)) {
          try {
            const buffer = fs.readFileSync(filePath);
            const mimeType = getMimeType(filename);
            const text = await brandProcessor.parseBrandDocument(buffer, mimeType);
            if (text) {
              manualDocsText += `\n══ FILE: ${filename} ══\n${text}\n───────────────────\n`;
            }
          } catch (err) {
            console.warn(`[AssetAgent] Failed parsing manual document ${filename}:`, err.message);
          }
        } else if (['.png', '.jpg', '.jpeg', '.svg', '.webp', '.gif'].includes(ext)) {
          if (filename.toLowerCase().includes('logo')) {
            manualLogos.push({ url: assetUrl, filename });
          } else {
            manualImages.push({ url: assetUrl, filename });
          }
        } else if (['.mp4', '.mov', '.avi', '.webm'].includes(ext)) {
          manualVideos.push({ url: assetUrl, filename });
        }
      }
    }

    // 3. Scrape official website
    let scrapedData = null;
    if (targetUrl) {
      try {
        console.log(`[AssetAgent] Scraping website: ${targetUrl}`);
        scrapedData = await discoverBrandAssets(targetUrl);
      } catch (err) {
        console.warn(`[AssetAgent] Scraper failed for ${targetUrl}:`, err.message);
      }
    }

    // 4. Construct Prompt for Vertex AI
    const aiPrompt = `
You are the Brand Intelligence Agent for AISA, responsible for automatically building a complete Brand Asset Library.

Here is the collected raw data from the following inputs:
1. UPLOADED BRAND DOCUMENTS (Extracted Text Content):
${manualDocsText || "(No brand documents uploaded)"}

2. OFFICIAL WEBSITE SCRAWLED DATA:
${scrapedData ? JSON.stringify(scrapedData, null, 2) : "(Failed to scrape or no website URL provided)"}

3. UPLOADED IMAGES:
${JSON.stringify(manualImages)}

4. UPLOADED LOGO:
${JSON.stringify(manualLogos)}

5. BRAND SETUP PROFILE INFO:
Brand Name: ${brand?.companyName || ""}
Brand Description: ${brand?.companyOverviewText || ""}
Social Links from Profile: ${JSON.stringify(brand?.socialMediaLinks || {})}

--------------------------------------------------------
OBJECTIVE
--------------------------------------------------------
Synthesize this raw data and return a structured JSON brand asset library matching the OUTPUT schema exactly.

--------------------------------------------------------
RULES & CONSTRAINTS
--------------------------------------------------------
1. SOURCE PRIORITY: Always prioritize sources in this order:
   - Uploaded Brand Documents > Official Website > Uploaded Images > Uploaded Logo > Social Media Profiles.
   - If an uploaded file contains better or conflicting information than the website, always prefer the uploaded file.

2. LOGO EXTRACTION:
   - If a logo is already uploaded (in UPLOADED LOGO above), use it as the primary.
   - Otherwise, search and match logo URLs found from the official website.
   - For all logo types (primary, dark, light, transparent), favicon, and appIcon, measure/estimate and return:
     - "resolution": e.g., "512x512", "1200x300", or "Unknown"
     - "background": e.g., "Transparent", "White", "Dark"
     - "quality": e.g., "High", "Medium", "Low"
     - "confidence": confidence score (0 to 100)
     - "source": where it was extracted (e.g. "Uploaded Brand Guide", "Website Header", "Favicon")
   - Do NOT invent URLs or fabricate logo paths. If not found, do not set them.

3. COLOR EXTRACTION:
   - Extract colors from the logo, website CSS, brand documents, and uploaded images.
   - Map them to the roles: primary, secondary, accent, background, surface, text, border, success, warning, error, muted.
   - Return HEX codes only. Include confidence score (0 to 100) and source for each.

4. TYPOGRAPHY:
   - Extract fonts from the website CSS, PDF brand guide text, presentations, or uploaded images.
   - Map them to: headingFont, bodyFont, primaryFont, secondaryFont.
   - Include weights (array of strings, e.g. ["400", "700"]), and whether it is a Google Font (boolean).

5. BRAND IMAGES & VIDEOS:
   - Automatically collect image URLs and video URLs.
   - Categorize images: Hero, Product, Office, Team, Portfolio, Screenshots, Marketing Visuals. Ignore decorative graphics.
   - Locate and categorize videos: Website Videos, Embedded Videos, YouTube, Vimeo, Product Videos, Explainers.

6. DOCUMENT ANALYSIS:
   - Summarize the contents of the uploaded brand documents. Extract mission, vision, tagline, brand voice, photography style, illustration style, icon style, marketing tone.

7. SOCIAL MEDIA:
   - Analyze profiles, profile pictures, cover images, recent branding themes.

8. BRAND DNA:
   - Infer: brand personality, brand voice, communication style, visual identity, target audience, writing style, design style.

9. MISSING ASSETS & AI SUGGESTIONS:
   - If a core logo or color/font is missing or not extracted, add it to "missingAssets".
   - Generate AI recommendations in "aiSuggestions" for suggested colors, fonts, photography style, icon style, and brand style. Label all suggestions with "AI Suggested".

--------------------------------------------------------
OUTPUT FORMAT
--------------------------------------------------------
Return ONLY valid JSON matching this schema:
{
  "logo": {
    "primary": { "url": "string", "resolution": "string", "background": "string", "quality": "string", "confidence": 95, "source": "string" },
    "dark": { "url": "string", "resolution": "string", "background": "string", "quality": "string", "confidence": 95, "source": "string" },
    "light": { "url": "string", "resolution": "string", "background": "string", "quality": "string", "confidence": 95, "source": "string" },
    "transparent": { "url": "string", "resolution": "string", "background": "string", "quality": "string", "confidence": 95, "source": "string" },
    "favicon": { "url": "string", "confidence": 95, "source": "string" },
    "appIcon": { "url": "string", "confidence": 95, "source": "string" }
  },
  "colors": {
    "primary": { "hex": "string", "confidence": 95, "source": "string" },
    "secondary": { "hex": "string", "confidence": 95, "source": "string" },
    "accent": { "hex": "string", "confidence": 95, "source": "string" },
    "background": { "hex": "string", "confidence": 95, "source": "string" },
    "surface": { "hex": "string", "confidence": 95, "source": "string" },
    "text": { "hex": "string", "confidence": 95, "source": "string" },
    "border": { "hex": "string", "confidence": 95, "source": "string" },
    "success": { "hex": "string", "confidence": 95, "source": "string" },
    "warning": { "hex": "string", "confidence": 95, "source": "string" },
    "error": { "hex": "string", "confidence": 95, "source": "string" },
    "muted": { "hex": "string", "confidence": 95, "source": "string" }
  },
  "typography": {
    "headingFont": { "name": "string", "weights": ["string"], "isGoogleFont": true, "confidence": 95, "source": "string" },
    "bodyFont": { "name": "string", "weights": ["string"], "isGoogleFont": true, "confidence": 95, "source": "string" },
    "primaryFont": { "name": "string", "weights": ["string"], "isGoogleFont": true, "confidence": 95, "source": "string" },
    "secondaryFont": { "name": "string", "weights": ["string"], "isGoogleFont": true, "confidence": 95, "source": "string" }
  },
  "images": [
    { "url": "string", "category": "string", "confidence": 90, "source": "string" }
  ],
  "videos": [
    { "url": "string", "platform": "string", "category": "string", "confidence": 90, "source": "string" }
  ],
  "documentAnalysis": {
    "extractedTextSummary": "string",
    "logo": "string",
    "colors": ["string"],
    "typography": ["string"],
    "brandVoice": "string",
    "mission": "string",
    "vision": "string",
    "tagline": "string",
    "photographyStyle": "string",
    "illustrationStyle": "string",
    "iconStyle": "string",
    "marketingTone": "string"
  },
  "brandVoice": {
    "tone": "string",
    "personality": "string",
    "tagline": "string",
    "communicationStyle": "string"
  },
  "brandDNA": {
    "targetAudience": "string",
    "writingStyle": "string",
    "designStyle": "string",
    "visualIdentity": "string"
  },
  "socialMedia": {
    "profiles": [
      { "platform": "string", "url": "string", "confidence": 95, "source": "string" }
    ],
    "analysis": {
      "brandColors": ["string"],
      "coverImages": ["string"],
      "recentBranding": "string"
    }
  },
  "missingAssets": ["string"],
  "aiSuggestions": {
    "colors": {
      "primary": "string",
      "secondary": "string",
      "accent": "string"
    },
    "fonts": {
      "heading": "string",
      "body": "string"
    },
    "photographyStyle": "string",
    "icons": "string",
    "brandStyle": "string"
  }
}

Do NOT output markdown wrappers or code blocks. Just return raw JSON.
`;

    const aiRes = await AskVertexRaw(aiPrompt, { modelOverride: 'gemini-2.5-flash' });
    const cleanJsonText = aiRes.trim().replace(new RegExp("```json", "g"), "").replace(new RegExp("```", "g"), "");
    const structured = JSON.parse(cleanJsonText);

    // 5. Transform structured data back to arrays for UI compatibility
    const logos = [];
    if (structured.logo?.primary?.url) {
      logos.push({
        url: structured.logo.primary.url,
        label: 'Primary Logo',
        confidence: structured.logo.primary.confidence || 95,
        source: structured.logo.primary.source || 'Auto',
        resolution: structured.logo.primary.resolution,
        background: structured.logo.primary.background,
        quality: structured.logo.primary.quality
      });
    }
    if (structured.logo?.dark?.url) {
      logos.push({
        url: structured.logo.dark.url,
        label: 'Dark Logo',
        confidence: structured.logo.dark.confidence || 95,
        source: structured.logo.dark.source || 'Auto',
        resolution: structured.logo.dark.resolution,
        background: structured.logo.dark.background,
        quality: structured.logo.dark.quality
      });
    }
    if (structured.logo?.light?.url) {
      logos.push({
        url: structured.logo.light.url,
        label: 'Light Logo',
        confidence: structured.logo.light.confidence || 95,
        source: structured.logo.light.source || 'Auto',
        resolution: structured.logo.light.resolution,
        background: structured.logo.light.background,
        quality: structured.logo.light.quality
      });
    }
    if (structured.logo?.transparent?.url) {
      logos.push({
        url: structured.logo.transparent.url,
        label: 'Transparent Logo',
        confidence: structured.logo.transparent.confidence || 95,
        source: structured.logo.transparent.source || 'Auto',
        resolution: structured.logo.transparent.resolution,
        background: structured.logo.transparent.background,
        quality: structured.logo.transparent.quality
      });
    }

    const favicon = structured.logo?.favicon?.url ? {
      url: structured.logo.favicon.url,
      confidence: structured.logo.favicon.confidence || 95,
      source: structured.logo.favicon.source || 'Auto',
      label: 'Favicon'
    } : (scrapedData?.favicon || null);

    const colors = Object.entries(structured.colors || {}).map(([key, val]) => {
      if (!val) return null;
      const hex = typeof val === 'object' ? val.hex : (typeof val === 'string' ? val : null);
      if (!hex) return null;
      return {
        hex: hex,
        label: key.charAt(0).toUpperCase() + key.slice(1) + ' Color',
        confidence: typeof val === 'object' ? (val.confidence || 95) : 95,
        source: typeof val === 'object' ? (val.source || 'Auto') : 'Auto'
      };
    }).filter(c => c !== null && c.hex);

    const fonts = Object.entries(structured.typography || {}).map(([key, val]) => {
      if (!val) return null;
      const name = typeof val === 'object' ? val.name : (typeof val === 'string' ? val : null);
      if (!name) return null;
      return {
        name: name,
        weights: typeof val === 'object' ? val.weights : [],
        isGoogleFont: typeof val === 'object' ? val.isGoogleFont : false,
        confidence: typeof val === 'object' ? (val.confidence || 95) : 95,
        source: typeof val === 'object' ? (val.source || 'Auto') : 'Auto'
      };
    }).filter(f => f !== null && f.name);

    const images = (structured.images || []).map(img => {
      if (!img) return null;
      return {
        url: img.url || (typeof img === 'string' ? img : ''),
        label: (img.category || 'Brand') + ' Image',
        confidence: img.confidence || 90,
        source: img.source || 'Auto'
      };
    }).filter(img => img && img.url);

    const socialProfiles = (structured.socialMedia?.profiles || []).map(p => {
      if (!p) return null;
      return {
        platform: p.platform || '',
        url: p.url || '',
        confidence: p.confidence || 95,
        source: p.source || 'Auto'
      };
    }).filter(p => p && (p.platform || p.url));

    const documents = scrapedData?.documents || [];

    const responseData = {
      ...structured,
      logos,
      favicon,
      colors,
      fonts,
      images,
      socialProfiles,
      documents
    };

    return res.json({ success: true, discovered: responseData });
  } catch (err) {
    logger.error('[AssetAgent] discoverAssets error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── SAVE APPROVED DISCOVERED ASSETS ────────────────────────────────────────

export const saveDiscoveredAssets = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const { approvedAssets } = req.body;

    if (!approvedAssets || !Array.isArray(approvedAssets)) {
      return res.status(400).json({ success: false, error: 'approvedAssets array is required.' });
    }

    let savedCount = 0;

    for (const asset of approvedAssets) {
      const { category, url, label, confidence, source, hex, name, platform, type } = asset;

      if (category === 'color') {
        await UploadAsset.findOneAndUpdate(
          { workspaceId, assetType: 'color', 'meta.hex': hex },
          { workspaceId, assetType: 'color', fileName: label || hex, mimeType: 'color/hex',
            meta: { hex, confidence, source }, isDiscovered: true, isApproved: true },
          { upsert: true, new: true }
        );
        // Sync color to BrandProfile
        const brand = await BrandProfile.findOne({ workspaceId });
        if (brand) {
          if (!brand.brandColors) brand.brandColors = [];
          if (!brand.brandColors.includes(hex)) { brand.brandColors.push(hex); await brand.save(); }
        }
        savedCount++;
        continue;
      }

      if (category === 'font') {
        await UploadAsset.findOneAndUpdate(
          { workspaceId, assetType: 'font', fileName: name },
          { workspaceId, assetType: 'font', fileName: name, gcsUrl: url || null,
            mimeType: 'font/family', meta: { name, confidence, source }, isDiscovered: true, isApproved: true },
          { upsert: true, new: true }
        );
        savedCount++;
        continue;
      }

      if (category === 'social') {
        await UploadAsset.findOneAndUpdate(
          { workspaceId, assetType: 'social', 'meta.platform': platform },
          { workspaceId, assetType: 'social', fileName: platform, gcsUrl: url,
            mimeType: 'social/profile', meta: { platform, url, confidence, source }, isDiscovered: true, isApproved: true },
          { upsert: true, new: true }
        );
        savedCount++;
        continue;
      }

      if (category === 'document') {
        await UploadAsset.findOneAndUpdate(
          { workspaceId, assetType: 'document', gcsUrl: url },
          { workspaceId, assetType: 'document', fileName: label || name || 'Document', gcsUrl: url,
            mimeType: `application/${(type || 'pdf').toLowerCase()}`,
            meta: { type, confidence, source }, isDiscovered: true, isApproved: true },
          { upsert: true, new: true }
        );
        savedCount++;
        continue;
      }

      // logo, favicon, image
      const assetTypeMap = { logo: 'logo', favicon: 'favicon', image: 'image' };
      const mimeGuess = url?.match(/\.svg$/i) ? 'image/svg+xml'
        : url?.match(/\.png$/i) ? 'image/png'
        : url?.match(/\.jpe?g$/i) ? 'image/jpeg'
        : url?.match(/\.gif$/i) ? 'image/gif'
        : url?.match(/\.webp$/i) ? 'image/webp' : 'image/unknown';

      await UploadAsset.findOneAndUpdate(
        { workspaceId, gcsUrl: url },
        { workspaceId, assetType: assetTypeMap[category] || 'image',
          fileName: label || url?.split('/').pop() || 'Asset', gcsUrl: url,
          mimeType: mimeGuess, meta: { confidence, source, label }, isDiscovered: true, isApproved: true },
        { upsert: true, new: true }
      );
      savedCount++;

      // Sync logo to BrandProfile
      if (category === 'logo') {
        await BrandProfile.findOneAndUpdate({ workspaceId }, { logoUrl: url }, { upsert: false });
      }
    }

    console.log(`[AssetAgent] Saved ${savedCount} approved assets for workspace ${workspaceId}`);
    return res.json({ success: true, saved: savedCount });
  } catch (err) {
    logger.error('[AssetAgent] saveDiscoveredAssets error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── GET ALL BRAND ASSETS ────────────────────────────────────────────────────

export const getAllBrandAssets = async (req, res) => {
  try {
    const { workspaceId } = req.params;
    const assets = await UploadAsset.find({ workspaceId }).sort({ createdAt: -1 }).lean();
    return res.json({ success: true, assets });
  } catch (err) {
    logger.error('[AssetAgent] getAllBrandAssets error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};

// ─── DELETE BRAND ASSET BY ID ────────────────────────────────────────────────

export const deleteBrandAssetById = async (req, res) => {
  try {
    const { workspaceId, assetId } = req.params;
    await UploadAsset.findOneAndDelete({ _id: assetId, workspaceId });
    return res.json({ success: true });
  } catch (err) {
    logger.error('[AssetAgent] deleteBrandAssetById error:', err.message);
    return res.status(500).json({ success: false, error: err.message });
  }
};
