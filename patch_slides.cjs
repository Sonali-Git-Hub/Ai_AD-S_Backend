const fs = require('fs');
const file = 'c:/Users/Multilink System/Desktop/AI Adds/AISA_New_Backend/generation_service_bhumika.js';
let content = fs.readFileSync(file, 'utf8');

const oldBuildLocal = `    const buildLocalVariations = (count) => {
      return Array.from({ length: count }, (_, i) => {
        const frame = SLIDE_FRAMES[i % SLIDE_FRAMES.length];
        return {
          heading: \`\${frame.prefix}\${title}\${frame.suffix}\`.trim(),
          subheading: i === 0 ? hook : (hook ? hook.split(' ').reverse().join(' ').substring(0, 60) : \`Part \${i + 1} of \${count}\`)
        };
      });
    };`;

const newBuildLocal = `    const buildLocalVariations = (count) => {
      return Array.from({ length: count }, (_, i) => {
        const frame = SLIDE_FRAMES[i % SLIDE_FRAMES.length];
        return {
          heading: \`\${frame.prefix}\${title}\${frame.suffix}\`.trim(),
          subheading: i === 0 ? hook : (hook ? hook.split(' ').reverse().join(' ').substring(0, 60) : \`Part \${i + 1} of \${count}\`),
          caption: \`This is the description for slide \${i + 1}. \${title}\`,
          hook: hook || \`Slide \${i + 1} hook\`,
          cta: 'Swipe to see more'
        };
      });
    };`;

if (content.includes(oldBuildLocal)) {
  content = content.replace(oldBuildLocal, newBuildLocal);
  console.log('Replaced buildLocalVariations');
} else {
  console.log('Failed to match oldBuildLocal');
}

const oldPromptRegex = /const variationsPrompt = `You are a professional social media copywriter[\s\S]*?\]`;/m;
const newPrompt = `const variationsPrompt = \`You are a professional social media copywriter creating a \${carouselCount}-slide carousel post.
  
  Original Heading: \${title}
  Original Hook/Subheading: \${hook || 'N/A'}
  
  Generate \${carouselCount} UNIQUE and DISTINCT contents for each slide. The slides must flow as a logical story:
  \${slideStructure}
  (Adjust the flow if fewer slides)
  
  Rules:
  - Each "heading" must be DIFFERENT from the others (no repetition). Keep headings under 8 words (punchy, bold, suitable for image overlay).
  - Keep "subheading" under 15 words.
  - "caption": Write a unique, engaging description (caption) for this specific slide.
  - "hook": Write a short catchy hook for this specific slide.
  - "cta": Write a short Call-To-Action (CTA) for this slide (e.g. 'Swipe Left', 'Read More').
  
  Output ONLY a raw JSON array (no markdown, no explanation) like this:
  [
    { "heading": "...", "subheading": "...", "caption": "...", "hook": "...", "cta": "..." },
    { "heading": "...", "subheading": "...", "caption": "...", "hook": "...", "cta": "..." }
  ]\`;`;

if (oldPromptRegex.test(content)) {
  content = content.replace(oldPromptRegex, newPrompt);
  console.log('Replaced variationsPrompt');
} else {
  console.log('Failed to match variationsPrompt');
}

const oldPush = `generatedSlides.push(brandedSlideUrl);`;
const newPush = `generatedSlides.push({
              url: brandedSlideUrl,
              heading: slideHeading,
              subheading: slideSubheading,
              caption: slideTexts[i]?.caption || '',
              hook: slideTexts[i]?.hook || '',
              cta: slideTexts[i]?.cta || ''
            });`;

if (content.includes(oldPush)) {
  content = content.replace(oldPush, newPush);
  console.log('Replaced generatedSlides.push');
} else {
  console.log('Failed to match generatedSlides.push');
}

fs.writeFileSync(file, content);
