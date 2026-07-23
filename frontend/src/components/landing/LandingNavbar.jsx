import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

const LandingNavbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = () => setMobileOpen(false);

  const handleJourney = () => {
    if (isAuthenticated) {
      navigate("/birth-details");
    } else {
      navigate("/login");
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#07051a]/80 backdrop-blur-xl border-b border-nakshatra-500/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">

          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="flex items-center justify-center w-9 h-9 rounded-full bg-nakshatra-500/10 border border-nakshatra-500/30 group-hover:border-nakshatra-400/60 transition-colors">
              <Sparkles className="w-4 h-4 text-nakshatra-400" />
            </span>

            <span className="font-display text-xl md:text-2xl font-semibold bg-gradient-to-r from-nakshatra-300 to-nakshatra-500 bg-clip-text text-transparent">
              Nakshatra
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-nakshatra-300 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">

            <Link
              to="/login"
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Sign In
            </Link>

            <button
              onClick={handleJourney}
              className="inline-flex items-center px-5 py-2.5 rounded-full text-sm font-semibold bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 text-white shadow-lg shadow-nakshatra-500/25 hover:shadow-nakshatra-500/40 hover:from-nakshatra-400 hover:to-nakshatra-500 transition-all duration-300"
            >
              Begin Your Journey
            </button>

          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-nakshatra-500/10 bg-[#07051a]/95 backdrop-blur-xl overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-6 gap-1">

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleNavClick}
                  className="px-4 py-3 rounded-lg text-gray-200 hover:text-nakshatra-300 hover:bg-white/5 transition-colors font-medium"
                >
                  {link.label}
                </a>
              ))}

              <button
                onClick={() => {
                  handleNavClick();
                  handleJourney();
                }}
                className="mt-4 mx-4 text-center px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 text-white"
              >
                Begin Your Journey
              </button>

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default LandingNavbar;