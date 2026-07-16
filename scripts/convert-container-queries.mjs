import fs from 'fs';
import path from 'path';

const blocksDir = path.join(process.cwd(), 'src', 'lib', 'blocks');

const replacements = [
  { from: /(["'\s])sm:/g, to: '$1@sm:' },
  { from: /(["'\s])md:/g, to: '$1@md:' },
  { from: /(["'\s])lg:/g, to: '$1@lg:' },
  { from: /(["'\s])xl:/g, to: '$1@xl:' },
  { from: /(["'\s])2xl:/g, to: '$1@2xl:' }
];

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let original = content;

  for (const rep of replacements) {
    content = content.replace(rep.from, rep.to);
  }

  if (content !== original) {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(`Processed: ${path.basename(filePath)}`);
  }
}

function main() {
  const files = fs.readdirSync(blocksDir);
  for (const file of files) {
    if (file.endsWith('.tsx')) {
      processFile(path.join(blocksDir, file));
    }
  }
  console.log('Finished converting media queries to container queries.');
}

main();
