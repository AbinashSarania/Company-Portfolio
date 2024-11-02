import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope, FaBullhorn } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="bg-white text-black p-8 py-20 px-6 md:px-12 lg:px-24"
      style={{ fontFamily: "Anybody" }}
    >
      <div className="flex flex-col md:flex-row justify-between">
        {/* Left Section */}
        <div className="md:w-1/2 mb-6 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-24">
            We love crafting unforgettable digital experiences, brands, and
            websites with people like you.
          </h1>
          <div className="mb-6 space-y-4">
            <h2 className="text-sm font-light">Get in touch</h2>
            <p className="text-base text-md">+91 9954 325690</p>
            <p className="text-base text-md">Sameshm445@gmail.com</p>
            <p className="text-base text-md">
              Rolling mill, Near cake heaven, Bongaigaon, Assam
            </p>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            ©2024 Awesome Inc. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center  mx-auto md:mx-0">
          {/* Social Media Icons Card */}
          <div className="bg-black p-4 rounded-3xl mb-6 flex gap-28 px-14">
            {/* Left Part: Follow Us Text */}
            <div className="flex-1">
              <span className="text-white text-lg font-semibold">
                Follow Us
              </span>
            </div>

            {/* Right Part: Icons */}
            <div className="flex space-x-2 text-white">
              <a href="#" className="text-white">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-white">
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>

          {/* Existing Card */}
          <div className="bg-gray-100 px-16 py-10 space-y-8 rounded-3xl flex flex-col items-center">
            <h2
              className="text-3xl font-semibold mb-4"
              style={{ fontFamily: "Anybody" }}
            >
              Let's get started
            </h2>
            <p
              className="text-xs mb-4 font-light"
              style={{ fontFamily: "Anybody" }}
            >
              We’d love to hear about your project
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-16 rounded-3xl"
              style={{ fontFamily: "Anonymous Pro" }}
            >
              Let's Talk <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <p className="text-gray-500 text-xs mt-6">Terms & Conditions</p>
          <p className="text-gray-500 text-xs mt-6">Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
