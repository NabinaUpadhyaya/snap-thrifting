"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import Validation from "./signupValidation";

const Signup = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    Name: "",
    Contact: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError({ ...error, [event.target.name]: "" });
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const error = Validation(formData);
    setError(error);

    if (Object.keys(error).length > 0) {
      return;
    }

    try {
      const res = await axios.post(
        "https://snap-thrift-backend.onrender.com/auth/register",
        formData
      );

      if (res.data.success) {
        router.push("/login");
      } else {
        setError(res.data);
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setError({ general:"An error occurred during registration." });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center mb-4">Signup</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="Name"
              placeholder="Name"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
            {/* <span className="text-xs text-red-500 italic">
              {error.Name ? error.Name : ""}
            </span> */}
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="Contact"
              placeholder="Contact no."
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email address"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleInput}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#5F41E4]"
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
