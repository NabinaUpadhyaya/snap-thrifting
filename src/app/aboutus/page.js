import React from "react";
import Image from "next/image";
import { FaAccessibleIcon } from "react-icons/fa";
import { MdAddHome, MdAddHomeWork } from "react-icons/md";
import { LuTouchpad } from "react-icons/lu";

const page = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to our thrift store! We provide gently used items at
          affordable prices, aiming to promote sustainability and support the
          community.
        </p>
        <Image
          src="assets/google.svg"
          alt="Google"
          className="h-5 mr-2"
          width={20}
          height={20}
        />
      </section>

      {/* Mission Section */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4  bg-slate-500">
          <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
          <MdAddHomeWork className="text-gray-800" />

          <p className="text-lg text-gray-600">
            We are committed to offering high-quality, pre-loved goods that make
            a positive impact on both your wallet and the environment. Our
            mission is to make thrift shopping fun, affordable, and sustainable.
          </p>
        </div>
        <div className="space-y-4 bg-slate-500">
          <h2 className="text-3xl font-semibold text-gray-800">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-5 space-y-2 text-lg text-gray-600">
            <li>Wide selection of items ranging from clothing to furniture</li>
            <li>Affordable prices with new inventory added regularly</li>
            <li>Supporting local charities and community initiatives</li>
            <li>Eco-friendly shopping experience</li>
          </ul>
        </div>
      </section>
      <div className="bg-slate-500">
        {/* Team Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 flex justify-center ">
            Meet the Team
            <FaAccessibleIcon className="text-blue-800 text-lg " />
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Our team is passionate about curating the best items and delivering
            a friendly, welcoming experience for all of our customers.
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            {/* Team Member 1 */}
            <div className="w-36 h-36 rounded-full bg-gray-200"></div>
            {/* Team Member 2 */}
            <div className="w-36 h-36 rounded-full bg-gray-200"></div>
            {/* Team Member 3 */}
            <div className="w-36 h-36 rounded-full bg-gray-200"></div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Get In Touch</h2>
          <LuTouchpad className="text-slate-900"/>
          <p className="mt-4 text-lg text-gray-600">
            Have questions? We'd love to hear from you! Reach out to us through
            our contact page or visit us in store.
          </p>
          <a
            href="/contact"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-full"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
};

export default page;
