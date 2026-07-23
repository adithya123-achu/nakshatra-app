import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
});

async function test() {
  try {
    console.log("API Key Loaded:", !!process.env.GEMINI_API_KEY);

    const result = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: "Say Hello",
    });

    console.log(result.text);

  } catch (err) {
    console.log("ERROR");
    console.log(err.message);

    if (err.response?.data) {
      console.log(err.response.data);
    }
  }
}

test();