import React from "react";
import Button from "@/app/components/button";

const Services = () => {
  return (
    <div>
      <section className="services py-16 bg-[#191919]" id="services">
        {/* Heading */}
        <h2 className="text-4xl sm:text-6xl font-bold text-center mb-8">
          My <span className="text-[#00abf0]">Services</span>
        </h2>

        {/* Services Container */}
        <div className="services-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {/* Service Box 1: Web Development */}
          <div className="services-box bg-[#2f2f2f] p-8 rounded-2xl text-center border-4 border-[#191919] transition-all duration-300 hover:border-[#00abf0] hover:scale-105">
            <i className="bx bx-code text-6xl text-[#00abf0] mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
            <p className="text-lg mb-6">
              As a web developer, I specialize in crafting visually appealing and functional websites.
            </p>
            <Button />
          </div>

          {/* Service Box 2: UI/UX Design */}
          <div className="services-box bg-[#2f2f2f] p-8 rounded-2xl text-center border-4 border-[#191919] transition-all duration-300 hover:border-[#00abf0] hover:scale-105">
            <i className="bx bx-palette text-6xl text-[#00abf0] mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">UI/UX Design</h3>
            <p className="text-lg mb-6">
              As a web developer, I can also contribute to UI/UX design. I've a strong understanding of UI principles.
            </p>
            <Button />
          </div>

          {/* Service Box 3: App Development */}
          <div className="services-box bg-[#2f2f2f] p-8 rounded-2xl text-center border-4 border-[#191919] transition-all duration-300 hover:border-[#00abf0] hover:scale-105">
            <i className="bx bxl-android text-6xl text-[#00abf0] mb-4"></i>
            <h3 className="text-2xl font-semibold mb-4">App Development</h3>
            <p className="text-lg mb-6">
              As a web developer, I can help you create engaging and user-friendly mobile applications.
            </p>
            <Button />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
