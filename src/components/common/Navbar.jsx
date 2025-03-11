// src/components/common/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Import icons for menu toggle

export default function Navbar({ scrollToContact }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 bg-black shadow-md text-white">
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand name */}
        <div className="text-md font-bold">uxify</div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Menu (Hidden on small screens, visible on md+) */}
        <ul className="hidden md:flex space-x-6 text-white font-small">
          <li className="hover:text-gray-100 cursor-pointer">Home</li>
          <li className="hover:text-gray-100 cursor-pointer">Work</li>
          <li className="hover:text-gray-100 cursor-pointer">About</li>
          <li className="hover:text-gray-100 cursor-pointer">Services</li>
          <li className="hover:text-gray-100 cursor-pointer">Contact</li>
        </ul>

        {/* Call-to-action button (Hidden on small screens) */}
        <button
          onClick={scrollToContact}
          className="hidden md:block px-4 py-2 rounded font-semibold border border-white text-white hover:bg-gray-800"
        >
          Say Hi!
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 space-y-4 text-center">
          <li className="hover:text-gray-100 cursor-pointer">Home</li>
          <li className="hover:text-gray-100 cursor-pointer">Work</li>
          <li className="hover:text-gray-100 cursor-pointer">About</li>
          <li className="hover:text-gray-100 cursor-pointer">Services</li>
          <li className="hover:text-gray-100 cursor-pointer">Contact</li>
          <li>
            <button
              onClick={scrollToContact}
              className="mt-2 px-4 py-2 w-full rounded font-semibold border border-white text-white hover:bg-gray-800"
            >
              Say Hi!
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
