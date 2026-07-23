import axios from "axios";
import tzlookup from "tz-lookup";

export const searchLocation = async (req, res) => {
  try {
    // Accept both ?query= and ?q=
    const query = req.query.query || req.query.q;

    if (!query) {
      return res.status(400).json({
        success: false,
        message: "Location query is required",
      });
    }

    const response = await axios.get(
      "https://nominatim.openstreetmap.org/search",
      {
        params: {
          q: query,
          format: "json",
          addressdetails: 1,
          limit: 5,
        },
        headers: {
          "User-Agent": "NakshatraApp/1.0",
        },
      }
    );

    const locations = response.data.map((item) => {
      const latitude = Number(item.lat);
      const longitude = Number(item.lon);

      return {
        displayName: item.display_name,

        city:
          item.address?.city ||
          item.address?.town ||
          item.address?.village ||
          item.address?.municipality ||
          "",

        state: item.address?.state || "",

        country: item.address?.country || "",

        latitude,

        longitude,

        timezone: tzlookup(latitude, longitude),
      };
    });

    res.json({
      success: true,
      locations,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};