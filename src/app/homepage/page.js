import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Slider from '../components/slider'
import SingleGridBox from '../components/SingleGridBox'
import Image from 'next/image'
import { items } from '../data/items';


const page = () => {
  return (
    <div>

      <div>
        <Header></Header>
      </div>

      <div className='pt-8'>
        <Slider></Slider>
      </div>

      <div>  
        <div className='bg-gray-50 pt-6'>
          <div className="bg-gray-50 min-h-screen p-4">
            {/* Header Section */}
            <div className="flex justify-center gap-10 my-4">
              <div className="flex items-center bg-gray-100 rounded-xl shadow-md">
                <select className="flex-grow px-4 py-2 text-gray-700 bg-transparent border rounded-xl outline-none">
                  <option disabled selected>Categories</option>
                  <option>Clothings</option>
                  <option>Shoes</option>
                  <option>Accessories</option>
                </select>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                  Apply
                </button>
              </div>

              <div className="flex items-center bg-gray-100 rounded-xl shadow-md w-full max-w-md">
                <input
                  type="text"
                  placeholder="Search..."
                  className="flex-grow px-4 py-2 text-gray-700 bg-transparent outline-none"
                />
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                  Search
                </button>
              </div>

              <button className="bg-indigo-600 text-white px-4 py-2 rounded-xl hover:bg-indigo-700">
                Filter By
              </button>
            </div>

            {/* clothings section */}
            <div>
            {/* Title */}
              <div className='pt-6'>
                <h1 className="text-center text-2xl font-bold text-indigo-600 mb-4">
                Clothings
                </h1>
              </div>

              <div className='px-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {items.map((item, index) => (
                    <SingleGridBox
                      key={index}
                      image={item.image}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  View More
                </button>
              </div>
            </div>

            {/* shoes section */}
            <div className='pt-6'>
              {/* Title */}
              <div className='pt-6'>
                <h1 className="text-center text-2xl font-bold text-indigo-600 mb-4">
                Shoes
                </h1>
              </div>

              <div className='px-20'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {items.map((item, index) => (
                    <SingleGridBox
                      key={index}
                      image={item.image}
                      name={item.name}
                      category={item.category}
                      price={item.price}
                    />
                  ))}
                </div>
              </div>

              {/* View More Button */}
              <div className="text-center mt-8">
                <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700">
                  View More
                </button>
              </div>
            </div>

          </div>
        </div>     
      </div>    

      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
