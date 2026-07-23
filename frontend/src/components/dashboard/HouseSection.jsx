const HouseSection = ({ houses }) => {
    // Support both array and object formats
    const houseList = Array.isArray(houses)
      ? houses
      : Object.values(houses || {});
  
    return (
      <div className="bg-[#1b1835] rounded-2xl p-8 mt-8">
  
        <h2 className="text-2xl font-bold text-orange-300 mb-6">
          🏠 Twelve Houses
        </h2>
  
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
  
          {houseList.map((house) => (
  
            <div
              key={house.number || house.house}
              className="bg-[#28224b] rounded-xl p-5 hover:scale-105 transition duration-300"
            >
  
              <h3 className="text-orange-400 text-xl font-bold">
                House {house.number || house.house}
              </h3>
  
              <p className="mt-3 font-semibold">
                {house.name || ""}
              </p>
  
              <p className="text-gray-300 mt-2">
                {house.sign}
              </p>
  
              {house.planets && house.planets.length > 0 && (
                <div className="mt-3">
                  <p className="text-orange-300 font-semibold">
                    Planets
                  </p>
  
                  <p className="text-gray-400">
                    {house.planets.join(", ")}
                  </p>
                </div>
              )}
  
            </div>
  
          ))}
  
        </div>
  
      </div>
    );
  };
  
  export default HouseSection;