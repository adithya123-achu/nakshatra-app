const API_KEY = process.env.OPENCAGE_API_KEY;

export const getCoordinates = async (place) => {
  if (!place) {
    throw new Error("Place of birth is required.");
  }

  const url =
    `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(place)}&key=${API_KEY}&limit=1`;

  console.log("Searching location:", place);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Unable to fetch location. Status ${response.status}`);
  }

  const data = await response.json();

  if (!data.results || data.results.length === 0) {
    throw new Error("Location not found.");
  }

  return {
    latitude: Number(data.results[0].geometry.lat),
    longitude: Number(data.results[0].geometry.lng),
    displayName: data.results[0].formatted,
  };
};