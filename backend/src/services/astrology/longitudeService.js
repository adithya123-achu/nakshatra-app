import * as Astronomy from "astronomy-engine";
import { toSiderealLongitude } from "./ayanamsaService.js";

/**
 * Convert birth details into an Astronomy Engine time object.
 */
const createAstroTime = (birthData) => {
  const date = new Date(
    `${birthData.dateOfBirth}T${birthData.timeOfBirth}`
  );

  return new Astronomy.AstroTime(date);
};

/**
 * Get Tropical Moon Longitude
 */
export const getMoonLongitude = (birthData) => {
  const astroTime = createAstroTime(birthData);

  const moonVector = Astronomy.GeoMoon(astroTime);

  const ecliptic = Astronomy.Ecliptic(moonVector);

  return ecliptic.elon;
};

/**
 * Get Sidereal Moon Longitude
 */
export const getSiderealMoonLongitude = (birthData) => {
  const tropicalLongitude = getMoonLongitude(birthData);

  return toSiderealLongitude(tropicalLongitude);
};