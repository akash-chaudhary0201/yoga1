"use client";
import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-[#004d40] py-6 px-4 mt-10">
      <div className="max-w-5xl mx-auto bg-[#006457]/80 backdrop-blur-md rounded-2xl flex flex-col md:flex-row items-center justify-between p-6 gap-6 shadow-lg">
        
        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 font-playfair">
            Join Our Newsletter
          </h2>
          <p className="text-gray-200 text-sm">
            Keep up to date with everything happening at our yoga academy.
          </p>
        </div>

        {/* Input + Button */}
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto bg-[#004d40] px-4 py-2 rounded-lg">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-lg focus:outline-none w-full sm:w-64 text-white"
          />
          <button className="bg-[#21bdab] text-white px-6 py-3 rounded-sm font-semibold hover:bg-[#1aa798] transition">
            Submit
          </button>
        </div>

      </div>
    </section>
  );
};

export default Newsletter;
