import React from "react";
import MainPage from "../components/MainPage"
import Footer from "../components/Footer";
import Header from "../components/Header";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div>
        <Header/>
      </div>
      {/* Banner Section */}
      <section className="relative w-full h-64  bg-gray-200 shadow-md">
        <div className="absolute inset-0 flex items-center justify-between px-8">
          {/* Left Image */}
          <img
            src="/images/banner-left.jpg"
            alt="Left Banner"
            className="h-36 w-36 object-cover rounded-lg shadow-lg"
          />
          {/* Center Image */}
          <img
            src="/images/banner-center.jpg"
            alt="Center Banner"
            className="h-44 w-44 object-cover rounded-lg shadow-lg"
          />
          {/* Right Text */}
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-700">SNAP Thrifting</h1>
            <p className="text-sm text-gray-500">
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
          <h2 className="text-xl font-semibold">Aarati Rai</h2>
          <p className="text-gray-500">aaratirai177@gmail.com</p>
          <p className="text-gray-500">Kathmandu</p>
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
