import mongoose from 'mongoose';

const SectionMeta = {
  aiConfidence: { type: Number, default: 0 },
  isApproved:   { type: Boolean, default: false },
  lastUpdated:  { type: Date }
};

// ==========================================
// 1. LEGACY / ROOT MODEL (brand table)
// ==========================================
const BrandProfileSchema = new mongoose.Schema({
  workspaceId: { type: mongoose.Schema.Types.ObjectId, ref: 'SocialAgentWorkspace', required: true },

  // LEGACY FIELDS
  companyName:              { type: String },
  website:                  { type: String },
  companyOverviewText:      { type: String },
  companyOverviewFileUrl:   { type: String },
  companyOverviewFileUrls:  [String],
  logoUrl:                  { type: String },
  brandColors:              [String],
  themePreference:          { type: String },
  toneOfVoice:              { type: mongoose.Schema.Types.Mixed },
  ctaStyle:                 { type: mongoose.Schema.Types.Mixed },
  dosAndDonts:              { type: String },
  extractedBrandSummary:    { type: String },
  socialMediaLinks: {
    instagram: { type: String },
    linkedin:  { type: String },
    twitter:   { type: String },
    facebook:  { type: String },
    youtube:   { type: String }
  },
  preferredTone:              { type: String },
  preferredHookStyle:         { type: String },
  preferredCtaStyle:          { type: String },
  preferredVisualDirection:   { type: String },
  preferredLogoPlacement: {
    type:    String,
    enum:    ['Top-Left', 'Top-Right', 'Bottom-Left', 'Bottom-Right', 'None'],
    default: 'Top-Right'
  },
  brandSafeWordRules:         [String],
  targetEthnicity:            { type: mongoose.Schema.Types.Mixed, default: 'Global' },
  postApprovalRequired:       { type: Boolean, default: true },
  defaultSchedulingTime:      { type: String, default: '10:00 AM' },
  fontFamily:                 { type: String, default: 'Inter' },
  targetIndustry:             { type: String },
  targetAudience:             { type: mongoose.Schema.Types.Mixed },
  contentObjective:           { type: mongoose.Schema.Types.Mixed },
  campaignMonth:              { type: String },
  postingFrequency:           { type: String },
  calendarDuration:           { type: String, default: '30' },
  structuredIdentity: {
    brand_name:        { type: String },
    industry:          { type: String },
    target_audience:   { type: String },
    tone:              { type: String },
    cta_style:         { type: String },
    products_services: [String],
    brand_values:      [String],
    content_angles:    [String],
    color_palette:     [String],
    platform_focus:    { type: [String], default: ['instagram', 'linkedin', 'twitter'] },
    posting_frequency: { type: String, default: 'daily' },
    goal:              { type: String, default: 'engagement + awareness + conversion' }
  },

  rawKnowledgeBase: { type: String },

  // SECTION FIELDS (LEGACY EMULATION SCHEMA CACHE)
  companyInfo: {
    brandName: { type: String }, tagline: { type: String }, website: { type: String },
    industry: { type: String }, subIndustry: { type: String }, businessType: { type: String },
    foundedYear: { type: String }, headquarters: { type: String },
    contactInfo: { type: String }, description: { type: String },
    ...SectionMeta
  },
  brandIdentity: {
    mission: { type: String }, vision: { type: String }, coreValues: [String],
    brandStory: { type: String }, usp: { type: String },
    competitiveAdvantage: { type: String }, brandPositioning: { type: String },
    ...SectionMeta
  },
  brandPersonality: { traits: [String], ...SectionMeta },
  brandVoice: {
    communicationStyle: { type: String }, writingStyle: { type: String },
    toneOfVoice: { type: String }, vocabularyStyle: { type: String },
    ctaStyle: { type: String }, storytellingStyle: { type: String },
    emojiUsage: { type: String }, ...SectionMeta
  },
  audienceProfile: {
    ageGroups: [String], gender: [String], industry: [String],
    profession: [String], location: [String], incomeLevel: { type: String },
    interests: [String], painPoints: [String], goals: [String],
    buyingBehaviour: { type: String }, ...SectionMeta
  },
  productsServices: {
    products: [String], services: [String], categories: [String],
    keyFeatures: [String], keyBenefits: [String],
    pricingInfo: { type: String }, ...SectionMeta
  },
  seoKeywords: {
    primary: [String], secondary: [String], industry: [String],
    brand: [String], longTail: [String], ...SectionMeta
  },
  contentStrategy: { pillars: [String], ...SectionMeta },
  ctaStrategy: { preferredCTAs: [String], ...SectionMeta },
  socialRecommendation: {
    platforms: [{ name: { type: String }, priorityScore: { type: Number }, reason: { type: String } }],
    ...SectionMeta
  },
  competitorIntelligence: {
    topCompetitors: [String], marketPosition: { type: String },
    opportunities: [String], differentiators: [String], ...SectionMeta
  },
  visualIdentity: {
    brandColors: [String], typographyStyle: { type: String },
    designStyle: { type: String }, visualTheme: { type: String },
    imageStyle: { type: String }, ...SectionMeta
  },
  swotAnalysis: {
    strengths: [String], weaknesses: [String],
    opportunities: [String], threats: [String], ...SectionMeta
  },
  contentPreferences: {
    defaultLanguage: { type: String, default: 'English' },
    defaultTone: { type: String }, preferredContentLength: { type: String },
    preferredCTA: { type: String }, hashtagCount: { type: Number, default: 10 },
    writingStyle: { type: String }, ...SectionMeta
  },

  dnaStatus: { type: String, enum: ['not_started', 'analyzing', 'draft', 'approved'], default: 'not_started' },
  dnaGeneratedAt: { type: Date },
  sourceType: { type: String, enum: ['url', 'document', 'manual', 'mixed'] }

}, { timestamps: true });

