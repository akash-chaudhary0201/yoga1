"use client";
import Footer from "@/components/Footer/Footer";
import Banner from "@/components/Home/Banner";
import Newsletter from "@/components/Home/Newsletter";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="py-2 relative bg-gradient-to-br from-[#e6f6f5] via-[#f9fdfd] to-[#e6f6f5] min-h-[calc(100vh-72px)] flex items-center overflow-hidden">
        {/* Background Glows */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-100px] left-[-100px] w-72 h-72 bg-[#21bdab] rounded-full opacity-20 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-[-150px] right-[-150px] w-96 h-96 bg-[#21bdab] rounded-full opacity-10 blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#21bdab] rounded-full opacity-5 blur-3xl animate-pulse"></div>
        </div>

        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
          {/* Left Content - Glass Card */}
          <div className="flex-1 max-w-xl text-center md:text-left bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 shadow-lg">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 leading-tight">
              Find Your Inner Peace <br /> with Yoga
            </h1>
            <p className="mt-6 font-poppins text-gray-700 text-lg leading-relaxed">
              At{" "}
              <span className="font-semibold text-[#21bdab]">
                Sakshi Power Yoga Academy
              </span>
              , we believe yoga is more than just exercise—it’s a way to
              reconnect with your body, mind, and soul. Whether you are a
              beginner taking your first step on the mat or an experienced
              practitioner, our space is designed to guide you toward balance,
              strength, and inner peace.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-[#21bdab] text-white px-8 py-3 text-lg rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300">
                Get Started
              </button>
              <button className="border-2 border-[#21bdab] text-[#21bdab] px-8 py-3 text-lg rounded-lg hover:bg-[#21bdab] hover:text-white hover:scale-105 transition-transform duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src="https://plus.unsplash.com/premium_photo-1661776042506-9154882ba689?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHlvZ2F8ZW58MHx8MHx8fDA%3D"
              alt="Yoga Pose"
              width={420}
              height={420}
              className="object-contain rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Banner />
      <Newsletter/>
      <Footer/>
    </>
  );
}
