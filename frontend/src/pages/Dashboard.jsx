import { useContext, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { BirthContext } from "../contexts/BirthContext";

import HeroSection from "../components/dashboard/HeroSection";
import BirthDetailsCard from "../components/dashboard/BirthDetailsCard";
import NumerologyCards from "../components/dashboard/NumerologyCards";
import AstrologyCards from "../components/dashboard/AstrologyCards";
import PlanetSection from "../components/dashboard/PlanetSection";
import HouseSection from "../components/dashboard/HouseSection";
import PersonalityCard from "../components/dashboard/PersonalityCard";
import AIReportSection from "../components/dashboard/AIReportSection";

import { downloadHoroscopePDF } from "../services/pdfService";

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const { birthData } = useContext(BirthContext);

  const dashboardRef = useRef(null);

  // -----------------------------
  // Load report from History if available
  // -----------------------------
  const savedReport = localStorage.getItem("astrologyReport");

  const report = savedReport
    ? JSON.parse(savedReport)
    : birthData;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const handleDownload = async () => {
    await downloadHoroscopePDF(
      dashboardRef.current,
      `${report.birthDetails.fullName}-Horoscope.pdf`
    );
  };

  if (!report || !report.birthDetails) {
    return (
      <div className="min-h-screen bg-[#0d0b1f] flex items-center justify-center text-white text-2xl">
        No report found. Please generate your chart again.
      </div>
    );
  }

  const {
    birthDetails,
    numerology,
    astrology,
    planets,
    houses,
    aiReport,
  } = report;

  const formattedDate = new Date(
    birthDetails.dateOfBirth
  ).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const formattedTime = new Date(
    `1970-01-01T${birthDetails.timeOfBirth}`
  ).toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });

  return (
    <div
      ref={dashboardRef}
      className="min-h-screen bg-[#0d0b1f] text-white p-8"
    >
      <HeroSection
        fullName={birthDetails.fullName}
        onLogout={handleLogout}
        onDownload={handleDownload}
      />

      <BirthDetailsCard
        birthDetails={birthDetails}
        formattedDate={formattedDate}
        formattedTime={formattedTime}
      />

      <NumerologyCards numerology={numerology} />

      <AstrologyCards astrology={astrology} />

      <PlanetSection planets={planets} />

      <HouseSection houses={houses} />

      <PersonalityCard personality={numerology.personality} />

      <AIReportSection aiReport={aiReport} />
    </div>
  );
};

export default Dashboard;