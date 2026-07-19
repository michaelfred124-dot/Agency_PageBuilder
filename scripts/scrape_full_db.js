const fs = require('fs');
const path = require('path');

const PROGRESS_FILE = path.join(__dirname, 'full_scraped_metadata.json');
const CONCURRENCY = 6; // Moderate concurrency to prevent Cloudflare blocks
const RETRY_LIMIT = 3;
const DELAY_MS = 600; // Small delay between batch starts

async function fetchWithRetry(url, headers, retries = 0) {
  try {
    const res = await fetch(url, { headers });
    if (res.status === 429) {
      const waitTime = (retries + 1) * 15000;
      console.log(`[Rate Limited 429] Waiting ${waitTime / 1000}s to retry...`);
      await new Promise(r => setTimeout(r, waitTime));
      return fetchWithRetry(url, headers, retries + 1);
    }
    if (!res.ok) {
      throw new Error(`HTTP ${res.status} ${res.statusText}`);
    }
    return await res.text();
  } catch (e) {
    if (retries < RETRY_LIMIT) {
      console.log(`[Error] ${e.message}. Retrying ${retries + 1}/${RETRY_LIMIT} in 3s...`);
      await new Promise(r => setTimeout(r, 3000));
      return fetchWithRetry(url, headers, retries + 1);
    }
    throw e;
  }
}

async function scrapeClip(id) {
  const url = `https://reflix.dev/en/clip/${id}`;
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'RSC': '1'
  };

  const text = await fetchWithRetry(url, headers);
  
  const clipIndex = text.indexOf('"clip":{"id":"');
  if (clipIndex !== -1) {
    let bracketCount = 1;
    let cursor = clipIndex + '"clip":{'.length;
    let jsonStr = '{';
    while (bracketCount > 0 && cursor < text.length) {
      const char = text[cursor];
      if (char === '{') bracketCount++;
      if (char === '}') bracketCount--;
      jsonStr += char;
      cursor++;
    }
    
    try {
      const clipObj = JSON.parse(jsonStr);
      if (clipObj && clipObj.name) {
        return {
          id: clipObj.id,
          name: clipObj.name,
          category: clipObj.category || (clipObj.folders && clipObj.folders[0]) || 'other',
          tags: clipObj.tags || [],
          duration: clipObj.duration || 0,
          width: clipObj.width || 1280,
          height: clipObj.height || 720
        };
      }
    } catch (e) {
      // Fallback
    }
  }

  // Fallback regex parsing
  const nameMatch = text.match(/"name":"(.*?)"/);
  const durationMatch = text.match(/"duration":([\d.]+)/);
  const widthMatch = text.match(/"width":(\d+)/);
  const heightMatch = text.match(/"height":(\d+)/);
  const tagsMatch = text.match(/"tags":(\[.*?\])/);
  const foldersMatch = text.match(/"folders":(\[.*?\])/);

  let tags = [];
  try { if (tagsMatch) tags = JSON.parse(tagsMatch[1]); } catch(e) {}

  let folders = [];
  try { if (foldersMatch) folders = JSON.parse(foldersMatch[1]); } catch(e) {}

  if (nameMatch) {
    return {
      id,
      name: nameMatch[1],
      category: folders[0] || 'other',
      tags: tags,
      duration: durationMatch ? parseFloat(durationMatch[1]) : 0,
      width: widthMatch ? parseInt(widthMatch[1]) : 1280,
      height: heightMatch ? parseInt(heightMatch[1]) : 720
    };
  }

  throw new Error("Could not parse clip details");
}

async function run() {
  console.log("Loading folder index to collect all video IDs...");
  const indexRes = await fetch('https://reflix.dev/data/browse/folder-index-character.json');
  const indexData = await indexRes.json();
  
  // Extract and deduplicate all IDs
  const allIds = Array.from(new Set(Object.values(indexData).flat()));
  console.log(`Total video IDs found in index: ${allIds.length}`);

  // Load existing progress
  let scrapedData = {};
  if (fs.existsSync(PROGRESS_FILE)) {
    try {
      scrapedData = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf8'));
      // Clean out any bad entries that contain the placeholder Next.MetadataOutlet
      Object.keys(scrapedData).forEach(id => {
        if (scrapedData[id].name === 'Next.MetadataOutlet') {
          delete scrapedData[id];
        }
      });
      console.log(`Resuming scrape. Already scraped (cleaned): ${Object.keys(scrapedData).length}/${allIds.length}`);
    } catch (e) {
      console.log("Progress file corrupted, starting fresh.");
    }
  }

  const remainingIds = allIds.filter(id => !scrapedData[id]);
  console.log(`Remaining IDs to scrape: ${remainingIds.length}`);

  if (remainingIds.length === 0) {
    console.log("Scrape already complete!");
    return;
  }

  console.log("Starting scraper queue...");
  
  let activeCount = 0;
  let index = 0;
  let completed = Object.keys(scrapedData).length;

  const saveInterval = setInterval(() => {
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(scrapedData, null, 2));
    console.log(`[Backup Saved] Total progress: ${completed}/${allIds.length}`);
  }, 10000);

  const scrapeNext = async () => {
    if (index >= remainingIds.length) return;
    const id = remainingIds[index++];
    activeCount++;

    try {
      // Add random delay to jitter requests
      await new Promise(r => setTimeout(r, Math.random() * DELAY_MS));
      const clip = await scrapeClip(id);
      scrapedData[id] = clip;
      completed++;
      console.log(`[${completed}/${allIds.length}] Scraped: ${clip.name} (${id})`);
    } catch (e) {
      console.error(`[Failed ID ${id}]:`, e.message);
    } finally {
      activeCount--;
      // Trigger next item
      scrapeNext();
    }
  };

  // Start initial worker pool
  const workers = [];
  const poolSize = Math.min(CONCURRENCY, remainingIds.length);
  for (let i = 0; i < poolSize; i++) {
    workers.push(scrapeNext());
  }

  // Wait for all active workers to exhaust the list
  while (activeCount > 0) {
    await new Promise(r => setTimeout(r, 1000));
  }

  clearInterval(saveInterval);
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(scrapedData, null, 2));
  console.log(`\n=== SCRAPING COMPLETE! ===\nTotal items scraped: ${completed}/${allIds.length}`);
}

run().catch(e => {
  console.error("Critical error:", e.message);
});
