const fs = require('fs');

const paths = [
  'src/lib/blocks.tsx',
  'src/lib/blocks/northwood.tsx',
  'src/lib/blocks/greenscape.tsx',
  'src/lib/blocks/lauren.tsx',
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  // replace container mx-auto
  content = content.replace(/\bcontainer mx-auto\b/g, 'w-full max-w-7xl mx-auto');
  // replace media queries with container queries
  content = content.replace(/\b(sm|md|lg|xl|2xl):/g, '@$1:');
  fs.writeFileSync(p, content, 'utf8');
});

console.log('Done replacement');
