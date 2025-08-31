// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost"; // Dynamic route component

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Profile with protected route */}
        <Route
          path="/profile/*"
          element={isAuthenticated ? <Profile /> : <Login setIsAuthenticated={setIsAuthenticated} />}
        />

        {/* Dynamic route for blog posts */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login */}
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      </Routes>
    </Router>
  );
}

export default App;
