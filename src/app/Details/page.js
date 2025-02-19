"use client";

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductPage from '../components/ProductPage';
import useAuth from '../components/useAuth';

const page = () => {
  return (
    <div>
      <div className="mb-24"> 
        <Header />
      </div>

      {/* Welcome Message */} 
      {loadingUser ? (
        <div className="text-center py-4 text-lg text-gray-500">Loading user data...</div>
      ) : user ? (
        <div className="text-center py-4 text-lg font-semibold">Welcome, {user.name}!</div>
      ) : (
        <div className="text-center py-4 text-lg text-gray-500">
          Welcome to Snap Thrift! Please{" "}
          <a href="/login" className="text-blue-600 hover:underline">
            log in
          </a>{" "}
          to access your profile.
        </div>
      )}

      <div className="mt-8">
        <ProductPage />
      </div>

      <div className="mt-20"> 
        <Footer />
      </div>
    </div>
  );
};

export default page;