// ==========================================
// COMMON SECTION BASE STRUCTURE
// ==========================================
const SectionBaseSchema = {
  workspaceId:    { type: mongoose.Schema.Types.ObjectId, required: true },
  aiConfidence:   { type: Number, default: 0 },
  isApproved:     { type: Boolean, default: false },
  regeneratedAt:  { type: Date },
  updatedBy:      { type: String, default: 'system' },
  version:        { type: Number, default: 1 },
  isCurrent:      { type: Boolean, default: true }
};

// ==========================================
// 2. NORMALIZED SECTION SCHEMAS
// ==========================================

const BrandCompanyInformationSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  brandName: { type: String }, tagline: { type: String }, website: { type: String },
  industry: { type: String }, subIndustry: { type: String }, businessType: { type: String },
  foundedYear: { type: String }, headquarters: { type: String },
  contactInfo: { type: String }, description: { type: String }
}, { timestamps: true });

const BrandIdentitySchema = new mongoose.Schema({
  ...SectionBaseSchema,
  mission: { type: String }, vision: { type: String }, coreValues: [String],
  brandStory: { type: String }, usp: { type: String },
  competitiveAdvantage: { type: String }, brandPositioning: { type: String }
}, { timestamps: true });

const BrandPersonalitySchema = new mongoose.Schema({
  ...SectionBaseSchema,
  traits: [String]
}, { timestamps: true });

const BrandVoiceSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  communicationStyle: { type: String }, writingStyle: { type: String },
  toneOfVoice: { type: String }, vocabularyStyle: { type: String },
  ctaStyle: { type: String }, storytellingStyle: { type: String },
  emojiUsage: { type: String }
}, { timestamps: true });

const BrandTargetAudienceSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  ageGroups: [String], gender: [String], industry: [String],
  profession: [String], location: [String], incomeLevel: { type: String },
  interests: [String], painPoints: [String], goals: [String],
  buyingBehaviour: { type: String }
}, { timestamps: true });

const BrandProductsSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  products: [String], services: [String], categories: [String],
  keyFeatures: [String], keyBenefits: [String], pricingInfo: { type: String }
}, { timestamps: true });

const BrandKeywordsSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  primary: [String], secondary: [String], industry: [String],
  brand: [String], longTail: [String]
}, { timestamps: true });

const BrandContentStrategySchema = new mongoose.Schema({
  ...SectionBaseSchema,
  pillars: [String]
}, { timestamps: true });

const BrandCTASchema = new mongoose.Schema({
  ...SectionBaseSchema,
  preferredCTAs: [String]
}, { timestamps: true });

const BrandSocialSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  platforms: [{ name: { type: String }, priorityScore: { type: Number }, reason: { type: String } }]
}, { timestamps: true });

const BrandCompetitorsSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  topCompetitors: [String], marketPosition: { type: String },
  opportunities: [String], differentiators: [String]
}, { timestamps: true });

const BrandVisualIdentitySchema = new mongoose.Schema({
  ...SectionBaseSchema,
  brandColors: [String], typographyStyle: { type: String },
  designStyle: { type: String }, visualTheme: { type: String },
  imageStyle: { type: String }
}, { timestamps: true });

const BrandSWOTSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  strengths: [String], weaknesses: [String],
  opportunities: [String], threats: [String]
}, { timestamps: true });

const BrandPreferencesSchema = new mongoose.Schema({
  ...SectionBaseSchema,
  defaultLanguage: { type: String, default: 'English' },
  defaultTone: { type: String }, preferredContentLength: { type: String },
  preferredCTA: { type: String }, hashtagCount: { type: Number, default: 10 },
  writingStyle: { type: String }
}, { timestamps: true });

// ==========================================
// EXPORTS AND MODELS REGISTRATION
// ==========================================

export const BrandProfile = mongoose.models.BrandProfile || mongoose.model('BrandProfile', BrandProfileSchema);
export const BrandCompanyInformation = mongoose.models.BrandCompanyInformation || mongoose.model('BrandCompanyInformation', BrandCompanyInformationSchema);
export const BrandIdentity = mongoose.models.BrandIdentity || mongoose.model('BrandIdentity', BrandIdentitySchema);
export const BrandPersonality = mongoose.models.BrandPersonality || mongoose.model('BrandPersonality', BrandPersonalitySchema);
export const BrandVoice = mongoose.models.BrandVoice || mongoose.model('BrandVoice', BrandVoiceSchema);
export const BrandTargetAudience = mongoose.models.BrandTargetAudience || mongoose.model('BrandTargetAudience', BrandTargetAudienceSchema);
export const BrandProducts = mongoose.models.BrandProducts || mongoose.model('BrandProducts', BrandProductsSchema);
export const BrandKeywords = mongoose.models.BrandKeywords || mongoose.model('BrandKeywords', BrandKeywordsSchema);
export const BrandContentStrategy = mongoose.models.BrandContentStrategy || mongoose.model('BrandContentStrategy', BrandContentStrategySchema);
export const BrandCTA = mongoose.models.BrandCTA || mongoose.model('BrandCTA', BrandCTASchema);
export const BrandSocial = mongoose.models.BrandSocial || mongoose.model('BrandSocial', BrandSocialSchema);
export const BrandCompetitors = mongoose.models.BrandCompetitors || mongoose.model('BrandCompetitors', BrandCompetitorsSchema);
export const BrandVisualIdentity = mongoose.models.BrandVisualIdentity || mongoose.model('BrandVisualIdentity', BrandVisualIdentitySchema);
export const BrandSWOT = mongoose.models.BrandSWOT || mongoose.model('BrandSWOT', BrandSWOTSchema);
export const BrandPreferences = mongoose.models.BrandPreferences || mongoose.model('BrandPreferences', BrandPreferencesSchema);

export default BrandProfile;
