import fs from 'fs';
import path from 'path';

function fixImports(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  if (content.includes('<Image') && !content.includes('next/image')) {
    content = `import Image from 'next/image';\n` + content;
  }
  
  if (content.includes('<Link') && !content.includes('next/link')) {
    content = `import Link from 'next/link';\n` + content;
  }

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
      fixImports(filePath);
    }
  }
}

walkDir('./src/components');
walkDir('./src/lib/blocks');
