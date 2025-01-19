import Image from 'next/image';

const ProductPage = () => {
  return (
    <div className="mt-8 flex justify-center">
      <div className="border border-gray-300 rounded-lg shadow-lg p-6 bg-white w-full max-w-6xl mx-auto"> {/* Centers and restricts width */}
        <div className="flex flex-col lg:flex-row">
          {/* Left Section - Image */}
          <div className="lg:w-1/2 flex flex-col justify-center items-center"> {/* Reverted to original width */}
            {/* Main Image */}
            <div className="w-96 h-96 bg-gray-300 rounded-lg mb-4"></div> 

            {/* Smaller Images */}
            <div className="flex space-x-4">
              <div className="w-24 h-24 bg-red-400 rounded-lg"></div> 
              <div className="w-24 h-24 bg-gray-300 rounded-lg"></div> 
              <div className="w-24 h-24 bg-gray-300 rounded-lg"></div> 
              <div className="w-24 h-24 bg-gray-300 rounded-lg"></div> 
            </div>
          </div>

          {/* Right Section - Details */}
          <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
            <h1 className="text-2xl font-bold">One Piece</h1>
            <p className="text-lg text-gray-700 mt-2">Rs. 500</p>
            <span className="inline-block bg-green-200 text-green-800 text-sm font-semibold px-2 py-1 rounded-full mt-2">
              Clothings
            </span>

            <div className="mt-4">
              <p><span className="font-semibold">Size:</span> M</p>
              <p><span className="font-semibold">Condition:</span> 10/10</p>
              <p><span className="font-semibold">Discolor:</span> None</p>
              <p><span className="font-semibold">Tear:</span> None</p>
            </div>

            Seller Details
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <h2 className="font-semibold">Seller Details</h2>
              <p><span className="font-semibold">Name:</span> Nabina Upadhyaya</p>
              <p><span className="font-semibold">Contact:</span> 9797979797</p>
              <p><span className="font-semibold">Email:</span> nabsman@gmail.com</p>
            </div>

            {/* Add to Cart Button */}
            <button className="mt-6 w-auto bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700">
               Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
