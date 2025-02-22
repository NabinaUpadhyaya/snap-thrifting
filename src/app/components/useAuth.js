import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [totalCustomers, setTotalCustomers] = useState(0); // State to hold the total customers count
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the token from cookies
        const token = Cookies.get("accessToken");

        if (!token) {
          setLoading(false);
          setAuthLoading(false); // Ensure auth loading is false if no token
          return;
        }

        // Fetch user details from backend
        const res = await axios.get("https://snap-thrift-backend.onrender.com/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        if (res.data.success) {
          setUser({
            ...res.data.data,
            role: res.data.data.role || "user", // Default role to "user" if not provided
          });
        } else {
          console.log("Failed to fetch user:", res.data.message);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false);
        setAuthLoading(false);
      }
    };

    const fetchTotalCustomers = async () => {
      try {
        // Fetch all users - assuming that 'role' helps us determine customers
        const res = await axios.get("https://snap-thrift-backend.onrender.com/user/getAllUsers", {
          headers: {
            Authorization: `Bearer ${Cookies.get("accessToken")}`,
          },
        });

        if (res.data.success) {
          // Count the number of customers (you can adjust based on your role logic)
          const customerCount = res.data.data.filter((user) => user.role === "customer").length;
          setTotalCustomers(customerCount);
        } else {
          console.log("Failed to fetch users:", res.data.message);
        }
      } catch (err) {
        console.log("Error fetching total customers:", err);
      }
    };

    fetchUser();
    fetchTotalCustomers();
  }, []);

  return { user, loading, authLoading, totalCustomers };
};

export default useAuth;
