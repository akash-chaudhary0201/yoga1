"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="relative bg-gradient-to-br from-[#f9fdfd] via-[#e6f6f5] to-[#f9fdfd] py-10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-playfair">
          Why Choose Us
        </h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center">

          {/* Card 1 */}
          <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8eW9nYXxlbnwwfHwwfHx8MA%3D%3D"
                alt="Expert Trainers"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Trainers</h3>
            <p className="text-gray-700 text-sm mb-4">
              Learn from certified yoga instructors with years of experience guiding beginners to advanced learners.
            </p>
            <button className="flex items-center text-[#21bdab] text-sm font-semibold gap-1 hover:gap-2 transition-all">
              Learn More <span>&gt;</span>
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHlvZ2F8ZW58MHx8MHx8fDA%3D"
                alt="Flexible Timing"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Flexible Timing</h3>
            <p className="text-gray-700 text-sm mb-4">
              Schedule your sessions anytime that suits your lifestyle, morning or evening.
            </p>
            <button className="flex items-center text-[#21bdab] text-sm font-semibold gap-1 hover:gap-2 transition-all">
              Learn More <span>&gt;</span>
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-full h-48 relative mb-4">
              <Image
                src="https://plus.unsplash.com/premium_photo-1672039297374-c6a39de94346?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHlvZ2F8ZW58MHx8MHx8fDA%3D"
                alt="Beginner Friendly"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Beginner Friendly</h3>
            <p className="text-gray-700 text-sm mb-4">
              Our sessions are designed to accommodate all levels, so even first-timers feel comfortable and confident.
            </p>
            <button className="flex items-center text-[#21bdab] text-sm font-semibold gap-1 hover:gap-2 transition-all">
              Learn More <span>&gt;</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
