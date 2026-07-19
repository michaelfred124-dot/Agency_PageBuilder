const fs = require('fs');
const path = require('path');

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

async function run() {
  if (!fs.existsSync(METADATA_FILE)) {
    console.error("Scraped metadata file not found. Please run scripts/scrape_full_db.js first.");
    return;
  }

  console.log("Reading scraped metadata...");
  const rawData = JSON.parse(fs.readFileSync(METADATA_FILE, 'utf8'));
  const clips = Object.values(rawData);
  console.log(`Processing ${clips.length} clips...`);

  const processedClips = clips.map(clip => {
    // Keep it exactly in English
    const tags = clip.tags.map(t => t.trim().toLowerCase()).filter(t => t.length > 0);
    
    return {
      id: clip.id,
      name: clip.name,
      videoUrl: `https://assets.reflix.dev/previews/${clip.id}.mp4`,
      thumbnailUrl: `https://assets.reflix.dev/thumbnails/${clip.id}.webp`,
      category: clip.category,
      tags: Array.from(new Set(tags)),
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
  console.log(`Successfully compiled and wrote ${processedClips.length} clips to ${OUTPUT_FILE}`);
}

run();
