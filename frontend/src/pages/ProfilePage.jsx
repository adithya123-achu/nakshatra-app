import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { getProfile } from "../services/userService";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();
      setProfile(data);
    } catch (err) {
      console.error(err);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0918] flex items-center justify-center text-white text-2xl">
        Loading Profile...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0918] text-white flex justify-center items-center p-8">
      <div className="w-full max-w-2xl bg-[#1c1838] rounded-3xl shadow-xl p-10">

        <div className="flex flex-col items-center">

          <div className="w-32 h-32 rounded-full bg-orange-500 flex items-center justify-center text-5xl font-bold">
            {profile.user.fullName.charAt(0).toUpperCase()}
          </div>

          <h1 className="text-4xl font-bold text-orange-400 mt-6">
            {profile.user.fullName}
          </h1>

          <p className="text-gray-400 mt-2">
            {profile.user.email}
          </p>

        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-10">

          <div className="bg-[#28224f] rounded-2xl p-6">

            <h2 className="text-orange-300 text-xl font-semibold">
              📊 Reports Generated
            </h2>

            <p className="text-4xl font-bold mt-3">
              {profile.stats?.reportsGenerated ?? 0}
            </p>

          </div>

          <div className="bg-[#28224f] rounded-2xl p-6">

            <h2 className="text-orange-300 text-xl font-semibold">
              ⭐ Member Since
            </h2>

            <p className="text-xl mt-3">
              {new Date(profile.stats?.memberSince).toLocaleDateString()}
            </p>

          </div>

        </div>

        <div className="grid gap-4 mt-10">

          <button
            onClick={() => navigate("/history")}
            className="bg-purple-500 hover:bg-purple-600 py-3 rounded-xl font-semibold transition"
          >
            📜 My History
          </button>

          <button
            onClick={() => navigate("/profile/edit")}
            className="bg-blue-500 hover:bg-blue-600 py-3 rounded-xl font-semibold transition"
          >
            ✏ Edit Profile
          </button>

          <button
            onClick={() => navigate("/profile/password")}
            className="bg-green-500 hover:bg-green-600 py-3 rounded-xl font-semibold transition"
          >
            🔒 Change Password
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 py-3 rounded-xl font-semibold transition"
          >
            🚪 Logout
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProfilePage;