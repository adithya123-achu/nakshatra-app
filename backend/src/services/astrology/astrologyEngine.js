import { getCoordinates } from "./geocodeService.js";
import { calculatePlanets } from "./planetCalculator.js";
import { getRashi } from "./rashiService.js";
import { getNakshatra } from "./nakshatraService.js";
import { formatPlanetPositions } from "./planetFormatter.js";
import { generateHouses } from "./houseService.js";

export const calculateAstrology = async (birthData) => {

  // ------------------------------------------
  // Get Coordinates
  // ------------------------------------------

  const coordinates = await getCoordinates(
    birthData.placeOfBirth
  );

  console.log("Coordinates:", coordinates);

  // ------------------------------------------
  // Calculate Planet Longitudes
  // ------------------------------------------

  const astronomicalPlanets = await calculatePlanets(
    birthData
  );

  console.log(
    "Astronomical Planets:",
    astronomicalPlanets
  );

  // ------------------------------------------
  // Format Planet Data
  // ------------------------------------------

  const formattedPlanets = formatPlanetPositions(
    astronomicalPlanets
  );

  console.log(
    "Formatted Planets:",
    formattedPlanets
  );

  // ------------------------------------------
  // Moon Longitude
  // ------------------------------------------

  const moonLongitude =
    astronomicalPlanets.moon.longitude;

  console.log("====================================");
  console.log("🌙 Moon Longitude used:", moonLongitude);
  console.log(
    "🌙 Moon Planet Object:",
    astronomicalPlanets.moon
  );

  // ------------------------------------------
  // Calculate Rashi
  // ------------------------------------------

  const calculatedRashi =
    getRashi(moonLongitude);

  console.log(
    "♈ Calculated Rashi:",
    calculatedRashi
  );

  // ------------------------------------------
  // Calculate Nakshatra
  // ------------------------------------------

  const calculatedNakshatra =
    getNakshatra(moonLongitude);

  console.log(
    "⭐ Calculated Nakshatra:",
    calculatedNakshatra
  );

  console.log("====================================");

  // ------------------------------------------
  // Return Data
  // ------------------------------------------

  return {

    // These three fields are what astrologyService.js expects
    nakshatra: calculatedNakshatra.name,

    rashi: calculatedRashi.sign,

    moonSign: calculatedRashi.sign,

    // Dashboard
    planets: formattedPlanets,

    houses: generateHouses(),

    coordinates,

    // Debug (optional)
    astronomicalPlanets,

    formattedPlanets,

    calculatedRashi,

    calculatedNakshatra,

  };

};