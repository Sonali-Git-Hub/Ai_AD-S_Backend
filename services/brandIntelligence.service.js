import * as vertexService from './vertex.service.js';
import logger from '../utils/logger.js';

const PERSONALITY_TRAITS = [
  'Professional', 'Friendly', 'Premium', 'Luxury', 'Modern',
  'Corporate', 'Innovative', 'Technical', 'Emotional', 'Bold', 'Minimal'
];

/**
 * Builds the master AI prompt for full Brand DNA extraction.
 * Every field is wrapped with value, confidence, and reasoning.
 */
const buildExtractionPrompt = (rawText, sourceType, metadata = {}) => {
  const brandHint = metadata.brandName ? `The brand is "${metadata.brandName}".` : '';
  const industryHint = metadata.industry ? `Industry: ${metadata.industry}.` : '';
  const toneHint = metadata.toneOfVoice ? `Detected tone: ${metadata.toneOfVoice}.` : '';
  const colorHint = metadata.brandColors?.length ? `Detected brand colors: ${metadata.brandColors.join(', ')}.` : '';
  const regionHint = metadata.targetRegion ? `Target region: ${metadata.targetRegion}.` : '';

  return `You are a World-Class Brand Intelligence AI. Analyze the brand content and return structured JSON matching the Brand DNA schema.

Your task: Analyze ALL provided content and generate a COMPLETE, DETAILED Brand DNA profile. Every single field must be populated with intelligent, relevant data.
If specific information is missing, infer it intelligently from the brand context. Never leave fields empty.

${brandHint} ${industryHint} ${toneHint} ${colorHint} ${regionHint}

SOURCE TYPE: ${sourceType}

═══════════════════════════════════════════════════
STRICT EXTRACTION RULES & OBJECTIVE:
═══════════════════════════════════════════════════
1. NO PLACEHOLDERS: Generate Brand Intelligence based ONLY on the actual content found in the provided text. Never return placeholder/generic text like "Innovative technology solutions", "Customer experience", "Global leader", "Cutting-edge technology" unless those statements explicitly exist in the content.
2. ACCURATE INDUSTRY: Industry classification must be highly accurate. For example: Fashion website -> Fashion, Restaurant -> Food, School -> Education, Law Firm -> Legal, SaaS -> Technology, Finance -> Financial Services. Ensure no Fashion brand is classified as a Tech brand, or vice versa.
3. PRODUCTS & SERVICES: Products and services list must come directly from the content. If the brand sells clothing, extract clothing categories rather than technology products.
4. AUDIENCE & KEYWORDS: Target audience and SEO keywords must be inferred and extracted directly from headings, categories, product names, metadata, and page content.
5. COMPETITORS: Competitors must be inferred based on the actual industry and market of the brand (e.g. real brands in the same space), not placeholder names like "Competitor1".
6. SPARSE CONTENT FALLBACK: If the crawled website content is empty, sparse, or fails to fetch (e.g., due to bot blocking), you MUST analyze the website URL / domain name itself to infer the brand and industry. For example: savana.com -> Fashion, apparel, clothing; decathlon.com -> Sports, fitness; standardchartered.com -> Finance, banking. Never default to "Technology & SaaS" or "Customer Experience Technology" templates if the domain/URL suggests a completely different industry!
7. INTERNAL VALIDATION: Perform an internal consistency check before writing the JSON. Verify that Industry, Products, Services, Target Audience, Keywords, and Competitors are all consistent with each other. If inconsistencies are found, prioritize actual content findings.

═══════════════════════════════════════════════════
CONTENT TO ANALYZE:
═══════════════════════════════════════════════════
${rawText.substring(0, 25000)}
═══════════════════════════════════════════════════

Return ONLY a valid JSON object. Do NOT wrap it in markdown code fences (such as \`\`\`json). Do NOT include any explanations or commentary.

Every field inside the sections below must be an object containing:
- "value": The extracted or inferred value (string, array of strings, or other types as specified)
- "confidence": An integer between 0 and 100 reflecting how much actual evidence you found
- "source": Exactly one of: "WEBSITE", "ABOUT PAGE", "PRODUCT PAGE", "META TAGS", or "AI INFERRED" depending on where the evidence was found
- "reasoning": A short explanation of how the value was derived or inferred (e.g., "Extracted from About page description.")

JSON SCHEMA TEMPLATE:
{
  "companyInfo": {
    "brandName": {
      "value": "Full brand name",
      "confidence": 95,
      "reasoning": "Reasoning details"
    },
    "tagline": {
      "value": "Brand tagline or slogan",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "website": {
      "value": "Website URL",
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "industry": {
      "value": "Primary industry (e.g. Technology & SaaS, E-commerce, Healthcare)",
      "confidence": 95,
      "reasoning": "Reasoning details"
    },
    "subIndustry": {
      "value": "Specific sub-industry or niche",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "businessType": {
      "value": "B2B, B2C, D2C, SaaS, etc.",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "foundedYear": {
      "value": "Year founded if mentioned, or best estimate",
      "confidence": 75,
      "reasoning": "Reasoning details"
    },
    "headquarters": {
      "value": "City, Country or Region",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "contactInfo": {
      "value": "Contact email/phone",
      "confidence": 70,
      "reasoning": "Reasoning details"
    },
    "description": {
      "value": "3-4 sentence professional company overview",
      "confidence": 90,
      "reasoning": "Reasoning details"
    }
  },
  "brandIdentity": {
    "mission": {
      "value": "2-3 sentence mission statement",
      "confidence": 95,
      "reasoning": "Reasoning details"
    },
    "vision": {
      "value": "2-3 sentence vision statement",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "coreValues": {
      "value": ["Value1", "Value2", "Value3", "Value4", "Value5"],
      "confidence": 88,
      "reasoning": "Reasoning details"
    },
    "brandStory": {
      "value": "3-4 sentence compelling brand narrative",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "usp": {
      "value": "2-3 sentence unique selling proposition",
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "competitiveAdvantage": {
      "value": "Key differentiator from competitors",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "brandPositioning": {
      "value": "Market positioning statement",
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  },
  "brandPersonality": {
    "traits": {
      "value": ["Trait1", "Trait2", "Trait3"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    }
  },
  "brandVoice": {
    "communicationStyle": {
      "value": "How the brand communicates (e.g. Warm and friendly, Direct and professional)",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "writingStyle": {
      "value": "Concise, educational, corporate, etc.",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "toneOfVoice": {
      "value": "Professional, Casual, Bold, or Friendly",
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "vocabularyStyle": {
      "value": "Vocabulary complexity (e.g. Accessible, Technical)",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "ctaStyle": {
      "value": "Direct, Engagement, or Storytelling",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "storytellingStyle": {
      "value": "E.g. Customer-centric, Product-first",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "emojiUsage": {
      "value": "Minimal, Moderate, or Frequent",
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  },
  "audienceProfile": {
    "ageGroups": {
      "value": ["25-34", "35-44"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "gender": {
      "value": ["All Genders"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "industry": {
      "value": ["Industry1", "Industry2"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "profession": {
      "value": ["Profession1", "Profession2"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "location": {
      "value": ["Region1", "Region2"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "incomeLevel": {
      "value": "E.g. Middle-income, High-income",
      "confidence": 75,
      "reasoning": "Reasoning details"
    },
    "interests": {
      "value": ["Interest1", "Interest2", "Interest3"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "painPoints": {
      "value": ["PainPoint1", "PainPoint2", "PainPoint3"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "goals": {
      "value": ["Goal1", "Goal2", "Goal3"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "buyingBehaviour": {
      "value": "Description of buying behavior and decision process",
      "confidence": 80,
      "reasoning": "Reasoning details"
    }
  },
  "productsServices": {
    "products": {
      "value": ["Product1", "Product2"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "services": {
      "value": ["Service1", "Service2"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "categories": {
      "value": ["Category1", "Category2"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "keyFeatures": {
      "value": ["Feature1", "Feature2", "Feature3"],
      "confidence": 88,
      "reasoning": "Reasoning details"
    },
    "keyBenefits": {
      "value": ["Benefit1", "Benefit2", "Benefit3"],
      "confidence": 88,
      "reasoning": "Reasoning details"
    },
    "pricingInfo": {
      "value": "Pricing description",
      "confidence": 80,
      "reasoning": "Reasoning details"
    }
  },
  "seoKeywords": {
    "primary": {
      "value": ["keyword1", "keyword2", "keyword3"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "secondary": {
      "value": ["keyword1", "keyword2", "keyword3"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "industry": {
      "value": ["keyword1", "keyword2"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "brand": {
      "value": ["brandKeyword"],
      "confidence": 95,
      "reasoning": "Reasoning details"
    },
    "longTail": {
      "value": ["long tail keyword phrase 1", "long tail keyword phrase 2"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    }
  },
  "contentStrategy": {
    "pillars": {
      "value": ["Pillar1: Description", "Pillar2: Description", "Pillar3: Description"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  },
  "ctaStrategy": {
    "preferredCTAs": {
      "value": ["CTA1", "CTA2", "CTA3"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    }
  },
  "socialRecommendation": {
    "platforms": {
      "value": [
        { "name": "LinkedIn", "priorityScore": 90, "reason": "Reason for priority" },
        { "name": "Instagram", "priorityScore": 85, "reason": "Reason for priority" }
      ],
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  },
  "competitorIntelligence": {
    "topCompetitors": {
      "value": ["Competitor1", "Competitor2"],
      "confidence": 75,
      "reasoning": "Reasoning details"
    },
    "marketPosition": {
      "value": "Market position description",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "opportunities": {
      "value": ["Opportunity1", "Opportunity2"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "differentiators": {
      "value": ["Differentiator1", "Differentiator2"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  },
  "visualIdentity": {
    "brandColors": {
      "value": ["#hex1", "#hex2"],
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "typographyStyle": {
      "value": "Typography description",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "designStyle": {
      "value": "Minimal, Bold, Tech, etc.",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "visualTheme": {
      "value": "Dark, light, etc.",
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "imageStyle": {
      "value": "Illustration, photo, etc.",
      "confidence": 80,
      "reasoning": "Reasoning details"
    }
  },
  "swotAnalysis": {
    "strengths": {
      "value": ["Strength1", "Strength2", "Strength3"],
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "weaknesses": {
      "value": ["Weakness1", "Weakness2", "Weakness3"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "opportunities": {
      "value": ["Opportunity1", "Opportunity2"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    },
    "threats": {
      "value": ["Threat1", "Threat2"],
      "confidence": 80,
      "reasoning": "Reasoning details"
    }
  },
  "contentPreferences": {
    "defaultLanguage": {
      "value": "English",
      "confidence": 95,
      "reasoning": "Reasoning details"
    },
    "defaultTone": {
      "value": "Professional",
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "preferredContentLength": {
      "value": "Medium (150-300 words)",
      "confidence": 85,
      "reasoning": "Reasoning details"
    },
    "preferredCTA": {
      "value": "E.g. Visit website",
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "hashtagCount": {
      "value": 10,
      "confidence": 90,
      "reasoning": "Reasoning details"
    },
    "writingStyle": {
      "value": "Concise, educational, etc.",
      "confidence": 85,
      "reasoning": "Reasoning details"
    }
  }
}

═══════════════════════════════════════════════════
CRITICAL RULES:
═══════════════════════════════════════════════════
1. The output must be EXACTLY a JSON object. Do not wrap in markdown tags like \`\`\`json. Do not include prefix/suffix conversation.
2. brandPersonality.traits.value MUST contain traits strictly from: ${PERSONALITY_TRAITS.join(', ')}
3. Never use placeholder text like "N/A" or empty values; always infer them intelligently based on the brand context and similar businesses.
`;
};

