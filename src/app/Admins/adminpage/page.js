"use client"
import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaTshirt,
  FaTag,
  FaInfoCircle,
  FaListAlt,
  FaBoxOpen,
  FaImages,
} from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";
import Link from "next/link";
import useAuth from "../../components/useAuth";



const Page = () => {
  const { user, loading: loadingUser } = useAuth(); 

  const [formData, setFormData] = useState({
    productName: "",
    productPrice: "",
    productDescription: "",
    productSize: "",
    productDiscolor: "",
    productCondition: "",
    productTear: "",
    productCategory: "",
    productImage1: null,
    productImage2: null,
  });
const [showConfirm, setShowConfirm] = useState(false);
 

  const handleLogout = () => {
    setShowConfirm(false);
   
  };  

  const handleCancel = () => {
    setShowConfirm(false); 
  };

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
      [name]: files[0],
    }));
  };
  
  const getTokenFromCookies = () => {
    const token = document.cookie
      .split('; ')
      .find(row => row.startsWith('accessToken='))
      ?.split('=')[1];
    return token;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data...");  
  
    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("description", formData.productDescription);
    form.append("size", formData.productSize.toUpperCase()); // Ensure size is 'S', 'M', or 'L'
    form.append("discolor", formData.productDiscolor);
    form.append("condition", formData.productCondition.toLowerCase()); // Ensure condition is 'new' or 'used'
    form.append("tear", formData.productTear);
    form.append("category", formData.productCategory.toLowerCase()); // Ensure category is a valid category
  
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
          credentials: "include", 
          body: form,
        }
      );
  
      const data = await response.json();
  
      console.log("Response status:", response.status);
  
      if (response.ok) {
        console.log("Product added successfully:", data);
        alert("Product added successfully!");
  
        setFormData({
          productName: "",
          productPrice: "",
          productDescription: "",
          productSize: "",
          productDiscolor: "",
          productCondition: "",
          productTear: "",
          productCategory: "",
          productImage1: null,
          productImage2: null,
        });
      } else {
        console.error("Error adding product:", data);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error adding the product. Please try again.");
    }
  };
  


  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-[#5F41E4] w-64 p-5 flex-shrink-0 text-white">
      <div className="text-2xl font-serif font-bold mb-4">
        <span className="italic text-white">Snap-Thrift</span>
      </div>
        <ul>
          <Link 
          href="/Admins/manageproducts" className="mb-4 hover:text-[#3b2796] flex items-center">
            <FaUsers className="mr-2 " /> Manage Products
          </Link>
          <Link 
          href="/Admins/package" className="mb-4 hover:text-[#3b2796] flex items-center">
            <FaUsers className="mr-2 " /> Package Requests
          </Link>
          <Link 
          href="/Admins/orders" className="mb-4 hover:text-[#3b2796] flex items-center">
            <FaUsers className="mr-2 " />  Orders
          </Link>
        
     
      <div>
      {/* Log Out Link */}
      <button
        className="mb-4 hover:text-[#3b2796] flex items-center"
        onClick={() => setShowConfirm(true)} 
      >
        <IoMdLogOut className="mr-2" /> Log Out
      </button>

      {/* Confirmation Popup */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg">
            <p className="mb-4 text-black">Are you sure you want to logout?</p>
            <div className="flex justify-between  ">
             
              {/* Yes button */}
              <Link
              href="/signup"
                className="bg-gray-500 text-white px-4 m-2 w-full py-2 rounded-lg hover:bg-[#3b2796]"
                onClick={handleLogout}
              >
                Yes
              </Link>
               {/* No button */}
             
               <button
              
                className="bg-[#5F41E4] text-white px-4 py-2 m-2 w-full  rounded-lg hover:bg-[#3b2796]"
                onClick={handleCancel}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}

    
    </div>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-grow p-5 bg-gray-100">
        {/* Header */}
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">20</h2>
            <p>Customers</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">12</h2>
            <p>Packages</p>
          </div>
          <div className="bg-white p-5 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold">5</h2>
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none "
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
                required
              >
                <option value="" disabled>
                  Select condition
                </option>
                <option value="new">new</option>
                <option value="used">used</option>
                <option value="like-new">like new</option>
              </select>
            </div>

            {/* Product Category */}
            <select
              id="productCategory"
              name="productCategory"
              value={formData.productCategory}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="clothing">clothing</option>
              <option value="shoes">shoes</option>
              <option value="accessories">accessories</option>
            </select>


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
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
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
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="col-span-2 text-center">
            <button
  type="submit"  // Change type to "submit" to trigger form submission
  className="bg-[#5F41E4] text-white py-2 px-6 rounded-md hover:bg-[#5F41E4] transition"
>
  Add Product
</button>


            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Page;