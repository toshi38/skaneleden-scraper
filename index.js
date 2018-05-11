// This code is used to scrape tracks, segments, and gps points from skaneleden.se.
import scrapeData from './scrape';
const OUTFILE = "data.json";

scrapeData(OUTFILE);
