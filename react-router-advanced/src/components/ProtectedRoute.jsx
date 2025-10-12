import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuthenticated = true; // change later if needed
  return isAuthenticated ? children : <Navigate to="/" />;
}
