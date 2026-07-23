import { getSiderealMoonLongitude } from "./longitudeService.js";

/**
 * Real Planet Calculator (Phase 1)
 * --------------------------------
 * Currently calculates ONLY the Moon.
 * Other planets still use placeholder values until Phase 2.
 */

export const calculatePlanets = async (birthData) => {

  const moonLongitude = getSiderealMoonLongitude(birthData);

  return {

    sun: {
      longitude: 142.35,
    },

    moon: {
      longitude: moonLongitude,
    },

    mercury: {
      longitude: 155.21,
    },

    venus: {
      longitude: 87.64,
    },

    mars: {
      longitude: 201.83,
    },

    jupiter: {
      longitude: 42.56,
    },

    saturn: {
      longitude: 315.41,
    },

  };

};