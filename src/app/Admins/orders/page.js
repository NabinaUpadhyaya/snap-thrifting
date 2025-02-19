"use client"
import React, { useState } from 'react'

// Dummy Data for Order Requests with more information
const orderRequests = [
  {
    id: 1,
    customerName: "John Doe",
    email: "johndoe@example.com",
    contactNo: "123-456-7890",
    address: "123 Main Street, Cityville",
    orderedDate: "2025-02-17",
    paymentMethod: "Online",
    items: [
      {
        name: "Package A",
        price: 50,
        quantity: 2,
        image: "/image/baby.jpg"
      },
      {
        name: "Package B",
        price: 25,
        quantity: 1,
        image: "/image/caps.jpg"
      }
      ,{
        name: "Package C",
        price: 75,
        quantity: 1,
        image: "/image/boots.jpg",
      }
      , {
        name: "Package C",
        price: 75,
        quantity: 1,
        image: "/image/boots.jpg",
      }
    ],
   
  },
  {
    id: 2,
    customerName: "Jane Smith",
    email: "janesmith@example.com",
    contactNo: "234-567-8901",
    address: "456 Elm Street, Townsville",
    orderedDate: "2025-02-16",
    paymentMethod: "COD",
    items: [
      {
        name: "Package C",
        price: 75,
        quantity: 1,
        image: "/image/boots.jpg",
      }
    ],
   
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    email: "alicejohnson@example.com",
    contactNo: "345-678-9012",
    address: "789 Oak Street, Villagetown",
    orderedDate: "2025-02-15",
    paymentMethod: "Online",
    items: [
      {
        name: "Package D",
        price: 60,
        quantity: 3,
        image: "/image/bracelet.jpeg"
      }
    ],
    
  }
];

// ViewDetails Component to display more information about an order
const ViewDetails = ({ order }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-lg border border-gray-200">
      <div className="space-y-4">
       
        <p><strong>Name:</strong> {order.customerName}</p>
        <p><strong>Email:</strong> {order.email}</p>
        <p><strong>Contact No:</strong> {order.contactNo}</p>
        <p><strong>Address:</strong> {order.address}</p>
        
        <h2 className="text-xl font-semibold text-gray-900 mt-4">Ordered Items</h2>
        <div className="space-y-2">
          {order.items.map((item, index) => (
            <div key={index} className="flex items-center space-x-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md" />
              <div className="text-sm">
                <p><strong>{item.name}</strong></p>
              
              </div>
            </div>
          ))}
        </div>

       
        <p><strong>Total Amount: </strong>${order.items.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
      </div>
    </div>
  );
};

const OrdersPage = () => {
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const toggleDetails = (id) => {
    setSelectedOrderId(selectedOrderId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-[#5F41E4] mb-8">
        Order Requests
        </h1>
        <div className="overflow-hidden bg-white shadow-lg rounded-lg">
          <table className="min-w-full table-auto">
            <thead className="bg-[#5F41E4] text-white">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Customer Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Ordered Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Payment Method</th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {orderRequests.map((order) => (
                <tr key={order.id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{order.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.orderedDate}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{order.paymentMethod}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5F41E4] hover:text-[#3E23A1]">
                    <button onClick={() => toggleDetails(order.id)} className="font-medium">
                      {selectedOrderId === order.id ? 'Hide Details' : 'View Details'}
                    </button>
                    {/* If the order is selected, show the details */}
                    {selectedOrderId === order.id && <ViewDetails order={order} />}
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

export default OrdersPage;
