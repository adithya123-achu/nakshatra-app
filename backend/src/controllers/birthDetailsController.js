import BirthDetails from "../models/BirthDetails.js";

export const saveBirthDetails = async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      latitude,
      longitude,
      timezone,
    } = req.body;

    console.log("Incoming Body:", req.body);

    const birthDetails = await BirthDetails.create({
      user: req.user.id,
      fullName,
      dateOfBirth,
      timeOfBirth,
      placeOfBirth,
      latitude: latitude ? Number(latitude) : undefined,
      longitude: longitude ? Number(longitude) : undefined,
      timezone: timezone || "",
    });

    res.status(201).json({
      success: true,
      message: "Birth details saved successfully.",
      data: birthDetails,
    });

  } catch (err) {
    console.error("❌ Birth Details Error:", err);

    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};