const SECTION_TEMPLATES = {
  companyInfo: {
    brandName: "Full official brand name",
    tagline: "Brand tagline or slogan (e.g., 'Empowering Intelligence')",
    website: "Website URL (e.g., 'https://aisa24.com/')",
    industry: "Primary industry (e.g., 'Technology & SaaS')",
    subIndustry: "Specific sub-industry or niche (e.g., 'Artificial Intelligence')",
    businessType: "B2B, B2C, D2C, SaaS, etc.",
    foundedYear: "Year founded (e.g., '2020')",
    headquarters: "City, Country or Region (e.g., 'Jabalpur, India')",
    contactInfo: "Contact email or details (e.g., 'admin@uwo24.com')",
    description: "3-4 sentence professional company description"
  },
  brandIdentity: {
    mission: "2-3 sentence mission statement",
    vision: "2-3 sentence vision statement",
    coreValues: ["Value1", "Value2", "Value3", "Value4", "Value5"],
    brandStory: "3-4 sentence compelling brand narrative",
    usp: "2-3 sentence unique selling proposition",
    competitiveAdvantage: "Detailed key competitive advantage description",
    brandPositioning: "Detailed market positioning statement"
  },
  brandPersonality: {
    traits: ["Professional", "Innovative", "Modern"]
  },
  brandVoice: {
    communicationStyle: "Communication style (e.g., 'Direct and professional')",
    writingStyle: "Writing style (e.g., 'Concise and impactful')",
    toneOfVoice: "Tone of voice (Professional, Casual, Bold, or Friendly)",
    vocabularyStyle: "Vocabulary complexity",
    ctaStyle: "CTA framing (Direct, Engagement, or Storytelling)",
    storytellingStyle: "E.g., 'Customer success stories'",
    emojiUsage: "Minimal, Moderate, or Frequent"
  },
  audienceProfile: {
    ageGroups: ["25-34", "35-44"],
    gender: ["All Genders"],
    industry: ["Industry1", "Industry2"],
    profession: ["Profession1", "Profession2"],
    location: ["Region1", "Region2"],
    incomeLevel: "Income bracket (e.g., 'Middle-income')",
    interests: ["Interest1", "Interest2"],
    painPoints: ["PainPoint1", "PainPoint2"],
    goals: ["Goal1", "Goal2"],
    buyingBehaviour: "2-3 sentence description of buying decisions"
  },
  productsServices: {
    products: ["Product1", "Product2"],
    services: ["Service1", "Service2"],
    categories: ["Category1", "Category2"],
    keyFeatures: ["Feature1", "Feature2"],
    keyBenefits: ["Benefit1", "Benefit2"],
    pricingInfo: "Pricing structure details"
  },
  seoKeywords: {
    primary: ["keyword1", "keyword2"],
    secondary: ["keyword1", "keyword2"],
    industry: ["keyword1", "keyword2"],
    brand: ["brandKeyword"],
    longTail: ["long tail phrase 1", "long tail phrase 2"]
  },
  contentStrategy: {
    pillars: ["Pillar1: Description", "Pillar2: Description", "Pillar3: Description"]
  },
  ctaStrategy: {
    preferredCTAs: ["CTA1", "CTA2", "CTA3"]
  },
  socialRecommendation: {
    platforms: [
      { name: "LinkedIn", priorityScore: 90, reason: "Reason details" },
      { name: "Instagram", priorityScore: 85, reason: "Reason details" }
    ]
  },
  competitorIntelligence: {
    topCompetitors: ["Competitor1", "Competitor2"],
    marketPosition: "Market positioning details",
    opportunities: ["Opportunity1", "Opportunity2"],
    differentiators: ["Differentiator1", "Differentiator2"]
  },
  visualIdentity: {
    brandColors: ["#hex1", "#hex2"],
    typographyStyle: "Typography details",
    designStyle: "Design style description",
    visualTheme: "Visual theme details",
    imageStyle: "Image style details"
  },
  swotAnalysis: {
    strengths: ["Strength1", "Strength2"],
    weaknesses: ["Weakness1", "Weakness2"],
    opportunities: ["Opportunity1", "Opportunity2"],
    threats: ["Threat1", "Threat2"]
  },
  contentPreferences: {
    defaultLanguage: "English",
    defaultTone: "Professional",
    preferredContentLength: "Medium (150-300 words)",
    preferredCTA: "Preferred CTA style",
    hashtagCount: 10,
    writingStyle: "Writing style details"
  }
};

