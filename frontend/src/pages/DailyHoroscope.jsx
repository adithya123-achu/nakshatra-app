import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getTodayHoroscope } from "../services/horoscopeService";

const DailyHoroscope = () => {
  const navigate = useNavigate();

  const [horoscope, setHoroscope] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHoroscope();
  }, []);

  const loadHoroscope = async () => {
    try {
      const response = await getTodayHoroscope();

      console.log("Today's Horoscope:", response);

      // Handle different backend response formats
      if (response?.horoscope) {
        setHoroscope(response.horoscope);
      } else if (response?.data?.horoscope) {
        setHoroscope(response.data.horoscope);
      } else if (response?.data) {
        setHoroscope(response.data);
      } else {
        setHoroscope(response);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0918] text-white flex justify-center items-center text-2xl">
        Loading Today's Horoscope...
      </div>
    );
  }

  if (!horoscope) {
    return (
      <div className="min-h-screen bg-[#0b0918] text-white flex flex-col justify-center items-center">
        <h1 className="text-3xl text-red-400 mb-4">
          Unable to load today's horoscope.
        </h1>

        <button
          onClick={() => navigate("/dashboard")}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0918] text-white p-10">

      <button
        onClick={() => navigate("/dashboard")}
        className="mb-8 bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-xl"
      >
        ← Back
      </button>

      <h1 className="text-5xl font-bold text-orange-400 mb-10">
        ☀ Daily Horoscope
      </h1>

      <div className="bg-[#1c1838] rounded-2xl p-8 space-y-6">

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            🌟 Today's Energy
          </h2>
          <p>{horoscope.energy || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            💼 Career
          </h2>
          <p>{horoscope.career || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            ❤️ Love
          </h2>
          <p>{horoscope.love || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            💰 Finance
          </h2>
          <p>{horoscope.finance || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            🏥 Health
          </h2>
          <p>{horoscope.health || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            🧘 Spiritual
          </h2>
          <p>{horoscope.spiritual || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            🎨 Lucky Color
          </h2>
          <p>{horoscope.luckyColor || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            🔢 Lucky Number
          </h2>
          <p>{horoscope.luckyNumber || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            ⏰ Lucky Time
          </h2>
          <p>{horoscope.luckyTime || "Not available"}</p>
        </div>

        <div>
          <h2 className="text-2xl text-orange-300 font-bold">
            ✨ Affirmation
          </h2>
          <p>{horoscope.affirmation || "Not available"}</p>
        </div>

      </div>
    </div>
  );
};

export default DailyHoroscope;