import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LoadingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/dashboard");
    }, 6000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[#0d0b1f] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        <div className="w-24 h-24 border-4 border-orange-500 border-t-transparent rounded-full animate-spin mx-auto mb-10"></div>

        <h1 className="text-5xl font-bold text-orange-400 mb-6">
          Creating Your Cosmic Blueprint
        </h1>

        <div className="space-y-4 text-left mt-10">

          <div className="text-gray-300">
            🌙 Calculating Planetary Positions...
          </div>

          <div className="text-gray-300">
            ⭐ Finding Your Nakshatra...
          </div>

          <div className="text-gray-300">
            🔢 Calculating Mulank & Bhagyank...
          </div>

          <div className="text-gray-300">
            🪐 Reading Planetary Houses...
          </div>

          <div className="text-orange-400 font-semibold">
            🤖 AI is preparing your personalized reading...
          </div>

        </div>
      </div>
    </div>
  );
};

export default LoadingPage;