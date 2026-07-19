const fs = require('fs');
const path = require('path');

const text = fs.readFileSync(path.join(__dirname, 'clip_payload.txt'), 'utf8');
const id = 'L3TR52T22TPVR';

let pos = text.indexOf(id);
let count = 0;
while (pos !== -1) {
  count++;
  console.log(`\nOccurrence ${count} at index ${pos}:`);
  console.log(text.substring(pos - 100, pos + 300));
  pos = text.indexOf(id, pos + 1);
}
