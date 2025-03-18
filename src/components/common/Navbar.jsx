// src/components/common/Navbar.js
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";  // ✅ Import Link

export default function Navbar({ scrollToContact, theme }) {
  const [isOpen, setIsOpen] = useState(false);
  const isLight = theme === "light";

  return (
    <nav className={`p-4 ${isLight ? 'bg-white text-black' : 'bg-black text-white'} shadow-md`}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className="text-md font-bold">uxify</Link>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden ${isLight ? 'text-black' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 ${isLight ? 'text-black' : 'text-white'} font-small`}>
          <li className="hover:opacity-80 cursor-pointer">
            <Link to="/">Home</Link> {/* ✅ Home navigates to Home.jsx */}
          </li>
          <li className="hover:opacity-80 cursor-pointer">
            <Link to="/work">Work</Link> {/* Optional: link to Work */}
          </li>
          <li className="hover:opacity-80 cursor-pointer">About</li>
          <li className="hover:opacity-80 cursor-pointer">Services</li>
          <li className="hover:opacity-80 cursor-pointer">Contact</li>
        </ul>

        {/* CTA Button */}
        <button
          onClick={scrollToContact}
          className={`hidden md:block px-4 py-2 rounded font-semibold border ${isLight ? 'border-black text-black hover:bg-gray-100' : 'border-white text-white hover:bg-gray-800'}`}
        >
          Say Hi!
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className={`md:hidden mt-4 space-y-4 text-center ${isLight ? 'text-black' : 'text-white'}`}>
          <li className="hover:opacity-80 cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:opacity-80 cursor-pointer">
            <Link to="/works" onClick={() => setIsOpen(false)}>Work</Link>
          </li>
          <li className="hover:opacity-80 cursor-pointer">About</li>
          <li className="hover:opacity-80 cursor-pointer">Services</li>
          <li className="hover:opacity-80 cursor-pointer">Contact</li>
          <li>
            <button
              onClick={scrollToContact}
              className={`mt-2 px-4 py-2 w-full rounded font-semibold border ${isLight ? 'border-black text-black hover:bg-gray-100' : 'border-white text-white hover:bg-gray-800'}`}
            >
              Say Hi!
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
