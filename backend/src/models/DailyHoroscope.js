import mongoose from "mongoose";

const dailyHoroscopeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: String,
      required: true,
    },

    horoscope: {
      overall: String,
      career: String,
      love: String,
      finance: String,
      health: String,
      luckyColor: String,
      luckyNumber: String,
      luckyTime: String,
      advice: String,
    },
  },
  {
    timestamps: true,
  }
);

// One horoscope per user per day
dailyHoroscopeSchema.index(
  {
    user: 1,
    date: 1,
  },
  {
    unique: true,
  }
);

export default mongoose.model(
  "DailyHoroscope",
  dailyHoroscopeSchema
);