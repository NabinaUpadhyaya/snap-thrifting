"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import VerifiedSection from "../components/VerifiedSection";

// Import items from respective files
import { items as clothingItems } from "../data/clothingitems.js";
import { items as shoeItems } from "../data/shoeitems.js";
import { items as accessoryItems } from "../data/accessoriesitems.js";

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedSections, setExpandedSections] = useState({
    clothing: false,
    shoes: false,
    accessories: false,
  });

  // Filter items based on the category and search query
  const filterItems = (items) =>
    items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const getSectionItems = (category) => {
    switch (category) {
      case "Clothings":
        return filterItems(clothingItems);
      case "Shoes":
        return filterItems(shoeItems);
      case "Accessories":
        return filterItems(accessoryItems);
      default:
        return {
          clothing: filterItems(clothingItems),
          shoes: filterItems(shoeItems),
          accessories: filterItems(accessoryItems),
        };
    }
  };

  // Toggle visibility for sections
  const toggleSection = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const renderSection = (title, items, sectionKey) => (
    <div className="mb-8 " id={sectionKey}>
      <div className=" text-white text-center py-4 ">
        <h2 className="text-2xl font-bold text-[#5F41E4]">{title}</h2>
      </div>
      <div className=" px-6 py-4 border-t border-gray-200">
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 ${
            expandedSections[sectionKey] ? "max-h-auto" : "max-h-[430px] overflow-hidden"
          }`}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-gray-200 rounded-lg p-4 mb-5 mx-4 flex flex-col items-center shadow hover:shadow-md"
            >
              {/* Display item image */}
              <div className="relative w-full h-60 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover "
                />
              </div>
              {/* Item details */}
              <h3 className="text-lg font-bold mb-2">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.category}</p>
              <p className="text-lg text-[#5F41E4] font-semibold">{item.price}</p>
             
             {/* DETAILS BUTTTON */}
              <p className="text-[#5F41E4] mt-3 hover:underline  ">
            <a href="/Details">

   Details→
            </a>
          </p>
            </div>
          ))}
        </div>
        <div className="flex justify-center  mt-4">
          <button
            className="px-6 py-2  bg-[#5F41E4] text-white rounded-lg hover:bg-[#5439c9]"
            onClick={() => toggleSection(sectionKey)}
          >
            {expandedSections[sectionKey] ? "Show Less" : "View More"}
          </button>
        </div>
      </div>
    </div>
  );

  const sectionItems = getSectionItems(selectedCategory);

  return (
    <div>
      <Header />

      <div className="bg-gray-100 py-8">
        {/* Filter Section */}
        <div className="flex flex-wrap  gap-4 mb-8 px-4 pt-16">
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
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="px-4 py-2 w-96  bg-gray-50 border rounded-lg outline-none"
            />

            </div>
          <button
            onClick={() => setSearchQuery(searchQuery)}
            className=" py-2 w-[100px] bg-[#5F41E4] text-white rounded-lg hover:bg-[#5239c1]"
          >
            Search
          </button>
        </div>

        {/* Render Sections */}
        {selectedCategory === "" ? (
          <>
            {renderSection("Clothings", sectionItems.clothing, "clothing")}
            {renderSection("Shoes", sectionItems.shoes, "shoes")}
            {renderSection("Accessories", sectionItems.accessories, "accessories")}
          </>
        ) : selectedCategory === "Clothings" ? (
          renderSection("Clothings", sectionItems, "clothing")
        ) : selectedCategory === "Shoes" ? (
          renderSection("Shoes", sectionItems, "shoes")
        ) : selectedCategory === "Accessories" ? (
          renderSection("Accessories", sectionItems, "accessories")
        ) : null}
      </div>

      <VerifiedSection />
      <Footer />
    </div>
  );
};

export default Page;
