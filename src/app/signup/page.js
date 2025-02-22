"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Validation from "./signupValidation";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const toggleVisibility = () => setShowPassword((prev) => !prev);

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError((prev) => ({ ...prev, [event.target.name]: "" }));
  };

  // Handle signup submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    const validationErrors = Validation(formData);
    setError(validationErrors);
    console.log(error);
    if (Object.keys(validationErrors).length > 0) return;

    try {
      setLoading(true);
      const res = await axios.post(
        "https://snap-thrift-backend.onrender.com/auth/register",
        formData
      );

      if (res.data.success) {
        setUserId(res.data.data._id);
        setShowOTPModal(true); // Show OTP modal after successful registration
      }
    } catch (err) {
      setError({
        general:
          err.response?.data?.message ||
          "An error occurred during registration.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleOTPSubmit = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(
        "https://snap-thrift-backend.onrender.com/auth/verify-email",
        {
          userId,
          verificationCode: otp,
          email: formData.email,
        }
      );
      if (res.data.success) {
        setShowOTPModal(false);
        router.push("/login");
      }
    } catch (err) {
      setError({
        otp: err.response?.data?.message || "Invalid verification code",
      });
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-[#5F41E4] mb-6">
          Sign Up
        </h1>

        {/* Signup Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4] text-gray-800"
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
              placeholder="Contact No."
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4] text-gray-800"
              required
            />
            {error.phoneNumber && (
              <span className="text-xs text-red-500 italic">
                {error.phoneNumber}
              </span>
            )}
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4] text-gray-800"
              required
            />
            {error.email && (
              <span className="text-xs text-red-500 italic">{error.email}</span>
            )}
          </div>

          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4] text-gray-800"
              required
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 hover:text-[#5F41E4]"
            >
              {showPassword ? (
                <MdVisibilityOff size={20} />
              ) : (
                <MdVisibility size={20} />
              )}
            </button>
            {error.password && (
              <span className="text-xs text-red-500 italic">
                {error.password}
              </span>
            )}
          </div>

          {error.general && (
            <div className="mb-4 text-center">
              <span className="text-sm text-red-500 italic">
                {error.general}
              </span>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5F41E4] text-white font-bold py-2 px-4 rounded-md hover:bg-[#4a34ab] transition-colors disabled:bg-gray-400"
          >
            {loading ? "Signing Up..." : "Sign Up"}
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

      {/* OTP Verification Modal */}
      {showOTPModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
            <h2 className="text-xl font-bold text-[#5F41E4] mb-4 text-center">
              Verify Your Email
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
              Enter the 6-digit code sent to {formData.email}
            </p>

            <form onSubmit={handleOTPSubmit}>
              <div className="mb-4">
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  maxLength={6}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4] text-center text-gray-800"
                  required
                />
                {error.otp && (
                  <span className="text-xs text-red-500 italic block mt-1">
                    {error.otp}
                  </span>
                )}
              </div>

              <div className="flex justify-between gap-2">
                <button
                  type="button"
                  onClick={() => setShowOTPModal(false)}
                  className="flex-1 py-2 px-4 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 py-2 px-4 bg-[#5F41E4] text-white rounded-md hover:bg-[#4a34ab] disabled:bg-gray-400"
                >
                  {loading ? "Verifying..." : "Verify"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;
