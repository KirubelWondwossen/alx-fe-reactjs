// src/hooks/useAuth.js
import { useState } from "react";

// Simulate authentication state
export default function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return { isAuthenticated, login, logout };
}
