const PersonalityCard = ({ personality }) => {
    return (
      <div className="bg-[#1b1835] rounded-2xl p-8 mt-8">
  
        <h2 className="text-2xl font-bold text-orange-300 mb-4">
          🌟 Personality
        </h2>
  
        <p className="text-lg leading-8 text-gray-300">
          {personality}
        </p>
  
      </div>
    );
  };
  
  export default PersonalityCard;