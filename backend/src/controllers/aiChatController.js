import ChartReport from "../models/ChartReport.js";
import DailyHoroscope from "../models/DailyHoroscope.js";
import { askAstrologer } from "../services/aiChatService.js";

export const chatWithAstrologer = async (req, res) => {
  try {

    const { question } = req.body;

    if (!question || question.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Question is required.",
      });
    }

    // ---------------------------------------
    // Load latest astrology report
    // ---------------------------------------

    const report = await ChartReport.findOne({
      user: req.user._id,
    })
      .populate("birthDetails")
      .sort({ createdAt: -1 });

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Astrology report not found.",
      });
    }

    // ---------------------------------------
    // Load Today's Horoscope
    // ---------------------------------------

    const today = new Date().toISOString().split("T")[0];

    const daily = await DailyHoroscope.findOne({
      user: req.user._id,
      date: today,
    });

    const dailyHoroscope = daily ? daily.horoscope : {};

    // ---------------------------------------
    // Ask Gemini
    // ---------------------------------------

    const answer = await askAstrologer({
      birthDetails: report.birthDetails,
      numerology: report.numerology,
      astrology: report.astrology,
      planets: report.planets,
      houses: report.houses,
      aiReport: report.aiReport,
      dailyHoroscope,
      question,
    });

    return res.json({
      success: true,
      answer,
    });

  } catch (error) {

    console.error("AI Chat Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to get AI response.",
    });

  }
};