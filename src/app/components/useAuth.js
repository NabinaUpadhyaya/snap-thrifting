import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = Cookies.get("accessToken");
        console.log("Token found:", token);

        if (!token) {
          console.log("No token found");
          setLoading(false);
          return;
        }

        const res = await axios.get("https://snap-thrift-backend.onrender.com/user/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        });

        console.log("User data received:", res.data.data); 

        if (res.data.success) {
          setUser({
            ...res.data.data,
            role: res.data.data.role || "user", 
          });
        } else {
          console.log("Failed to fetch user:", res.data.message);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAuth;
