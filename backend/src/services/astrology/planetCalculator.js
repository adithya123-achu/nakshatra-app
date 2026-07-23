import { normalizeLongitude } from "./astroUtils.js";
import { createBirthDateTime } from "./timeService.js";
import { getSiderealMoonLongitude } from "./longitudeService.js";

export const calculatePlanets = async (birthData) => {

  // Use centralized time service
  const birthDateTime = createBirthDateTime(birthData);

  console.log(
    "Planet calculation requested for:",
    birthDateTime.toISOString()
  );

  // ------------------------------------------
  // REAL MOON LONGITUDE
  // ------------------------------------------

  const realMoonLongitude = getSiderealMoonLongitude(birthData);

  console.log("🌙 Real Sidereal Moon Longitude:", realMoonLongitude);

  // ------------------------------------------
  // Temporary planets
  // (Moon is now REAL)
  // ------------------------------------------

  const samplePlanets = {
    sun: 142.35,
    moon: realMoonLongitude,
    mercury: 155.21,
    venus: 87.64,
    mars: 201.83,
    jupiter: 42.56,
    saturn: 315.41,
  };

  const result = {};

  for (const [planet, longitude] of Object.entries(samplePlanets)) {

    result[planet] = {
      longitude: normalizeLongitude(longitude),
    };

  }

  return result;

};