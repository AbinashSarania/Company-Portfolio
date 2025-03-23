import React, { useState, useEffect } from "react";
import Navbar from "../common/Navbar"; // Adjust path as needed
import Carousel1 from "../../assets/carousel1.png";
import Project1image from "../../assets/Project1_image.png";
import Project1image2 from "../../assets/Project1_image2.png";
import Project1image3 from "../../assets/Project1_image 3.png";
import Project1image4 from "../../assets/Project1_image4.png";

import ContactUs from "../../components/home/ContactUs";

const Project1 = () => {
  const [navTheme, setNavTheme] = useState("whiteText");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavTheme("blackText");
      } else {
        setNavTheme("whiteText");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen">
      <Navbar theme={navTheme} />

      {/* Hero Section with Image and Overlay Text */}
      <div className="relative w-full">
        <img
          src={Carousel1}
          alt="Project Carousel"
          className="w-full flex items-center justify-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 md:bg-opacity-0"></div>

        <div className="absolute top-1/2 left-8 md:left-16 transform -translate-y-1/2 text-white max-w-[400px]">
          <h2
            className="text-4xl md:text-6xl leading-tight"
            style={{ fontFamily: "Anybody" }}>
            The Desired <br /> shopping app <br /> for Genz’s
          </h2>
        </div>
      </div>

      {/* Info Section */}
      <section
        className="w-full px-6 md:px-16 py-24 bg-white text-gray-600"
        style={{ fontFamily: "Anybody" }}>
        <div className="space-y-12 text-sm">
          {" "}
          {/* Applied text-sm here */}
          {/* First Row */}
          <div className="flex flex-col md:flex-row md:space-x-16 border-b pb-8">
            <h3 className="md:w-1/3 font-semibold">User-Centered Design</h3>
            <p className="md:w-2/4">
              At UXify, we design with users in mind, ensuring intuitive,
              accessible, and seamless experiences. Our designs are visually
              engaging, responsive across all devices, and backed by data-driven
              insights. We create interfaces that enhance interaction,
              usability, and business success.
            </p>
          </div>
          {/* Second Row */}
          <div className="flex flex-col md:flex-row md:space-x-16 border-b pb-8">
            <h3 className="md:w-1/3 font-semibold">
              Industry-Standard Compliance
            </h3>
            <p className="md:w-2/4">
              We follow the latest web standards to ensure fast, secure, and
              SEO-friendly websites. Our solutions are scalable, maintainable,
              and optimized for performance and cross-browser compatibility.
              With a strong focus on security and privacy, we build trust-driven
              digital experiences.
            </p>
          </div>
          {/* Third Row */}
          <div className="flex flex-col md:flex-row md:space-x-16 border-b pb-8">
            <h3 className="md:w-1/3 font-semibold">
              Industry-Standard Compliance
            </h3>
            <p className="md:w-2/4">
              We follow the latest web standards to ensure fast, secure, and
              SEO-friendly websites. Our solutions are scalable, maintainable,
              and optimized for performance and cross-browser compatibility.
            </p>
          </div>
          {/* Fourth Row */}
          <div className="flex flex-col md:flex-row md:space-x-16">
            <h3 className="md:w-1/3 font-semibold">
              Industry-Standard Compliance
            </h3>
            <p className="md:w-2/4">
              We follow the latest web standards to ensure fast, secure, and
              SEO-friendly websites. Our solutions are scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile App Showcase Section*/}
      <section
        className="w-full bg-white text-black py-16 px-6 md:px-16 text-center"
        style={{ fontFamily: "Anybody" }}>
        <h2 className="text-3xl md:text-4xl mb-4">Where all Genz’s Shop</h2>
        <p className="text-sm mb-2">
          Explore some of our latest Website projects
        </p>
        <p className="text-lg font-normal mb-12">Mobile app</p>

        <div className="flex justify-center">
          <img
            src={Project1image}
            alt="Mobile App Showcase"
            className="w-full max-w-xl mx-auto"
          />
        </div>
      </section>

      {/* Image2*/}
      <div className="flex justify-center">
        <img
          src={Project1image2}
          alt="Mobile App Showcase 2"
          className="w-full"
        />
      </div>

      {/* Web UI Showcase*/}
      <section
        className="w-full bg-white text-black py-16 px-6 md:px-16 text-center"
        style={{ fontFamily: "Anybody" }}>
        <h2 className="text-2xl md:text-3xl mb-12 mt-6">Web UI</h2>

        <div className="flex justify-center">
          <img
            src={Project1image3}
            alt="Web UI Showcase"
            className="w-full max-w-2xl mx-auto"
          />
        </div>
      </section>

      {/* Image4*/}
      <div className="flex justify-center">
        <img
          src={Project1image4}
          alt="Mobile App Showcase 4"
          className="w-full"
        />
      </div>

      <ContactUs />
    </div>
  );
};

export default Project1;