/**
 * Builds a prompt for single-section regeneration.
 */
const buildRegenerationPrompt = (sectionName, existingDNA, rawKnowledge) => {
  const template = SECTION_TEMPLATES[sectionName] || {};
  const templateStr = JSON.stringify(template, null, 2);

  return `You are a Brand Intelligence AI. Regenerate ONLY the "${sectionName}" section of this brand's DNA.

EXISTING BRAND CONTEXT:
Brand: ${existingDNA?.companyInfo?.brandName || 'Unknown'}
Industry: ${existingDNA?.companyInfo?.industry || 'Unknown'}
Description: ${existingDNA?.companyInfo?.description || ''}
Website: ${existingDNA?.companyInfo?.website || ''}

RAW KNOWLEDGE:
${(rawKnowledge || '').substring(0, 15000)}

STRICT EXTRACTION RULES & OBJECTIVE:
1. NO PLACEHOLDERS: Generate Brand Intelligence based ONLY on the actual content found in the raw knowledge. Never return placeholder/generic text like "Innovative technology solutions", "Customer experience", "Global leader", "Cutting-edge technology" unless those statements explicitly exist in the content.
2. ACCURATE PRODUCTS & SERVICES: Products and services must match the crawled page content exactly.
3. Every field inside the "${sectionName}" section must be structured as an object with:
   - "value": The extracted or inferred value (string, array of strings, or other types as specified in the template structure below)
   - "confidence": An integer between 0 and 100
   - "source": Exactly one of: "WEBSITE", "ABOUT PAGE", "PRODUCT PAGE", "META TAGS", or "AI INFERRED" depending on where the evidence was found
   - "reasoning": A short explanation of the inference/extraction reason
4. Do NOT return empty fields. If information is missing, infer it intelligently.
5. Return ONLY a valid JSON object matching the keys and structures defined in this template schema:
${templateStr}

Do NOT wrap the output in markdown code fences. Do NOT include any conversation.`;
};

