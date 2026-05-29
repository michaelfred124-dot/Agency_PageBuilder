const fs = require('fs');

const paths = [
  'src/lib/blocks.tsx',
  'src/lib/blocks/northwood.tsx',
  'src/lib/blocks/greenscape.tsx',
  'src/lib/blocks/lauren.tsx',
];

paths.forEach(p => {
  let content = fs.readFileSync(p, 'utf8');
  
  // Make paddings and text more responsive
  content = content.replace(/className="([^"]*\b)py-24(\b[^"]*)"/g, 'className="$1py-16 @md:py-24$2"');
  content = content.replace(/className="([^"]*\b)py-20(\b[^"]*)"/g, 'className="$1py-12 @md:py-20$2"');
  content = content.replace(/className="([^"]*\b)py-32(\b[^"]*)"/g, 'className="$1py-20 @md:py-32$2"');
  content = content.replace(/className="([^"]*\b)p-12(\b[^"]*)"/g, 'className="$1p-8 @md:p-12$2"');
  content = content.replace(/className="([^"]*\b)gap-12(\b[^"]*)"/g, 'className="$1gap-8 @md:gap-12$2"');
  content = content.replace(/className="([^"]*\b)gap-16(\b[^"]*)"/g, 'className="$1gap-10 @md:gap-16$2"');
  content = content.replace(/text-5xl @md:text-7xl/g, 'text-4xl @sm:text-5xl @md:text-7xl');
  content = content.replace(/text-4xl @md:text-5xl/g, 'text-3xl @sm:text-4xl @md:text-5xl');
  content = content.replace(/text-5xl @md:text-6xl/g, 'text-4xl @sm:text-5xl @md:text-6xl');
  
  // Fix specific overlaps if any
  content = content.replace(/@lg:p-20/g, '@lg:p-16');

  // Any explicit absolute buttons or elements that could overlap should have proper z-index or spacing
  
  fs.writeFileSync(p, content, 'utf8');
});

console.log('Done replacement');
