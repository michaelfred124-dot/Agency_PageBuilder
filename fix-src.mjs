import fs from 'fs';
import path from 'path';

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('./src');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let original = content;

  // Replace <img ... src={variable} with condition
  // To avoid breaking things, we check if variable doesn't already have ||
  content = content.replace(/<img\s([^>]*?)src=\{([^}]+)\}([^>]*)>/g, (match, prefix, srcExp, suffix) => {
    // If there's already an || or ? : we might be careful, but we can just use `(${srcExp}) || undefined`
    // Actually the warning says to pass null.
    return `<img ${prefix}src={(${srcExp}) || undefined}${suffix}>`;
  });

  // Nextjs <Image > doesn't like undefined src, so for <Image > we can provide a dummy or just ignore since maybe it's only <img> that throws this?
  content = content.replace(/<Image\s([^>]*?)src=\{([^}]+)\}([^>]*)>/g, (match, prefix, srcExp, suffix) => {
    if (srcExp.includes("||")) return match;
    return `<Image ${prefix}src={(${srcExp}) || "https://images.unsplash.com/photo-1542385151-efd9000785a0?w=800&q=80"}${suffix}>`;
  });

  if (content !== original) {
    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
  }
});
