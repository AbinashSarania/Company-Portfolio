import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar({ scrollToContact, theme }) {
  const [isOpen, setIsOpen] = useState(false);

  const isLight = theme === "light";
  const isTransparent = theme === "transparent";
  const isWhiteText = theme === "whiteText";

  const navClasses = `
    p-4 
    ${isTransparent ? "bg-transparent" : isLight ? "bg-white" : "bg-black"} 
    w-full fixed top-0 left-0 z-50
    ${isWhiteText ? "bg-transparent" : ""}
  `;

  const textColor = isWhiteText ? "white" : isLight ? "black" : "white";

  return (
    <nav className={navClasses}>
      <div className="container mx-auto flex items-center justify-between">
        {/* Brand */}
        <Link to="/" className={`text-md font-bold text-${textColor}`}>
          uxify
        </Link>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden text-${textColor}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop Menu */}
        <ul className={`hidden md:flex space-x-6 font-small text-${textColor}`}>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">Work</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>

        {/* CTA */}
        <button
          onClick={scrollToContact}
          className={`hidden md:block px-4 py-2 rounded font-semibold border border-${textColor} text-${textColor} hover:bg-gray-800 hover:text-white`}
        >
          Say Hi!
        </button>
      </div>

      {/* Mobile Dropdown Menu - Always black background with white text */}
      {isOpen && (
        <ul className={`md:hidden mt-4 space-y-4 text-center bg-black text-white p-4 rounded border-2`}>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">Work</li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Services</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact</li>
          <li>
            <button
              onClick={() => {
                scrollToContact && scrollToContact();
                setIsOpen(false);
              }}
              className="mt-2 px-4 py-2 w-full rounded font-semibold border border-white text-white hover:bg-gray-800 hover:text-white"
            >
              Say Hi!
            </button>
          </li>
        </ul>
      )}
    </nav>
  );
}
