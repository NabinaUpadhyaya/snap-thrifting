import React from 'react'

const page = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
    {/* Navbar */}
    <header className="bg-[#5F41E4] text-white p-4 shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Thrift Store</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-gray-300">About Us</a></li>
            <li><a href="#add-more" className="hover:text-gray-300">Add More</a></li>
            <li><a href="#shop" className="hover:text-gray-300">Shop</a></li>
          </ul>
        </nav>
      </div>
    </header>

    {/* Hero Section */}
    <section className="text-center py-16 bg-blue-100">
      <h2 className="text-4xl font-bold text-gray-800">Welcome to Our Thrift Store!</h2>
      <p className="text-lg text-gray-600 mt-4">Discover unique items and support sustainability.</p>
      <a href="#shop" className="mt-6 inline-block bg-[#5F41E4] text-white px-6 py-3 rounded-lg hover:bg-[#5F41E4]">Shop Now</a>
    </section>

   

    {/* Add More Section */}
    <section id="SellyourItems" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800">Sell your Items</h3>
        <p className="text-lg text-gray-600 mt-4">
          Have items you no longer need? Sell them to our thrift store and help others find great bargains.
        </p>
        <a href="#donate" className="mt-6 inline-block bg-[#5F41E4] text-white px-6 py-3 rounded-lg hover:bg-[#5F41E4]">Upload for free</a>
      </div>
    </section>

     {/* About Us Section */}
     <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-3xl font-bold text-gray-800">
        See some of the latest Items arrivals...</h3>
        <p className="text-lg text-gray-600 mt-4">
          
        </p>
      </div>
    </section>

    <footer className="bg-[#5F41E4] text-white py-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Column */}
          <div>
            <h4 className="text-xl font-bold mb-4">SNAP Thrift</h4>
            <p>
              We are the first physical thrift store in the city located at Maitighar, Kathmandu. Established in 2020, we have been serving our secondhand loving customers all over Nepal.
            </p>
          </div>
          

          {/* Contact Column */}
          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>snapthriftstore@gmail.com</li>
              <li>+977-97********</li>
              <li><a href="#" className="hover:text-gray-300">Facebook</a></li>
              <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
              <li><a href="#" className="hover:text-gray-300">Google Map</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 border-t border-[#fdfcfe] pt-4">
          <p>&copy; SNAP thrift. All rights reserved.</p>
        </div>
      </footer>
  </div>
  )
}

export default page