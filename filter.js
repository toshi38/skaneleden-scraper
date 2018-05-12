import fs from 'fs';

//Selects the data we want from the data augmented with distance
function selectData(data) {
  return data.map(track => ({
    name: track.name,
    slug: track.slug,
    segments: track.trackSegmentsWithGeo.map(segment => ({
      name: segment.name,
      slug: segment.slug,
      lengthKm: segment.lengthKm,
    })),
  }));
}

export default function filterDataFile(inFile, outFile) {
  let data = require(`./${inFile}`);

  let filteredData = selectData(data);

  let jsonString = JSON.stringify(filteredData, null, 2);
  fs.writeFileSync(outFile, jsonString);
}
