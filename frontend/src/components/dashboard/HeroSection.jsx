import { useNavigate } from "react-router-dom";

const HeroSection = ({
  fullName,
  onLogout,
  onDownload,
}) => {
  const navigate = useNavigate();

  const handleCurrentChart = () => {
    localStorage.removeItem("astrologyReport");
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-10">

      <div>
        <h1 className="text-5xl font-bold text-orange-400">
          Welcome, {fullName} 🌟
        </h1>

        <p className="text-gray-400 mt-3 text-lg">
          Your personalized Vedic Astrology Dashboard
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">

        <button
          onClick={handleCurrentChart}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          🏠 Current Chart
        </button>

        <button
          onClick={() => navigate("/daily-horoscope")}
          className="bg-yellow-500 hover:bg-yellow-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          ☀ Daily Horoscope
        </button>

        <button
          onClick={() => navigate("/chat")}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          🤖 AI Chat
        </button>

        <button
          onClick={() => navigate("/profile")}
          className="bg-indigo-500 hover:bg-indigo-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          👤 Profile
        </button>

        <button
          onClick={() => navigate("/history")}
          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          📜 History
        </button>

        <button
          onClick={onDownload}
          className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          📄 Download PDF
        </button>

        <button
          onClick={onLogout}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-semibold transition duration-300 shadow-lg"
        >
          🚪 Logout
        </button>

      </div>

    </div>
  );
};

export default HeroSection;