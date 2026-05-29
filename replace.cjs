const fs = require('fs');
// no glob

const paths = [
  'src/lib/blocks.tsx',
  'src/lib/blocks/northwood.tsx',
  'src/lib/blocks/greenscape.tsx',
  'src/lib/blocks/lauren.tsx',
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  // replace regex for classes starting with sm:, md:, lg:, xl:, 2xl:
  // We need to only match word boundary, then sm: etc.
  // Example: className="md:w-1/2" -> className="@md:w-1/2"
  content = content.replace(/\b(sm|md|lg|xl|2xl):/g, '@$1:');
  fs.writeFileSync(p, content, 'utf8');
});

console.log('Done replacement');
