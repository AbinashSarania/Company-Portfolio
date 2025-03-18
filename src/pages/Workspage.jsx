// src/pages/Workspage.jsx
import React from "react";
import Navbar from "../components/common/Navbar";
import ContactUs from "../components/home/ContactUs";
import WorkBg1 from "../assets/Work 1 (2).png";
import WorkOverlay1 from "../assets/Work 1 (1).png";
import WorkBg2 from "../assets/Work 2.png";
import WorkBg3 from "../assets/Work 3.png";

const Workspage = () => {
  return (
    <>
      {/* Navbar with light theme */}
      <Navbar theme="light" />

      <div
        className="w-full min-h-screen flex flex-col items-center justify-center px-0"
        style={{ fontFamily: "Anybody" }}
      >
        {/* Text Section */}
        <div className="w-full bg-white py-16 px-6 pt-32 text-center">
          <h1 className="text-black text-2xl md:text-4xl font-light leading-relaxed max-w-5xl mx-auto">
            Working to shape the future of your <br />
            industry? We create brands that bring ambitions <br />
            to life,
          </h1>
        </div>

        {/* Project 1 */}
        <div className="w-full relative">
          <img
            src={WorkBg1}
            alt="Work Background 1"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-10 left-6 md:left-16">
            <p className="text-white text-xl md:text-3xl tracking-wide border-b border-white inline-block pb-0.5">
              Minimals
            </p>
          </div>
          <div className="absolute top-10 right-6 md:right-16">
            <p className="text-white text-xl md:text-3xl tracking-wide">01</p>
          </div>
          <img
            src={WorkOverlay1}
            alt="Work Overlay 1"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/3 h-auto object-contain"
          />
        </div>

        {/* Project 2 */}
        <div className="w-full relative">
          <img
            src={WorkBg2}
            alt="Work Background 2"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-10 left-6 md:left-16">
            <p className="text-white text-xl md:text-3xl tracking-wide border-b border-white inline-block pb-0.5">
              Abstract
            </p>
          </div>
          <div className="absolute top-10 right-6 md:right-16">
            <p className="text-white text-xl md:text-3xl tracking-wide">02</p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="w-full relative">
          <img
            src={WorkBg3}
            alt="Work Background 3"
            className="w-full h-auto object-cover"
          />
          <div className="absolute top-10 left-6 md:left-16">
            <p className="text-white text-xl md:text-3xl tracking-wide border-b border-white inline-block pb-0.5">
              Creative
            </p>
          </div>
          <div className="absolute top-10 right-6 md:right-16">
            <p className="text-white text-xl md:text-3xl tracking-wide">03</p>
          </div>
          <ContactUs />
        </div>
       
      </div>
    </>
  );
};

export default Workspage;
