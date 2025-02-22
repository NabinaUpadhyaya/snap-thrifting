"use client";
import { useState, useEffect } from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import Footer from "../components/Footer";
import Cookies from "js-cookie";
import Header from "../components/Header";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState("");
  const [name, setName] = useState(""); // For username
  const [contact, setContact] = useState(""); // For phoneNumber
  const [shippingAddress, setShippingAddress] = useState(""); // For delivery location
  const [totalAmount, setTotalAmount] = useState(0); // Dynamic total amount
  const [loading, setLoading] = useState(true); // Loading state for fetch
  const [error, setError] = useState(null); // Error state for fetch

  const router = useRouter();
  const accessToken = Cookies.get("accessToken"); // Get token from cookies

  // Client-side route protection
  useEffect(() => {
    if (!accessToken) {
      router.replace("/login"); // Redirect to login if no token
    }
  }, [accessToken, router]);

  // Fetch cart data from backend
  useEffect(() => {
    const fetchCartData = async () => {
      if (!accessToken) return;

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
          const cart = response.data.data;
          setName(cart.name || ""); // From cart
          setContact(cart.phoneNumber || ""); // From cart
          setTotalAmount(cart.totalAmount || 0); // From cart
        } else {
          setError("Failed to fetch cart data");
        }
      } catch (err) {
        setError("Error fetching cart data: " + err.message);
        console.error("Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, [accessToken]);

  // Handle payment method selection
  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
    // alert(`Checkout completed with ${method}`); // Removed, handled in submit
  };

  // Handle form submission and send order to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!accessToken || !paymentMethod) {
      setError("Please select a payment method");
      return;
    }

    try {
      setLoading(true); // Show loading during submission
      const orderData = {
        shippingAddress,
        paymentMethod,
        name: name, // Included in case backend doesn't fetch it from user
        phoneNumber: contact  , // Included in case backend doesn't fetch it from user
      };

      const response = await axios.post(
        "https://snap-thrift-backend.onrender.com/order/createOrder", // Adjust if endpoint differs
        orderData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (response.data.success) {
        alert("Order confirmed successfully!");
        router.push("/order-success"); // Redirect to a success page
      } else {
        setError(response.data.message || "Failed to create order");
      }
    } catch (err) {
      setError("Error confirming order: " + (err.response?.data?.message || err.message));
      // console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // Loading or error states
  if (!accessToken) return null; // Prevent rendering while redirecting
  if (loading) return <div className="text-center p-6">Loading...</div>;
  if (error) return <div className="text-center p-6 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <div className="max-w-md mx-auto m-8 p-6 bg-white shadow-lg rounded-lg">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#5F41E4] focus:border-[#5F41E4] sm:text-base"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
              Contact Number
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#5F41E4] focus:border-[#5F41E4] sm:text-base"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700" htmlFor="location">
              Delivery Location
            </label>
            <input
              type="text"
              id="location"
              name="shippingAddress"
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#5F41E4] focus:border-[#5F41E4] sm:text-base"
              value={shippingAddress}
              onChange={(e) => setShippingAddress(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <p className="text-lg font-semibold text-gray-800">
              Total Amount: <span className="text-xl text-[#5F41E4]">Rs. {totalAmount}</span>
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <button
              type="button"
              onClick={() => handlePaymentClick("Khalti")}
              className="flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none transition duration-200 ease-in-out"
            >
              Pay with Khalti
            </button>

            <button
              type="button"
              onClick={() => handlePaymentClick("Cash On Delivery")}
              className="flex items-center justify-center w-full px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none transition duration-200 ease-in-out"
            >
              <FaMoneyBillWave className="mr-2 text-lg" />
              Cash on Delivery
            </button>
          </div>

          {paymentMethod && (
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-700">
                You selected: <span className="font-semibold">{paymentMethod}</span>
              </p>
            </div>
          )}

          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              type="submit"
              className="px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0]"
              disabled={!paymentMethod || loading} // Disable if no payment method or loading
            >
              Confirm Order
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}