import React from 'react';
import Link from 'next/link';
import { FaHandHoldingUsd } from 'react-icons/fa'; 
import { MdVerified } from 'react-icons/md'; 

const VerifiedSection = () => {
  return (
    <section className="relative bg-[#0c0626] text-white py-20">
      {/* Background icons */}
      <div className="absolute inset-0 opacity-10 bg-repeat bg-[url('/path-to-your-icons-image.png')]"></div>

      <div className="relative text-center max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">
          <span className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Looking for a source of income?
          </span>
        </h2>

        <div className="space-y-6">
          <div className="flex justify-center items-center gap-2">
            <MdVerified size={24} className="text-yellow-400" />
            <p className="text-xl font-semibold">
              Verified & Trusted Platform
            </p>
          </div>
<ul>

          <Link 
          href="/profile"
          className="bg-white text-[#5F41E4] font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-gray-100 transition-all transform hover:scale-105 duration-300 ease-in-out">
            <FaHandHoldingUsd size={22} className="inline-block mr-2" />
            BECOME A SELLER
          </Link>
            </ul>
        </div>
      </div>
    </section>
  );
};

export default VerifiedSection;
