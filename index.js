// This code is used to scrape tracks, segments, and gps points from skaneleden.se and parse it.


//Scrape site data:
//import scrapeData from './scrape';
// const SCRAPE_OUTFILE = "data-full.json";
// scrapeData(SCRAPE_OUTFILE);


//Add distances to scraped data
// import addDistancesToRawData from './distance_calc';
// const DISTANCE_INFILE = "data-full.json";
// const DISTANCE_OUTFILE = "data_distance.json";
// addDistancesToRawData(DISTANCE_INFILE, DISTANCE_OUTFILE);

//Filter data with distances:
import filterDataFile from './filter';
const FILTER_INFILE = "data_distance.json";
const FILTER_OUTFILE = "data_filtered.json";
filterDataFile(FILTER_INFILE, FILTER_OUTFILE);
