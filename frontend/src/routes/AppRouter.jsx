import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import BirthDetails from "../pages/BirthDetails";
import LoadingPage from "../pages/LoadingPage";
import Dashboard from "../pages/Dashboard";
import DailyHoroscope from "../pages/DailyHoroscope";
import AIChatPage from "../pages/AIChatPage";
import HistoryPage from "../pages/HistoryPage";
import ProfilePage from "../pages/ProfilePage";
import EditProfile from "../pages/EditProfile";
import ChangePassword from "../pages/ChangePassword";
import NotFoundPage from "../pages/NotFoundPage";

import ProtectedRoute from "../components/ProtectedRoute";

const AppRouter = () => {
  return (
    <Routes>

      <Route path="/" element={<HomePage />} />

      <Route path="/login" element={<LoginPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route
        path="/birth-details"
        element={
          <ProtectedRoute>
            <BirthDetails />
          </ProtectedRoute>
        }
      />

      <Route
        path="/loading"
        element={
          <ProtectedRoute>
            <LoadingPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      {/* Daily Horoscope */}
      <Route
        path="/daily-horoscope"
        element={
          <ProtectedRoute>
            <DailyHoroscope />
          </ProtectedRoute>
        }
      />

      {/* AI Chat */}
      <Route
        path="/chat"
        element={
          <ProtectedRoute>
            <AIChatPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/history"
        element={
          <ProtectedRoute>
            <HistoryPage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile/edit"
        element={
          <ProtectedRoute>
            <EditProfile />
          </ProtectedRoute>
        }
      />

      <Route
        path="/profile/password"
        element={
          <ProtectedRoute>
            <ChangePassword />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<NotFoundPage />} />

    </Routes>
  );
};

export default AppRouter;