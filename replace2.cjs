const fs = require('fs');

const paths = [
  'src/lib/blocks.tsx',
  'src/lib/blocks/northwood.tsx',
  'src/lib/blocks/greenscape.tsx',
  'src/lib/blocks/lauren.tsx',
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  content = content.replace(/@(sm|md|lg|xl|2xl):/g, '$1:');
  fs.writeFileSync(p, content, 'utf8');
});

console.log('Done replacement');
