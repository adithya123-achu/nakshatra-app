import User from "../models/User.js";
import BirthDetails from "../models/BirthDetails.js";
import bcrypt from "bcryptjs";

// ================= GET PROFILE =================

export const getProfile = async (req, res) => {
  try {
    const birthDetails = await BirthDetails.findOne({
      user: req.user._id,
    });

    const reportsGenerated = await BirthDetails.countDocuments({
      user: req.user._id,
    });

    res.json({
      success: true,
      user: req.user,
      birthDetails,
      stats: {
        reportsGenerated,
        memberSince: req.user.createdAt,
      },
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= UPDATE PROFILE =================

export const updateProfile = async (req, res) => {
  try {

    const { fullName, email } = req.body;

    const user = await User.findById(req.user._id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    user.fullName = fullName || user.fullName;
    user.email = email || user.email;

    await user.save();

    res.json({
      success: true,
      message: "Profile updated successfully.",
      user,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= CHANGE PASSWORD =================

export const changePassword = async (req, res) => {
  try {

    const {
      currentPassword,
      newPassword,
    } = req.body;

    const user = await User.findById(req.user._id);

    const isMatch = await bcrypt.compare(
      currentPassword,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Current password is incorrect.",
      });
    }

    user.password = await bcrypt.hash(newPassword, 10);

    await user.save();

    res.json({
      success: true,
      message: "Password changed successfully.",
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

// ================= UPDATE BIRTH DETAILS =================

export const updateBirthDetails = async (req, res) => {
  try {

    const {
      fullName,
      birthDate,
      birthTime,
      birthPlace,
    } = req.body;

    const birthDetails = await BirthDetails.findOneAndUpdate(
      {
        user: req.user._id,
      },
      {
        fullName,
        birthDate,
        birthTime,
        birthPlace,
      },
      {
        new: true,
        upsert: true,
      }
    );

    res.json({
      success: true,
      message: "Birth details updated successfully.",
      birthDetails,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};