import mongoose from "mongoose";

const birthDetailsSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    dateOfBirth: {
      type: String,
      required: true,
    },

    timeOfBirth: {
      type: String,
      required: true,
    },

    placeOfBirth: {
      type: String,
      required: true,
    },

    latitude: {
      type: Number,
      required: false,
    },

    longitude: {
      type: Number,
      required: false,
    },

    timezone: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("BirthDetails", birthDetailsSchema);