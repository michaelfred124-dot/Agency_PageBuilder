import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = join(__dirname, '..', 'public', 'screenshots');
mkdirSync(outputDir, { recursive: true });

const SITES = [
  { id: 'easy-does-it',            path: '/work/easy-does-it' },
  { id: 'lauren-wilson',           path: '/work/lauren-wilson-photo' },
  { id: 'greenscape-landscaping',  path: '/work/greenscape-landscaping' },
  { id: 'northwood-coffee',        path: '/work/northwood-coffee' },
  { id: 'brighter-solar',          path: '/work/brighter-solar' },
  { id: 'sterling-law',            path: '/work/sterling-law-group' },
  { id: 'ridge-line-auto',         path: '/work/ridge-line-auto' },
  { id: 'atelier-hair',            path: '/work/atelier-hair-studio' },
  { id: 'meridian-properties',     path: '/work/meridian-properties' },
  { id: 'iron-edge-fitness',       path: '/work/iron-edge-fitness' },
  { id: 'clarity-dental',          path: '/work/clarity-dental' },
  { id: 'paws-pamper',             path: '/work/paws-and-pamper' },
  { id: 'golden-thread',           path: '/work/golden-thread-events' },
  { id: 'spotless-home',           path: '/work/spotless-home-co' },
  { id: 'solstice-yoga',           path: '/work/solstice-yoga' },
  { id: 'valley-prohome',          path: '/work/valley-prohome' },
  { id: 'maison-boutique',         path: '/work/maison-boutique' },
];

const BASE_URL = 'http://localhost:3000';
const VIEWPORT = { width: 1440, height: 900 };

async function run() {
  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: 1,
  });

  for (const { id, path } of SITES) {
    const page = await context.newPage();
    const url = `${BASE_URL}${path}`;
    console.log(`📸 Screenshotting ${id} at ${url}`);

    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
      // Wait for images to load
      await page.waitForTimeout(1500);

      const outPath = join(outputDir, `${id}.jpg`);
      // Clip to viewport (not full-page) for a "above the fold" hero shot
      await page.screenshot({
        path: outPath,
        type: 'jpeg',
        quality: 88,
        clip: { x: 0, y: 0, width: VIEWPORT.width, height: VIEWPORT.height },
      });
      console.log(`  ✅ Saved → public/screenshots/${id}.jpg`);
    } catch (err) {
      console.error(`  ❌ Failed for ${id}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log('\n✅ All screenshots done!');
}

run();
