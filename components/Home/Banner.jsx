"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative w-full h-[300px] md:h-[400px] lg:h-[400px] flex items-center justify-center">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1593810451137-5dc55105dace?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fHlvZ2F8ZW58MHx8MHx8fDA%3D"
        alt="Yoga Banner"
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 font-playfair">
          Ready to begin your yoga journey?
        </h2>
        <p className="text-white text-md md:text-lg mb-6">
          Take the first step towards a healthier, calmer, and stronger you. Join our yoga community today and feel the difference.
        </p>
        <button className="bg-[#21bdab] text-white px-8 py-3 rounded-sm text-lg hover:opacity-90 transition">
          Book Your Free Class
        </button>
      </div>
    </section>
  );
}
