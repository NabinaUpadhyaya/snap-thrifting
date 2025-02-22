"use client";
import React, { useState, useEffect } from "react";
import {
  FaTshirt,
  FaTag,
  FaInfoCircle,
  FaListAlt,
  FaBoxOpen,
  FaImages,
} from "react-icons/fa";
import { useRouter } from "next/navigation"; // For navigation after update

const EditProductPage = ({ productId }) => {
  const router = useRouter();
  const [productData, setProductData] = useState(null);
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
  const [loading, setLoading] = useState(true);

  // Fetch product data when component mounts
  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await fetch(
          `https://snap-thrift-backend.onrender.com/products/${productId}`,
          {
            method: "GET",
            credentials: "include", // Include cookies for authentication
          }
        );
        const data = await response.json();
        console.log("Fetched data:", data);

        if (response.ok) {
          setFormData({
            productName: data.name || "",
            productPrice: data.price || "",
            productDescription: data.description || "",
            productSize: data.size || "",
            productDiscolor: data.discolor ? "yes" : "no",
            productCondition: data.condition || "",
            productTear: data.tear ? "yes" : "no",
            productCategory: data.category || "",
            productImage1: data.images?.[0]?.url || null,
            productImage2: data.images?.[1]?.url || null,
          });
          setProductData(data);
        } else {
          console.error("Error fetching product:", data);
          alert(`Error: ${data.message}`);
        }
      } catch (error) {
        // console.error("Error fetching product data:", error);
        // alert("Failed to load product data.");
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [productId]);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = new FormData();
    form.append("name", formData.productName);
    form.append("price", formData.productPrice);
    form.append("description", formData.productDescription);
    form.append("size", formData.productSize.toUpperCase());
    form.append("discolor", formData.productDiscolor === "yes");
    form.append("condition", formData.productCondition.toLowerCase());
    form.append("tear", formData.productTear === "yes");
    form.append("category", formData.productCategory.toLowerCase());

    // Append images only if new files are selected
    if (formData.productImage1 && typeof formData.productImage1 !== "string") {
      form.append("images", formData.productImage1);
    }
    if (formData.productImage2 && typeof formData.productImage2 !== "string") {
      form.append("images", formData.productImage2);
    }

    try {
      const response = await fetch(
        `https://snap-thrift-backend.onrender.com/product/updateProduct/${productId}`,
        {
          method: "POST",
          credentials: "include",
          body: form,
        }
      );
      const data = await response.json();

      if (response.ok) {
        console.log("Product updated successfully:", data);
        alert("Product updated successfully!");
        router.push("/some-success-page"); // Redirect after success (adjust path)
      } else {
        console.error("Error updating product:", data);
        alert(`Error: ${data.message}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error updating the product. Please try again.");
    }
  };

  if (loading) return <p>Loading product data...</p>;

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="font-bold text-2xl mb-6 text-center">Edit Your Product</h2>
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
              <FaInfoCircle className="mr-2 text-gray-500" /> Product Description
            </label>
            <textarea
              id="productDescription"
              name="productDescription"
              value={formData.productDescription}
              onChange={handleInputChange}
              placeholder="Enter product description"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
            />
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              required
            >
              <option value="" disabled>
                Select size
              </option>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
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

          {/* Product Tear */}
          <div className="flex flex-col">
            <label
              htmlFor="productTear"
              className="flex items-center text-sm font-medium mb-1"
            >
              <FaBoxOpen className="mr-2 text-gray-500" /> Tear/Broken
            </label>
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
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="clothing">Clothing</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
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
              {formData.productImage1 && typeof formData.productImage1 === "string" && (
                <img
                  src={formData.productImage1}
                  alt="Product Image 1"
                  className="w-20 h-20 mb-2 object-cover"
                />
              )}
              <input
                type="file"
                id="productImage1"
                name="productImage1"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="productImage2"
                className="flex items-center text-sm font-medium mb-1"
              >
                <FaImages className="mr-2 text-gray-500" /> Product Image 2
              </label>
              {formData.productImage2 && typeof formData.productImage2 === "string" && (
                <img
                  src={formData.productImage2}
                  alt="Product Image 2"
                  className="w-20 h-20 mb-2 object-cover"
                />
              )}
              <input
                type="file"
                id="productImage2"
                name="productImage2"
                onChange={handleFileChange}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-[#5F41E4] focus:outline-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-[#5F41E4] text-white py-2 px-6 rounded-md hover:bg-[#4c39c7] transition"
            >
              Update Product
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProductPage;