"use client";

import { useEffect, useState } from "react";
import useAuth from "./useAuth"; // Import your custom useAuth hook
import Cookies from 'js-cookie';

const ProductPage = ({ productId }) => {
  const { user, loading } = useAuth(); // Get user data and loading state from the useAuth hook
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);

  // Fetch product details after the user is authenticated
  useEffect(() => {
    if (loading) return; // Wait until loading is complete

    if (!user) {
      setError("You must be logged in to view product details");
      return;
    }

    // Fetch product details from the backend
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://snap-thrift-backend.onrender.com/products/getProductById/${productId}`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`, // Use the token from cookies
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch product details");
        }

        const data = await response.json();
        if (data.success) {
          setProduct(data.data); // Set the product details in the state
        } else {
          setError("Product not found");
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchProduct();
  }, [productId, user, loading]); // Dependency array ensures fetch happens after authentication and user is available

  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-center text-red-500">{error}</div>;
  if (!product) return <div>Loading product details...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
      <div className="mb-4">
        {product.images && product.images.map((image, index) => (
          <img
            key={index}
            src={image.url}
            alt={product.name}
            className="w-full h-auto rounded-lg shadow-md"
          />
        ))}
      </div>
      <div className="mb-4">
        <p className="text-lg text-gray-700">{product.description}</p>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-xl font-semibold text-gray-800">Rs. {product.price}</span>
        <span className="text-sm text-gray-600">Category: {product.category}</span>
      </div>
      <div className="flex items-center justify-between mb-6">
        <span className="text-sm text-gray-600">Size: {product.size || "N/A"}</span>
        <span className="text-sm text-gray-600">Condition: {product.condition || "N/A"}</span>
      </div>
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Additional Details</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Discoloration: {product.discolor || "None"}</li>
          <li>Tear: {product.tear || "None"}</li>
        </ul>
      </div>
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductPage;
