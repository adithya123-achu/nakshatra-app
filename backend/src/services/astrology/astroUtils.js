// Normalize any longitude into 0°–360°

export const normalizeLongitude = (longitude) => {
    return ((longitude % 360) + 360) % 360;
  };
  
  // Convert longitude to zodiac sign index
  
  export const getSignIndex = (longitude) => {
    return Math.floor(normalizeLongitude(longitude) / 30);
  };
  
  // Degree inside the zodiac sign
  
  export const getDegreeInSign = (longitude) => {
    return (normalizeLongitude(longitude) % 30).toFixed(2);
  };
  
  // Convert longitude into Nakshatra index
  
  export const getNakshatraIndex = (longitude) => {
    const nakshatraSize = 360 / 27;
    return Math.floor(normalizeLongitude(longitude) / nakshatraSize);
  };