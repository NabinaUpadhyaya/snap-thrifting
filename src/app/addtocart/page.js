"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import cookie from "js-cookie";
import Header from "../components/Header";
import useAuth from "../components/useAuth";
import Link from "next/link";
const accessToken = cookie.get("accessToken");
const CartPage = () => {
  const [cartData, setCartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { user } = useAuth();

  // Fetch cart data
  useEffect(() => {
    const fetchCart = async () => {
      if (!user) return;

      try {
        setLoading(true);
        const response = await axios.get(
          "https://snap-thrift-backend.onrender.com/cart/getCart",
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        if (response.data.success) {
          setCartData(response.data.data);
        }
      } catch (err) {
        setError("Failed to load cart items");
        // console.error("Error fetching cart:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, [user]);

 

  const handleRemove = async (productId) => {
    try {
      const response = await axios.delete(
        `https://snap-thrift-backend.onrender.com/cart/deleteCart/${productId}`,
        { headers: { "Content-Type": "application/json" } }
      );

      if (response.data.success) {
        setCartData(response.data.data);
      }
    } catch (err) {
      console.error("Error removing item:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading your cart...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-red-500">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#5F41E4] mb-8">
          Your Cart
        </h1>

        {!cartData || cartData.products.length === 0 ? (
          <div className=" min-h-52 bg-white rounded-lg shadow-md p-6 text-center">
            <p className="min-h-80 text-lg text-gray-600">Your cart is empty</p>
            <a
              href="/homepage"
              className="mt-4 inline-block px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0] transition-colors"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            {/* Cart Items */}
            <div className="space-y-6">
              {cartData.products.map((item) => (
                <div
                  key={item._id}
                  className="flex flex-col md:flex-row items-center justify-between border-b pb-6 last:border-b-0"
                >
                  <div className="flex items-center gap-4 w-full md:w-auto">
                    <img
                      src={item.productImage[0]?.url}
                      alt={item.productName}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {item.productName}
                      </h3>
                      <p className="text-[#5F41E4] font-medium">
                        Rs {parseFloat(item.productPrice).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 mt-4 md:mt-0">
                   
                    <button
                      onClick={() => handleRemove(item.productId)}
                      className="text-red-500 hover:text-red-600 font-medium"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="mt-8 border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold text-gray-800">
                  Total:
                </span>
                <span className="text-2xl font-bold text-[#5F41E4]">
                  Rs {parseFloat(cartData.totalAmount).toFixed(2)}
                </span>
              </div>
              <div className="flex justify-end gap-4">
                <a
                  href="/homepage"
                  className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  Continue Shopping
                </a>
               
                <Link href="/checkout"  className="px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0] transition-colors">
        Proceed to Checkout
        </Link>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
