// src/components/Hero.jsx
import React from "react";
import HeroImage from "../../assets/HeroImage.png";

export default function Hero({ scrollToOurTeam }) {
  return (
    <section className="relative flex flex-col items-start justify-start bg-black text-white min-h-screen ">
      {/* Content Container */}
      <div className="w-full text-left relative z-10 pb-6 pt-20">
        {/* Secondary Heading with Animation */}
        <div className="overflow-hidden whitespace-nowrap text-[5rem] md:text-[14rem] ">
          <p
            className="animate-scroll whitespace-nowrap"
            style={{ fontFamily: "Anybody" }}>
            We Grow Brands Online
          </p>
        </div>

        {/* Primary Heading (Smaller & Left-Aligned) */}
        <h1
          className="text-md md:text-xl mb-4 px-8"
          style={{ color: "#EBDEDE", fontFamily: "Anybody" }}>
          Custom Websites, Branding & Digital Marketing
        </h1>

        {/* Call-to-Action Button (Left-Aligned with Padding) */}
        <button
          onClick={scrollToOurTeam}
          className="px-9 py-3 text-lg font-semibold text-white bg-blue-800 rounded-lg hover:bg-blue-600 transition duration-300 ml-8"
          style={{ fontFamily: "Anonymous Pro" }}>
          Request a quote!
        </button>
      </div>

      {/* Image Container (Takes Full Remaining Space) */}
      <div className="w-full flex-grow flex justify-center items-center">
        <img
          src={HeroImage}
          alt="Hero"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
