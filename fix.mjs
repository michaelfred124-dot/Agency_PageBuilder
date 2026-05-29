import fs from 'fs';
import path from 'path';

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // fix the broken tags: `/ fill />` -> `fill />`
  // also `/ width=` -> `width=`
  content = content.replace(/\/\s*fill\s*\/>/g, 'fill />');
  content = content.replace(/\/\s*width=({[^}]+})\s*height=({[^}]+})\s*\/>/g, 'width=$1 height=$2 />');
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      fixFile(filePath);
    }
  }
}

walkDir('./src/components');
walkDir('./src/lib/blocks');
