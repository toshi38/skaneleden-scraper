// This code is used to scrape tracks, segments, and gps points from skaneleden.se.

import {getSkaneledenService,} from "./skaneledenService";
import Promise from 'bluebird';
import fs from 'fs';

const OUTFILE = "data.json";

//Use this function to scrape all data from the website.
function scrapeData() {
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
      console.log(`Data extracted!  ...Writing to ${OUTFILE}`);
      let jsonString = JSON.stringify(tracksAndSegments, null, 2);
      fs.writeFileSync(OUTFILE, jsonString);
    });
}

scrapeData();
