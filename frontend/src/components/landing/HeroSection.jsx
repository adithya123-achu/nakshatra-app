import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { fadeInUp, staggerContainer } from "./motion";
import { useAuth } from "../../contexts/AuthContext";

const HeroSection = () => {
  const navigate = useNavigate();
  const { isAuthenticated, token } = useAuth();

  console.log("isAuthenticated:", isAuthenticated);
  console.log("token:", token);

  const handleJourney = () => {
    console.log("Button Clicked");
    console.log("isAuthenticated:", isAuthenticated);
    console.log("token:", token);

    if (isAuthenticated) {
      navigate("/birth-details");
    } else {
      navigate("/login");
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] rounded-full bg-nakshatra-500/5 blur-3xl pointer-events-none" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative max-w-5xl mx-auto text-center"
      >
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-nakshatra-500/25 bg-nakshatra-500/5 backdrop-blur-sm mb-8"
        >
          <Star className="w-3.5 h-3.5 text-nakshatra-400 fill-nakshatra-400" />
          <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-nakshatra-300/90">
            AI-Powered Vedic Astrology
          </span>
        </motion.div>

        <motion.h1
          variants={fadeInUp}
          className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6"
        >
          <span className="bg-gradient-to-b from-nakshatra-200 via-nakshatra-400 to-nakshatra-600 bg-clip-text text-transparent drop-shadow-sm">
            Nakshatra
          </span>
        </motion.h1>

        <motion.p
          variants={fadeInUp}
          className="text-lg sm:text-xl md:text-2xl text-gray-300/90 max-w-3xl mx-auto leading-relaxed font-light mb-10"
        >
          Your Cosmic Blueprint, Powered by Ancient Wisdom and AI
        </motion.p>

        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <button
            onClick={handleJourney}
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 text-white shadow-xl shadow-nakshatra-500/30 hover:shadow-nakshatra-500/50 hover:from-nakshatra-400 hover:to-nakshatra-500 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Explore Your Chart
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-base font-semibold text-gray-200 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:border-nakshatra-500/30 transition-all duration-300 w-full sm:w-auto justify-center"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-2xl mx-auto"
        >
          {[
            { value: "5,000+", label: "Charts Analyzed" },
            { value: "27", label: "Nakshatras Mapped" },
            { value: "98%", label: "User Satisfaction" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-3xl font-display font-semibold text-nakshatra-400">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-gray-500 mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      <motion.a
        href="#features"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-500 hover:text-nakshatra-400 transition-colors"
      >
        <span className="text-xs tracking-widest uppercase">Discover</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default HeroSection;