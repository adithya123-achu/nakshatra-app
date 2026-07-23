const AIReportSection = ({ aiReport }) => {
    return (
      <div className="bg-[#1b1835] rounded-2xl p-8 mt-8">
  
        <h2 className="text-3xl font-bold text-orange-400 mb-8">
          🌟 AI Life Report
        </h2>
  
        <div className="grid md:grid-cols-2 gap-6">
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              💼 Career
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.career}
            </p>
          </div>
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              💖 Love & Relationships
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.love}
            </p>
          </div>
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              💰 Finance
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.finance}
            </p>
          </div>
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              ❤️ Health
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.health}
            </p>
          </div>
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              🌟 Personality Analysis
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.personality}
            </p>
          </div>
  
          <div className="bg-[#28224b] rounded-xl p-6">
            <h3 className="text-xl font-bold text-orange-300 mb-3">
              🧘 Spiritual Guidance
            </h3>
  
            <p className="text-gray-300 leading-7">
              {aiReport.spirituality}
            </p>
          </div>
  
        </div>
  
        <div className="bg-[#28224b] rounded-xl p-6 mt-6">
  
          <h3 className="text-xl font-bold text-orange-300 mb-3">
            📅 Year Prediction
          </h3>
  
          <p className="text-gray-300 leading-8">
            {aiReport.yearlyPrediction}
          </p>
  
        </div>
  
      </div>
    );
  };
  
  export default AIReportSection;