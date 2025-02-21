"use client";
import React, { useState } from "react";
import useAuth from "./useAuth";
import axios from "axios";
import { FaTshirt, FaTag, FaInfoCircle, FaImages } from "react-icons/fa";
import { FiX, FiUser, FiMail, FiPhone } from "react-icons/fi";

const EditProductPage = () => {
//   const { user, loading } = useAuth(); // Fetch user data
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage1: null,
    productImage2: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      alert("Please log in to update a product.");
      return;
    }

    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("description", formData.productDescription);
    form.append("userName", user.name);
    form.append("userEmail", user.email);
    form.append("userPhone", user.phoneNumber);
    form.append("timestamp", new Date().toISOString());

    if (formData.productImage1) form.append("images", formData.productImage1);
    if (formData.productImage2) form.append("images", formData.productImage2);

    try {
      const response = await axios.post(
        "https://snap-thrift-backend.onrender.com/products/updateProduct",
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Product updated successfully!");
        setFormData({ productName: "", productPrice: "", productDescription: "", productImage1: null, productImage2: null });
        setIsModalOpen(false);
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-2xl mb-6 text-center">Edit Your Product</h2>
      <button onClick={() => setIsModalOpen(true)} className="bg-[#5F41E4] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#4c39c7]">
        Edit Product
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
              <FiX size={24} />
            </button>
            <h2 className="text-xl font-bold mb-4">Edit Product</h2>
            {loading ? (
              <p>Loading user data...</p>
            ) : user ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiUser className="text-gray-500 mr-2" />
                  <input type="text" value={user.name} disabled className="w-full focus:outline-none bg-transparent" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiMail className="text-gray-500 mr-2" />
                  <input type="email" value={user.email} disabled className="w-full focus:outline-none bg-transparent" />
                </div>
                <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
                  <FiPhone className="text-gray-500 mr-2" />
                  <input type="text" value={user.phoneNumber} disabled className="w-full focus:outline-none bg-transparent" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="productName" className="text-sm font-medium mb-1">
                    <FaTshirt className="mr-2 text-gray-500" /> Product Name
                  </label>
                  <input type="text" id="productName" name="productName" value={formData.productName} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="productPrice" className="text-sm font-medium mb-1">
                    <FaTag className="mr-2 text-gray-500" /> Product Price
                  </label>
                  <input type="text" id="productPrice" name="productPrice" value={formData.productPrice} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none" required />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="productDescription" className="text-sm font-medium mb-1">
                    <FaInfoCircle className="mr-2 text-gray-500" /> Product Description
                  </label>
                  <textarea id="productDescription" name="productDescription" value={formData.productDescription} onChange={handleInputChange} className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"></textarea>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="productImage1" className="text-sm font-medium mb-1">
                    <FaImages className="mr-2 text-gray-500" /> Product Image 1
                  </label>
                  <input type="file" id="productImage1" name="productImage1" onChange={handleFileChange} className="w-full px-4 py-2 border rounded-md" required />
                </div>
                <button type="submit" className="w-full bg-[#5F41E4] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#4c39c7]">
                  Update Product
                </button>
              </form>
            ) : (
              <p>Please log in to edit a product.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProductPage;
