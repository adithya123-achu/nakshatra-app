import { generateAstrologyData } from "../services/astrologyService.js";
import BirthDetails from "../models/BirthDetails.js";
import { saveChartReport } from "../services/chartReportService.js";

export const generateAstrologyReport = async (req, res) => {
  try {

    // ----------------------------------
    // Generate Complete Report
    // ----------------------------------

    const report = await generateAstrologyData(req.body);

    console.log("\n================ FINAL REPORT ================\n");
    console.log(JSON.stringify(report, null, 2));
    console.log("\n==============================================\n");

    // ----------------------------------
    // Find Latest Birth Details
    // ----------------------------------

    const birthDetails = await BirthDetails.findOne({
      user: req.user._id,
    }).sort({ createdAt: -1 });

    if (!birthDetails) {

      console.log("⚠ BirthDetails not found.");

      return res.status(404).json({
        success: false,
        message: "Birth details not found.",
      });

    }

    // ----------------------------------
    // Save Report
    // ----------------------------------

    const savedReport = await saveChartReport({
      userId: req.user._id,
      birthDetailsId: birthDetails._id,
      report,
    });

    console.log("\n================ SAVED REPORT ================\n");
    console.log(JSON.stringify(savedReport, null, 2));
    console.log("\n==============================================\n");

    res.status(200).json(report);

  } catch (error) {

    console.error("Astrology Report Error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate astrology report.",
      error: error.message,
    });

  }
};