"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const ViewDetails = ({ order }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-lg border border-gray-200">
      <div className="space-y-4">
        <p><strong>Name:</strong> {order.name}</p>
        <p><strong>Contact No:</strong> {order.phoneNumber}</p>
        <p><strong>Address:</strong> {order.shippingAddress}</p>

        <h2 className="text-xl font-semibold text-gray-900 mt-4">Ordered Items</h2>
        <div className="space-y-2">
          {order.products?.map((product, index) => (  
            <div key={index} className="flex items-center space-x-4">
              <img 
                src={product.productImage?.[0]?.url || "/placeholder.jpg"} 
                alt={product.productName || "Product"} 
                className="w-20 h-20 object-cover rounded-md" 
              />
              <div className="text-sm">
                <p><strong>{product.productName || "Unnamed Product"}</strong></p>
                <p><strong>Rs. {product.productPrice || "0.00"}</strong></p>
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
  const [editOrderId, setEditOrderId] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get("https://snap-thrift-backend.onrender.com/order/getAllOrder");
        setOrders(response.data.data || []);
        setLoading(false);
      } catch (error) {
        setError("Error fetching orders.");
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  const handleStatusUpdate = async (orderId) => {
    try {
      const response = await axios.put(
        `https://snap-thrift-backend.onrender.com/order/${orderId}`,
        { status },
        {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'  // Add this to ensure JSON response
          }
        }
      );
      
      setOrders(orders.map(order => 
        order._id === orderId ? { ...order, status: response.data.data.status } : order
      ));
      
      setEditOrderId(null);
      setStatus("");
      
    } catch (error) {
      // console.error("Full error:", error);
      const errorMessage = error.response?.data 
        ? typeof error.response.data === 'string' 
          ? error.response.data 
          : JSON.stringify(error.response.data)
        : error.message;
      setError(`Failed to update order status: ${errorMessage}`);
    }
  };

  const handleEditClick = (orderId, currentStatus) => {
    setEditOrderId(orderId);
    setStatus(currentStatus);
  };

  const handleCancelEdit = () => {
    setEditOrderId(null);
    setStatus("");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-purple-100 text-purple-800';
      case 'Confirmed': return 'bg-yellow-100 text-yellow-800';
      case 'Shipped': return 'bg-blue-100 text-blue-800';
      case 'Delivered': return 'bg-green-100 text-green-800';
      case 'Cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

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
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Details</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orders.map((order) => (
                <tr key={order._id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.createdAt ? new Date(order.createdAt).toLocaleString() : "N/A"}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentMethod}</td>
                  
                  {/* Status Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {editOrderId === order._id ? (
                      <select
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        className="border border-gray-300 rounded-md p-1 focus:outline-none focus:ring-2 focus:ring-[#5F41E4]"
                      >
                        {['Pending', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'].map((option) => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                    ) : (
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {order.status || 'Pending'}
                      </span>
                    )}
                  </td>

                  {/* Actions Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {editOrderId === order._id ? (
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleStatusUpdate(order._id)}
                          className="text-green-600 hover:text-green-800 font-medium"
                        >
                          Save
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className="text-gray-600 hover:text-gray-800 font-medium"
                        >
                          Cancel
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleEditClick(order._id, order.status || 'Pending')}
                        className="text-[#5F41E4] hover:text-[#3E23A1] font-medium"
                      >
                        Edit
                      </button>
                    )}
                  </td>

                  {/* Details Column */}
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5F41E4] hover:text-[#3E23A1]">
                    <button
                      onClick={() => setSelectedOrder(selectedOrder === order ? null : order)}
                      className="font-medium"
                    >
                      {selectedOrder === order ? "Hide Details" : "View Details"}
                    </button>
                    {selectedOrder === order && <ViewDetails order={order} />}
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