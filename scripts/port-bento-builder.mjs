import fs from 'fs';
import path from 'path';

const srcDir = 'C:\\Users\\micha\\Downloads\\glass-website-builder\\src';
const destDir = 'c:\\Users\\micha\\OneDrive\\Documents\\Github\\Michaelfred designs\\Michaelfreddesigns_Agency\\src';

const fileMappings = [
  {
    src: 'components/WidgetRenderer.tsx',
    dest: 'components/BentoWidgetRenderer.tsx'
  },
  {
    src: 'components/Canvas.tsx',
    dest: 'components/BentoCanvas.tsx'
  },
  {
    src: 'components/FloatingEditor.tsx',
    dest: 'components/BentoFloatingEditor.tsx'
  },
  {
    src: 'components/CartDrawer.tsx',
    dest: 'components/BentoCartDrawer.tsx'
  },
  {
    src: 'components/BioSection.tsx',
    dest: 'components/BentoBioSection.tsx'
  }
];

function transformContent(content, srcFilePath) {
  // Replace imports to match the new locations
  let res = content;
  
  // Replace store imports
  res = res.replace(/from '\.\.\/store'/g, "from '../lib/bentoStore'");
  res = res.replace(/from '\.\/store'/g, "from '../lib/bentoStore'");
  
  // Replace types imports
  res = res.replace(/from '\.\.\/types'/g, "from '../types/bento'");
  res = res.replace(/from '\.\/types'/g, "from '../types/bento'");
  
  // Replace utility imports
  res = res.replace(/from '\.\.\/utils\/grid'/g, "from '../utils/bentoGrid'");
  res = res.replace(/from '\.\/utils\/grid'/g, "from '../utils/bentoGrid'");
  res = res.replace(/from '\.\.\/utils\/collision'/g, "from '../utils/bentoCollision'");
  
  // Replace relative sibling component imports
  res = res.replace(/from '\.\/WidgetRenderer'/g, "from './BentoWidgetRenderer'");
  res = res.replace(/from '\.\/FloatingEditor'/g, "from './BentoFloatingEditor'");
  res = res.replace(/from '\.\/BioSection'/g, "from './BentoBioSection'");
  res = res.replace(/from '\.\/CartDrawer'/g, "from './BentoCartDrawer'");
  res = res.replace(/from '\.\/Canvas'/g, "from './BentoCanvas'");
  
  // Replace store context hook names if any
  res = res.replace(/useAppContext/g, "useBentoContext");
  
  return res;
}

function main() {
  for (const map of fileMappings) {
    const srcPath = path.join(srcDir, map.src);
    const destPath = path.join(destDir, map.dest);
    
    if (fs.existsSync(srcPath)) {
      const originalContent = fs.readFileSync(srcPath, 'utf-8');
      const transformed = transformContent(originalContent, map.src);
      fs.writeFileSync(destPath, transformed, 'utf-8');
      console.log(`Ported & Transformed: ${map.src} -> ${map.dest}`);
    } else {
      console.warn(`Source file not found: ${srcPath}`);
    }
  }
}

main();
