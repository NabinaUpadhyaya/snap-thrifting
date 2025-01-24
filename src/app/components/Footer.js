"use client";

import React, { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [isFooterVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Check if the user has scrolled to the bottom
      if (scrollTop + windowHeight >= documentHeight) {
        setFooterVisible(true);
      } else {
        setFooterVisible(false);
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  console.log("Rendering Footer");

  return (
    <footer
      className={`${
        isFooterVisible ? "opacity-100 visible" : "opacity-0 invisible"
      } transition-opacity duration-500 ease-in-out bg-gray-800 text-white py-2`}
    >
      <div className="container mx-auto px-6">
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Logo and Social Media */}
          <div>
            <h2 className="text-lg font-bold mb-4">SNAP Thrift</h2>
            <p className="mb-4">Find us on social media</p>
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
              <li>
                <a href="#" className="hover:text-gray-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Ideas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Developers
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h2 className="text-lg font-bold mb-4">COMPANY</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  About us
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-gray-400">
                  Team
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Resellers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Influencers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Affiliates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contacts & Imprint
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-lg font-bold mb-4">USEFUL LINKS</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Product Declarations
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookie Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Cookie Settings
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Copyright Section */}
      <div className="text-center mt-8 border-t border-gray-600 pt-2 bg-white">
        <p className="text-gray-600 text-lg">&copy; 2024 SNAP Thrift. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
