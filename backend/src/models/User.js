import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },

    password: {
      type: String,
      required: true,
    },

    birthDetails: {
      dateOfBirth: {
        type: Date,
      },

      timeOfBirth: {
        type: String,
      },

      placeOfBirth: {
        type: String,
      },

      latitude: {
        type: Number,
      },

      longitude: {
        type: Number,
      },

      timezone: {
        type: String,
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);