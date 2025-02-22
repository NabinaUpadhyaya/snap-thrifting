"use client";
import React, { useState, useEffect } from "react";

import Link from "next/link";
import { FiHome, FiShoppingCart, FiUser } from "react-icons/fi";
import { IoMdLogOut } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineShop } from "react-icons/ai";
import clearAllCookies from "../components/ClearCookies";
import { useRouter } from "next/navigation";

const Header = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    setShowConfirm(false);
    clearAllCookies();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-[#5F41E4]">
      <div className="text-2xl font-serif font-bold">
        <span className="italic text-white">Snap-Thrift</span>
      </div>

      <ul className="flex items-center space-x-4">
        <Link
          href="/howitworks"
          className="px-4 py-2 text-[#5F41E4] bg-white rounded-md hover:bg-gray-300 flex items-center"
        >
          <AiOutlineShop size={20} className="mr-2" />
          Start Selling
        </Link>
        <Link href="/userOrderPage" className="text-white hover:text-gray-300">
        <MdOutlineShoppingBag size={24} />
        </Link>
        <Link href="/addtocart" className="text-white hover:text-gray-300">
          <FiShoppingCart size={24} />
        </Link>
        <Link href="/profile" className="text-white hover:text-gray-300">
          <FiUser size={24} />
        </Link>
        <Link href="/homepage" className="text-white hover:text-gray-300">
          <FiHome size={24} />
        </Link>

        <button
          className="text-white hover:text-gray-300"
          onClick={() => setShowConfirm(true)}
        >
          <IoMdLogOut size={24} />
        </button>

        {showConfirm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg">
              <p className="mb-4 text-black">
                Are you sure you want to logout?
              </p>
              <div className="flex justify-between  ">
                <Link
                  href="/"
                  className="bg-gray-500 text-white px-4 m-2 w-full py-2 rounded-lg hover:bg-[#3b2796]"
                  onClick={handleLogout}
                >
                  Yes
                </Link>
                <button
                  className="bg-[#5F41E4] text-white px-4 py-2 m-2 w-full  rounded-lg hover:bg-[#3b2796]"
                  onClick={handleCancel}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </ul>
    </header>
  );
};

export default Header;
