import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

const models = [
  "gemini-2.5-flash-lite",
  "gemini-2.5-flash",
  "gemini-2.5-pro",
  "gemini-2.5-pro-preview",
  "gemini-2.5-flash-preview",
  "gemini-2.0-flash",
  "gemini-2.0-flash-lite"
];

for (const model of models) {
  try {
    const result = await ai.models.generateContent({
      model,
      contents: "Say hello",
    });

    console.log("✅ Works:", model);
    console.log(result.text);
  } catch (e) {
    console.log("❌", model, e.status);
  }
}