/**
 * Maps single section structured JSON to flat mongoose / UI format.
 */
const mapSingleSectionOutput = (sectionName, sectionJson) => {
  let rawSec = sectionJson;
  const keys = Object.keys(sectionJson);
  
  // Unpack single-key parent object (like BrandIdentity, companyInfo, etc.) if it is not the value object itself
  if (keys.length === 1 && typeof sectionJson[keys[0]] === 'object' && !Array.isArray(sectionJson[keys[0]]) && !('value' in sectionJson[keys[0]])) {
    rawSec = sectionJson[keys[0]];
  } else if (sectionJson[sectionName]) {
    rawSec = sectionJson[sectionName];
  }
  
  const mappedSec = {};
  let confidenceSum = 0;
  let confidenceCount = 0;

  for (const [fieldKey, fieldVal] of Object.entries(rawSec)) {
    if (fieldKey === 'aiConfidence' || fieldKey === 'isApproved' || fieldKey === 'lastUpdated') continue;

    if (fieldVal && typeof fieldVal === 'object' && 'value' in fieldVal) {
      if (sectionName === 'socialRecommendation' && fieldKey === 'platforms') {
        const platformsArr = Array.isArray(fieldVal.value) ? fieldVal.value : [];
        mappedSec.platforms = platformsArr.map(p => ({
          name: p.name || '',
          priorityScore: Number(p.priorityScore || p.confidence || 85),
          reason: p.reason || p.reasoning || ''
        }));
        const platformsConf = typeof fieldVal.confidence === 'number' ? fieldVal.confidence : 85;
        confidenceSum += platformsConf;
        confidenceCount++;
        continue;
      }

      let finalVal = fieldVal.value;
      const source = fieldVal.source || 'WEBSITE';
      const confidence = typeof fieldVal.confidence === 'number' ? fieldVal.confidence : 90;

      if (typeof finalVal === 'string' && finalVal.trim().length > 0) {
        if (!finalVal.includes('SOURCE:')) {
          finalVal = `${finalVal.trim()}\n\nSOURCE: ${source.toUpperCase()} | CONFIDENCE: ${confidence}%`;
        }
      } else if (Array.isArray(finalVal)) {
        finalVal = finalVal.map(item => {
          if (typeof item === 'string' && item.trim().length > 0 && !item.includes('SOURCE:')) {
            return `${item.trim()} (SOURCE: ${source.toUpperCase()} | CONFIDENCE: ${confidence}%)`;
          }
          return item;
        });
      }

      mappedSec[fieldKey] = finalVal;
      if (typeof fieldVal.confidence === 'number' || typeof fieldVal.confidence === 'string') {
        confidenceSum += Number(fieldVal.confidence);
        confidenceCount++;
      }
    } else {
      if (sectionName === 'socialRecommendation' && fieldKey === 'platforms' && Array.isArray(fieldVal)) {
        mappedSec.platforms = fieldVal.map(p => ({
          name: p.name || '',
          priorityScore: Number(p.priorityScore || p.confidence || 85),
          reason: p.reason || p.reasoning || ''
        }));
        for (const p of mappedSec.platforms) {
          confidenceSum += p.priorityScore;
          confidenceCount++;
        }
      } else {
        mappedSec[fieldKey] = fieldVal;
      }
    }
  }

  mappedSec.aiConfidence = confidenceCount > 0 ? Math.round(confidenceSum / confidenceCount) : 85;
  return mappedSec;
};

