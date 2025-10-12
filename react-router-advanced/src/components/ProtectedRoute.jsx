import React from "react";
import { Navigate } from "react-router-dom";

const isAuthenticated = true;

export default function ProtectedRoute({ children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }
  return children;
}
