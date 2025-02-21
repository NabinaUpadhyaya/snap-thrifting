"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// ViewDetails Component to display specific package details
const ViewDetails = ({ product }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-lg border border-gray-200">
      <p><strong>Name:</strong> {product.name}</p>
      <p><strong>Email:</strong> {product.email}</p>
      <p><strong>Contact No:</strong> {product.phoneNumber}</p>
      <p><strong>Location:</strong> {product.location}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Offered Price:</strong> Rs. {product.price}</p>
    </div>
  );
};

const Page = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://snap-thrift-backend.onrender.com/package/getAllPackage");
        setProducts(response.data.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching products.");
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#5F41E4] mb-8">
          Admin - Package Requests
        </h1>
        <div className="overflow-hidden bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#5F41E4] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Quantity</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Offered Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {products.map((product) => (
                <tr key={product._id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{product.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {product.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5F41E4] hover:text-[#3E23A1]">
                    <button
                      onClick={() => setSelectedProduct(selectedProduct === product ? null : product)}
                      className="font-medium"
                    >
                      {selectedProduct === product ? "Hide Details" : "View Details"}
                    </button>
                    {selectedProduct === product && <ViewDetails product={product} />}
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
