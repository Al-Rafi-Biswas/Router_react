import React from "react";

const About = ({heading,pera}) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Text Heading */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight text-gray-800">
            {/* Learn and Grow <br /> With Our Courses */}
            {heading}
          </h1>
        </div>

        {/* Right Section: Paragraph */}
        <div className="lg:w-1/2 text-gray-600">
          <p className="text-lg leading-relaxed">
            {pera}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
