"use client";

import React from "react";
import MainPage from "../components/MainPage"
import Footer from "../components/Footer";
import Header from "../components/Header";
import useAuth from "../components/useAuth";

const Page = () => {
  const { user, loading } = useAuth(); 


  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Header/>
      </div>


      <section className="relative w-full h-64 bg-gray-200 shadow-md overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/image/staticimg/bg1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(8px)",
            clipPath: "inset(0)", 
          }}
        >
        </div>

        <div className="relative flex items-center justify-center h-full">
          <div className="relative transform translate-y-6"> 
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
         <div className="ml-32 text-center">
            <h1 className="text-4xl font-bold text-gray-800">SNAP Thrifting</h1>
            <p className="text-sm text-gray-600 mt-2">
              Make fashion affordable, sustainable, and personal
            </p>
          </div>
        </div>
      </section>
      <section className="text-center mt-12">
      
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
    <p className="min-h-24 text-gray-500">
     Welcome to snap-thrift, Please <a href="/login" className=" text-blue-600 hover:underline">log in</a> to view your profile.
    </p>
  )}
</div>

      </section>
      <div>

      <MainPage /> 
      </div>
      <footer >
        <Footer/>
      </footer>
    </div>
  );
};

export default Page;
