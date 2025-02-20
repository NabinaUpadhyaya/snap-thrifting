'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';




const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
 
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://snap-thrift-backend.onrender.com/products/getAllProduct');
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching products.');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://snap-thrift-backend.onrender.com/package/delete/${id}`);
      setProducts(products.filter((product) => product._id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold text-center text-[#5F41E4] mb-8">
        Product Management
      </h1>
      <div className="overflow-hidden bg-white shadow-lg rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-[#5F41E4] text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Image</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Product Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Category</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Price</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase">Manage</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {products.map((product) => (
              <tr key={product._id} className="border-t">
                {/* Image */}
                <td className="px-6 py-4">
                  <div className="w-24 h-24">
                    <img
                      src={product.images[0]?.url || "/placeholder.jpg"}
                      alt={product.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                  </div>
                </td>

                {/* Product Name */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>

                {/* Category */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.category}</td>

                {/* Price */}
                <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-green-600">Rs. {product.price}</td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap text-sm flex space-x-4">
                  <Link href="/Admins/editdetail">
                    <button className="bg-[#5F41E4] text-white mt-4 px-4 py-2 rounded-lg hover:bg-[#5F41E4] transition">Edit</button>
                  </Link>
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="bg-red-600 text-white mt-4 px-4 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};

export default Page;