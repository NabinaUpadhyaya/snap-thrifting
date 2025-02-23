"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../components/Header";
import Footer from "../components/Footer";

const OrderItem = ({ product }) => {
  return (
    <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow">
      <img
        src={product.productImage?.[0]?.url || "/placeholder.jpg"}
        alt={product.productName || "Product"}
        className="w-24 h-24 object-cover rounded-md"
      />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-gray-900">
          {product.productName || "Unnamed Product"}
        </h3>
        <p className="text-gray-600">Price: Rs. {product.productPrice || "0.00"}</p>
      </div>
    </div>
  );
};

const OrderCard = ({ order }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case "Pending":
        return "bg-purple-100 text-purple-800";
      case "Confirmed":
        return "bg-yellow-100 text-yellow-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-md mb-6 border border-gray-200">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-600">
            Order Date: {order.createdAt ? new Date(order.createdAt).toLocaleDateString() : "N/A"}
          </p>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
          {order.status || "Pending"}
        </span>
      </div>

      <div className="space-y-4">
        {order.products?.map((product, index) => (
          <OrderItem key={index} product={product} />
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-gray-600">Shipping Address: {order.shippingAddress}</p>
        <p className="text-gray-600">Payment Method: {order.paymentMethod}</p>
        <p className="text-lg font-semibold text-gray-900">
          Total Amount: Rs. {order.totalAmount || "0.00"}
        </p>
      </div>
    </div>
  );
};

const UserOrderPage = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("accessToken");
        if (!token) {
          setError("Unauthorized: Please log in.");
          setLoading(false);
          return;
        }

        const userResponse = await axios.get("https://snap-thrift-backend.onrender.com/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (userResponse.data.success) {
          setUserId(userResponse.data.data._id);
        } else {
          setError("Failed to fetch user details.");
        }
      } catch (error) {
        setError("Error fetching user details.");
      }
    };

    fetchUser();
  }, []);

  useEffect(() => {
    const fetchUserOrders = async () => {
      if (!userId) return;

      try {
        const response = await axios.get(`https://snap-thrift-backend.onrender.com/order/getAllOrder`, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        const userOrders = (response.data.data || []).filter(
          (order) =>
            order.userId === userId &&
            (order.status === "Confirmed" || order.status === "Shipped" || order.status === "Delivered"|| order.status === "Pending" )
        );

        setOrders(userOrders);
        setLoading(false);
      } catch (error) {
        // setError("Failed to load your orders. Please try again later.");
        setLoading(false);
      }
    };

    fetchUserOrders();
  }, [userId]);

  if (loading)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Loading your orders...</p>
      </div>
    );

  if (error)
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-red-600">{error}</p>
      </div>
    );

  return (
    <div className="min-h-screen  bg-gray-100">
      <Header />
      <div className="max-w-4xl mb-64 mx-auto">
        <h1 className="text-3xl  font-bold text-center text-[#5F41E4] mb-8">My Orders</h1>

        {orders.length === 0 ? (
          <div className="min-h-[545px] text-center py-12">
            <p className=" text-gray-600 text-lg">You haven't placed any orders yet.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {orders.map((order) => (
              <OrderCard key={order._id} order={order} />
            ))}
          </div>
        )}
      </div>
    

      <Footer />
     
    </div>
  );
};

export default UserOrderPage;
