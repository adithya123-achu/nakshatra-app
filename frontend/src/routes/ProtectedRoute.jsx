import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

/**
 * Protects routes that require authentication.
 */
const ProtectedRoute = ({ redirectTo = "/" }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#0d0b1f]">
        <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-orange-500 border-r-2 border-orange-500"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;