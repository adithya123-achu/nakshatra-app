import {
    MULANK_PLANETS,
    LUCKY_COLORS,
    LUCKY_DAYS,
  } from "./constants.js";
  
  // ----------------------------
  // Calculate Mulank
  // ----------------------------
  const calculateMulank = (date) => {
    const day = new Date(date).getDate();
  
    let number = day;
  
    while (number > 9) {
      number = number
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
  
    return number;
  };
  
  // ----------------------------
  // Calculate Bhagyank
  // ----------------------------
  const calculateBhagyank = (date) => {
    const digits = date.replace(/-/g, "");
  
    let total = digits
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  
    while (total > 9) {
      total = total
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
  
    return total;
  };
  
  // ----------------------------
  // Lucky Number
  // ----------------------------
  const calculateLuckyNumber = (mulank, bhagyank) => {
    let total = mulank + bhagyank;
  
    while (total > 9) {
      total = total
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
    }
  
    return total;
  };
  
  // ----------------------------
  // Personality Description
  // ----------------------------
  const personalityMap = {
    1: "Natural leader with confidence and determination.",
    2: "Sensitive, emotional and highly intuitive.",
    3: "Creative thinker with excellent communication skills.",
    4: "Hardworking, disciplined and practical.",
    5: "Adventurous, energetic and freedom loving.",
    6: "Responsible, caring and family oriented.",
    7: "Spiritual, analytical and wise.",
    8: "Ambitious, powerful and success driven.",
    9: "Compassionate, courageous and humanitarian.",
  };
  
  // ----------------------------
  // Main Function
  // ----------------------------
  export const generateNumerology = (birthDate) => {
  
    const mulank = calculateMulank(birthDate);
  
    const bhagyank = calculateBhagyank(birthDate);
  
    const luckyNumber = calculateLuckyNumber(
      mulank,
      bhagyank
    );
  
    return {
      mulank,
      bhagyank,
      rulingPlanet: MULANK_PLANETS[mulank],
      luckyColor: LUCKY_COLORS[mulank],
      luckyDay: LUCKY_DAYS[mulank],
      luckyNumber,
      personality: personalityMap[mulank],
    };
  };