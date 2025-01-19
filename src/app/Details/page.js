import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductPage from '../components/ProductPage';

const page = () => {
  return (
    <div>
      <div className="mb-24"> 
        <Header />
      </div>

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
