const fs = require('fs');
const path = require('path');
const { GoogleGenAI } = require('@google/genai');

// Load environment variables
require('dotenv').config({ path: path.join(__dirname, '../.env.local') });

const METADATA_FILE = path.join(__dirname, 'full_scraped_metadata.json');
const OUTPUT_FILE = path.join(__dirname, '../src/app/work/reflix/data.ts');

const CATEGORIES = {
  spear: "Spear/Polearm",
  "daily-other": "Daily/Other",
  emotion: "Emotion/Acting",
  shield: "Shield/Defend",
  "direction-game": "Game Direction",
  attack: "Normal Attack",
  walk: "Walking Movement",
  "combat-ready": "Combat Ready",
  sword: "Sword/Greatsword",
  surprise: "Surprise/React",
  "grab-release-lift": "Grab & Lift",
  body: "Body & Melee",
  death: "Defeat & Death",
  hit: "Hit/Impact",
  gun: "Gun/Firearm",
  run: "Run/Dash",
  return: "Return/Sheathe",
  "movement-other": "Other Movement",
  jump: "Jump/Fall",
  bow: "Bow/Ranged",
  dash: "Dodge/Evade"
};

const apiKey = process.env.GEMINI_API_KEY;
if (!apiKey) {
  console.error("GEMINI_API_KEY not found in .env.local!");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function translateTags(tags) {
  console.log(`Translating ${tags.length} unique tags...`);
  const batchSize = 150;
  const tagTranslations = {};

  for (let i = 0; i < tags.length; i += batchSize) {
    const batch = tags.slice(i, i + batchSize);
    console.log(`- Translating tags batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(tags.length / batchSize)}...`);
    
    const prompt = `Translate this list of Korean terms (used as keywords/tags for game character animation reference loops) into brief, concise, lower-case English tags or keywords. Keep terms short (1-2 words maximum).
Format the output as a JSON object matching this exact format:
{
  "KoreanTag": "EnglishTag"
}
Do not return any markdown code block, explanation, or extra text. Just the raw JSON object.

List of tags:
${JSON.stringify(batch)}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });
      
      const text = response.text;
      const parsed = JSON.parse(text);
      Object.assign(tagTranslations, parsed);
    } catch (e) {
      console.error("Failed to translate tag batch:", e.message);
      // Fallback: map Korean tag directly
      batch.forEach(t => { tagTranslations[t] = t; });
    }
  }

  return tagTranslations;
}

async function translateNames(clips) {
  console.log(`Translating ${clips.length} clip names...`);
  const batchSize = 80;
  const nameTranslations = {};

  for (let i = 0; i < clips.length; i += batchSize) {
    const batch = clips.slice(i, i + batchSize);
    console.log(`- Translating names batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(clips.length / batchSize)}...`);

    const listPayload = batch.map(c => ({ id: c.id, name: c.name }));
    const prompt = `Translate this list of Korean descriptions (representing character animation reference clips, e.g. "연출 아케인 2 전쟁 신호" or "게임 던파 쌍수 검") into short, descriptive, natural English titles. Simplify game names if possible (e.g. "Arcane 2" or "DNF").
Format the output as a JSON object mapping the ID to the English title:
{
  "CLIP_ID": "English Title"
}
Do not return any markdown code block or extra text. Just the raw JSON.

List of clips:
${JSON.stringify(listPayload)}`;

    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json'
        }
      });

      const text = response.text;
      const parsed = JSON.parse(text);
      Object.assign(nameTranslations, parsed);
    } catch (e) {
      console.error("Failed to translate names batch:", e.message);
      // Fallback
      batch.forEach(c => { nameTranslations[c.id] = c.name; });
    }
  }

  return nameTranslations;
}

async function run() {
  if (!fs.existsSync(METADATA_FILE)) {
    console.error("Scraped metadata file not found. Please run scripts/scrape_full_db.js first.");
    return;
  }

  console.log("Reading scraped metadata...");
  const rawData = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf8'));
  const clips = Object.values(rawData);
  console.log(`Loaded ${clips.length} clips.`);

  if (clips.length === 0) {
    console.log("No clips scraped yet.");
    return;
  }

  // Extract unique tags
  const uniqueTags = Array.from(new Set(clips.flatMap(c => c.tags)));
  console.log(`Found ${uniqueTags.length} unique tags.`);

  // 1. Translate tags
  const tagMap = await translateTags(uniqueTags);

  // 2. Translate names
  const nameMap = await translateNames(clips);

  // 3. Process clips
  const processedClips = clips.map(clip => {
    const englishName = nameMap[clip.id] || clip.name;
    const englishTags = clip.tags.map(t => (tagMap[t] || t).toLowerCase().trim());

    return {
      id: clip.id,
      name: englishName,
      videoUrl: `https://assets.reflix.dev/previews/${clip.id}.mp4`,
      thumbnailUrl: `https://assets.reflix.dev/thumbnails/${clip.id}.webp`,
      category: clip.category,
      tags: Array.from(new Set(englishTags)).filter(t => t.length > 0),
      duration: clip.duration,
      width: clip.width,
      height: clip.height
    };
  });

  const dataContent = `export interface Clip {
  id: string;
  name: string;
  videoUrl: string;
  thumbnailUrl: string;
  category: string;
  tags: string[];
  duration: number;
  width: number;
  height: number;
}

export const CATEGORY_MAP: Record<string, string> = ${JSON.stringify(CATEGORIES, null, 2)};

export const CLIPS: Clip[] = ${JSON.stringify(processedClips, null, 2)};
`;

  fs.writeFileSync(OUTPUT_FILE, dataContent);
  console.log(`Successfully compiled and wrote ${processedClips.length} clips in English to ${OUTPUT_FILE}`);
}

run();
