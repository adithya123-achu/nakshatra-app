import mongoose from "mongoose";

const chartReportSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    birthDetails: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "BirthDetails",
      required: true,
    },

    numerology: {
      mulank: {
        type: Number,
      },

      bhagyank: {
        type: Number,
      },

      rulingPlanet: {
        type: String,
      },

      luckyColor: {
        type: String,
      },

      luckyDay: {
        type: String,
      },

      // Changed from Number → String
      luckyNumber: {
        type: String,
      },

      personality: {
        type: String,
      },
    },

    astrology: {
      nakshatra: {
        type: String,
      },

      rashi: {
        type: String,
      },

      moonSign: {
        type: String,
      },
    },

    planets: {
      type: Object,
      default: {},
    },

    houses: {
      type: Object,
      default: {},
    },

    aiReport: {
      type: Object,
      default: {},
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "ChartReport",
  chartReportSchema
);