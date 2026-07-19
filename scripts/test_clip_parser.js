const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'clip_payload.txt'), 'utf8');

const clipIndex = text.indexOf('"clip":{');
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
    console.log("SUCCESSFULLY PARSED CLIP OBJECT!");
    console.log("ID:", clipObj.id);
    console.log("Name:", clipObj.name);
    console.log("Category:", clipObj.category || (clipObj.folders && clipObj.folders[0]));
    console.log("Tags:", clipObj.tags);
  } catch (e) {
    console.error("Failed to parse JSON substring:", e.message);
  }
} else {
  console.log("Could not find '\"clip\":{' in text");
}
