import React from "react";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#5F41E4] text-white p-3 shadow-md z-50">
      <div className="flex justify-between items-center">
        {/* Logo or Title Section */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Thrift Store</h1>
        </div>
        
        {/* Navigation Menu */}
        <div className="flex items-center">
          <nav>
            <ul className="flex space-x-6">
              {/* Example Link */}
              <li>
                <a href="#" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/profile" className="hover:text-gray-300">
                  Profile
                </a>
              </li>
              <li>
                <a href="/logout" className="hover:text-gray-300">
                  Logout
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
