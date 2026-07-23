const PlanetSection = ({ planets }) => {
    return (
      <div className="bg-[#1b1835] rounded-2xl p-8 mt-8">
  
        <h2 className="text-2xl font-bold text-orange-300 mb-6">
          🪐 Planetary Positions
        </h2>
  
        <div className="grid md:grid-cols-3 gap-5">
  
          {planets &&
            Object.entries(planets).map(([planet, value]) => (
  
              <div
                key={planet}
                className="bg-[#28224b] rounded-xl p-5 hover:scale-105 transition duration-300"
              >
  
                <h3 className="capitalize text-xl font-bold text-orange-400">
                  {planet}
                </h3>
  
                <p className="mt-3">
                  <strong>Sign:</strong> {value.sign}
                </p>
  
                <p>
                  <strong>Degree:</strong> {value.degree}
                </p>
  
              </div>
  
            ))}
  
        </div>
  
      </div>
    );
  };
  
  export default PlanetSection;