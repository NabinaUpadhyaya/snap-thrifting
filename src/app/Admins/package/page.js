"use client"
import React, { useState } from 'react'

// Dummy Data for Package Requests with more information
const packageRequests = [
  {
    id: 1,
    customerName: "John Doe",
    email: "johndoe@example.com",
    contactNo: "123-456-7890",
    address: "123 Main Street, Cityville",
    quantity: 2,
    offeredPrice: 100,
   
  },
  {
    id: 2,
    customerName: "Jane Smith",
    email: "janesmith@example.com",
    contactNo: "234-567-8901",
    address: "456 Elm Street, Townsville",
    quantity: 1,
    offeredPrice: 200,
   
  },
  {
    id: 3,
    customerName: "Alice Johnson",
    email: "alicejohnson@example.com",
    contactNo: "345-678-9012",
    address: "789 Oak Street, Villagetown",
    quantity: 3,
    offeredPrice: 150,
   
  }
];

// ViewDetails Component to display more information about a package
const ViewDetails = ({ packageRequest }) => {
  return (
    <div className="bg-gray-50 p-6 mt-4 rounded-lg border border-gray-200">
      <div className="space-y-4">
        
        <p><strong>Name:</strong> {packageRequest.customerName}</p>
        <p><strong>Email:</strong> {packageRequest.email}</p>
        <p><strong>Contact No:</strong> {packageRequest.contactNo}</p>
        <p><strong>Location:</strong> {packageRequest.address}</p>
        <p><strong>Quantity:</strong> {packageRequest.quantity}</p>
        <p><strong>offered Price:</strong> {packageRequest.offeredPrice}</p>
       

      
      </div>
    </div>
  );
};

const Page = () => {
  const [selectedPackageId, setSelectedPackageId] = useState(null);

  const toggleDetails = (id) => {
    setSelectedPackageId(selectedPackageId === id ? null : id);
  };

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
              {packageRequests.map((packageRequest) => (
                <tr key={packageRequest.id} className="border-t">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{packageRequest.customerName}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{packageRequest.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Rs. {packageRequest.offeredPrice}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-[#5F41E4] hover:text-[#3E23A1]">
                    <button onClick={() => toggleDetails(packageRequest.id)} className="font-medium">
                      {selectedPackageId === packageRequest.id ? 'Hide Details' : 'View Details'}
                    </button>
                    {/* If the package is selected, show the details */}
                    {selectedPackageId === packageRequest.id && <ViewDetails packageRequest={packageRequest} />}
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
