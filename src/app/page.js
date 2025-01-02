import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const page = () => {
  const products = [
    { id: 1, name: "Woolen sweater", category: "Clothing", price: 900 },
    { id: 2, name: "Woolen sweater", category: "Clothing", price: 908 },
    { id: 3, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 4, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 5, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 6, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 7, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 8, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 9, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 10, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 11, name: "Woolen sweater", category: "Clothing", price: 903 },
    { id: 12, name: "Woolen sweater", category: "Clothing", price: 903 },

   
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
    {/* Navbar */}
    <header className="fixed w-full bg-[#5F41E4] text-white p-4 shadow-md">
      <div className=" flex justify-between items-center">
    <div className='flex items-center'>

      <h1 className=" text-2xl font-bold">Thrift Store</h1>
    </div>
       <div className='flex items-center'>
         <nav>
          <ul className="flex space-x-6">
            <Link href="#" className="hover:text-gray-300">About Us</Link>
            <Link href="/login" className="hover:text-gray-300">Login</Link>
            <Link href="/signup" className="hover:text-gray-300">Signup</Link>
          </ul>
        </nav>
        </div>
      </div>
    </header>

    {/* Hero Section */}
    <section className="text-center py-16 bg-[#EAE7F0]">
      <h2 className="text-2xl font-semibold text-gray-800 pt-10">Welcome to Our Thrift Store!</h2>
      <p className="text-sm text-gray-600 mt-4">Have items you no longer need? Sell them to our thrift store and help others find great bargains..</p>
      <a href="/login" className="mt-6 inline-block bg-[#5F41E4] text-white px-6 py-3 rounded-lg hover:bg-[#4a32b9]">+Upload for free</a>
    </section>

   

   
{/*about us*/}
    <section id="about" className="py-10 bg-white">
  <div className="max-w-screen-xl mx-auto text-center px-4">
    <h3 className="pb-10 text-2xl font-bold text-gray-800">
      See some of the latest Items arrivals...
    </h3>
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow rounded-lg flex flex-col items-center justify-center  hover:bg-slate-100"
          >
          {product.image ? (
  <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
    <Image
      src={`assets/${product.image}`}  // Updated path
      alt={product.name}
      
      width={245} // Specify width and height
      height={500} // Specify width and height
      className="absolute inset-0 w-full h-full object-cover mb-4"
    />
  </div>
) : (
  <div className="w-full h-40 bg-gray-300 mb-4"></div>
)}


            <h3 className="text-lg font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-lg font-bold mt-2">Rs. {product.price}</p>
          </div>
        ))}
      </div>
    </div>
    <div className="flex items-center justify-center mt-6">
      <a
        href="/login"
        className="inline-block bg-[#5F41E4] text-white px-6 py-3 rounded-lg hover:bg-[#4a32b9] focus:ring-4 focus:ring-[#5F41E4] focus:outline-none"
      >
        Login to see more..
      </a>
    </div>
  </div>
</section>


 {/* why queries section */}
 <section id="why" className="py-10 bg-[#EAE7F0]">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-semibold text-gray-800 pb-10">Why SNAP Thrift-Store?</h3>
        <div className=' flex px-10 '>

        <div className="bg-[#B9D8E1] p-6 rounded-lg flex items-center w-50 mr-10">
      <div className="flex-grow">
        <h2 className="text-xl text-left  font-semibold mb-2 text-gray-800">Quality finds</h2>
        <p className="text-gray-700 text-left text-xs">
          We only select quality items. Only 60% of items that we receive are accepted on average.
        </p>
      </div>
      <div className="ml-4">
        <Image
         src="/public/image/quality finds.webp"
                alt="Google"
          width={50}
          height={50}
          className="rounded-full"
          />
      </div>
    </div>

    <div className="bg-[#B3DFC7] p-6 rounded-lg flex items-center w-50 mr-10">
      <div className="flex-grow">
        <h2 className="text-xl text-left font-semibold mb-2 text-gray-800">Sustainable style</h2>
        <p className="text-gray-700 text-left text-xs">
        Shopping second hand clothing helps reduce carbon emissions by an average of 25%
        </p>
      </div>
      <div className="ml-4">
        <Image
         src="assets/google.svg"
                alt="Google"
          width={50}
          height={50}
          className="rounded-sm"
          />
      </div>
    </div>
    

          </div>
      </div>        

    </section>

 {/* Footer section */}
      <footer className="bg-gray-800 text-white py-10">
  <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8">
    {/* About Column */}
    <div>
      <h4 className="text-2xl font-semibold mb-4">SNAP Thrift</h4>
      <p className="text-gray-300 leading-relaxed">
        We are the first online thrift store that guarantees the quality of every item. Established in 2024, we have been serving our secondhand-loving customers.
      </p>
    </div>

    {/* Contact Column */}
    <div>
      <h4 className="text-2xl font-semibold mb-4">Contact</h4>
      <ul className="space-y-3 text-gray-300">
        <li>Email: <a href="mailto:snapthriftstore@gmail.com" className="text-gray-100 hover:text-gray-400">snapthriftstore@gmail.com</a></li>
        <li>Phone: <a href="tel:+977-97********" className="text-gray-100 hover:text-gray-400">+977-97********</a></li>
        <li>
          <a href="#" className="hover:text-gray-400">Facebook</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400">Instagram</a>
        </li>
        <li>
          <a href="#" className="hover:text-gray-400"> TikTok</a>
        </li>
      </ul>
    </div>

   
  </div>

  <div className="text-center mt-8 border-t border-gray-600 pt-4">
    <p className="text-gray-400">&copy; 2024 SNAP Thrift. All rights reserved.</p>
  </div>
</footer>

  </div>
  )
}

export default page