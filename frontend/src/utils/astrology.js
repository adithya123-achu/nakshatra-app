// Reduce any number to a single digit
const reduceNumber = (num) => {
    while (num > 9) {
      num = num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
  };
  
  // =========================
  // MULANK
  // =========================
  export const calculateMulank = (dateOfBirth) => {
    if (!dateOfBirth) return "--";
  
    const day = new Date(dateOfBirth).getDate();
  
    return reduceNumber(day);
  };
  
  // =========================
  // BHAGYANK
  // =========================
  export const calculateBhagyank = (dateOfBirth) => {
    if (!dateOfBirth) return "--";
  
    const numbers = dateOfBirth.replace(/-/g, "");
  
    let total = numbers
      .split("")
      .reduce((sum, digit) => sum + Number(digit), 0);
  
    return reduceNumber(total);
  };
  
  // =========================
  // RULING PLANET
  // =========================
  export const getRulingPlanet = (mulank) => {
    const planets = {
      1: "Sun ☀️",
      2: "Moon 🌙",
      3: "Jupiter 🪐",
      4: "Rahu ☊",
      5: "Mercury ☿",
      6: "Venus ♀",
      7: "Ketu ☋",
      8: "Saturn ♄",
      9: "Mars ♂",
    };
  
    return planets[mulank] || "--";
  };
  
  // =========================
  // LUCKY COLOR
  // =========================
  export const getLuckyColor = (mulank) => {
    const colors = {
      1: "Golden",
      2: "White",
      3: "Yellow",
      4: "Blue",
      5: "Green",
      6: "Pink",
      7: "Grey",
      8: "Black",
      9: "Red",
    };
  
    return colors[mulank] || "--";
  };
  
  // =========================
  // LUCKY DAY
  // =========================
  export const getLuckyDay = (mulank) => {
    const days = {
      1: "Sunday",
      2: "Monday",
      3: "Thursday",
      4: "Saturday",
      5: "Wednesday",
      6: "Friday",
      7: "Monday",
      8: "Saturday",
      9: "Tuesday",
    };
  
    return days[mulank] || "--";
  };
  
  // =========================
  // LUCKY NUMBER
  // =========================
  export const getLuckyNumber = (mulank) => {
    const numbers = {
      1: "1, 4",
      2: "2, 7",
      3: "3, 6, 9",
      4: "4, 8",
      5: "5",
      6: "6, 3",
      7: "7, 2",
      8: "8, 4",
      9: "9, 3",
    };
  
    return numbers[mulank] || "--";
  };
  
  // =========================
  // PERSONALITY
  // =========================
  export const getPersonality = (mulank) => {
    const personalities = {
      1: "Natural leader, confident and ambitious.",
      2: "Sensitive, caring and intuitive.",
      3: "Creative, optimistic and expressive.",
      4: "Practical, disciplined and hardworking.",
      5: "Smart, adaptable and adventurous.",
      6: "Loving, responsible and artistic.",
      7: "Spiritual, thoughtful and analytical.",
      8: "Strong, determined and resilient.",
      9: "Energetic, courageous and compassionate.",
    };
  
    return personalities[mulank] || "--";
  };