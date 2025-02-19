'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';
import Link from 'next/link';




const Page = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
 
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    images: ''
  });

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
      await axios.delete(`https://snap-thrift-backend.onrender.com/products/deleteProduct/${id}`);
      setProducts(products.filter(product => product._id !== id));
    } catch (error) {
      setError('Error deleting the product.');
    }
  };
  return (
    <div className="flex h-screen bg-gray-50">
      
      <main className="flex-1 p-8 overflow-auto bg-gray-100">
          <section>
            {/* <h2 className="text-3xl font-semibold text-gray-800 mb-6">Product List</h2> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <div key={product._id} className="border border-gray-200 bg-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition">
                  <div className="relative w-full h-60 mb-4">
                  <img
                    src={product.images[0]?.url || "/placeholder.jpg"}
                    alt={product.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                  <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                  <p className="text-lg font-bold text-green-600">${product.price}</p>
                  <div className="flex justify-center w-full gap-4 mt-4">
                    <Link href={`/editdetails/${product._id}`} passHref>
                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(product._id)} className="w-10 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition">Delete</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
      </main>
    </div>
  );
};

export default Page;