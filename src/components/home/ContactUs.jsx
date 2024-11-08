import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="bg-white text-black p-6 md:py-20 md:px-12 lg:px-24"
      style={{ fontFamily: "Anybody" }}
    >
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-6 md:space-y-0 md:mb-0">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mb-24">
            We love crafting unforgettable digital experiences, brands, and
            websites with people like you.
          </h1>
          <div className="space-y-4">
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
        <div className="md:w-1/2 flex flex-col items-center md:items-start mx-auto md:mx-0 space-y-6 lg:ml-64">
          {/* Social Media Icons Card */}
          <div className="bg-black p-4 rounded-3xl flex justify-between items-center w-full max-w-xs lg:max-w-sm">
            <span className="text-white text-lg font-semibold">
              Follow Us
            </span>
            <div className="flex space-x-4 text-white">
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

          {/* Contact Card */}
          <div className="bg-gray-100 px-8 py-10 space-y-6 rounded-3xl flex flex-col items-center w-full max-w-xs lg:max-w-sm">
            <h2 className="text-3xl font-semibold" style={{ fontFamily: "Anybody" }}>
              Let's get started
            </h2>
            <p className="text-xs font-light" style={{ fontFamily: "Anybody" }}>
              We’d love to hear about your project
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-8 md:px-16 rounded-3xl"
              style={{ fontFamily: "Anonymous Pro" }}
            >
              Let's Talk <i className="fas fa-arrow-right"></i>
            </button>
          </div>
          <div className="text-gray-500 text-xs mt-6 flex space-x-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
