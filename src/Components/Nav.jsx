import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-[#FF9500] text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-bold">Skillbridge</div>

        {/* Navigation Links */}
        <div className="hidden md:flex gap-6">
          <a href="#" className="hover:text-gray-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-200">
            Courses
          </a>
          <a href="#" className="hover:text-gray-200">
            About Us
          </a>
          <a href="#" className="hover:text-gray-200">
            Contact
          </a>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex gap-4">
          <button className="bg-white text-[#FF9500] px-4 py-2 rounded hover:bg-gray-200">
            Login
          </button>
          <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-white focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
