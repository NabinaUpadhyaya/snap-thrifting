
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