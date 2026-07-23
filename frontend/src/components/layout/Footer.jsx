const Footer = () => {
  return (
    <footer className="border-t border-cosmic-700 bg-cosmic-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} Nakshatra. AI-powered Vedic Astrology.</p>
      </div>
    </footer>
  );
};

export default Footer;
