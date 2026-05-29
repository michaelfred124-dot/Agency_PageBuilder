import fs from 'fs';
import path from 'path';

function fixUseClient(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  if (content.includes('"use client"') || content.includes("'use client'")) {
    content = content.replace(/"use client";?\n?/g, '');
    content = content.replace(/'use client';?\n?/g, '');
    content = `"use client";\n` + content;
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
      fixUseClient(filePath);
    }
  }
}

walkDir('./src/components');
walkDir('./src/lib/blocks');
