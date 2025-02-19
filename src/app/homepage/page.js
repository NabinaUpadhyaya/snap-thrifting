"use client";

import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VerifiedSection from "../components/VerifiedSection";
import { FaSearch } from "react-icons/fa";
import useAuth from "../components/useAuth";
import Cookies from "js-cookie"; // Import useAuth hook
import Link from "next/link";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { user, loading: loadingUser } = useAuth(); // Use the hook to get user data
  const [loadingProducts, setLoadingProducts] = useState(true);

  // Fetch products from backend
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(
          "https://snap-thrift-backend.onrender.com/products/getAllProduct"
        );
        const data = await res.json();
        if (data.success) {
          setProducts(data.data);
        } else {
          console.error("Error fetching products:", data.message);
        }
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoadingProducts(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter products based on category & search query
  const filteredItems = products.filter((item) => {
    const itemCategory = item.category?.toLowerCase() || "";
    const itemName = item.name?.toLowerCase() || "";
    const query = searchQuery.toLowerCase();

    console.log("user0fds", user)

    
    return (
      (selectedCategory === "" || itemCategory === selectedCategory.toLowerCase()) &&
      (itemName.includes(query) || itemCategory.includes(query))
    );
  });
  
  console.log("filterjhgy",filteredItems);
  return (
    <div>
      <Header />

      {/* Welcome Message */} 
      {loadingUser ? (
        <div className="text-center py-4 text-lg text-gray-500">Loading user data...</div>
      ) : user ? (
        <div className="text-center py-4 text-lg font-semibold">Welcome, {user.name}!</div>
      ) : (
        <div className="text-center py-4 text-lg text-gray-500">
          Welcome to Snap Thrift! Please{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            log in
          </a>{" "}
          to access your profile.
        </div>
      )}

      {/* Search & Filter Section */}
      <div className="bg-gray-100 py-8">
        <div className="flex flex-wrap gap-4 mb-8 px-4 justify-center items-center">
          {/* Category Dropdown */}
          <select
            className="px-4 py-2 w-80 bg-[#5F41E4] text-white rounded-lg outline-none hover:bg-[#5238c2] focus:ring-2 focus:ring-[#5F41E4] transition-all"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Clothing">Clothing</option>
            <option value="Shoes">Shoes</option>
            <option value="Accessories">Accessories</option>
          </select>

          {/* Search Input */}
          <div className="relative w-72">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-4 py-2 w-full bg-gray-50 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-[#5F41E4] transition-all"
            />
            <FaSearch size={20} className="absolute top-3 right-3 text-gray-400" />
          </div>

          {/* Search Button */}
          <button className="flex items-center justify-center py-2 px-4 bg-[#5F41E4] text-white rounded-lg hover:bg-[#5239c1] transition-all ease-in-out">
            Search
          </button>
        </div>

        {/* Product Grid */}
        {loadingProducts ? (
          <p className="text-center text-gray-500">Loading products...</p>
        ) : filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 px-4">
            {filteredItems.map((item) => (
              <div
                key={item._id}
                className="bg-gray-200 rounded-lg p-4 mb-5 flex flex-col items-center shadow hover:shadow-md transition"
              >
                <div className="relative w-full h-60 mb-4">
                  <img
                    src={item.images[0]?.url || "/placeholder.jpg"}
                    alt={item.name}
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  />
                </div>

                <h3 className="text-lg font-bold mb-2">{item.name}</h3>
                <p className="text-sm text-gray-500">{item.category}</p>
                <p className="text-lg text-[#5F41E4] font-semibold">${item.price}</p>

                <p className="text-[#5F41E4] mt-3 hover:underline cursor-pointer">
                  <Link href={`/Details/${item._id}`}>Details →</Link>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">No products found</p>
        )}
      </div>

      <VerifiedSection />
      <Footer />
    </div>
  );
};

export default Homepage;
