"use client";

import React from "react";
import MainPage from "../components/MainPage"
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../components/useAuth";
// import axios from "axios";
// import Cookies from "js-cookie";

const Page = () => {
  const { user, loading } = useAuth(); // Get user data and loading state from the useAuth hook


  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Header/>
      </div>


      {/* Banner Section */}
      <section className="relative w-full h-64 bg-gray-200 shadow-md overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/image/staticimg/bg1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            clipPath: "inset(0)", // Ensures the blur stays within the section bounds
          }}
        >
        </div>

         {/* Overlay Content */}
        <div className="relative flex items-center justify-center h-full">
          {/* Overlapping Images */}
          <div className="relative transform translate-y-6"> {/* Move both images down */}
            <img
              src="/image/staticimg/bg1.jpeg"
              alt="right"
              className="h-48 w-48 object-cover rounded-lg shadow-lg transform translate-x-12"
            />
            <img
              src="/image/staticimg/right.webp"
              alt="left"
              className="h-44 w-44 object-cover rounded-lg shadow-lg transform -translate-x-12 -translate-y-10 absolute top-0 left-2"
            />
          </div>
            {/* Center Text */}
         <div className="ml-32 text-center">
            <h1 className="text-4xl font-bold text-gray-800">SNAP Thrifting</h1>
            <p className="text-sm text-gray-600 mt-2">
              Make fashion affordable, sustainable, and personal
            </p>
          </div>
        </div>
      </section>
      {/* Profile Section */}
      <section className="text-center mt-12">
        {/* <div className="flex justify-center space-x-4">
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Edit
          </button>
          <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
            Change Password
          </button>
        </div> */}
        <div className="mt-4">
  {loading ? (
    <p className="text-gray-500">Loading user data...</p>
  ) : user ? (
    <>
      <h2 className="text-xl font-semibold">{user.name}</h2>
      <p className="text-gray-500">{user.email}</p>
      <p className="text-gray-500">{user.phoneNumber}</p>
    </>
  ) : (
    <p className="text-gray-500">
      Please <a href="/login" className="text-blue-600 hover:underline">log in</a> to view your profile.
    </p>
  )}
</div>

      </section>
      <div>

      {/* Main Page Section */}
      <MainPage /> {/* Use MainPage component here */}
      </div>
      <footer >
        <Footer/>
      </footer>
    </div>
  );
};

export default Page;
