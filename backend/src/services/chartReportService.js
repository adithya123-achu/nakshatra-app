import ChartReport from "../models/ChartReport.js";

export const saveChartReport = async ({
  userId,
  birthDetailsId,
  report,
}) => {
  return await ChartReport.create({
    user: userId,
    birthDetails: birthDetailsId,

    numerology: report.numerology,
    astrology: report.astrology,
    planets: report.planets,
    houses: report.houses,
    aiReport: report.aiReport,
  });
};