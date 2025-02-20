import { useState, useEffect } from "react";
import Cookies from 'js-cookie'; // Import js-cookie
import axios from "axios";

const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        // Retrieve the token from cookies using js-cookie
        const token = Cookies.get('accessToken'); 
        console.log("token", token)

        if (!token) {
          console.log("No token found");
          setLoading(false);
          return;
        }

        const res = await axios.get("https://snap-thrift-backend.onrender.com/user/me", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${token}`, // Pass token in the Authorization header
          },
          withCredentials: true, // ✅ Ensures token is stored in cookies
        });

    
        console.log("respose eere", res);
        console.log("response vitrra ko data", res.data);

       

        if (res.data.success) {
          setUser(res.data.data); // Store user details if successful
        } else {
          console.log("Failed to fetch user:", data.message);
        }
      } catch (err) {
        console.log("Error fetching user:", err);
      } finally {
        setLoading(false); // Done loading
      }
    };

    fetchUser();
  }, []);

  return { user, loading };
};

export default useAuth;