/**
 * Maps the entire structured AI output to the clean flat database schema.
 */
const mapAIOutputToSchema = (aiJson) => {
  const mapped = {};
  const sections = [
    'companyInfo', 'brandIdentity', 'brandPersonality', 'brandVoice',
    'audienceProfile', 'productsServices', 'seoKeywords', 'contentStrategy',
    'ctaStrategy', 'socialRecommendation', 'competitorIntelligence',
    'visualIdentity', 'swotAnalysis', 'contentPreferences'
  ];

  for (const secKey of sections) {
    if (aiJson[secKey]) {
      mapped[secKey] = mapSingleSectionOutput(secKey, aiJson[secKey]);
    } else {
      mapped[secKey] = { aiConfidence: 0 };
    }
  }

  return mapped;
};

export const extractFullBrandDNA = async (rawText, sourceType = 'mixed', metadata = {}) => {
  try {
    console.log('[BrandIntelligence] Starting full DNA extraction...');
    console.log(`[BrandIntelligence] Source: ${sourceType}, Text length: ${rawText.length} chars`);
    
    const prompt = buildExtractionPrompt(rawText, sourceType, metadata);
    
    const aiResult = await vertexService.AskVertexRaw(prompt, {
      isJson: true,
      maxOutputTokens: 8192,
      temperature: 0.4
    });
    
    let cleanJson = aiResult.trim();
    cleanJson = cleanJson.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
    
    const firstBrace = cleanJson.indexOf('{');
    const lastBrace = cleanJson.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error(`AI model did not return a valid JSON object. Content received: "${aiResult.substring(0, 200)}..."`);
    }
    cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
    cleanJson = cleanJson.replace(/,(\s*[\]}])/g, '$1');
    
    const rawDna = JSON.parse(cleanJson);
    const dna = mapAIOutputToSchema(rawDna);
    
    // Post-validation: ensure no critical sections are completely empty
    const criticalSections = [
      'companyInfo', 'brandIdentity', 'brandPersonality', 'brandVoice',
      'audienceProfile', 'productsServices', 'seoKeywords', 'contentStrategy',
      'ctaStrategy', 'socialRecommendation', 'competitorIntelligence',
      'visualIdentity', 'swotAnalysis', 'contentPreferences'
    ];
    
    for (const section of criticalSections) {
      if (!dna[section]) {
        console.warn(`[BrandIntelligence] WARNING: Section "${section}" is missing from AI output`);
        dna[section] = { aiConfidence: 0 };
      }
    }
    
    console.log('[BrandIntelligence] ✅ DNA extraction successful for:', dna?.companyInfo?.brandName);
    
    // Log section completeness
    for (const section of criticalSections) {
      const data = dna[section] || {};
      const filledFields = Object.entries(data).filter(([k, v]) => {
        if (k === 'aiConfidence' || k === 'isApproved' || k === 'lastUpdated') return false;
        if (Array.isArray(v)) return v.length > 0;
        if (typeof v === 'string') return v.trim().length > 0;
        if (typeof v === 'number') return true;
        return !!v;
      }).length;
      const totalFields = Object.keys(data).filter(k => k !== 'aiConfidence' && k !== 'isApproved' && k !== 'lastUpdated').length;
      console.log(`  ${section}: ${filledFields}/${totalFields} fields filled (confidence: ${data.aiConfidence || 0}%)`);
    }
    
    return { success: true, dna };
  } catch (err) {
    logger.error(`[BrandIntelligence] extractFullBrandDNA failed: ${err.message}`);
    return { success: false, error: err.message, dna: null };
  }
};

