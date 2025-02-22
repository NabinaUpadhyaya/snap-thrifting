import React from 'react';

const SingleGridBox = ({ image, name, category, price, detailsLink }) => {
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
      <a
        href={detailsLink}
        className="mt-4 px-4 py-2 bg-blue-500 text-white text-sm font-semibold rounded-lg hover:bg-blue-600"
      >
        Details
      </a>
    </div>
  );
};

export default SingleGridBox;

