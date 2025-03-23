import React from "react";
import ApproachImage from "../../assets/Our approach.png"; // Replace with your actual image path
import OverlapImage from "../../assets/Vector.png"; // Replace with the transparent PNG image you want to overlap

const processes = [
  {
    id: 1,
    title: "User-Centered Design",
    description: [
      "At UXify, we design with users in mind, ensuring intuitive, accessible, and seamless experiences. Our designs are visually engaging, responsive across all devices, and backed by data-driven insights. We create interfaces that enhance interaction, usability, and business success.",
    ],
  },
  {
    id: 2,
    title: "Industry-Standard Compliance",
    description: [
      "We follow the latest web standards to ensure fast, secure, and SEO-friendly websites. Our solutions are scalable, maintainable, and optimized for performance and cross-browser compatibility. With a strong focus on security and privacy, we build trust-driven digital experiences.",
    ],
  },
];

const Process = () => {
  return (
    <>
      {/* Text Content */}
      <div
        className="relative w-full py-12 md:py-24 px-6 md:px-12 lg:px-12 bg-white text-black flex flex-col justify-center"
        style={{ fontFamily: "Anybody" }}>
        {/* Section Heading */}
        <div className="w-full max-w-7xl mb-10">
          <h2 className="text-2xl md:text-3xl tracking-tight">Our approach</h2>
        </div>

        {/* Process List */}
        {processes.map((process) => (
          <div
            key={process.id}
            className="w-full max-w-7xl flex flex-row items-start justify-start gap-6 md:gap-12 px-0 py-4 my-4">
            {/* Title on the Left */}
            <div className="w-1/4 text-sm md:text-sm font-medium">
              {process.title}
            </div>

            {/* Description on the Right */}
            <div className="w-2/4 text-xs md:text-xs leading-[20px] md:leading-[24px] text-gray-600">
              {process.description.map((desc, descIndex) => (
                <p key={descIndex} className="mb-2">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Full-Width Approach Image with Overlapping Element */}
      <div className="relative w-full">
        {/* Overlapping Image on the Left */}
        <img
          src={OverlapImage}
          alt="Overlay Design"
          className="absolute left-10 bottom-10 w-1/3 md:w-1/4 h-auto object-contain"
        />

        {/* Main Approach Image */}
        <img
          src={ApproachImage}
          alt="Our Approach"
          className="w-screen h-auto object-cover"
        />

        {/* About Us Top Section */}
        <div className="bg-white py-8 text-center pt-10">
          <h1
            className="text-3xl font-semibold inline-block border-b-2 border-black pb-2"
            style={{ fontFamily: "Anybody" }}>
            About Us
          </h1>
        </div>
      </div>
    </>
  );
};

export default Process;
