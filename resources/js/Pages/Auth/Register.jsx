import React, { useState } from "react";
import Layout from "../Layout";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      newErrors.email = "Valid email is required";
    }

    if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // If there are errors, update the state and stop form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Continue with form submission logic
    // For example, send the registration data to the server
  };

  return (
    <Layout>
      <div className="flex flex-col mt-8 w-2/3 mx-auto py-8 px-4 mb-8 border border-b-gray-300 rounded-2xl">
        <h1 className="text-3xl font-bold text-center ">Register</h1>
        <form>
          <div className="flex flex-col gap-4 mt-4">
            <input
              type="text"
              placeholder="Name"
              className={`border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setErrors({ ...errors, name: null });
              }}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

            <input
              type="text"
              placeholder="Email"
              className={`border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrors({ ...errors, email: null });
              }}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

            <input
              type="password"
              placeholder="Password"
              className={`border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setErrors({ ...errors, password: null });
              }}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <button
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-2xl w-full"
            onClick={handleSubmit}
          >
            Register
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
