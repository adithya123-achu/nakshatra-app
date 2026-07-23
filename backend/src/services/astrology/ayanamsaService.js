/**
 * Lahiri Ayanamsa Service
 * -----------------------
 * Converts Tropical longitude into Sidereal longitude.
 *
 * For now we use a fixed Lahiri value.
 * Later we can upgrade to a dynamic yearly calculation.
 */

export const getLahiriAyanamsa = () => {
    // Approximate Lahiri Ayanamsa for current era
    return 24.2;
  };
  
  export const toSiderealLongitude = (tropicalLongitude) => {
    let sidereal = tropicalLongitude - getLahiriAyanamsa();
  
    while (sidereal < 0) sidereal += 360;
    while (sidereal >= 360) sidereal -= 360;
  
    return sidereal;
  };