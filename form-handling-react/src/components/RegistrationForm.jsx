// src/components/RegistrationForm.js
import React, { useState } from "react";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation: check if any field is empty
    if (!formData.username || !formData.email || !formData.password) {
      setErrors("All fields are required.");
      return;
    }

    setErrors(""); // Clear previous errors
    console.log("Form submitted:", formData);

    // You can add further logic here (API call, state management, etc.)
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto p-4 border rounded-lg shadow-md"
    >
      <h2 className="text-xl font-bold mb-4">Register</h2>

      {errors && <p className="text-red-500 mb-2">{errors}</p>}

      <div className="mb-3">
        <label className="block mb-1 font-medium">Username</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter username"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3">
        <label className="block mb-1 font-medium">Password</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="Enter password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Register
      </button>
    </form>
  );
}
