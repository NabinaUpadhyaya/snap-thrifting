"use client";
import { useState, useEffect } from "react";
import axios from "axios";

// ViewDetails Component to display more information about an order
const ViewDetails = ({ order }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Contact No:</strong> {order.phoneNumber}</p>
        <p><strong>Address:</strong> {order.shippingAddress}</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-4">Ordered Items</h2>
        <div className="space-y-2">
          {order.items?.map((item, index) => (  
            <div key={index} className="flex items-center space-x-4">
              <img 
                src={item.image || "/placeholder.jpg"} 
                alt={item.products.productName || "Product"} 
                className="w-20 h-20 object-cover rounded-md" 
              />
              <div className="text-sm">
                <p><strong>{item.productName || "Unnamed Product"}</strong></p>
                <p><strong>${item.productPrice || "0.00"}</strong></p>
              </div>
            </div>
          ))}
        </div>

        <p><strong>Total Amount: </strong>Rs. {order.totalAmount || "0.00"}</p>
      </div>
    </div>
  );
};

const Page = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://snap-thrift-backend.onrender.com/order/getAllOrder");
        setOrders(response.data.data || []);  // ✅ Ensure array
        setLoading(false);
      } catch (error) {
        setError("Error fetching orders.");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#5F41E4] mb-8">Order Requests</h1>
        <div className="overflow-hidden bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#5F41E4] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Ordered Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Manage</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
  {order.timestamps ? new Date(order.timestamps).toLocaleString() : "N/A"}
</td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentMethod}</td>
                  
                  {/* View Details Button */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5F41E4] hover:text-[#3E23A1]">
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order ? null : order)}
                      className="font-medium"
                    >
                      {selectedOrder === order ? "Hide Details" : "View Details"}
                    </button>
                    {selectedOrder === order && <ViewDetails order={order} />}
                  </td>
                  
                  {/* Delete Button */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-red-500 hover:text-red-600">
                    <button>Delete</button>
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
