import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { loginUser } from "../services/authService";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await loginUser(formData);

      login(response.user, response.token);

      navigate("/birth-details");
    } catch (err) {
      setError(
        err.response?.data?.message || "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#07051a] flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-[#15122d] rounded-3xl shadow-2xl p-10 border border-nakshatra-500/20"
      >
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-nakshatra-500/10 flex items-center justify-center">
            <Sparkles className="text-nakshatra-400 w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center text-white mb-2">
          Welcome Back
        </h1>

        <p className="text-center text-gray-400 mb-8">
          Sign in to continue your cosmic journey
        </p>

        {error && (
          <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-3 mb-5 text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-gray-300 mb-2">
              Email
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="w-full p-3 rounded-xl bg-[#1d1a38] border border-gray-700 text-white focus:outline-none focus:border-nakshatra-500"
            />
          </div>

          <div>
            <label className="block text-gray-300 mb-2">
              Password
            </label>

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                placeholder="Enter your password"
                className="w-full p-3 rounded-xl bg-[#1d1a38] border border-gray-700 text-white focus:outline-none focus:border-nakshatra-500 pr-12"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3 text-gray-400"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-nakshatra-500 to-nakshatra-600 hover:from-nakshatra-400 hover:to-nakshatra-500 text-white py-3 rounded-xl font-semibold transition-all duration-300 disabled:opacity-50"
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="text-center text-gray-400 mt-8">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-nakshatra-400 hover:text-nakshatra-300 font-semibold"
          >
            Register
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;
