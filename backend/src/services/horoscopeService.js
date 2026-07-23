import Horoscope from "../models/Horoscope.js";

// -------------------------------------
// Get today's date
// -------------------------------------

const getToday = () => {
  return new Date().toISOString().split("T")[0];
};

// -------------------------------------
// Find today's horoscope
// -------------------------------------

export const getTodaysHoroscope = async (userId) => {

  const today = getToday();

  return await Horoscope.findOne({
    user: userId,
    reportDate: today,
  });

};

// -------------------------------------
// Save today's horoscope
// -------------------------------------

export const saveTodaysHoroscope = async (
  userId,
  horoscope
) => {

  const today = getToday();

  return await Horoscope.findOneAndUpdate(

    {
      user: userId,
      reportDate: today,
    },

    {
      horoscope,
    },

    {
      upsert: true,
      new: true,
    }

  );

};