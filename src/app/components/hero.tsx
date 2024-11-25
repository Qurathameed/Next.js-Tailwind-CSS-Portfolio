"use client";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <main>
        <section className="h-screen flex items-center px-5 sm:px-10 md:px-20">  
      <div className="max-w-xl sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
         {/* porfile picture  */}
         <div className="about-img">
          <Image
            src="/picture.jpg"
            alt="about profile picture"
            width={350}
            height={350}
            priority
            className="w-[30vw] sm:w-[25vw] h-[30vw] sm:h-[25vw] border-2 border-[#00abf0] rounded-full shadow-xl transition-all duration-300 hover:shadow-2xl cursor-pointer"
          />
        </div>
      
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
          Hi, I'm Qurat Hameed
        </h1>

        {/* Subheading */}
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#00abf0] mt-2">
          Frontend Developer
        </h3>

        {/* Paragraph Text */}
        <p className="text-base sm:text-lg md:text-xl my-4 sm:my-5">
          As a skilled web developer, I specialize in creating innovative, visually impactful websites that engage audiences and deliver measurable results. With a commitment to clean, efficient code and a sharp eye for design, I excel at transforming complex concepts into seamless, user-friendly digital experiences. Let's collaborate to turn your vision into reality.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4 sm:space-x-5 mb-6">
          <a
            href="#"
            className="text-lg sm:text-xl text-[#00abf0] hover:text-[#006d9f] transition-colors"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="#"
            className="text-lg sm:text-xl text-[#00abf0] hover:text-[#006d9f] transition-colors"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="#"
            className="text-lg sm:text-xl text-[#00abf0] hover:text-[#006d9f] transition-colors"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        {/* Button Box */}
        <div className="flex space-x-4 sm:space-x-6">
          <a
            href="#"
            className="inline-flex justify-center items-center w-32 sm:w-36 h-12 bg-[#00abf0] border-2 border-[#00abf0] rounded-lg text-lg text-[#081b29] font-semibold tracking-wider hover:text-white hover:bg-[#006d9f] transition-all"
          >
            Hire Me
          </a>
          <a
            href="#"
            className="inline-flex justify-center items-center w-32 sm:w-36 h-12 bg-transparent border-2 border-[#00abf0] rounded-lg text-lg text-[#00abf0] font-semibold tracking-wider hover:bg-[#00abf0] hover:text-white transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
    </main>
  );
};

export default Hero;
