"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaTshirt, FaTag, FaInfoCircle, FaImages } from "react-icons/fa";
import { FiX, FiUser, FiMail, FiPhone } from "react-icons/fi";

const EditProductPage = ({ productId }) => {
  // Fetch product data based on productId
  const [productData, setProductData] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productImage1: null,
    productImage2: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch product details when component mounts
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(
          `https://snap-thrift-backend.onrender.com/products/${productId}`
        );
        if (response.data) {
          const { name, price, description, images } = response.data;
          setFormData({
            productName: name,
            productPrice: price,
            productDescription: description,
            productImage1: images ? images[0] : null,
            productImage2: images ? images[1] : null,
          });
          setProductData(response.data); // Store product details
        }
      } catch (error) {
        // console.error("Error fetching product data:", error);
      }
    };
    fetchProductData();
  }, [productId]);

  // Handle form data change
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
    if (!productData) {
      alert("No product data found.");
      return;
    }

    const form = new FormData();
    // Only append updated fields
    if (formData.productName !== productData.name) {
      form.append("name", formData.productName);
    }
    if (formData.productPrice !== productData.price) {
      form.append("price", formData.productPrice);
    }
    if (formData.productDescription !== productData.description) {
      form.append("description", formData.productDescription);
    }
    if (formData.productImage1 !== productData.images[0]) {
      form.append("images", formData.productImage1);
    }
    if (formData.productImage2 !== productData.images[1]) {
      form.append("images", formData.productImage2);
    }

    try {
      const response = await axios.post(
        `https://snap-thrift-backend.onrender.com/products/updateProduct/${productId}`,
        form,
        {
          headers: { "Content-Type": "multipart/form-data" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        alert("Product updated successfully!");
        setIsModalOpen(false); // Close the modal after update
      } else {
        alert("Failed to update product.");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      alert("Error updating product.");
    }
  };

  // if (!productData) return <p>Loading product data...</p>; // Show loading message while data is being fetched

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="font-bold text-2xl mb-6 text-center">Edit Your Product</h2>

      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="bg-white w-full max-w-lg p-6 rounded-lg shadow-lg relative">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          >
            <FiX size={24} />
          </button>
          <h2 className="text-xl font-bold mb-4">Edit Product</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FiUser className="text-gray-500 mr-2" />
              <input
                type="text"
                value={productData.user.name}
                disabled
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FiMail className="text-gray-500 mr-2" />
              <input
                type="email"
                value={productData.user.email}
                disabled
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-100">
              <FiPhone className="text-gray-500 mr-2" />
              <input
                type="text"
                value={productData.user.phoneNumber}
                disabled
                className="w-full focus:outline-none bg-transparent"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productName" className="text-sm font-medium mb-1">
                <FaTshirt className="mr-2 text-gray-500" /> Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productPrice" className="text-sm font-medium mb-1">
                <FaTag className="mr-2 text-gray-500" /> Product Price
              </label>
              <input
                type="text"
                id="productPrice"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productDescription" className="text-sm font-medium mb-1">
                <FaInfoCircle className="mr-2 text-gray-500" /> Product Description
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="productImage1" className="text-sm font-medium mb-1">
                <FaImages className="mr-2 text-gray-500" /> Product Image 1
              </label>
              <input
                type="file"
                id="productImage1"
                name="productImage1"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#5F41E4] text-white px-4 py-2 rounded-md shadow-md hover:bg-[#4c39c7]"
            >
              Update Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductPage;
