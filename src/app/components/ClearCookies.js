// lib/clearCookies.js (or any file name you prefer)
import Cookies from "js-cookie";

// Function to clear all cookies
const clearAllCookies = () => {
  const allCookies = Cookies.get(); // Get all cookies as an object
  Object.keys(allCookies).forEach((cookieName) => {
    Cookies.remove(cookieName, { path: "/" }); // Remove each cookie
  });
  console.log("All cookies cleared!");
};

export default clearAllCookies;
