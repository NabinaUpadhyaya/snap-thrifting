import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaShoppingBag } from "react-icons/fa";
import useAuth from "./useAuth";

const Itembox = () => {
  const { user } = useAuth();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return; 

    const fetchUserPackages = async () => {
      try {
        const response = await axios.get(
          "https://snap-thrift-backend.onrender.com/package/getAllPackage",
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        const allPackages = response.data.data; 
       
        const userPackages = allPackages.filter(
          (pkg) => pkg.email === user.email
        );

        setPackages(userPackages); 
        setLoading(false);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError("Failed to fetch your packages.");
        setLoading(false);
      }
    };

    fetchUserPackages();
  }, [user]); 

  const handleDelete = async (packageId) => {
    try {
      await axios.delete(
        `https://snap-thrift-backend.onrender.com/package/deletePackage/${packageId}`
      );

      setPackages(packages.filter((pkg) => pkg._id !== packageId));
    } catch (err) {
      console.error("Error deleting package:", err);
      alert("Failed to delete the package. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-8 p-6 border border-gray-200 rounded-xl bg-white shadow-lg">
        {loading ? (
          <p className="text-gray-500 text-center text-lg">Loading...</p>
        ) : error ? (
          <p className="text-red-500 text-center text-lg font-semibold">{error}</p>
        ) : packages.length === 0 ? (
          <p className="text-gray-400 text-xl font-semibold text-center">No items found.</p>
        ) : (
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4 text-center flex items-center justify-center gap-2">
              <FaShoppingBag className="w-7 h-7 text-[#5F41E4]" /> Your Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div key={pkg._id} className="relative p-5 bg-gray-50 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <FaShoppingBag className="w-6 h-6 text-[#5F41E4]" />
                      <h3 className="text-lg font-semibold text-gray-800">Package Info</h3>
                    </div>
                    <p className="text-gray-600"><strong>Location:</strong> {pkg.location}</p>
                    <p className="text-gray-600"><strong>Quantity:</strong> {pkg.quantity}</p>
                    <p className="text-gray-600"><strong>Price:</strong> <span className="text-green-600 font-semibold">Rs. {pkg.price}</span></p>
                    <p className="text-gray-600"><strong>Status:</strong> <span className="font-semibold text-blue-600">{pkg.status}</span></p>
                  </div>
                  
                  {/* <div className="flex justify-end mt-4">
                    <button
                      onClick={() => handleDelete(pkg._id)} 
                      className="bg-red-600 text-white font-bold text-sm py-1 px-3 rounded-lg shadow-md hover:bg-red-700 transition-all duration-300"
                    >
                      DELETE
                    </button>
                  </div>  */}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Itembox;
