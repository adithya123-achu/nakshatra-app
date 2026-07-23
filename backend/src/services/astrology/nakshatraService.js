import { NAKSHATRAS } from "./constants.js";

const NAKSHATRA_SIZE = 360 / 27;

export const getNakshatra = (longitude) => {

  // Normalize longitude
  const normalized = ((longitude % 360) + 360) % 360;

  const index = Math.floor(normalized / NAKSHATRA_SIZE);

  const degreeInsideNakshatra =
    normalized % NAKSHATRA_SIZE;

  return {

    name: NAKSHATRAS[index],

    index,

    degree: degreeInsideNakshatra.toFixed(2),

  };

};