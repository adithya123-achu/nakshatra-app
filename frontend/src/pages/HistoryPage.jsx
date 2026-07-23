import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getHistory,
  deleteHistory,
} from "../services/historyService";

const HistoryPage = () => {
  const navigate = useNavigate();

  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const data = await getHistory();

      console.log("History Response:", data);

      setReports(data.data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const openReport = (report) => {
    localStorage.setItem(
      "astrologyReport",
      JSON.stringify(report)
    );

    navigate("/dashboard");
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this report?"
    );

    if (!confirmDelete) return;

    try {
      await deleteHistory(id);

      setReports((prev) =>
        prev.filter((report) => report._id !== id)
      );

      const saved = localStorage.getItem("astrologyReport");

      if (saved) {
        const savedReport = JSON.parse(saved);

        if (savedReport._id === id) {
          localStorage.removeItem("astrologyReport");
        }
      }
    } catch (err) {
      console.error(err);
      alert("Unable to delete report.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0918] text-white flex justify-center items-center text-2xl">
        Loading History...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0918] text-white p-10">

      <h1 className="text-4xl font-bold text-orange-400 mb-8">
        My Astrology History
      </h1>

      {reports.length === 0 ? (
        <div className="text-center text-gray-400 text-xl mt-20">
          No reports found.
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {reports.map((report) => (
            <div
              key={report._id}
              className="bg-[#1c1838] rounded-2xl p-6 shadow-lg hover:shadow-orange-500/20 transition"
            >
              <h2 className="text-2xl font-bold text-orange-300">
                {report.birthDetails?.fullName || "Unknown"}
              </h2>

              <p className="mt-3">
                📅 {report.birthDetails?.dateOfBirth || "Not Available"}
              </p>

              <p>
                🕒 {report.birthDetails?.timeOfBirth || "Not Available"}
              </p>

              <p>
                📍 {report.birthDetails?.placeOfBirth || "Not Available"}
              </p>

              <div className="mt-5 space-y-1">
                <p>
                  🌙 Nakshatra :{" "}
                  {report.astrology?.nakshatra || "Not Available"}
                </p>

                <p>
                  ♈ Rashi :{" "}
                  {report.astrology?.rashi || "Not Available"}
                </p>

                <p>
                  🔢 Mulank :{" "}
                  {report.numerology?.mulank || "Not Available"}
                </p>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={() => openReport(report)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-semibold transition"
                >
                  View Report
                </button>

                <button
                  onClick={() => handleDelete(report._id)}
                  className="bg-red-500 hover:bg-red-600 px-5 rounded-xl font-semibold transition"
                >
                  🗑
                </button>
              </div>
            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default HistoryPage;