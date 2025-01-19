"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from '../components/slider';
import SingleGridBox from '../components/SingleGridBox';
import Image from 'next/image';

// Import items from respective files
import { items as clothingItems } from '../data/clothingitems.js';
import { items as shoeItems } from '../data/shoeitems.js';
import { items as accessoryItems } from '../data/accessoriesitems.js';
import VerifiedSection from '../components/VerifiedSection';

const Page = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setSelectedCategory('');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);

    if (category) {
      const sectionId = category.toLowerCase(); // e.g., 'clothing', 'shoes', etc.
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div>
      <div>
        <Header />
      </div>

      <div className="pt-8">
        {/* <Slider /> */}
      </div>

      <div>
        <div className="bg-gray-50 pt-6">
          <div className="bg-gray-50 min-h-screen p-4">
            {/* Filter Section */}
            <div className="flex justify-center gap-10 my-4">
              <div className="flex items-center bg-gray-100 rounded-xl shadow-md">
                <select
                  className="flex-grow px-4 py-2 text-white bg-indigo-600 border rounded-lg outline-none hover:bg-indigo-700"
                  value={selectedCategory}
                  onChange={handleChange}
                >
                  <option className='' value="" disabled>
                    Categories
                  </option>
                  <option value="Clothings">Clothings</option>
                  <option value="Shoes">Shoes</option>
                  <option value="Accessories">Accessories</option>
                </select>
                {/* <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                  Apply
                </button> */}
              </div>

              <div className="flex items-center bg-gray-100 rounded-xl shadow-md w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                  Search
                </button>
              </div>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                Filter By
              </button>
            </div>

       

            {/* Clothing Section */}
            <div id="clothings">
              <div className='pt-6 bg-slate-300'>
                <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">
                  Clothings
                </h1>
              </div>
              <div className="px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {clothingItems.map((item, index) => (
                    <SingleGridBox
                      key={index}
                      image={item.image}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  View More
                </button>
              </div>
            </div>
            

            {/* Shoes Section */}
            <div class>
              <div className='pt-6'>
                <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">
                  Shoes
                </h1>
              </div>
              <div className="px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {shoeItems.map((item, index) => (
                    <SingleGridBox
                      key={index}
                      image={item.image}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  View More
                </button>
              </div>
            </div>



            {/* Accessories Section */}
            <div id="accessories">
              <div className='pt-6'>
                <h1 className="text-center text-4xl font-bold text-indigo-600 mb-4">
                  Accessories
                </h1>
              </div>
              <div className="px-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                  {accessoryItems.map((item, index) => (
                    <SingleGridBox
                      key={index}
                      image={item.image}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  View More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
<VerifiedSection/>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Page;
