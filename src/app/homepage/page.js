"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FaSearch, FaRegListAlt } from 'react-icons/fa';
import VerifiedSection from "../components/VerifiedSection";

// Import items from respective files
import { items as clothingItems } from "../data/clothingitems.js";
import { items as shoeItems } from "../data/shoeitems.js";
import { items as accessoryItems } from "../data/accessoriesitems.js";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Combine all items into a single array
  const allItems = [
    ...clothingItems,
    ...shoeItems,
    ...accessoryItems,
  ];

  // Filter items based on the category and search query
  const filterItems = (items) =>
    items.filter(
      (item) =>
        (selectedCategory === "" || item.category === selectedCategory) &&
        (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()))
    );

  // Filtered items for rendering
  const filteredItems = filterItems(allItems);

  return (
    <div>
      <Header />

      <div className="bg-gray-100 py-8">
        {/* Filter Section */}
        {/* <div className="flex flex-wrap gap-4 mb-8 px-4">
          <select
            className="px-4 py-2 items-start w-80 bg-[#5F41E4] text-white rounded-lg outline-none hover:bg-[#5238c2]"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Clothings">Clothings</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>
          <div className="">
            <input
              type="text"
              placeholder="Shop for..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-96 bg-gray-50 border rounded-lg outline-none"
            />
          </div>
          <button
        onClick={() => setSearchQuery(searchQuery)}
        className="flex items-center justify-center py-2 w-[120px] bg-[#5F41E4] text-white rounded-lg hover:bg-[#5239c1] transition-all ease-in-out"
      >
        <FaSearch size={18} className="mr-2" />
        Search
      </button>
        </div> */}
        <div className="flex flex-wrap gap-4 mb-8 px-4 justify-center items-center">
      {/* Category Dropdown */}
      <select
        className="flex items-center px-4 py-2 w-80 bg-[#5F41E4] text-white rounded-lg outline-none hover:bg-[#5238c2] focus:ring-2 focus:ring-[#5F41E4] transition-all"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
      >
        <option value="" className="text-gray-600">All Categories</option>
        <option value="Clothings" className="text-gray-600">Clothings</option>
        <option value="Shoes" className="text-gray-600">Shoes</option>
        <option value="Accessories" className="text-gray-600">Accessories</option>
      </select>

      {/* Search Input */}
      <div className="relative w-72">
        <input
          type="text"
          placeholder="Shop for..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-full bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#5F41E4] transition-all"
        />
        <FaSearch size={20} className="absolute top-3 right-3 text-gray-400" />
      </div>

      {/* Search Button */}
      <button
        onClick={() => setSearchQuery(searchQuery)}
        className="flex items-center justify-center py-2 w-[110px] bg-[#5F41E4] text-white rounded-lg hover:bg-[#5239c1] transition-all ease-in-out"
      >
     
        Search
      </button>
    </div>

        {/* Render Items in a Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 mb-5 flex flex-col items-center shadow hover:shadow-md"
            >
              {/* Display item main image */}
              <div className="relative w-full h-60 mb-4">
                <img
                  src={item.mainImage}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              {/* Item details */}
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-lg text-[#5F41E4] font-semibold">{item.price}</p>

              {/* DETAILS BUTTON */}
              <p className="text-[#5F41E4] mt-3 hover:underline">
                <a href="/Details">Details →</a>
              </p>
            </div>
          ))}
        </div>
      </div>

      <VerifiedSection />

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Page;
