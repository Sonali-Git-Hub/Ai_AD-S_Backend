import mongoose from 'mongoose';
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
import logger from '../utils/logger.js';

export const getBrandMemoryContext = async (workspaceId) => {
  if (!workspaceId) return '';
  try {
    const sections = {
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

    const dna = {};
    for (const [key, model] of Object.entries(sections)) {
      const activeDoc = await model.findOne({ workspaceId, isCurrent: true });
      if (activeDoc) {
        dna[key] = activeDoc.toObject();
      }
    }

    // Fallback to root BrandProfile document
    const rootBrand = await BrandProfile.findOne({ workspaceId });
    if (!rootBrand) return '';

    // Merge root brand fields for any missing section
    for (const key of Object.keys(sections)) {
      if (!dna[key] && rootBrand[key]) {
        dna[key] = rootBrand[key].toObject ? rootBrand[key].toObject() : rootBrand[key];
      }
    }

    // Build the formatted prompt context string
    let brandContext = `\n### CENTRALIZED BRAND DNA KNOWLEDGE (BRAND MEMORY):\n`;
    
    if (dna.companyInfo) {
      brandContext += `- **Company Info**: Name: ${dna.companyInfo.brandName || ''}, Tagline: ${dna.companyInfo.tagline || ''}, Website: ${dna.companyInfo.website || ''}, Industry: ${dna.companyInfo.industry || ''}, Business Type: ${dna.companyInfo.businessType || ''}, Description: ${dna.companyInfo.description || ''}\n`;
    }
    if (dna.brandIdentity) {
      brandContext += `- **Brand Identity**: Mission: ${dna.brandIdentity.mission || ''}, Vision: ${dna.brandIdentity.vision || ''}, Core Values: ${Array.isArray(dna.brandIdentity.coreValues) ? dna.brandIdentity.coreValues.join(', ') : ''}, USP: ${dna.brandIdentity.usp || ''}, competitiveAdvantage: ${dna.brandIdentity.competitiveAdvantage || ''}, positioning: ${dna.brandIdentity.brandPositioning || ''}\n`;
    }
    if (dna.brandPersonality) {
      brandContext += `- **Brand Personality**: Traits: ${Array.isArray(dna.brandPersonality.traits) ? dna.brandPersonality.traits.join(', ') : ''}\n`;
    }
    if (dna.brandVoice) {
      brandContext += `- **Brand Voice & Tone**: Style: ${dna.brandVoice.communicationStyle || ''}, Writing Style: ${dna.brandVoice.writingStyle || ''}, Tone: ${dna.brandVoice.toneOfVoice || ''}, Vocabulary: ${dna.brandVoice.vocabularyStyle || ''}, CTA Style: ${dna.brandVoice.ctaStyle || ''}, Emojis: ${dna.brandVoice.emojiUsage || ''}\n`;
    }
    if (dna.audienceProfile) {
      brandContext += `- **Target Audience**: Age Groups: ${Array.isArray(dna.audienceProfile.ageGroups) ? dna.audienceProfile.ageGroups.join(', ') : ''}, Genders: ${Array.isArray(dna.audienceProfile.gender) ? dna.audienceProfile.gender.join(', ') : ''}, Industries: ${Array.isArray(dna.audienceProfile.industry) ? dna.audienceProfile.industry.join(', ') : ''}, Professions: ${Array.isArray(dna.audienceProfile.profession) ? dna.audienceProfile.profession.join(', ') : ''}, Locations: ${Array.isArray(dna.audienceProfile.location) ? dna.audienceProfile.location.join(', ') : ''}, Pain Points: ${Array.isArray(dna.audienceProfile.painPoints) ? dna.audienceProfile.painPoints.join(', ') : ''}, Goals: ${Array.isArray(dna.audienceProfile.goals) ? dna.audienceProfile.goals.join(', ') : ''}, Buying Behavior: ${dna.audienceProfile.buyingBehaviour || ''}\n`;
    }
    if (dna.productsServices) {
      brandContext += `- **Products & Services**: Products: ${Array.isArray(dna.productsServices.products) ? dna.productsServices.products.join(', ') : ''}, Services: ${Array.isArray(dna.productsServices.services) ? dna.productsServices.services.join(', ') : ''}, Key Features: ${Array.isArray(dna.productsServices.keyFeatures) ? dna.productsServices.keyFeatures.join(', ') : ''}, Key Benefits: ${Array.isArray(dna.productsServices.keyBenefits) ? dna.productsServices.keyBenefits.join(', ') : ''}, Pricing: ${dna.productsServices.pricingInfo || ''}\n`;
    }
    if (dna.seoKeywords) {
      brandContext += `- **Keywords**: Primary: ${Array.isArray(dna.seoKeywords.primary) ? dna.seoKeywords.primary.join(', ') : ''}, Secondary: ${Array.isArray(dna.seoKeywords.secondary) ? dna.seoKeywords.secondary.join(', ') : ''}, Brand: ${Array.isArray(dna.seoKeywords.brand) ? dna.seoKeywords.brand.join(', ') : ''}\n`;
    }
    if (dna.ctaStrategy) {
      brandContext += `- **CTA Strategy**: Preferred CTAs: ${Array.isArray(dna.ctaStrategy.preferredCTAs) ? dna.ctaStrategy.preferredCTAs.join(', ') : ''}\n`;
    }
    if (dna.visualIdentity) {
      brandContext += `- **Visual Identity**: Brand Colors: ${Array.isArray(dna.visualIdentity.brandColors) ? dna.visualIdentity.brandColors.join(', ') : ''}, Typography: ${dna.visualIdentity.typographyStyle || ''}, Design Style: ${dna.visualIdentity.designStyle || ''}, Visual Theme: ${dna.visualIdentity.visualTheme || ''}\n`;
    }
    if (dna.contentPreferences) {
      brandContext += `- **Content Preferences**: Default Language: ${dna.contentPreferences.defaultLanguage || ''}, Default Tone: ${dna.contentPreferences.defaultTone || ''}, Content Length: ${dna.contentPreferences.preferredContentLength || ''}, Preferred CTA: ${dna.contentPreferences.preferredCTA || ''}, Hashtag Count: ${dna.contentPreferences.hashtagCount || ''}, Writing Style: ${dna.contentPreferences.writingStyle || ''}\n`;
    }

    brandContext += `\nCRITICAL DIRECTIVE: You MUST automatically align your generated content, suggestions, advice, and responses with this Brand DNA context. Do NOT prompt the user for this brand information or generate responses violating these brand voice guidelines.\n`;
    return brandContext;
  } catch (error) {
    logger.error('[BrandMemory] Failed to get brand memory context:', error);
    return '';
  }
};
