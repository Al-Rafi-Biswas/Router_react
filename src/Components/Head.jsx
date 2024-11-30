import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Head = () => {
  return (
    <header>
      <div className="contaier bg-orange-500 w-full">
        <h4 className="text-white text-center flex items-center gap-5 justify-center">
          Free Courses 🌟 Sale Ends Soon, Get It Now <FaArrowRight />
        </h4>
      </div>
    </header>
  );
};

export default Head;
