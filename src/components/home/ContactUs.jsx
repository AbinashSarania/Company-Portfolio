import React from "react";
import { FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      className="bg-black text-white p-6 md:py-16 md:px-12 lg:px-24"
      style={{ fontFamily: "Anybody" }}>
      <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="md:w-1/2 space-y-4 md:space-y-6">
          <h1 className="text-base md:text-lg font-medium mb-4 md:mb-12">
            We love crafting unforgettable digital experiences, brands, and
            websites with people like you.
          </h1>
          <div className="space-y-2">
            <h2 className="text-xs font-light">Get in touch</h2>
            <p className="text-xs md:text-sm">+91 9954 325690</p>
            <p className="text-xs md:text-sm">Sameshm445@gmail.com</p>
            <p className="text-xs md:text-sm">
              Rolling mill, Near Cake Heaven, Bongaigaon, Assam
            </p>
          </div>
          <p className="text-gray-500 text-[10px] mt-6">
            ©2024 Awesome Inc. All rights reserved.
          </p>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 flex flex-col items-center md:items-start mx-auto md:mx-0 space-y-4 lg:ml-52">
          {/* Social Media Icons Card */}
          <div className="bg-gray-900 p-3 rounded-2xl flex justify-between items-center w-full max-w-xs lg:max-w-sm">
            <span className="text-white text-sm font-medium">Follow Us</span>
            <div className="flex space-x-3 text-white">
              <a href="#" className="text-white">
                <FaTwitter size={18} />
              </a>
              <a href="#" className="text-white">
                <FaInstagram size={18} />
              </a>
              <a href="#" className="text-white">
                <FaEnvelope size={18} />
              </a>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gray-800 px-6 py-8 space-y-4 rounded-2xl flex flex-col items-center w-full max-w-xs lg:max-w-sm">
            <h2
              className="text-xl font-semibold"
              style={{ fontFamily: "Anybody" }}>
              Let's get started
            </h2>
            <p
              className="text-[11px] font-light"
              style={{ fontFamily: "Anybody" }}>
              We’d love to hear about your project
            </p>
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 md:px-12 rounded-2xl text-sm"
              style={{ fontFamily: "Anonymous Pro" }}>
              Let's Talk <i className="fas fa-arrow-right"></i>
            </button>
          </div>

          {/* Footer Links */}
          <div className="text-gray-500 text-[10px] mt-4 flex space-x-3">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
