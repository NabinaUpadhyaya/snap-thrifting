"use client"
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../components/Footer";
import Header from "../components/Header";

const page = () => {
  const [cartItems, setCartItems] = useState([]); // Store cart items
  // const [loading, setLoading] = useState(true); // Loading state

  // Fetch cart items from the backend on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        console.log("Fetching cart items from the backend...");
        const res = await axios.get("https://snap-thrift-backend.onrender.com/cart/", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        console.log("Cart Items Response:", res.data);
        setCartItems(res.data.cartItems); // Update the cartItems state with data from the backend
      } catch (error) {
        console.log("Error fetching cart items:", error);
      } 
      // finally {
      //   setLoading(false); // Stop loading after the data is fetched
      // }
    };

    fetchCartItems();
  }, []);

  // Handle updating quantity
  const handleQuantityChange = async (id, type) => {
    try {
      console.log("Updating quantity for item ID:", id, "Type:", type);
      const res = await axios.put(
        `https://snap-thrift-backend.onrender.com/cart/${id}`,
        { type },
        { headers: { "Content-Type": "application/json" } }
      );
      const updatedItem = res.data;
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.id === id ? { ...item, quantity: updatedItem.quantity } : item
        )
      );
    } catch (error) {
      // console.error("Error updating quantity:", error);
    }
  };

  // Handle removing item
  const handleRemove = async (id) => {
    try {
      console.log("Removing item ID:", id);
      await axios.delete(`https://snap-thrift-backend.onrender.com/cart/${id}`, {
        headers: { "Content-Type": "application/json" },
      });
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    } catch (error) {
      // console.error("Error removing item:", error);
    }
  };

  // Calculate total price
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // if (loading) {
  //   return <p className="text-center text-lg mt-48 text-[#5F41E4]">Loading cart items...</p>;
  // }

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <Header/>
      <h1 className="text-center text-3xl font-bold text-[#5F41E4] pt-6 mb-8">
        YOUR CART
      </h1>

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-6">
        {cartItems.length === 0 ? (
          <p className="text-center text-lg text-gray-600">Your cart is empty.</p>
        ) : (
          cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-600">Size: {item.size}</p>
                  <p className="text-[#5F41E4]">Rs {item.price.toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleQuantityChange(item.id, "decrement")}
                    className="px-2 py-1 bg-gray-200 rounded text-gray-600"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(item.id, "increment")}
                    className="px-2 py-1 bg-gray-200 rounded text-gray-600"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        )}

        <div className="flex flex-col items-end mt-6">
          <div className="text-lg font-semibold">
            Total: <span className="text-[#5F41E4]">Rs {total.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <button className="px-6 py-2 bg-[#5F41E4] text-white rounded-lg hover:bg-[#4e37c0]">
              Check Out
            </button>
           
         
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
