//Calculate the distances for segments
import calcDistance from 'gps-distance';

//calculate the distance for one section:
export function calculateSectionDistance(section) {
  let coordinates;
  if ( !section.geo
    || !section.geo.data
    || !section.geo.data[0]
    || !section.geo.data[0].geo_json
    || !section.geo.data[0].geo_json.geometry
    || !section.geo.data[0].geo_json.geometry.coordinates
  ) {
    console.warn("section does not have geo_json data... checking for line");

    //Look in line instead:
    if ( !section.geo
      || !section.geo.data
      || !section.geo.data[0]
      || !section.geo.data[0].line
      || !section.geo.data[0].line.geometry
      || !section.geo.data[0].line.geometry.coordinates
    ) {
      console.error("Section does not have line or geo data!");
      throw "Section does not have line or geo_json data!";
    } else {
      //Use line:
      coordinates = section.geo.data[0].line.geometry.coordinates;
    }
  } else {
    //Use geo_data
    coordinates = section.geo.data[0].geo_json.geometry.coordinates;
  }

  //Coordinates have been paged:
  if(Array.isArray(coordinates[0][0])) {
    //Flatten one level
    coordinates = coordinates.reduce((acc, val) => acc.concat(val), []);
  }

  //Create a temp array with [lat,long] instead of [long,lat]
  let temp = coordinates.map(([long,lat,]) => ([lat,long,]));

  return calcDistance(temp);
}

  return calcDistance(temp).toFixed(2);
}
