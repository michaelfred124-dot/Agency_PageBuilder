import fs from 'fs';
import path from 'path';

function convertFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Add next/image and next/link imports if not present
  if (content.includes('<img ') && !content.includes('import Image from \'next/image\'')) {
    content = content.replace(/(import React\b[^;]*;?)/, "$1\nimport Image from 'next/image';");
  }
  
  if (content.match(/<a href="[^"]*"/)) {
    // If we have anchor tags that should be Links (ignore tel: and mailto:)
    const hasInternalLinks = content.match(/<a href="(?!tel:|mailto:)[^"]*"/);
    if (hasInternalLinks && !content.includes('import Link from \'next/link\'')) {
      content = content.replace(/(import React\b[^;]*;?)/, "$1\nimport Link from 'next/link';");
    }
  }

  // Replace <img ... /> with <Image ... fill /> or width/height if needed
  content = content.replace(/<img\s([^>]+)>/g, (match, attrs) => {
    // Check if it's already an Image or not actually an img
    if (match.startsWith('<Image')) return match;

    let newAttrs = attrs;

    // if no alt, add empty alt to satisfy next/image
    if (!newAttrs.includes('alt=')) {
      newAttrs += ' alt=""';
    }

    // if full width cover is present, add fill
    if ((newAttrs.includes('w-full') && newAttrs.includes('h-full')) || newAttrs.includes('absolute') || newAttrs.includes('inset-0')) {
      if (!newAttrs.includes('fill')) {
        newAttrs += ' fill';
      }
    } else {
      // If it doesn't have fill, it needs width and height. Let's just add generic dimensions or assume fill and adjust classes.
      // But adding generic dimension works for most. Actually 'fill' is safest if there's a relative parent.
      // We will add width={500} height={500} for simple avatars.
      if (newAttrs.includes('w-12') && newAttrs.includes('h-12')) {
         newAttrs += ' width={48} height={48}';
      } else if (newAttrs.includes('w-16') && newAttrs.includes('h-16')) {
         newAttrs += ' width={64} height={64}';
      } else {
         // fallback to fill and add relative to parent if needed manually? No, just add width/height
         if (!newAttrs.includes('fill')) {
            newAttrs += ' width={800} height={600}';
         }
      }
    }

    return `<Image ${newAttrs} />`;
  });

  // Replace <a with <Link
  content = content.replace(/<a\s+href="([^"]+)"([^>]*)>(.*?)<\/a>/gs, (match, href, attrs, inside) => {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http')) {
      return match;
    }
    return `<Link href="${href}"${attrs}>${inside}</Link>`;
  });

  if (content !== originalContent) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
      convertFile(filePath);
    }
  }
}

walkDir('./src/components/templates');
walkDir('./src/lib/blocks');
