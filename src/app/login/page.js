"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdVisibility, MdOutlineEmail, MdVisibilityOff } from "react-icons/md";
import Cookies from "js-cookie";
import clearAllCookies from "../components/ClearCookies";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword((prevState) => !prevState);
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
  

  clearAllCookies();

  const handleInput = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
    setError((prevError) => ({ ...prevError, [event.target.name]: "" }));
  };
  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const res = await axios.post(
        "https://snap-thrift-backend.onrender.com/auth/login",
        formData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      console.log("Login Response:", res.data);

      if (res.data.success) {
        const { accessToken, user } = res.data.data;
        const role = user.role;
        console.log("Token received:", accessToken);
        console.log("User Role:", role);

        Cookies.set("accessToken", accessToken, { expires: 7 });
        console.log("Token saved to cookies");

        if (role === "admin") {
          console.log("Redirecting to Admin Page...");
          router.push("/Admins/adminpage");
        } else {
          console.log("Redirecting to User Homepage...");
          router.push("/homepage");
        }
      } else {
        console.log("Login failed:", res.data.message);
        setError(res.data.message || "Invalid email or password.");
      }
    } catch (err) {
      console.error("Login Error:", err.response?.data || err);
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
              className="absolute inset-y-0 right-3 flex items-center px-2.5 cursor-pointer text-gray-400 rounded-e-md"
              type="button"
              onClick={toggleVisibility}
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
            <div className="text-xs text-red-500 italic mb-3">
              {error.general}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#5F41E4] text-[#D5CBFF] font-bold py-2 px-4 rounded-md hover:bg-[#5038b9]"
          >
           
            {loading ? "Loging Up..." : "Log In"}
          </button>
        </form>

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
