"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useAuth from "../../components/useAuth";
import cookie from "js-cookie";
import axios from "axios";

const accessToken = cookie.get("accessToken");

const EditProductPage = () => {
  const { user, loading: loadingUser } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!productId) {
      console.error("Product ID is missing");
      setError("Product ID is missing");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://snap-thrift-backend.onrender.com/products/getProductById/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
          }
        );

        const productData = response.data.data || response.data;

        const mappedData = {
          name: productData.name || "",
          price: productData.price || "",
          description: productData.description || "",
          size: productData.size || "S",
          category: productData.category || "clothing",
          discolor: productData.discolor ? "yes" : "no",
          condition: productData.condition || "new",
          tear: productData.tear ? "yes" : "no",
          image1: productData.images && productData.images[0] ? productData.images[0].url : "",
          image2: productData.images && productData.images[1] ? productData.images[1].url : "",
        };

        console.log("Fetched Product Data:", mappedData);
        setFormData(mappedData);
        setLoading(false);
      } catch (error) {
        console.error("Fetch error:", error);
        setError(error.response?.data?.message || "Failed to load product");
        setLoading(false);
      }
    };

    fetchProduct();
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
    setError(null);

    
    const updateData = {
      name: formData.name,
      price: parseFloat(formData.price), 
      description: formData.description,
      size: formData.size.toUpperCase(),
      discolor: formData.discolor === "yes",
      condition: formData.condition.toLowerCase(),
      tear: formData.tear === "yes",
      category: formData.category.toLowerCase(),
    };

    console.log("Sending Update Data:", updateData);

    try {
      const response = await axios.put(
        `https://snap-thrift-backend.onrender.com/products/updateProduct/${productId}`,
        updateData,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log("Backend Response:", response.data);

      const updatedProduct = response.data.data;
      const isUpdated = Object.keys(updateData).some(
        (key) => updatedProduct[key] !== undefined && updatedProduct[key].toString() === updateData[key].toString()
      );

      if (response.data.success && isUpdated) {
        alert("Product updated successfully!");
        router.push("/Admins/manageproducts");
      } else {
        throw new Error("Update failed or no changes applied");
      }
    } catch (error) {
      const errorMsg = error.response?.data?.message || error.message || "Product failed to update";
      console.error("Update error:", errorMsg, error);
      setError(errorMsg);
      alert("Product failed to update");
    }
  };

  if (loading || !formData) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p>Loading product data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <p className="text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="font-bold text-2xl mb-6 text-center">Edit Product</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name">Product Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="price">Product Price</label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="description">Product Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="size">Size</label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="category">Category</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="clothing">Clothing</option>
              <option value="shoes">Shoes</option>
              <option value="accessories">Accessories</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="condition">Condition</label>
            <select
              id="condition"
              name="condition"
              value={formData.condition}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="new">New</option>
              <option value="used">Used</option>
              <option value="refurbished">Refurbished</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="discolor">Discoloration</label>
            <select
              id="discolor"
              name="discolor"
              value={formData.discolor}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="tear">Tear</label>
            <select
              id="tear"
              name="tear"
              value={formData.tear}
              onChange={handleInputChange}
              className="border p-2 rounded-md"
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="col-span-2 grid grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label htmlFor="image1">Product Image 1</label>
              {formData.image1 && typeof formData.image1 === "string" && (
                <img
                  src={formData.image1}
                  alt="Product 1"
                  className="w-20 h-20 object-cover"
                />
              )}
              <input
                type="file"
                id="image1"
                name="image1"
                onChange={handleFileChange}
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="image2">Product Image 2</label>
              {formData.image2 && typeof formData.image2 === "string" && (
                <img
                  src={formData.image2}
                  alt="Product 2"
                  className="w-20 h-20 object-cover"
                />
              )}
              <input
                type="file"
                id="image2"
                name="image2"
                onChange={handleFileChange}
              />
            </div>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md"
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