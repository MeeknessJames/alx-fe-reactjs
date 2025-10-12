import React from "react";
import { Navigate } from "react-router-dom";

export function useAuth(isAuthenticated) {
  return { isAuthenticated };
}

export default function ProtectedRoute({ children, isAuthenticated }) {
  const auth = useAuth(isAuthenticated);

  if (!auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
