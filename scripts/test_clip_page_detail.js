const fs = require('fs');
const path = require('path');

async function run() {
  const id = 'L3TR52T22TPVR';
  const url = `https://reflix.dev/zh-Hant/clip/${id}`;
  
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'RSC': '1'
    }
  });
  
  const text = await res.text();
  fs.writeFileSync(path.join(__dirname, 'clip_payload.txt'), text);
  console.log("Saved clip_payload.txt");
  
  // Let's find occurrences of JSON-like clip objects:
  // Usually it contains the clip ID or details inside
  const index = text.indexOf(id);
  if (index !== -1) {
    console.log("Found ID index:", index);
    console.log("Snippet:", text.substring(index - 200, index + 800));
  } else {
    console.log("ID not found in text");
  }
}

run();
