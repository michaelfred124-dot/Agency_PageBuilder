async function testClipMetadata(id) {
  // Let's try to fetch the individual clip page via Next.js RSC
  const url = `https://reflix.dev/zh-Hant/clip/${id}`;
  console.log(`Testing page for clip ${id}...`);
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'RSC': '1' // request RSC to see raw props
      }
    });
    console.log(`RSC Response Status: ${res.status}`);
    if (res.ok) {
      const text = await res.text();
      console.log(`Payload length: ${text.length}`);
      
      // Let's look for the name in the RSC response
      const nameMatch = text.match(/"name":"(.*?)"/);
      const tagsMatch = text.match(/"tags":(\[.*?\])/);
      if (nameMatch) {
        console.log(`SUCCESS! Found Metadata:`);
        console.log(`- Title: ${nameMatch[1]}`);
        console.log(`- Tags: ${tagsMatch ? tagsMatch[1] : 'none'}`);
        return true;
      }
    }
  } catch (e) {
    console.error(e);
  }
  return false;
}

run();

async function run() {
  // Let's try to fetch folder index first to get a valid ID
  console.log("Fetching folder index...");
  const res = await fetch('https://reflix.dev/data/browse/folder-index-character.json');
  const index = await res.json();
  const folderKeys = Object.keys(index);
  const sampleId = index[folderKeys[0]][0]; // e.g. L3TR52T22TPVR
  
  await testClipMetadata(sampleId);
}
