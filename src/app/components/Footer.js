import React from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#5F41E4] text-white py-2">
      <div className="container mx-auto px-6">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Logo and Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">SNAP Thrift</h2>
            <p className="mb-4">Find us in social media</p>
            <div className="flex justify-center sm:justify-start space-x-6">
              <a href="#" className="hover:text-gray-400 text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400 text-xl">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          
          {/* Community */}
          <div>
            <h2 className="text-lg font-bold mb-4">COMMUNITY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">Blog</a></li>
              <li><a href="#" className="hover:text-gray-400">Community</a></li>
              <li><a href="#" className="hover:text-gray-400">Ideas</a></li>
              <li><a href="#" className="hover:text-gray-400">Developers</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-400">About us</a></li>
              <li><a href="/team" className="hover:text-gray-400">Team</a></li>
              {/* <li><a href="#" className="hover:text-gray-400">Where to Buy</a></li> */}
              <li><a href="#" className="hover:text-gray-400">Resellers</a></li>
              <li><a href="#" className="hover:text-gray-400">Influencers</a></li>
              <li><a href="#" className="hover:text-gray-400">Affiliates</a></li>
              {/* <li><a href="#" className="hover:text-gray-400">Media</a></li> */}
              <li><a href="#" className="hover:text-gray-400">Contacts & Imprint</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">USEFUL LINKS</h2>
            <ul className="space-y-2">
              {/* <li><a href="#" className="hover:text-gray-400">Warranty</a></li> */}
              <li><a href="#" className="hover:text-gray-400">Product Declarations</a></li>
              <li><a href="#" className="hover:text-gray-400">Terms of Use</a></li>
              <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-gray-400">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-600 pt-2 bg-white">
        <p className="text-[#5F41E4] text-lg">&copy; 2024 SNAP Thrift. All rights reserved.</p>
      </div>

    </footer>
  );
};

export default Footer;

