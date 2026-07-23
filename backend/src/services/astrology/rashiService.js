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
  
  export const getRashi = (longitude) => {
  
    // Normalize longitude to 0–360°
    const normalized = ((longitude % 360) + 360) % 360;
  
    const signIndex = Math.floor(normalized / 30);
  
    const degree = normalized % 30;
  
    return {
      sign: zodiacSigns[signIndex],
      degree: degree.toFixed(2),
    };
  
  };