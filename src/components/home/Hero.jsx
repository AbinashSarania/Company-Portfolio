// src/components/Hero.jsx
import React from "react";
import HeroImage from "../../assets/HeroImage.png";

export default function Hero({ scrollToOurTeam }) {
  return (
    <section
      className="relative flex flex-col items-center justify-start bg-white pb-20"
      style={{ minHeight: "80vh" }}
    >
      {/* Content Container */}
      <div className="w-full text-center relative z-10">
        {/* Primary Heading */}
        <h1
          className="text-6xl md:text-8xl mb-4 mt-8"
          style={{ color: "#EBDEDE", fontFamily: "Anybody" }}
        >
          Rebel against Boring
        </h1>

        {/* Secondary Heading */}
        <div className="overflow-hidden whitespace-nowrap text-xl md:text-8xl mb-8 mt-12">
          <p
            className="animate-scroll whitespace-nowrap"
            style={{ color: "black", fontFamily: "Anybody" }}
          >
            Communication. Brand. Contents. User Experience
          </p>
        </div>

        {/* Call-to-Action Button */}
        <button
          onClick={scrollToOurTeam}
          className="px-9 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition duration-300 mb-8 inline-block"
          style={{ fontFamily: "Anonymous Pro" }}
        >
          Know more about us
        </button>
      </div>

      {/* Image Container */}
      <div className="w-full flex justify-end pr-8">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-[60%] max-w-[1060px] h-auto sm:w-[50%] md:w-[50%] lg:w-[50%] xl:w-[57.4%]"
        />
      </div>
    </section>
  );
}
