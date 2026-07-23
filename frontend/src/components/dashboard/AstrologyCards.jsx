const AstrologyCards = ({ astrology }) => {
    return (
      <div className="grid md:grid-cols-3 gap-6 mt-8">
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🌙 Nakshatra
          </h2>
  
          <p className="text-2xl mt-4">
            {astrology.nakshatra}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            ♈ Rashi
          </h2>
  
          <p className="text-2xl mt-4">
            {astrology.rashi}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🌙 Moon Sign
          </h2>
  
          <p className="text-2xl mt-4">
            {astrology.moonSign}
          </p>
        </div>
  
      </div>
    );
  };
  
  export default AstrologyCards;