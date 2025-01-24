// "use client";

// import React, { useEffect, useState } from "react";
// import { FaInstagram, FaFacebookF, FaTwitter, FaTiktok } from "react-icons/fa";

// const Footer = () => {



//   return (
//     <footer
//       className={` transition-opacity duration-500 ease-in-out bg-gray-600 text-white py-2`}
//     >
//       <div className="container mx-auto px-6">
//         <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
//           {/* Logo and Social Media */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">SNAP Thrift</h2>
//             <p className="mb-4">Find us on social media</p>
//             <div className="flex justify-center sm:justify-start space-x-6">
//               <a href="#" className="hover:text-gray-400 text-xl">
//                 <FaInstagram />
//               </a>
//               <a href="#" className="hover:text-gray-400 text-xl">
//                 <FaFacebookF />
//               </a>
//               <a href="#" className="hover:text-gray-400 text-xl">
//                 <FaTwitter />
//               </a>
//               <a href="#" className="hover:text-gray-400 text-xl">
//                 <FaTiktok />
//               </a>
//             </div>
//           </div>

          

//           {/* Company */}
//           <div>
//             <h2 className="text-lg font-bold mb-4">COMPANY</h2>
//             <ul className="space-y-2">
//               <li>
//                 <a href="#" className="hover:text-gray-400">
//                   About us
//                 </a>
//               </li>
             
              
            
              
              
//             </ul>
//           </div>

         
//         </div>
//       </div>
//       {/* Copyright Section */}
//       <div className="text-center mt-8  border-gray-600 bg-white">
//         <p className="text-gray-600 text-lg">&copy; 2024 SNAP Thrift. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-6 text-center">
        <p className="text-base">
          &copy; Snap-Thrift-{new Date().getFullYear()}. All rights reserved.
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-4 mt-2">
          <p className="flex items-center space-x-2 text-base">
            <FaMapMarkerAlt className="text-[#5F41E4]" />
            <span>Online Thrift Shop
            </span>
          </p>
          <p className="flex items-center space-x-2 text-base">
            <FaPhoneAlt className="text-[#5F41E4]" />
            <span>+977-9749496529</span>
          </p>
        </div>
        <div className="flex justify-center mt-2">
          <p className="flex items-center space-x-2 text-base">
            <FaEnvelope className="text-[#5F41E4]" />
            <span>support@snapthrift.com</span>
          </p>
        </div>
        <div className="mt-4">
          <h2 className="text-xs font-semibold text-[#5F41E4]">
            MAINTAIN SUSTAINABILITY, JUST A CLICK AWAY!
          </h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;