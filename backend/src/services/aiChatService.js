import { GoogleGenAI } from "@google/genai";
import env from "../config/env.js";

const ai = new GoogleGenAI({
  apiKey: env.geminiApiKey,
});

function generateLocalAnswer({
  question,
  numerology,
  astrology,
  aiReport,
  dailyHoroscope,
}) {
  const q = question.toLowerCase();

  if (q.includes("career") || q.includes("job") || q.includes("work")) {
    return `${aiReport.career}

Today's career guidance:
${dailyHoroscope.career || "Stay focused on your goals today."}

Your Mulank ${numerology.mulank} indicates that patience and consistency will bring long-term success.`;
  }

  if (
    q.includes("love") ||
    q.includes("relationship") ||
    q.includes("marriage") ||
    q.includes("partner")
  ) {
    return `${aiReport.love}

Today's guidance:
${dailyHoroscope.love || "Communicate openly with your loved ones."}

Your Nakshatra (${astrology.nakshatra}) suggests emotional balance is your greatest strength.`;
  }

  if (
    q.includes("finance") ||
    q.includes("money") ||
    q.includes("business")
  ) {
    return `${aiReport.finance}

Today's finance:
${dailyHoroscope.finance || "Avoid unnecessary spending today."}

Steady planning will benefit you more than risky investments.`;
  }

  if (q.includes("health")) {
    return `${aiReport.health}

Today's health:
${dailyHoroscope.health || "Take proper rest and stay hydrated."}

Regular exercise and a disciplined routine will keep you energetic.`;
  }

  if (
    q.includes("today") ||
    q.includes("horoscope") ||
    q.includes("today's")
  ) {
    return `Today's Horoscope

Overall:
${dailyHoroscope.overall}

Career:
${dailyHoroscope.career}

Love:
${dailyHoroscope.love}

Finance:
${dailyHoroscope.finance}

Health:
${dailyHoroscope.health}

Lucky Color:
${dailyHoroscope.luckyColor}

Lucky Number:
${dailyHoroscope.luckyNumber}

Lucky Time:
${dailyHoroscope.luckyTime}

Advice:
${dailyHoroscope.advice}`;
  }

  if (
    q.includes("lucky") ||
    q.includes("colour") ||
    q.includes("color") ||
    q.includes("number")
  ) {
    return `Lucky Color: ${dailyHoroscope.luckyColor || numerology.luckyColor}

Lucky Number: ${dailyHoroscope.luckyNumber || numerology.luckyNumber}

Lucky Day: ${numerology.luckyDay}

Lucky Time: ${dailyHoroscope.luckyTime || "Morning"}

Advice:
${dailyHoroscope.advice || "Stay positive today."}`;
  }

  if (q.includes("spiritual")) {
    return `${aiReport.spirituality}

Meditation, gratitude and positive thinking will help you maintain inner peace today.`;
  }

  return `Based on your birth chart:

• Personality:
${aiReport.personality}

• Career:
${aiReport.career}

• Love:
${aiReport.love}

• Finance:
${aiReport.finance}

• Health:
${aiReport.health}

• Spirituality:
${aiReport.spirituality}

Today's Advice:
${dailyHoroscope.advice || "Stay positive and trust your intuition."}

You can ask me specifically about your career, marriage, education, business, finance, health or today's horoscope.`;
}

export const askAstrologer = async ({
  birthDetails,
  numerology,
  astrology,
  planets,
  houses,
  aiReport,
  dailyHoroscope = {},
  question,
}) => {
  try {
    console.log("========== AI CHAT START ==========");

    const prompt = `
You are Nakshatra AI.

Answer naturally as an expert Vedic astrologer.

Birth Details:
${JSON.stringify(birthDetails, null, 2)}

Numerology:
${JSON.stringify(numerology, null, 2)}

Astrology:
${JSON.stringify(astrology, null, 2)}

Planets:
${JSON.stringify(planets, null, 2)}

Houses:
${JSON.stringify(houses, null, 2)}

AI Report:
${JSON.stringify(aiReport, null, 2)}

Today's Horoscope:
${JSON.stringify(dailyHoroscope, null, 2)}

User Question:
${question}
`;

    const result = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return result.text.trim();
  } catch (err) {
    console.log("Gemini unavailable. Using local astrology AI.");

    return generateLocalAnswer({
      question,
      numerology,
      astrology,
      aiReport,
      dailyHoroscope,
    });
  }
};