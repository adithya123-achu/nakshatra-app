import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const searchLocations = async (query) => {
  if (!query || query.length < 3) return [];

  try {
    const response = await axios.get(
      `${API_URL}/location/search`,
      {
        params: {
          query,
        },
      }
    );

    return response.data.locations;

  } catch (err) {
    console.error("Location Search Error:", err);
    return [];
  }
};