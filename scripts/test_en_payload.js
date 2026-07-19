const fs = require('fs');
const path = require('path');

async function run() {
  const id = 'L3TR52T22TPVR';
  const url = `https://reflix.dev/en/clip/${id}`;
  
  const res = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'RSC': '1',
      'Accept-Language': 'en-US,en;q=0.9' // explicitly ask for English
    }
  });
  
  const text = await res.text();
  fs.writeFileSync(path.join(__dirname, 'en_payload.txt'), text);
  console.log("Saved en_payload.txt");
  
  const clipIndex = text.indexOf('"clip":{"id":"');
  if (clipIndex !== -1) {
    let bracketCount = 1;
    let cursor = clipIndex + '"clip":{'.length;
    let jsonStr = '{';
    while (bracketCount > 0 && cursor < text.length) {
      const char = text[cursor];
      if (char === '{') bracketCount++;
      if (char === '}') bracketCount--;
      jsonStr += char;
      cursor++;
    }
    
    try {
      const clipObj = JSON.parse(jsonStr);
      console.log("PARSED ENGLISH CLIP:");
      console.log("Name:", clipObj.name);
      console.log("Tags:", clipObj.tags);
    } catch (e) {
      console.error(e.message);
    }
  } else {
    console.log("Clip object not found");
  }
}

run();
