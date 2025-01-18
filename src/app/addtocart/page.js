import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const page = () => {

  const items = [
    { name: "Tshirt", price: 500, image: "/tshirt.png" },
    { name: "1 piece (dress)", price: 1000, image: "/dress.png" },
    { name: "1 piece (jeans)", price: 1000, image: "/jeans.png" },
    { name: "1 piece (pants)", price: 1000, image: "/pants.png" },
  ];

  return (
    <div className='bg-gray-100'>
      <div>
        <Header></Header>
      </div>

      <div>
        <div className="min-h-screen flex justify-center items-center">
          <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-[6fr_4fr] gap-12">
              <div>
                {items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-gray-200 py-4"
                  >
                    <div className="flex items-center gap-8">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <p className="text-lg font-medium">{item.name}</p>
                        <p className="text-sm text-gray-500">sellers name</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">Rs. {item.price}</p>
                      <div className="mt-1">
                        <span className="text-red-500 text-lg">&#9650;</span>
                      </div>
                    </div>
                    <input
                      type="checkbox"
                      className="ml-4 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>

              <div>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-lg font-semibold">Location</p>
                  <p className="text-sm text-gray-500 mt-2">
                    <span className="text-black">★</span> Add Delivery Address: Kalanki
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-lg mt-4">
                  <p className="text-lg font-semibold">Purchase Overview</p>
                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-600">Net Amount</p>
                    <p className="text-sm text-gray-600">Rs. 0</p>
                  </div>
                  <div className="flex justify-between mt-2">
                    <p className="text-sm text-gray-600">Delivery charges</p>
                    <p className="text-sm text-gray-600">Rs. 0</p>
                  </div>
                  <div className="flex justify-between mt-2 font-bold">
                    <p>Total</p>
                    <p>Rs. 0</p>
                  </div>
                  <button className="w-full bg-[#5F41E4] text-white py-2 rounded-lg mt-4 hover:bg-[#2F1E6C]">
                    PROCEED TO CHECKOUT
                  </button>
                </div>
              </div>
          </div>
          </div>
        </div>

      </div>

      <div className='mt-20'>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page;
