// page.js
"use client";
import React, { useState } from "react";
import Image from "next/image";

import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);
 
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#5F41E4]">
      <div className="bg-[#fff] p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-xl font-bold text-center mb-4">Log in with</h1>

        {/* Login form */}
        <form>
          <div className="mb-4 relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
              required
            />
            <MdOutlineEmail className="absolute top-1/3 right-3 text-gray-400" />
          </div>
          <div className="mb-4 relative ">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
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
          </div>

          <div className="mb-4 text-right text-sm hover:underline">
            <a href="#" className="text-[#5F41E4] hover:underline">
              Forget Password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#5F41E4]"
          >
            Log In
          </button>
          <div className="text-center mb-4">or</div>
          {/* Login buttons */}
          <div className="flex justify-between gap-4 mb-4">
            {/* <button className="flex items-center justify-center w-1/2 px-4 py-2 border rounded-md bg-[#D5CBFF] hover:bg-[#D5CBFF]">
              <Image
                src="assets/apple.svg"
                alt="Apple"
                className="h-5 mr-2"
                width={20}
                height={20}
              />
              Apple
            </button> */}
            <button className="flex items-center justify-center w-80 px-4 py-2 border rounded-md bg-[#D5CBFF] hover:bg-[#D5CBFF]">
              {/* WITHOUT IMPORTING */}
              <Image
                src="assets/google.svg"
                alt="Google"
                className="h-5 mr-2"
                width={20}
                height={20}
              />
              Continue with Google
            </button>
          </div>
        </form>

        <div className="text-center text-sm mt-4 ">
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
            <a href="/">

            Back to Homepage
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
