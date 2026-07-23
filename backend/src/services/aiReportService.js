import { GoogleGenAI } from "@google/genai";
import env from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

// -------------------------------
// Local Fallback Report
// -------------------------------

const localReport = (numerology) => {
  const reports = {
    1: {
      career:
        "You are a born leader. Careers in management, entrepreneurship, technology and administration suit you.",
      love:
        "You are loyal, independent and protective in relationships.",
      finance:
        "Financial success comes through discipline and long-term planning.",
      health:
        "Maintain a healthy lifestyle and avoid unnecessary stress.",
      personality:
        "Confident, ambitious and courageous.",
      spirituality:
        "Meditation and Surya worship strengthen your inner balance.",
      yearlyPrediction:
        "A year filled with career growth and new opportunities."
    },

    2: {
      career:
        "Teaching, counselling, design and diplomacy are favourable.",
      love:
        "Communication strengthens your relationships.",
      finance:
        "Avoid emotional spending.",
      health:
        "Maintain digestive health.",
      personality:
        "Sensitive and intuitive.",
      spirituality:
        "Moon meditation is beneficial.",
      yearlyPrediction:
        "Relationships improve steadily."
    },

    default: {
      career:
        "Consistent effort will bring success.",
      love:
        "Patience improves relationships.",
      finance:
        "Practice disciplined saving.",
      health:
        "Maintain regular exercise.",
      personality:
        "Hardworking and adaptable.",
      spirituality:
        "Meditation strengthens your mind.",
      yearlyPrediction:
        "Gradual growth throughout the year."
    }
  };

  return reports[numerology.mulank] || reports.default;
};

// -------------------------------
// Gemini AI Report
// -------------------------------

export const generateAIReport = async (
  numerology,
  astrology = {}
) => {

  try {

    console.log("Generating Gemini AI Report...");

    const prompt = `
You are a professional Vedic astrologer and numerologist.

Generate ONLY valid JSON.

Numerology:

Mulank: ${numerology.mulank}
Bhagyank: ${numerology.bhagyank}
Ruling Planet: ${numerology.rulingPlanet}

Astrology:

Nakshatra: ${astrology.nakshatra || ""}
Rashi: ${astrology.rashi || ""}

Return:

{
"career":"",
"love":"",
"finance":"",
"health":"",
"personality":"",
"spirituality":"",
"yearlyPrediction":""
}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: prompt,
    });

    const text = result.text.trim();

    console.log(text);

    return JSON.parse(text);

  } catch (error) {

    console.log("Gemini unavailable. Using local AI report.");

    return localReport(numerology);

  }

};

// ======================================
// Generate Daily Horoscope
// ======================================

export const generateDailyHoroscope = async (
  birthDetails,
  numerology,
  astrology,
  aiReport
) => {

  try {

    console.log("Generating Daily Horoscope...");

    const prompt = `
You are an expert Vedic astrologer.

Today's Date:
${new Date().toDateString()}

Name:
${birthDetails.fullName}

DOB:
${birthDetails.dateOfBirth}

Time:
${birthDetails.timeOfBirth}

Place:
${birthDetails.placeOfBirth}

Mulank:
${numerology.mulank}

Bhagyank:
${numerology.bhagyank}

Nakshatra:
${astrology.nakshatra}

Rashi:
${astrology.rashi}

Generate ONLY today's horoscope.

Return ONLY this JSON:

{
"energy":"",
"career":"",
"love":"",
"finance":"",
"health":"",
"spiritual":"",
"luckyColor":"",
"luckyNumber":"",
"luckyTime":"",
"affirmation":""
}

Only JSON.
`;

    const result = await ai.models.generateContent({

      model: "gemini-2.5-flash-lite",

      contents: prompt,

    });

    const text = result.text.trim();

    console.log("========== DAILY HOROSCOPE ==========");
    console.log(text);

    return JSON.parse(text);

  }

  catch (error) {

    console.log("========== HOROSCOPE ERROR ==========");
    console.error(error);

    return {

      energy:
        "Today brings positive cosmic energy. Stay calm and focused.",

      career:
        "Stay focused on your current responsibilities and avoid distractions.",

      love:
        "Open communication will strengthen your relationships.",

      finance:
        "Avoid impulsive purchases and plan your expenses wisely.",

      health:
        "Take care of your sleep and stay hydrated.",

      spiritual:
        "Meditation and gratitude will keep your mind peaceful.",

      luckyColor:
        numerology.luckyColor,

      luckyNumber:
        numerology.luckyNumber,

      luckyTime:
        "10:00 AM - 12:00 PM",

      affirmation:
        "I welcome positivity, confidence, and success into my life."

    };

  }

};