"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#004d40] text-white pt-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">

        {/* Column 1: Yoga Academy + Social */}
        <div>
          <h2 className="text-2xl font-bold mb-4 font-playfair">Yoga Classes</h2>
          <p className="text-gray-300 mb-4">
            Join our yoga community and start your journey towards balance and wellness.
          </p>
          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-[#21bdab] transition-colors"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#21bdab] transition-colors"><FaInstagram /></a>
            <a href="#" className="hover:text-[#21bdab] transition-colors"><FaTwitter /></a>
          </div>
        </div>

        {/* Column 2: Support */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">FAQ</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Contact Us</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 3: Explore */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Explore</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Home</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">About</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Classes</a></li>
            <li><a href="#" className="hover:text-[#21bdab] transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Column 4: Get in Touch & Location */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-gray-300">Email: info@yogaacademy.com</p>
          <p className="text-gray-300 mb-4">Phone: +91 123 456 7890</p>
          <h3 className="text-xl font-semibold mb-4">Location</h3>
          <p className="text-gray-300">123 Yoga Street</p>
          <p className="text-gray-300">City, State, 123456</p>
          <p className="text-gray-300">India</p>
        </div>

      </div>

      {/* Horizontal Line */}
      <div className="border-t border-gray-600 mt-10"></div>

      {/* Footer Bottom */}
      <div className="text-center py-4 text-gray-300 text-sm">
        Made with <span className="text-red-500">♥</span> by Akash
      </div>
    </footer>
  );
};

export default Footer;
