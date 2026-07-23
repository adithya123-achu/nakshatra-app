import mongoose from "mongoose";

const horoscopeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    reportDate: {
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

export default mongoose.model("Horoscope", horoscopeSchema);