"use client";
import React, { useState } from "react";
import Itembox from "./Itembox"; // Correct import
import { FiX, FiUser, FiMail, FiPhone, FiMapPin, FiBox, FiTag } from "react-icons/fi";

const MainPage = () => {
  const [activeTab, setActiveTab] = useState("Pending"); // Default active tab is "Pending"
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    location: "",
    quantity: "",
    price: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsModalOpen(false); // Close the modal after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      location: "",
      quantity: "",
      price: "",
    });
  };

  return (
    <section className="mt-8 mb-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-between items-center">
          <button
            onClick={() => setIsModalOpen(true)} // Open the modal on button click
            className="bg-[#5F41E4] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#4c39c7]"
          >
            + Add Product
          </button>
          <div className="flex space-x-4"></div>
        </div>

        {/* Render the content for the selected tab using Itembox */}
        <div className="mt-6">
          <Itembox status={activeTab} /> {/* Pass the activeTab as a prop */}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FiX size={24} />
            </button>

            <h2 className="text-xl font-bold mb-4">Add Product</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiUser className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiMail className="text-gray-500 mr-2" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiPhone className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="number"
                  value={formData.number}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Location */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiMapPin className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Quantity */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiBox className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="Quantity"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Offered Price */}
              <div className="flex items-center border rounded-lg px-3 py-2">
                <FiTag className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Offered Price"
                  className="w-full focus:outline-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#5F41E4] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[#4c39c7]"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default MainPage;
