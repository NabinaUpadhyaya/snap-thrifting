import React from 'react'

const page = ({ product }) => {
  return (
    <div className="max-w-4xl mx-auto p-6">
    <div className="flex flex-col md:flex-row gap-6">
      <div className="w-full md:w-1/2">
        {/* <img
          src={product.image}
          alt={product.name}
          className="w-full rounded-lg shadow-lg"
        /> */}
      </div>
      <div className="w-full md:w-1/2">
        <h1 className="text-2xl font-bold">{product}</h1>
        <p className="text-gray-500 text-sm">Purchased on: {product}</p>
        <div className="flex items-center my-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <svg
              key={index}
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 ${
                index < product
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.43 4.384a1 1 0 00.95.69h4.798c.969 0 1.371 1.24.588 1.81l-3.89 2.827a1 1 0 00-.364 1.118l1.43 4.384c.3.921-.755 1.688-1.54 1.118l-3.89-2.828a1 1 0 00-1.175 0l-3.89 2.828c-.784.57-1.838-.197-1.539-1.118l1.43-4.384a1 1 0 00-.364-1.118L2.49 9.81c-.784-.57-.38-1.81.588-1.81h4.798a1 1 0 00.95-.69l1.43-4.384z" />
            </svg>
          ))}
        </div>
        <p className="text-lg font-semibold">Rs. {product}</p>
        <div className="flex gap-2 mt-2">
          <span className="bg-green-100 text-green-600 text-sm px-2 py-1 rounded">
            {product}
          </span>
          <span className="bg-yellow-100 text-yellow-600 text-sm px-2 py-1 rounded">
            {product}
          </span>
        </div>
        <p className="mt-4 text-gray-600">{product}</p>
        <div className="flex gap-2 mt-4">
          {/* {product((label, index) => (
            <span
              key={index}
              className="bg-red-100 text-red-600 text-sm px-2 py-1 rounded"
            >
              {label}
            </span>
          ))} */}
        </div>
        <div className="mt-6 p-4 bg-gray-100 rounded-lg shadow">
          <h2 className="text-lg font-semibold">Seller Details:</h2>
          <p>Name: {product}</p>
          <p>Contact: {product}</p>
          <p>Email: {product}</p>
          <p>City: {product}</p>
        </div>
        <div className="flex gap-4 mt-6">
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            👁 <span>{product} Views</span>
          </button>
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            🔗 Share
          </button>
          <button className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300">
            💬 Chat with Seller
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default page
