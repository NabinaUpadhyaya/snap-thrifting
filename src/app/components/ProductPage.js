"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import useAuth from "./useAuth";
import cookie from "js-cookie";
import axios from "axios";
import Link from "next/link";

const ProductPage = () => {
  const { id } = useParams();
  const { user, loading } = useAuth(); 
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = cookie.get("accessToken");

  console.log("acsTo", accessToken);

  useEffect(() => {
    const fetchProducts = async () => {
      console.log("id her", id);
      try {
        const response = await axios.get(
          `https://snap-thrift-backend.onrender.com/products/getProductById/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log("product details", response);
        setProduct(response.data.data);
      } catch (error) {
        console.log("error", error);
        setError("Error fetching product");
      }
    };
    fetchProducts();
  }, [id]);

  const addToCart = async (productId) => {
    try {
      const response = await axios.post(
        "https://snap-thrift-backend.onrender.com/cart/addToCart",
        { productId },
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 300) {
        alert(response.data.message);
        return;
      }

      console.log("ressss", response);

      console.log("accessToken:", accessToken);

      alert("Product added to cart successfully!");
    } catch (error) {
      console.log("error", error);
      console.log(
        "Error adding to cart:",
        error.response ? error.response.data : error
      );
      if (error.response.data.status === 300) {
        alert(error.response.data.message);
      }
      alert("Failed to add product to cart.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      <p className="text-xl text-gray-600">Loading details...</p>
    </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-600 py-10 font-bold">{error}</div>
    );
  }

  if (!product) {
    return (
      <div className=" min-h-[445px] text-center py-4 text-lg text-gray-500">
      Welcome to Snap Thrift! Please{" "}
      <a href="/login" className="text-blue-600 hover:underline">
        log in
      </a>{" "}
      to access the details.
    </div>
    );
  }

  console.log("Product", product);

  return (
    <div className="max-w-4xl mx-auto  bg-white shadow-lg rounded-lg">
      <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
        <div className="flex justify-center items-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {product.name}
          </h1>
        </div>

        <div className="flex justify-center gap-6 mb-6">
          {product.images &&
            product.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.name}
                className="w-[400px] h-[400px] object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
              />
            ))}
        </div>

        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-semibold text-gray-800">
            Rs. {product.price}
          </span>
        </div>
        <div className="flex justify-between items-center mb-2 ">
          <span className="text-sm text-gray-600">
            Category: {product.category}
          </span>
        </div>
        <div className="flex justify-between items-center mb-4 ">
          <span className="text-sm text-gray-600">
            Size: {product.size || "N/A"}
          </span>
        </div>

        <div className="mb-6">
          <p className="text-lg text-gray-700">
            Description: {product.description}
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Additional Details
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Discoloration: {product.discoloration || "None"}</li>
            <li>Tear: {product.tear || "None"}</li>
            <li>Condition: {product.condition || "N/A"}</li>
          </ul>
        </div>

        <div className="flex gap-6 justify-center mb-6">
          <button
            onClick={() => addToCart(product._id)}
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg font-medium transition-transform transform hover:scale-105"
          >
            Add to Cart
          </button>
          <Link
            href="/homepage"
            className="bg-gray-500 hover:bg-gray-600 text-white py-3 px-8 rounded-lg font-medium transition-transform transform hover:scale-105"
          >
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
