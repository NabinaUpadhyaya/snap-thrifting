// src/components/SingleGridBox.jsx
import React from 'react';

const SingleGridBox = ({ image, name, category, price }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-cover mb-4 rounded-lg"
      />
      <p className="font-semibold text-lg">Name: {name}</p>
      <p className="text-gray-600">Category: {category}</p>
      <p className="text-gray-600">Price: {price}</p>
    </div>
  );
};

export default SingleGridBox;
