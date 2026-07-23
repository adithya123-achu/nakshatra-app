import ChartReport from "../models/ChartReport.js";

// -----------------------------------------
// Get All Reports
// -----------------------------------------

export const getUserHistory = async (req, res) => {
  try {

    const reports = await ChartReport.find({
      user: req.user._id,
    })
      .populate("birthDetails")
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      count: reports.length,
      data: reports,
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch history.",
    });

  }
};

// -----------------------------------------
// Get Single Report
// -----------------------------------------

export const getHistoryById = async (req, res) => {
  try {

    const report = await ChartReport.findOne({
      _id: req.params.id,
      user: req.user._id,
    }).populate("birthDetails");

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: report,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// -----------------------------------------
// Delete Report
// -----------------------------------------

export const deleteHistory = async (req, res) => {
  try {

    const report = await ChartReport.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!report) {
      return res.status(404).json({
        success: false,
        message: "Report not found.",
      });
    }

    res.json({
      success: true,
      message: "Report deleted successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};