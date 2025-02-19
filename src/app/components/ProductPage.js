"use client";
import { useParams } from 'next/navigation';
import { useEffect, useState } from "react";
import useAuth from "./useAuth"; // Import your custom useAuth hook
import cookie from 'js-cookie';
import axios from 'axios';
import Link from 'next/link';

const ProductPage = () => {
  const { id } = useParams();
  const { user, loading } = useAuth(); // Get user data and loading state from the useAuth hook
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const accessToken = cookie.get('accessToken');

  console.log("accssTo", accessToken);
 

  // Fetch product details after the user is authenticated
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("id her", id)
      try {
        const response = await axios.get(
          `https://snap-thrift-backend.onrender.com/products/getProductById/${id}`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );
        console.log('product details', response)
        setProduct(response.data.data);
        // setLoading(false);
      } catch (error) {
        console.log("error", error);
        setError('Error fetching product');
        // setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

 

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-semibold">
        Loading product details...
      </div>
    );
  }
  if (error) {
    return (
      <div className="text-center text-red-600 py-10 font-bold">
        {error}
      </div>
    );
  }

  if (!product) {
    return (
      <div className="text-center py-10 text-gray-600">
        Product not found.
      </div>
    );
  }

console.log("Produttt", product);

  return (
    <div className="max-w-4xl mx-auto  bg-white shadow-lg rounded-lg">
  <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
    <div className='flex justify-center items-center'>

    <h1 className="text-3xl font-bold text-gray-800 mb-6">{product.name}</h1>
    </div>
    
    <div className="flex justify-center gap-6 mb-6">
      {product.images && product.images.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.name}
          className="w-[400px] h-[400px] object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
        />
      ))}
    </div>
    
    
    <div className="flex justify-between items-center mb-6">
      <span className="text-xl font-semibold text-gray-800">Rs. {product.price}</span>
     
    </div>
    <div className="flex justify-between items-center mb-2 ">
    <span className="text-sm text-gray-600">Category: {product.category}</span>
    </div>
    <div className="flex justify-between items-center mb-4 ">
      <span className="text-sm text-gray-600">Size: {product.size || "N/A"}</span>
    </div>
   
    
    <div className="mb-6">
      <p className="text-lg text-gray-700">Description: {product.description}</p>
    </div>

    <div className="mb-8">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Details</h3>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        <li>Discoloration: {product.discoloration || "None"}</li>
        <li>Tear: {product.tear || "None"}</li>
        <li>Condition: {product.condition || "N/A"}</li>
      </ul>
    </div>
    
    <div className="flex gap-6 justify-center mb-6">
      <Link
        href="/addtocart"
        className="bg-[#5F41E4] hover:bg-[#4631a0] text-white py-3 px-8 rounded-lg font-medium transition-transform transform hover:scale-105"
      >
        Add to Cart
      </Link>
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
