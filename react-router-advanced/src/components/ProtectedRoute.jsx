// src/components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

/**
 * ProtectedRoute component
 * @param {ReactNode} children - The component(s) to render if authenticated
 * @param {boolean} isAuthenticated - Whether the user is logged in
 */
export default function ProtectedRoute({ children, isAuthenticated }) {
  // If user is not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // If authenticated, render the children
  return children;
}
