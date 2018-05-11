//Use this function to scrape all data from the website.
import {getSkaneledenService,} from "./skaneledenService";
import Promise from "bluebird";
import fs from 'fs';

export default function scrapeData(outFile) {
  console.log("Preparing to scrape data...");

  let skaneledenService = getSkaneledenService();

  skaneledenService.getAllTrackDetails()
    .then(detailedTracks => Promise.all(
      detailedTracks.data.items.map(dTI =>
        skaneledenService.getTrackSegmentsDetails(dTI.slug)
          .then(detailedTrackSegments => {
            return Promise.all(
              detailedTrackSegments.data.items.map(dTSI => skaneledenService.getAllTrackSegmentGeo(dTSI.slug)
                .then(geo => ({
                  ...dTSI,
                  geo,
                })
                )
              )
            ).then(trackSegmentsWithGeo => ({
              ...dTI,
              trackSegmentsWithGeo,
            }));
          }))
    ))
    .then(tracksAndSegments => {
      console.log(`Data extracted!  ...Writing to ${outFile}`);
      let jsonString = JSON.stringify(tracksAndSegments, null, 2);
      fs.writeFileSync(outFile, jsonString);
    });
}
