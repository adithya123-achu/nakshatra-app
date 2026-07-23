import BirthDetails from "../models/BirthDetails.js";
import DailyHoroscope from "../models/DailyHoroscope.js";

import { calculateNumerology } from "../services/numerologyService.js";
import { calculateAstrology } from "../services/astrology/astrologyEngine.js";
import {
  generateAIReport,
  generateDailyHoroscope,
} from "../services/aiReportService.js";

export const getDailyHoroscope = async (req, res) => {
  try {
    const today = new Date().toISOString().split("T")[0];

    // =================================
    // DEVELOPMENT MODE
    // Always regenerate today's horoscope
    // =================================

    // Delete old horoscope (if any)
    await DailyHoroscope.deleteMany({
      user: req.user._id,
      date: today,
    });

    // =================================
    // Load latest Birth Details
    // =================================

    const birthDetails = await BirthDetails.findOne({
      user: req.user._id,
    }).sort({
      createdAt: -1,
    });

    if (!birthDetails) {
      return res.status(404).json({
        success: false,
        message: "Birth details not found.",
      });
    }

    // =================================
    // Build Birth Object
    // =================================

    const birthData = {
      fullName: birthDetails.fullName,
      dateOfBirth: birthDetails.dateOfBirth,
      timeOfBirth: birthDetails.timeOfBirth,
      placeOfBirth: birthDetails.placeOfBirth,
    };

    // =================================
    // Generate Astrology
    // =================================

    const numerology = calculateNumerology(birthData);

    const astrology = await calculateAstrology(birthData);

    const aiReport = await generateAIReport(
      numerology,
      astrology
    );

    // =================================
    // Generate Daily Horoscope
    // =================================

    const horoscope = await generateDailyHoroscope(
      birthData,
      numerology,
      astrology,
      aiReport
    );

    console.log("Today's Horoscope:");
    console.log(horoscope);

    // =================================
    // Save New Horoscope
    // =================================

    await DailyHoroscope.create({
      user: req.user._id,
      date: today,
      horoscope,
    });

    console.log("Today's horoscope saved.");

    return res.json(horoscope);

  } catch (error) {

    console.error("Horoscope Error:", error);

    return res.status(500).json({
      success: false,
      message: "Unable to generate horoscope.",
    });

  }
};