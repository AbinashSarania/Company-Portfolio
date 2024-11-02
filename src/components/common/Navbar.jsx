import React from "react";

// Navbar component
export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Brand name */}
      <div className="text-lg font-bold">Design Lab</div>

      {/* Call-to-action button */}
      <button className="px-4 py-2 rounded font-semibold border border-gray-500 text-gray-500 hover:bg-gray-100">
        Say Hi!
      </button>
    </nav>
  );
}
