import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const ContactUs = () => {
  return (
    <div className="w-full">
      

      {/* Main Contact Section */}
      <div
        className="bg-black text-white p-6 md:py-16 md:px-12 lg:px-24"
        style={{ fontFamily: "Anybody" }}
      >
        <div className="flex flex-col md:flex-row justify-between space-y-12 md:space-y-0 md:space-x-16">
          {/* Left Section */}
          <div className="md:w-1/2 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Do it once. Do it right.
            </h2>

            <div className="space-y-2 text-sm">
              <p>New business:</p>
              <p className="font-medium">uxify@gmail.com</p>
            </div>

            {/* Newsletter */}
            <div className="space-y-4">
              <p className="text-sm">Sign up for our Newsletter (No Spam)</p>
              <div className="flex items-center border-b border-gray-500 py-2">
                <input
                  className="bg-transparent appearance-none border-none w-full text-white placeholder-gray-400 focus:outline-none text-sm"
                  type="email"
                  placeholder="Email"
                />
                <FiArrowUpRight className="text-white" />
              </div>

              {/* Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-sm flex items-center gap-2 uppercase tracking-wider">
                REQUEST A QUOTE
                <FiArrowUpRight />
              </button>
            </div>
          </div>

          {/* Right Section - now responsive for mobile */}
          <div className="md:w-1/2 w-full flex md:justify-end justify-center">
            <div className="w-full md:w-3/4 flex flex-col space-y-8 items-end md:items-end items-center">
              {/* Navigation & Social in a flex */}
              <div className="flex flex-col sm:flex-row sm:space-x-16 text-sm w-full sm:w-auto">
                {/* Navbar */}
                <ul className="space-y-3 text-left">
                  <li>
                    <a href="#" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Work
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Contact
                    </a>
                  </li>

                  {/* Location */}
                  <div className="text-sm text-left pt-6">
                    <p>Ghy, Assam</p>
                    <p>India</p>
                  </div>
                </ul>

                {/* Social Links */}
                <ul className="space-y-3 text-left pt-8 sm:pt-0">
                  <li>
                    <a
                      href="#"
                      className="hover:underline flex items-center gap-1"
                    >
                      Instagram <FiArrowUpRight />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:underline flex items-center gap-1"
                    >
                      LinkedIn <FiArrowUpRight />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Optional Footer */}
        <div className="mt-12 text-gray-500 text-xs text-center">
          ©2024 UXify. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
