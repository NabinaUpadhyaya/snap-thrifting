import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { FaInfoCircle } from 'react-icons/fa';
import {  AiOutlineLogin } from 'react-icons/ai'; 
import Footer from './components/Footer';

const page = () => {
  const products = [
    { id: 1, name: "Woolen sweater", category: "Clothing", price: 900, image:"/image/woolensweater.jpg" },
    { id: 2, name: "Caps", category: "Accessories", price: 1000, image:"/image/caps.jpg" },
    { id: 3, name: "Hoodie- Gray", category: "Clothing", price: 800, image:"/image/greyhoodie.jpg" },
    { id: 4, name: "Pink Dr.martens shoe", category: "Shoes", price: 4500,image:"/image/boots.jpg" },
    { id: 5, name: "Mixed Ring Collection", category: "Accessories", price: 900,image:"/image/ring.jpg" }

   
   
  ];
  return (
    <div className="bg-gray-50 min-h-screen">
     <header className="flex items-center justify-between p-4 shadow-md bg-[#5F41E4]">
      <div className="text-2xl font-serif font-bold">
        <span className="italic text-white">Snap-Thrift</span>
      </div>

      <ul className="flex items-center space-x-6">
        
        <Link 
          href="/aboutus"
          className="px-4 py-2 text-[#5F41E4] bg-white rounded-md hover:bg-gray-300 flex items-center">
          <FaInfoCircle size={20} className="mr-2" />
          About Us
        </Link>

        <Link 
          href="/login"
          className="px-4 py-2 text-[#5F41E4] bg-white rounded-md hover:bg-gray-300 flex items-center">
          <AiOutlineLogin size={20} className="mr-2" />
          Login
        </Link>

      </ul>
    </header>

      <div className=""></div>

      <div

id="home"
className="relative h-[605px] flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
style={{
  backgroundImage: "linear-gradient(to bottom, rgba(107, 73, 240, 0.7), rgba(33, 150, 243, 0.7)), url('/image/staticimg/back.jpg')",
}}
>
<section className="container mx-auto px-6 text-center">
  <div className="">
    <h2 className="text-5xl text-shadow-xl font-extrabold mb-4 animate-fade-in">
      Style Sustainably, Shop Affordably
    </h2>
    <p className="text-lg text-shadow-xl mb-6 animate-slide-up">
      Find pre-loved treasures online with fast delivery, affordable price, and trusted service.
    </p>
  </div>
  <Link
    href="/login"
    className="bg-[#5F41E4] hover:bg-[#533cbb] text-gray-800 px-6 py-3 rounded font-bold transition duration-300 animate-bounce"
  >
    Shop Now
  </Link>
</section>
</div>


   
<section id="about" className="py-16 bg-gradient-to-r from-[#EAE7F0] via-[#F7F4FA] to-[#EAE7F0]">
  <div className="max-w-screen-xl mx-auto px-6">
    <h3 className="text-4xl font-bold text-gray-800 text-center mb-12">
      Latest Items Arrivals
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          {product.image ? (
            <div className="relative w-full h-48">
              <Image
                src={product.image}
                alt={product.name}
                layout="fill"
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-full h-48 bg-gray-300"></div>
          )}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold text-gray-700">{product.name}</h3>
            <p className="text-sm text-gray-500">{product.category}</p>
            <p className="text-xl font-bold text-gray-900 mt-2">Rs. {product.price}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-10 text-center">
      <Link
        href="/login"
        className="bg-[#5F41E4] text-white px-6 py-3 rounded-lg text-lg font-medium hover:bg-[#4a32b9] transition-all duration-300"
      >
        Login to see more
      </Link>
    </div>
  </div>
</section>

    <section className="text-center py-16 bg-white">
      <h2 className="text-2xl font-semibold text-gray-800 pt-10">Sell/Donate your Items</h2>
      <p className="text-sm text-gray-600 mt-4">Have items you no longer need? Sell them to our thrift store and help others find great bargains..</p>
      <a href="/login" className="mt-6 inline-block bg-[#5F41E4] text-white px-6 py-3 rounded-lg hover:bg-[#4a32b9]">Join Us</a>
    </section>

   

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
         src="/image/qualityfinds.webp"
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
         src="/image/sustainablestyle.jpg"
                alt="Google"
          width={50}
          height={50}
          className="rounded-full"
          />
      </div>
    </div>
    

          </div>
      </div>        

    </section>
<Footer/>

  </div>
  )
}

export default page