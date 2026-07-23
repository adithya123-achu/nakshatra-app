export const calculateRealHouses = (ascendant) => {

  const zodiacSigns = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];

  const startIndex = zodiacSigns.indexOf(ascendant.sign);

  const houses = [];

  for (let i = 0; i < 12; i++) {

    houses.push({

      house: i + 1,

      name: `House ${i + 1}`,

      sign: zodiacSigns[(startIndex + i) % 12],

      planets: [],

    });

  }

  return houses;

};