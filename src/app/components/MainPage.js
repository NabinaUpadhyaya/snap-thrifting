"use client";
import React, { useState } from "react";
import useAuth from "./useAuth";
import Itembox from "./Itembox"; // Correct import
import axios from "axios";
import { FiX, FiUser, FiMail, FiPhone, FiMapPin, FiBox, FiTag } from "react-icons/fi";

const MainPage = () => {
  const { user, loading } = useAuth(); // Get user data and loading state from the useAuth hook

  const [activeTab, setActiveTab] = useState("Pending"); // Default active tab is "Pending"
  const [isModalOpen, setIsModalOpen] = useState(false); // State to manage modal visibility
  const [formData, setFormData] = useState({
    location: "",
    quantity: "",
    price: "",
  });

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to submit a package.");
      return;
    }

    const packageData = {
      location: formData.location,
      quantity: formData.quantity,
      price: formData.price,
      userName: user.name,
      userEmail: user.email,
      userPhone: user.phoneNumber,
    };

    try {
      const response = await axios.post(
        "https://snap-thrift-backend.onrender.com/package/createPackage",
        packageData,
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Package submitted successfully!");
        setFormData({ location: "", quantity: "", price: "" });
        setIsModalOpen(false); // Close modal after successful submission
      } else {
        alert("Failed to submit package.");
      }
    } catch (error) {
      console.error("Error submitting package:", error);
      alert("Error submitting package.");
    }
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
            + Add Package
          </button>
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

            <h2 className="text-xl font-bold mb-4">Add Package</h2>

            {loading ? (
              <p>Loading user data...</p>
            ) : user ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiUser className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={user.name}
                    disabled
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>

                {/* Email */}
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiMail className="text-gray-500 mr-2" />
                  <input
                    type="email"
                    value={user.email}
                    disabled
                    className="w-full focus:outline-none bg-transparent"
                  />
                </div>

                {/* Phone Number */}
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiPhone className="text-gray-500 mr-2" />
                  <input
                    type="text"
                    value={user.phoneNumber}
                    disabled
                    className="w-full focus:outline-none bg-transparent"
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
                    type="number"
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
                    type="number"
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
            ) : (
              <p>Please log in to submit a package.</p>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default MainPage;
