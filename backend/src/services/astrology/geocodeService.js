const NOMINATIM_URL = "https://nominatim.openstreetmap.org/search";

export const getCoordinates = async (place) => {
  if (!place) {
    throw new Error("Place of birth is required.");
  }

  const url =
    `${NOMINATIM_URL}?q=${encodeURIComponent(place)}&format=json&limit=1`;

  console.log("Searching location:", place);

  const response = await fetch(url, {
    headers: {
      "User-Agent": "Nakshatra Astrology App",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Unable to fetch location. Status ${response.status}`);
  }

  const data = await response.json();

  if (!data.length) {
    throw new Error("Location not found.");
  }

  return {
    latitude: Number(data[0].lat),
    longitude: Number(data[0].lon),
    displayName: data[0].display_name,
  };
};