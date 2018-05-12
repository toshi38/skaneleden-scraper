//Calculate the distances for segments
import calcDistance from 'gps-distance';

//calculate the distance for one section:
export function calculateSectionDistance(section) {
  if ( !section.geo
    || !section.geo.data
    || !section.geo.data[0]
    || !section.geo.data[0].geo_json
    || !section.geo.data[0].geo_json.geometry
    || !section.geo.data[0].geo_json.geometry.coordinates
  ) {
    console.error("section does not have geo data");
    throw "Section does not have geo data";
  }

  //Create a temp array with [lat,long] instead of [long,lat]
  let temp = section.geo.data[0].geo_json.geometry.coordinates.map(([long,lat,]) => ([lat,long,]));

  return calcDistance(temp).toFixed(2);
}
