// src/components/Profile.jsx
import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
  return (
    <div>
      <h1>Profile Page</h1>

      {/* Navigation for nested routes */}
      <nav className="mb-4">
        <Link className="mr-4 text-blue-600" to="details">Details</Link>
        <Link className="text-blue-600" to="settings">Settings</Link>
      </nav>

      {/* Nested Routes */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
