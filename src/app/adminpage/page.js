"use client";
import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaProjectDiagram,
  FaShoppingCart,
  FaTshirt,
  FaTag,
  FaInfoCircle,
  FaListAlt,
  FaBoxOpen,
  FaImages,
  FaSearch,
} from "react-icons/fa";

const Page = () => {
  const [stats, setStats] = useState({
    customers: 0,
    packages: 0,
    orders: 0,
});
useEffect(() => {
  const fetchStats = async () => {
    try {
      const response = await fetch("http://localhost:5000/products/createProduct"); // Replace with your API URL
      const data = await response.json();
      setStats({
        customers: data.customers,
        packages: data.packages,
        orders: data.orders,
      });
    } catch (error) {
      // console.error("Error fetching stats:", error);
    }
  };

  fetchStats();
}, []);

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productSize: "",
    productDiscolor: "",
    productCondition: "",
    productTear:"",
    productCategory: "",
    productImage1: null,
    productImage2: null,
  });

  // Fetch data from backend

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0], // Only keep the first selected file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("description", formData.productDescription);
    form.append("size", formData.productSize);
    form.append("discolor", formData.productDiscolor);
    form.append("condition", formData.productCondition);
    form.append("tear", formData.productTear);
    form.append("category", formData.productCategory);

    // Append the images
    if (formData.productImage1) {
      form.append("images", formData.productImage1);
    }
    if (formData.productImage2) {
      form.append("images", formData.productImage2);
    }

    try {
      const response = await fetch(
        "https://snap-thrift-backend.onrender.com/products/createProduct",
        {
          method: "POST",
          body: form,
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log("Product added successfully:", data);
        // Reset form after successful submission (optional)
        setFormData({
          productName: "",
          productPrice: "",
          productDescription: "",
          productSize: "",
          productDiscolor: "",
          productCondition: "",
          productTear:"",
          productCategory: "",
          productImage1: null,
          productImage2: null,
        });
      } else {
        console.error("Error adding product:", data);
      }
    } catch (error) {
    //   console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-[#5F41E4] w-64 p-5 text-white">
        <h1 className="text-2xl font-bold mb-8">SNAP-Thrift</h1>
        <ul>
          <li className="mb-4 flex items-center">
            <FaUsers className="mr-2" /> Customers
          </li>
          <li className="mb-4 flex items-center">
            <FaProjectDiagram className="mr-2" /> Package Requests
          </li>
          <li className="mb-4 flex items-center">
            <FaShoppingCart className="mr-2" /> Orders
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-5 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-4 mb-5">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{stats.customers}</h2>
            <p>Customers</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{stats.packages}</h2>
            <p>Packages</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">{stats.orders}</h2>
            <p>Orders</p>
          </div>
        </div>

        {/* Add Your Product Section */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="font-bold text-2xl mb-6 text-center">Add Your Product</h2>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            {/* Product Name */}
            <div className="flex flex-col">
              <label
                htmlFor="productName"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaTshirt className="mr-2 text-gray-500" /> Product Name
              </label>
              <input
                type="text"
                id="productName"
                name="productName"
                value={formData.productName}
                onChange={handleInputChange}
                placeholder="Enter product name"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Product Price */}
            <div className="flex flex-col">
              <label
                htmlFor="productPrice"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaTag className="mr-2 text-gray-500" /> Product Price
              </label>
              <input
                type="text"
                id="productPrice"
                name="productPrice"
                value={formData.productPrice}
                onChange={handleInputChange}
                placeholder="Enter product price"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              />
            </div>

            {/* Product Description */}
            <div className="col-span-2 flex flex-col">
              <label
                htmlFor="productDescription"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaInfoCircle className="mr-2 text-gray-500" /> Product
                Description
              </label>
              <textarea
                id="productDescription"
                name="productDescription"
                value={formData.productDescription}
                onChange={handleInputChange}
                placeholder="Enter product description"
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
            </div>

            {/* Product Size */}
            <div className="flex flex-col">
              <label
                htmlFor="productSize"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaListAlt className="mr-2 text-gray-500" /> Size
              </label>
              <select
                id="productSize"
                name="productSize"
                value={formData.productSize}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select size
                </option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
              </select>
            </div>

            {/* Product Discoloration */}
            <div className="flex flex-col">
              <label
                htmlFor="productDiscolor"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaBoxOpen className="mr-2 text-gray-500" /> Discoloration
              </label>
              <select
                id="productDiscolor"
                name="productDiscolor"
                value={formData.productDiscolor}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select discoloration
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>
               {/* Product tear */}
               <div className="flex flex-col">
              <label
                htmlFor="productTear"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaBoxOpen className="mr-2 text-gray-500" /> Tear/Broken              </label>
              <select
                id="productTear"
                name="productTear"  
                value={formData.productTear}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select 
                </option>
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </div>

            {/* Product Condition */}
            <div className="flex flex-col">
              <label
                htmlFor="productCondition"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaListAlt className="mr-2 text-gray-500" /> Condition
              </label>
              <select
                id="productCondition"
                name="productCondition"
                value={formData.productCondition}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select condition
                </option>
                <option value="new">New</option>
                <option value="used">Used</option>
                <option value="like-new">Like New</option>
              </select>
            </div>

            {/* Product Category */}
            <div className="flex flex-col">
              <label
                htmlFor="productCategory"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaListAlt className="mr-2 text-gray-500" /> Category
              </label>
              <select
                id="productCategory"
                name="productCategory"
                value={formData.productCategory}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select category
                </option>
                <option value="new">clothes</option>
                <option value="used">shoes</option>
                <option value="like-new">accessories</option>
              </select>
            </div>

            {/* Product Images */}
            <div className="col-span-2 grid grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="productImage1"
                  className="flex items-center text-sm font-medium mb-1"
                >
                  <FaImages className="mr-2 text-gray-500" /> Product Image 1
                </label>
                <input
                  type="file"
                  id="productImage1"
                  name="productImage1"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="productImage2"
                  className="flex items-center text-sm font-medium mb-1"
                >
                  <FaImages className="mr-2 text-gray-500" /> Product Image 2
                </label>
                <input
                  type="file"
                  id="productImage2"
                  name="productImage2"
                  onChange={handleFileChange}
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
              <button
                type="submit"
                className="bg-[#5F41E4] text-white py-2 px-6 rounded-md hover:bg-blue-600 transition"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
