import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BirthContext } from "../contexts/BirthContext";
import api from "../services/api";
import { saveBirthDetails } from "../services/birthDetailsService";
import { searchLocations } from "../services/locationService";

const BirthDetails = () => {
  const navigate = useNavigate();
  const { setBirthData } = useContext(BirthContext);

  const [loading, setLoading] = useState(false);

  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    timeOfBirth: "",
    placeOfBirth: "",
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "placeOfBirth") {
      if (value.length >= 3) {
        try {
          const results = await searchLocations(value);
          setSuggestions(results);
        } catch (err) {
          console.error("Location Search Error:", err);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    }
  };

  const handleLocationSelect = (location) => {
    setFormData((prev) => ({
      ...prev,
      placeOfBirth: location.displayName,
    }));

    setSelectedLocation({
      latitude: location.latitude,
      longitude: location.longitude,
      timezone: location.timezone,
    });

    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const payload = {
        ...formData,
        latitude: selectedLocation?.latitude,
        longitude: selectedLocation?.longitude,
        timezone: selectedLocation?.timezone,
      };

      // -----------------------------
      // Save Birth Details
      // -----------------------------

      const savedBirth = await saveBirthDetails(payload);

      // -----------------------------
      // Generate Astrology Report
      // -----------------------------

      const response = await api.post("/astrology", {
        ...payload,
        birthDetailsId: savedBirth.data._id,
      });

      setBirthData(response.data);

      navigate("/loading");

    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Unable to generate chart."
      );

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0d0b1f] flex items-center justify-center p-6">
      <div className="bg-[#1b1835] w-full max-w-xl rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-orange-400 text-center mb-8">
          Birth Details
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="block text-white mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Date of Birth
            </label>

            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Time of Birth
            </label>

            <input
              type="time"
              name="timeOfBirth"
              value={formData.timeOfBirth}
              onChange={handleChange}
              required
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700"
            />
          </div>

          <div className="relative">

            <label className="block text-white mb-2">
              Place of Birth
            </label>

            <input
              type="text"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
              placeholder="Search your city..."
              autoComplete="off"
              required
              className="w-full rounded-lg p-3 bg-gray-800 text-white border border-gray-700"
            />

            {suggestions.length > 0 && (
              <div className="absolute w-full bg-gray-900 border border-gray-700 rounded-lg mt-1 max-h-60 overflow-y-auto z-50">

                {suggestions.map((location, index) => (
                  <div
                    key={index}
                    onClick={() => handleLocationSelect(location)}
                    className="px-4 py-3 cursor-pointer hover:bg-orange-500 hover:text-white border-b border-gray-700"
                  >
                    {location.displayName}
                  </div>
                ))}

              </div>
            )}

          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          >
            {loading ? "Generating..." : "Generate My Chart"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default BirthDetails;