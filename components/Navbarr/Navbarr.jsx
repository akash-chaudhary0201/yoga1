"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbarr = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#e6f6f5] px-6 py-4 relative">
      <div className="flex items-center justify-between">
        {/* Left: Hamburger + Logo */}
        <div className="flex items-center gap-3">
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <h1 className="text-xl font-bold">SPYA</h1>
        </div>

        {/* Center: Nav Links */}
        <ul className="hidden md:flex gap-10 font-medium text-gray-500 absolute left-1/2 transform -translate-x-1/2">
          <li className="cursor-pointer hover:text-[#21bdab]">Home</li>
          <li className="cursor-pointer hover:text-[#21bdab]">About</li>
          <li className="cursor-pointer hover:text-[#21bdab]">Services</li>
        </ul>

        {/* Right: Button (desktop only) */}
        <div className="hidden md:block">
          <button className="bg-[#21bdab] text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
            Book Your First Class
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4">
          <ul className="flex flex-col gap-4 font-medium bg-white p-4 rounded-lg shadow-lg">
            <li className="cursor-pointer hover:text-[#21bdab]">Home</li>
            <li className="cursor-pointer hover:text-[#21bdab]">About</li>
            <li className="cursor-pointer hover:text-[#21bdab]">Services</li>
          </ul>

          {/* Mobile button */}
          <div className="mt-4">
            <button className="w-full bg-[#21bdab] text-white px-4 py-3 rounded-lg hover:opacity-90 transition">
              Book Your First Class
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbarr;
