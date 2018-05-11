import autoBind from 'auto-bind';
import rp from 'request-promise';

//Borrowed from skaneleden.se :) :
const API_TOKEN = "eyJpdiI6Ikc5WVBxSlhpb0w0R3VXZzN2SVJ4eXc9PSIsInZhbHVlIjoiWWpackg5TSs2VTV6a2pmTW9yelZZckZ0dkc3YzJneWxvSVgrN1JvTHV0T3RWMUplYWNGdk5JaDRTUjJMaisrQiIsIm1hYyI6ImYwYjAwMzNkYzQ2NjljMTMzYmQwODlmNjU4YWI4ZTMxNzFiMWEyMmVlOWNmMDJlMGE1OTEwMDRiNTRkMWI0NmQifQ==";
const ENDPOINT = "https://www.skaneleden.se/api/v2";
const TRAIL_NAME = 'skaneleden';

const TRACK_PATH = "tracks";

class SkaneledenService {
  constructor() {
    autoBind(this);
  }

  getAllTrackDetails(offset, first) {
    return rp({
      url: `${ENDPOINT}/${TRACK_PATH}`,
      qs: {
        token: API_TOKEN,
        offset,
        limit: first,
        areas: TRAIL_NAME,
      },
      json: true,
    });
  }

  getAllTrackField(field, offset, first) {
    return this.getAllTrackDetails(offset, first)
      .then(result => result.data.items.map(t => t[field]));
  }

  getAllTrackSlugs(offset, first) {
    return this.getAllTrackField("slug");
  }
}

let skaneledenService = new SkaneledenService();

export function getSkaneledenService() {
  return skaneledenService;
}

export function setSkaneledenService(mock) {
  skaneledenService = mock;
}
