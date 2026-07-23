import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getProfile,
  updateProfile,
} from "../services/userService";

const EditProfile = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getProfile();

      setFormData({
        fullName: data.user.fullName,
        email: data.user.email,
      });

    } catch (err) {
      console.error(err);
      alert("Unable to load profile.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSaving(true);

    try {
      await updateProfile(formData);

      alert("Profile updated successfully.");

      navigate("/profile");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Unable to update profile."
      );
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0b0918] text-white flex justify-center items-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0918] flex justify-center items-center p-8">

      <div className="w-full max-w-xl bg-[#1c1838] rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl font-bold text-orange-400 text-center mb-8">
          Edit Profile
        </h1>

        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          <div>

            <label className="block text-white mb-2">
              Full Name
            </label>

            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-gray-800 border border-gray-700 text-white"
            />

          </div>

          <div>

            <label className="block text-white mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-gray-800 border border-gray-700 text-white"
            />

          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              disabled={saving}
              className="flex-1 bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-semibold"
            >
              {saving ? "Saving..." : "Save Changes"}
            </button>

            <button
              type="button"
              onClick={() => navigate("/profile")}
              className="flex-1 bg-gray-700 hover:bg-gray-600 rounded-xl py-3 font-semibold"
            >
              Cancel
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default EditProfile;