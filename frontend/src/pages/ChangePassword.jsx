import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { changePassword } from "../services/userService";

const ChangePassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.newPassword !== formData.confirmPassword) {
      alert("New passwords do not match.");
      return;
    }

    try {
      setLoading(true);

      await changePassword({
        currentPassword: formData.currentPassword,
        newPassword: formData.newPassword,
      });

      alert("Password updated successfully.");

      navigate("/profile");

    } catch (err) {
      console.error(err);

      alert(
        err.response?.data?.message ||
        "Unable to change password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0918] flex justify-center items-center p-8">

      <div className="w-full max-w-xl bg-[#1c1838] rounded-3xl shadow-xl p-10">

        <h1 className="text-4xl text-center font-bold text-orange-400 mb-8">
          Change Password
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block text-white mb-2">
              Current Password
            </label>

            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              New Password
            </label>

            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <div>
            <label className="block text-white mb-2">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              className="w-full rounded-xl p-3 bg-gray-800 border border-gray-700 text-white"
            />
          </div>

          <div className="flex gap-4">

            <button
              type="submit"
              disabled={loading}
              className="flex-1 bg-orange-500 hover:bg-orange-600 rounded-xl py-3 font-semibold"
            >
              {loading ? "Updating..." : "Update Password"}
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

export default ChangePassword;