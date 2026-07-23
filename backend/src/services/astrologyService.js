import { calculateNumerology } from "./numerologyService.js";
import { calculateAstrology } from "./astrology/astrologyEngine.js";
import { generateAIReport } from "./aiReportService.js";

export const generateAstrologyData = async (birthData) => {

  // -----------------------------
  // Numerology
  // -----------------------------

  const numerology = calculateNumerology(birthData);

  // -----------------------------
  // Astrology Engine
  // -----------------------------

  const astrologyData = await calculateAstrology(
    birthData
  );

  // -----------------------------
  // Gemini AI Report
  // -----------------------------

  const aiReport = await generateAIReport(
    numerology,
    astrologyData
  );

  // -----------------------------
  // Final Response
  // -----------------------------

  return {

    birthDetails: {
      fullName: birthData.fullName,
      dateOfBirth: birthData.dateOfBirth,
      timeOfBirth: birthData.timeOfBirth,
      placeOfBirth: birthData.placeOfBirth,
    },

    numerology: {
      mulank: numerology.mulank,
      bhagyank: numerology.bhagyank,
      rulingPlanet: numerology.rulingPlanet,
      luckyColor: numerology.luckyColor,
      luckyDay: numerology.luckyDay,
      luckyNumber: numerology.luckyNumber,
      personality: numerology.personality,
    },

    astrology: {
      nakshatra: astrologyData.nakshatra,
      rashi: astrologyData.rashi,
      moonSign: astrologyData.moonSign,
    },

    planets: astrologyData.planets,

    houses: astrologyData.houses,

    aiReport,

  };

};