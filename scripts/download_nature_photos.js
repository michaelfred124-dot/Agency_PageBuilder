const fs = require('fs');
const https = require('https');
const path = require('path');

const photos = {
  'public/services_nature_bg.jpg': 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2400',
  'public/features_nature_bg.jpg': 'https://images.unsplash.com/photo-1448375240586-882707db888b?q=80&w=2400',
  'public/portfolio_nature_bg.jpg': 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2400',
  'public/advantages_nature_bg.jpg': 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2400',
  'public/whyus_nature_bg.jpg': 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=2400',
  'public/faq_nature_bg.jpg': 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2400',
  'public/cta_nature_bg.jpg': 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2400'
};

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', reject);
  });
}

async function run() {
  for (const [dest, url] of Object.entries(photos)) {
    console.log('Downloading', dest);
    await download(url, path.resolve(dest));
  }
  console.log('All nature photos downloaded successfully!');
}
run();
