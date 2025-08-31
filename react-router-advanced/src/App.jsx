// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // Import ProtectedRoute

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* Protected Profile Route */}
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Dynamic Blog Post Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Login */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
