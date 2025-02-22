"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Validation from "./signupValidation";
import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";
import Footer from "../components/Footer";
const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);

  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError((prevError) => ({ ...prevError, [event.target.name]: "" })); // Reset the error for that specific field
  };

  async function handleSubmit(event) {
    event.preventDefault();

    // Validate form data
    const validationErrors = Validation(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/auth/register",
        formData
      );
      console.log("Backend Response:", res.data); 

      if (res.data.success) {
        router.push("/login");
      } 
    } catch (err) {
     
      if (err.response) {
        setError({
          general:
            err.response.data.message ||
            "An error occurred during registration.",
        });
      } else {
        setError({
          general: err.message || "An error occurred during registration.",
        });
      }
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-96 ">
        <h1 className="text-xl font-bold text-black text-center mb-4">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInput}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
            {error.name && (
              <span className="text-xs text-red-500 italic">{error.name}</span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="text"
              name="phoneNumber"
              placeholder="Contact no."
              onChange={handleInput}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
            {error.phoneNumber && (
              <span className="text-xs text-red-500 italic">
                {error.phoneNumber}
              </span>
            )}
          </div>

          <div className="mb-4 relative">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInput}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          
            {error.email && (
              <span className="text-xs text-red-500 italic">{error.email}</span>
            )}
          </div>

          <div className="mb-4 relative">
            <input
             type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleInput}
              className="w-full px-4 text-black py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
             <button
                          className="absolute text-black inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
                          type="button"
                          onClick={toggleVisibility}
                          aria-label={showPassword ? "Hide password" : "Show password"}
                          aria-pressed={showPassword}
                          aria-controls="password"
                        >
                          {showPassword ? (
                            <MdVisibilityOff size={20} aria-hidden="true" />
                          ) : (
                            <MdVisibility size={20} aria-hidden="true" />
                          )}
                        </button>
            {error.password && (
              <span className="text-xs text-red-500 italic">
                {error.password}
              </span>
            )}
          </div>

          {error.general && (
            <div className="mb-4">
              <span className="text-xs text-red-500 italic">
                {error.general}
              </span>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#4a34ab]"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-sm mt-4">
          <p>
            Already have an account?{" "}
            <a
              href="/login"
              className="text-[#5F41E4] font-bold hover:underline"
            >
              Login
            </a>
          </p>
          <p className="text-[#5F41E4] mt-3 hover:underline">
            <a href="/">Back to Homepage</a>
          </p>
        </div>
      </div>
    
    </div>
  );
};

export default Signup;
