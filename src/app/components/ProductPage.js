"use client";

import { useState } from 'react';

const ProductPage = () => {
  // Define a state variable to store the selected image
  const [selectedImage, setSelectedImage] = useState("/image/dressfront.jpg");

  // Function to handle selecting a new image
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="mt-8 flex justify-center">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white w-full max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center">
            {/* Main Image */}
            <div className="w-96 h-96 bg-gray-300 rounded-lg mb-4">
              <img
                src={selectedImage}
                alt="One Piece Dress"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Smaller Images */}
            <div className="flex space-x-4">
              <div
                className="w-24 h-24 bg-red-400 rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/image/dressfront.jpg")}
              >
                <img
                  src="/image/dressfront.jpg"
                  alt="One Piece Dress1 - mainImage"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div
                className="w-24 h-24 bg-gray-300 rounded-lg cursor-pointer"
                onClick={() => handleImageClick("/image/dressback.webp")}
              >
                <img
                  src="/image/dressback.webp"
                  alt="One Piece Dress2 - Small 1"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
            <h1 className="text-2xl font-bold">One Piece Dress</h1>
            <p className="text-lg text-gray-700 mt-2">Rs. 500</p>
            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-2 py-1 rounded-full mt-2">
              Clothings
            </span>

            <div className="mt-4">
              <p><span className="font-semibold">Size:</span> M</p>
              <p><span className="font-semibold">Condition:</span> Used</p>
              <p><span className="font-semibold">Discolor:</span> None</p>
              <p><span className="font-semibold">Tear:</span> None</p>
            </div>

            {/* Product Description */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h2 className="font-semibold">Description</h2>
              <p>Stylish and comfortable one-piece dress suitable for any occasion.</p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 w-auto bg-[#5F41E4] text-white text-xl py-2 px-8 rounded-lg hover:bg-[#452fa3]">
            + Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
