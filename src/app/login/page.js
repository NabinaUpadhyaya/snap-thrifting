"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import Validation from "./loginValidation";
import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";
import Cookies from "js-cookie";// Import js-cookie

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError((prevError) => ({ ...prevError, [event.target.name]: "" }));
  };

  async function handleSubmit(event) {
    event.preventDefault();
    const validationErrors = Validation(formData);
    setError(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return; // Stop execution if validation errors exist
    }

    try {
      const res = await axios.post(
        "https://snap-thrift-backend.onrender.com/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true, // ✅ Ensures token is stored in cookies
        }
      );

      if (res.data.success) {
        console.log("token here", res.data);
        // Store the token in cookies after successful login
        Cookies.set("accessToken", res.data.data.accessToken); // Store the token with 1 day expiration
        router.push("/homepage"); // ✅ Redirect to homepage after successful login
      } else {
        setError({ general: res.data.message || "Login failed. Try again." });
      }
    } catch (err) {
      setError({
        general:
          err.response?.data?.message || "An error occurred during login.",
      });
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center text-black mb-4">
          Log in with
        </h1>

        {/* Login form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4 relative">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              onChange={handleInput}
              className="w-full text-black px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
            <MdOutlineEmail className="absolute top-1/3 right-3 text-gray-400" />
            {error.email && (
              <span className="text-xs text-red-500 italic">{error.email}</span>
            )}
          </div>
          <div className="mb-4 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              onChange={handleInput}
              className="w-full px-4 text-black py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />

            <button
              className="absolute inset-y-0 end-0 flex items-center z-20 px-2.5 cursor-pointer text-gray-400 rounded-e-md focus:outline-none focus-visible:text-indigo-500 hover:text-indigo-500 transition-colors"
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

          <div className="mb-4 text-right text-sm hover:underline">
            <a href="#" className="text-[#5F41E4] hover:underline">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#5038b9]"
          >
            Log In
          </button>
          {/* <div className="text-center mb-4">or</div> */}

          {/* Login with Google */}
          {/* <div className="flex justify-between gap-4 mb-4">
            <button className="flex items-center justify-center w-80 px-4 py-2 border rounded-md bg-[#D5CBFF] hover:bg-[#D5CBFF]">
              <Image
                src="/assets/google.svg"
                alt="Google"
                className="h-5 mr-2"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
          </div> */}
        </form>

        {/* Signup & Back to Home */}
        <div className="text-center text-sm mt-4">
          <p>
            Don’t have an account?{" "}
            <a
              href="/signup"
              className="text-[#5F41E4] font-bold hover:underline"
            >
              Signup now
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

export default Page;
