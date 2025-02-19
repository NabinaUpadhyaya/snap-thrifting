"use client"
import { useState } from 'react';
import { FaMoneyBillWave, FaKhalti } from 'react-icons/fa'; // Importing icons

export default function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [totalAmount] = useState(99.99); // This should come from the backend

  const handlePaymentClick = (method) => {
    setPaymentMethod(method);
    alert(`Checkout completed with ${method}`);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg">
      {/* <h1 className="text-3xl font-semibold mb-4 text-center text-indigo-600">Checkout</h1> */}
      
      <form>
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
          <label className="block text-sm font-medium text-gray-700" htmlFor="contact">
            Delivery Location
          </label>
          <input
            type="tel"
            id="location"
            name="shippingAddress"
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#5F41E4] focus:border-[#5F41E4] sm:text-base"
            // value={shippingAddress}
            // onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold text-gray-800">Total Amount: <span className="text-xl text-[#5F41E4]">Rs. {totalAmount}</span></p>
        </div>

        <div className="space-y-4 mb-6">
          <button
            type="button"
            onClick={() => handlePaymentClick('Khalti')}
            className="flex items-center justify-center w-full px-6 py-3 bg-green-500 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none transition duration-200 ease-in-out"
          >
            {/* <FaKhalti className="mr-2 text-lg" /> */}
            Pay with Khalti
          </button>

          <button
            type="button"
            onClick={() => handlePaymentClick('Cash On Delivery')}
            className="flex items-center justify-center w-full px-6 py-3 bg-gray-800 text-white text-sm font-semibold rounded-lg shadow-md hover:bg-gray-700 focus:outline-none transition duration-200 ease-in-out"
          >
            <FaMoneyBillWave className="mr-2 text-lg" />
            Cash on Delivery
          </button>
        </div>

        {paymentMethod && (
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-700">You selected: <span className="font-semibold">{paymentMethod}</span></p>
          </div>
          
        )}
          <div className="flex items-center justify-center gap-4  mt-4">
            <button className="px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0]">
              Confirm Order
            </button>
           
         
          
          </div>
      </form>
    </div>
  );
}