/**
 * Regenerate a single section of Brand DNA.
 */
export const regenerateSection = async (sectionName, existingDNA, rawKnowledge) => {
  try {
    console.log('[BrandIntelligence] Regenerating section:', sectionName);
    const prompt = buildRegenerationPrompt(sectionName, existingDNA, rawKnowledge);
    const aiResult = await vertexService.AskVertexRaw(prompt, {
      isJson: true,
      maxOutputTokens: 4096,
      temperature: 0.5
    });
    
    let cleanJson = aiResult.trim();
    cleanJson = cleanJson.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '');
    
    const firstBrace = cleanJson.indexOf('{');
    const lastBrace = cleanJson.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1) {
      throw new Error(`AI model did not return a valid JSON object. Content received: "${aiResult.substring(0, 200)}..."`);
    }
    cleanJson = cleanJson.substring(firstBrace, lastBrace + 1);
    cleanJson = cleanJson.replace(/,(\s*[\]}])/g, '$1');

    const sectionJson = JSON.parse(cleanJson);
    const sectionData = mapSingleSectionOutput(sectionName, sectionJson);
    
    return { success: true, sectionData };
  } catch (err) {
    logger.error(`[BrandIntelligence] regenerateSection failed: ${err.message}`);
    return { success: false, error: err.message };
  }
};
