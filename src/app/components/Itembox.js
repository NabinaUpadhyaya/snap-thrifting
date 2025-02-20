import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "./useAuth"; // Import the authentication hook

const Itembox = () => {
  const { user } = useAuth(); // Get logged-in user details
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!user) return; // Exit if no user is logged in

    const fetchUserPackages = async () => {
      try {
        const response = await axios.get(
          "https://snap-thrift-backend.onrender.com/package/getAllPackage",
          {
            headers: {
              "Accept": "application/json",
              "Content-Type": "application/json",
            },
          }
        );

        console.log("Backend response:", response.data); // Log the backend response
        const allPackages = response.data.data; // Get the fetched packages
        console.log("Fetched packages:", allPackages);

        // Filter packages by the logged-in user's email
        const userPackages = allPackages.filter(
          (pkg) => pkg.email === user.email
        );

        setPackages(userPackages); // Set only the user's packages
        setLoading(false);
      } catch (err) {
        console.error("Error fetching packages:", err);
        setError("Failed to fetch your packages.");
        setLoading(false);
      }
    };

    fetchUserPackages();
  }, [user]); // Run when the user changes

  return (
    <div className="mt-8 p-4 border-2 border-gray-300 rounded-lg bg-white">
      {loading ? (
        <p className="text-gray-500">Loading...</p>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : packages.length === 0 ? (
        <p className="text-gray-400 text-xl font-semibold text-center">No items found.</p>
      ) : (
        <div>
          {/* User Info Section
          <div className="mb-8 p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">User Information</h3>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone Number:</strong> {user.phoneNumber}</p>
          </div> */}

          {/* Packages Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {packages.map((pkg) => (
              <div key={pkg._id} className="p-4 border rounded-lg shadow">
                <h3 className="text-lg font-semibold">Package Info</h3>
                <p><strong>Location:</strong> {pkg.location}</p>
                <p><strong>Quantity:</strong> {pkg.quantity}</p>
                <p><strong>Price:</strong> Rs. {pkg.price}</p>
                <p><strong>Status:</strong> <span className="font-semibold text-blue-600">{pkg.status}</span></p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Itembox;
