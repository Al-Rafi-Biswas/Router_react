import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Left Section: About/Logo */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-3">Skillbridge</h3>
            <p className="text-gray-400">
              Empowering learners through online courses in design and
              development. Learn, grow, and achieve your goals with us.
            </p>
          </div>

          {/* Middle Section: Quick Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Courses</li>
              <li className="hover:text-white cursor-pointer">About Us</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Right Section: Social Media */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-3">Follow Us</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#FF9500]"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#FF9500]"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full hover:bg-[#FF9500]"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          © 2023 Skillbridge. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
