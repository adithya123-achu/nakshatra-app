import { getRashi } from "./rashiService.js";

export const formatPlanetPositions = (planetLongitudes) => {

  const formatted = {};

  for (const [planet, data] of Object.entries(planetLongitudes)) {

    const rashi = getRashi(data.longitude);

    formatted[planet] = {

      sign: rashi.sign,

      degree: `${rashi.degree}°`,

      longitude: data.longitude,

    };

  }

  return formatted;

};