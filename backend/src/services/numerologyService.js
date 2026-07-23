const reduceToSingleDigit = (num) => {
    while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
      num = num
        .toString()
        .split("")
        .reduce((sum, digit) => sum + Number(digit), 0);
    }
    return num;
  };
  
  export const calculateNumerology = (birthData) => {
    const { dateOfBirth } = birthData;
  
    const date = new Date(dateOfBirth);
  
    const day = date.getDate();
  
    const month = date.getMonth() + 1;
  
    const year = date.getFullYear();
  
    // Mulank
    const mulank = reduceToSingleDigit(day);
  
    // Bhagyank
    const total =
      day
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0) +
      month
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0) +
      year
        .toString()
        .split("")
        .reduce((a, b) => a + Number(b), 0);
  
    const bhagyank = reduceToSingleDigit(total);
  
    const planetMap = {
      1: "Sun",
      2: "Moon",
      3: "Jupiter",
      4: "Rahu",
      5: "Mercury",
      6: "Venus",
      7: "Ketu",
      8: "Saturn",
      9: "Mars",
    };
  
    const colorMap = {
      1: "Gold",
      2: "White",
      3: "Yellow",
      4: "Blue",
      5: "Green",
      6: "Pink",
      7: "Grey",
      8: "Black",
      9: "Red",
    };
  
    const dayMap = {
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
  
    const personalityMap = {
      1: "Natural leader with confidence.",
      2: "Peaceful, caring and emotional.",
      3: "Creative and optimistic.",
      4: "Practical and hardworking.",
      5: "Smart, energetic and adventurous.",
      6: "Loving, responsible and artistic.",
      7: "Spiritual and thoughtful.",
      8: "Ambitious and disciplined.",
      9: "Brave, passionate and determined.",
    };
  
    return {
      ...birthData,
      mulank,
      bhagyank,
      rulingPlanet: planetMap[mulank],
      luckyColor: colorMap[mulank],
      luckyDay: dayMap[mulank],
      luckyNumber: `${mulank}, ${bhagyank}`,
      personality: personalityMap[mulank],
    };
  };