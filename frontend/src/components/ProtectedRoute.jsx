import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // Redirect to Home Page instead of Login
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;