"use client";

import React from "react";
import { FaBoxOpen, FaTruck, FaMoneyCheckAlt } from "react-icons/fa";
import { BsCheckCircle } from "react-icons/bs";
import Header from "../components/Header";
import Footer from "../components/Footer";

const WhyAntidoteSection = () => (
  <div className="bg-[#F6EFFF] py-8 px-4">
  
    <h2 className="text-2xl font-bold text-[#5F41E4] text-center mb-8">
      WHY SNAP-THRIFT?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#5F41E4] flex items-center">
          <BsCheckCircle className="mr-2 text-green-600" />
          ALWAYS AUTHENTICATED
        </h3>
        <p className="mt-2 text-gray-700">
        We handpick every piece, checking authenticity and quality to
        make sure it’s the real deal.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#5F41E4] flex items-center">
          <BsCheckCircle className="mr-2  text-green-600" />
          WASHED AND STEAMED
        </h3>
        <p className="mt-2 text-gray-700">
        Items are washed to remove any marks or stains and then steamed,
        ready to be processed by our in-house team.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-md">
        <h3 className="text-lg font-semibold text-[#5F41E4] flex items-center">
          <BsCheckCircle className="mr-2 text-green-600" />
          SECURELY STORED
        </h3>
        <p className="mt-2 text-gray-700">
        Our products are carefully hung and stored in a climate-controlled
        room, ensuring they maintain quality.
        </p>
      </div>
    </div>
  </div>
);

const HowItWorksSection = () => (
  <div className="text-[#5F41E4] bg-white py-8 px-4">
    <h2 className="text-2xl font-bold text-center mb-8">HOW IT WORKS?</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div>
        <FaBoxOpen className="text-6xl text-amber-200 mx-auto mb-4" />
        <h3 className="text-lg font-semibold">Sort</h3>
        <p className="mt-2 text-gray-500">
          Sort the items that you want to sell. We accept women's, men's, and
          kids' apparel, accessories, and shoes.
        </p>
      </div>
      <div>
        <FaTruck className="text-6xl text-gray-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold">Send</h3>
        <p className="mt-2 text-gray-500">
          Send them to snap-thrift and earn a decent passive income.
        </p>
      </div>
      <div>
        <FaMoneyCheckAlt className="text-6xl text-emerald-500 mx-auto mb-4" />
        <h3 className="text-lg font-semibold">Earn</h3>
        <p className="mt-2 text-gray-500">
          We will credit your bank account as soon as we receive the package. 
        </p>
      </div>
    </div>
  </div>
);

const TrustedSection = () => (
  <div className="text-center  text-[#5F41E4] bg-white">
      <Header/>
    
  </div>
);

const Page = () => {
  return (
    <div>
      <TrustedSection />
      <HowItWorksSection />
      <WhyAntidoteSection />
      <div className="bg-[#5F41E4] text-white py-8 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">De-clutter your home today!</h2>
        <p className="text-lg">
          Sell your pre-loved and like-new apparel, accessories,
          shoes, and more from the comfort of your home.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-[#5F41E4] font-bold rounded-lg hover:bg-gray-200">
          GET STARTED
        </button>
      </div>
      <Footer/>
    </div>
  );
};

export default Page;
