import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Image from 'next/image'
import Team from '../components/team'

const page = () => {
  return (
    <div>
      <div>
        <Header></Header>
      </div>
      <div className="max-w-7xl mx-auto p-7 pt-[111px] grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Section: Text */}
        <div className="space-y-6">
          <h2 className="text-4xl font-medium text-gray-600">About Us</h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Welcome to Snap Thrift!
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
            At Snap Thrift, we believe in giving a second life to treasures
            waiting to be discovered. We're more than just a thrift
            store—we're a community of fashion enthusiasts, sustainability
            advocates, and value seekers.
          </p>
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-green-700 transition">
            Get Started
          </button>
        </div>
        {/* Right Section: Images Layout */}
        <div className="relative w-full h-[30rem] flex justify-center items-end">
          {/* Image 1: Bottom Center */}
          <div className="relative w-4/5 h-64 md:h-72 z-0 shadow-lg">
            <img
              src="/image/clothes-rack.jpeg"
              alt="Clothes on Rack"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 2: Top Left (Above and Overlapping) */}
          <div className="absolute -top-0 -left-14 w-1/2 h-48 md:h-56 transform -rotate-6 shadow-lg z-10">
            <img
              src="/image/clothes-grid.png"
              alt="Clothes Grid"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          {/* Image 3: Top Right (Above and Overlapping) */}
          <div className="absolute -top-0 -right-14 w-1/2 h-48 md:h-56 transform rotate-3 shadow-lg z-10">
            <img
              src="/image/phone-shopping.png"
              alt="Phone Shopping"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-4 py-8 md:py-12 bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
          {/* Image Section */}
          <div className="w-full md:w-1/3">
            <Image
              src="/image/laptop.png" 
              alt="Pile of Clothes in Laptop"
              width={400}  // Decreased width
              height={300}  // Decreased height
              layout="responsive"
              className="object-cover"
           />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">SNAP Story</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-2">
            <strong>Snap Thrift</strong> began as a small project inspired by our passion for
            affordable, unique fashion and sustainability. While we're just starting out, we envision
            growing into a space where style seamlessly meets purpose, making thrift shopping accessible
            and meaningful for everyone.
            </p>
          </div>
        </div>
        {/* -- Mission Section -- */}
        <div className="max-w-5xl mx-auto mt-12 text-center px-4">
          <h3 className="text-3xl font-semibold text-gray-500 mb-2">OUR MISSION</h3>
          <h1 className="text-2xl md:text-4xl font-extrabold mb-6">
            MAKING THRIFTING BETTER FOR EVERYONE
          </h1>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            To make fashion affordable, sustainable, and personal. We strive to connect our customers
            with one-of-a-kind finds while reducing the environmental impact of fast fashion.
          </p>
        </div>
      </div>
      {/* Community and Sustainability Section */}
      <div className="max-w-4xl mx-auto space-y-12">
        <div className="space-y-12">
          {/* Community Section */}
          <div className="flex flex-col md:flex-row items-center space-y-20 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/3">
              <Image
              src="/image/community.jpg" 
              alt="community"
              width={300}
              height={300}
              layout="responsive"
              className="rounded-lg shadow-md"
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Community</h2>
              <p className="text-gray-800 text-base leading-relaxed">
                Snap Thrift wouldn’t exist without our vibrant community of customers and contributors. Whether
                you’re a seasoned thrifter or new to the world of second-hand shopping, you’re part of our journey
                to make fashion more meaningful.
              </p>
            </div>
          </div>
          {/* Sustainability Section */}
          <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
            {/* Image Section */}
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <Image
                src="/image/sustainable.png" 
                alt="Sustainability at Heart"
                width={500}
                height={500}
                layout="responsive"
                className="rounded-full shadow-md w-full h-full object-cover" 
              />
            </div>
            {/* Text Section */}
            <div className="w-full md:w-1/2 p-6 md:p-8 order-1 md:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Sustainability at Heart</h2>
              <p className="text-gray-700 text-base leading-relaxed">
                 At Snap Thrift, we’re proud to champion the cause of sustainable fashion. By encouraging second-hand
                shopping, we aim to reduce waste and inspire a more conscious approach to consumption. Every item we
                sell is a step toward a greener planet.
              </p>
            </div>
          </div>
        </div> 
      </div>
      <div className="flex justify-center px-4 py-8 bg-white">
        <div className="flex flex-col items-center justify-center ml-64">
          {/* Join Us Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
            {/* Text Content */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Join Us!</h2>
              <p className="text-gray-700 text-base leading-relaxed mb-6">
                Dive into a world of unique finds and sustainable fashion. Explore Snap Thrift today and be part of
                a movement that values style and the planet. Together, we can make a difference—one thrifted item at
                a time.
              </p>
              <a
              href="/shop"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300"
              >
              Start Shopping
              </a>
            </div>
            {/* Image Content */}
            <div className="w-1/2">
              <Image
                src="/image/th.jpg"
                alt="Join Us - Reasons to Thrift"
                width={400}
                height={300}
                layout="responsive"
                className="rounded-lg shadow-lg"
                />
            </div>
          </div>
        </div>
      </div>

      <div>
        <Team></Team>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default page
