import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import NumerologyCards from "../components/NumerologyCards";
import AstrologyCards from "../components/AstrologyCards";
import PlanetSection from "../components/PlanetSection";

const ReportDetails = () => {
  const { id } = useParams();

  const [report, setReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadReport();
  }, []);

  const loadReport = async () => {
    try {
      const res = await api.get(`/history/${id}`);

      setReport(res.data.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <div className="text-white text-center mt-20">
        Loading Report...
      </div>
    );

  return (
    <div className="min-h-screen bg-[#0b091c] text-white">

      <NumerologyCards data={report.numerology} />

      <AstrologyCards data={report.astrology} />

      <PlanetSection
        planets={report.planets}
        houses={report.houses}
      />

    </div>
  );
};

export default ReportDetails;