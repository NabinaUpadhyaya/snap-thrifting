"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

const page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError("");
  };

  const toggleVisibility = () => setShowPassword((prevState) => !prevState);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await axios.post("/api/admin/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.data.success) {
        localStorage.setItem("adminToken", res.data.token); // Save token
        router.push("/admin/dashboard"); // Redirect to admin dashboard
      } else {
        setError(res.data.message || "Invalid credentials");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
         <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center mb-4">Admin log In</h1>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
          
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Enter admin name"
              value={formData.username}
              onChange={handleInput}
                     className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
                     required
            />
          </div>

          <div className="mb-4 relative">
          
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInput}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
            required
            />
            <button
              type="button"
              onClick={toggleVisibility}
              className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
            >
              {showPassword ? <MdVisibilityOff size={20} /> : <MdVisibility size={20} />}
            </button>
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-white py-2 px-4 rounded-md hover:bg-[#3b22aa] transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
