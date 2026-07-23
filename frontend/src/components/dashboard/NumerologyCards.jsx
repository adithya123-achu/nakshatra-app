const NumerologyCards = ({ numerology }) => {
    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🔢 Mulank
          </h2>
  
          <p className="text-5xl mt-4">
            {numerology.mulank}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            ✨ Bhagyank
          </h2>
  
          <p className="text-5xl mt-4">
            {numerology.bhagyank}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🪐 Ruling Planet
          </h2>
  
          <p className="text-2xl mt-4">
            {numerology.rulingPlanet}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🎨 Lucky Color
          </h2>
  
          <p className="text-2xl mt-4">
            {numerology.luckyColor}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            📅 Lucky Day
          </h2>
  
          <p className="text-2xl mt-4">
            {numerology.luckyDay}
          </p>
        </div>
  
        <div className="bg-[#1b1835] rounded-xl p-6">
          <h2 className="text-orange-400 text-xl font-bold">
            🍀 Lucky Number
          </h2>
  
          <p className="text-2xl mt-4">
            {numerology.luckyNumber}
          </p>
        </div>
  
      </div>
    );
  };
  
  export default NumerologyCards;