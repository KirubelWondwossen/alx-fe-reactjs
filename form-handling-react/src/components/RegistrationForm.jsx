// src/components/formikForm.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

// Yup validation schema
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function FormikForm() {
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log("Form submitted:", values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="max-w-sm mx-auto p-4 border rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Register</h2>

          {/* Username */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Username</label>
            <Field
              type="text"
              name="username"
              className="w-full p-2 border rounded"
              placeholder="Enter username"
            />
            <ErrorMessage
              name="username"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Email</label>
            <Field
              type="email"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter email"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <label className="block mb-1 font-medium">Password</label>
            <Field
              type="password"
              name="password"
              className="w-full p-2 border rounded"
              placeholder="Enter password"
            />
            <ErrorMessage
              name="password"
              component="p"
              className="text-red-500 text-sm mt-1"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            {isSubmitting ? "Submitting..." : "Register"}
          </button>
        </Form>
      )}
    </Formik>
  );
}
