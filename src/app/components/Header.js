import React from "react";
import Link from "next/link";
import {FiHome, FiShoppingCart, FiUser } from 'react-icons/fi'; // Importing icons
import { AiOutlineShop } from 'react-icons/ai';
const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-[#5F41E4]">
      {/* Logo */}
      <div className="text-2xl font-serif font-bold">
        <span className="italic text-white">Snap-Thrift</span>
      </div>

      {/* Search bar */}
      {/* <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Shop for..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
        />
        <button className="ml-2 text-gray-500 hover:text-[#4e38ae]">
          <FiSearch size={24} />
        </button>
      </div> */}

      {/* Buttons */}
      <ul className="flex items-center space-x-4">
        
        <Link 
        href="/howitworks"
        className="px-4 py-2 text-[#5F41E4] bg-white rounded-md hover:bg-gray-300 flex items-center">
          <AiOutlineShop size={20} className="mr-2" />
          Start Selling
        </Link>
       
          <Link
          href="/addtocart"
          className="text-white hover:text-gray-300">
            <FiShoppingCart size={24} />
          </Link>
          <Link 
          href="/profile"
          className="text-white hover:text-gray-300">
            <FiUser size={24} />
          </Link>
          <Link 
  href="/homepage" 
  className="text-white hover:text-gray-300">
    <FiHome size={24} />  
</Link> 
      
      </ul>
    </header>
  );
};

export default Header;
