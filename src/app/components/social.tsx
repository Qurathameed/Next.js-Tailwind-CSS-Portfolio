import Link from "next/link";
import React from "react";

const SocialMedia = () => {
  return (
    <main>
      {/* Flex container for social media icons, with responsive behavior */}
      <div className="flex flex-wrap justify-center items-center space-x-4 md:space-x-6 lg:space-x-8">
        {/* LinkedIn Icon */}
        <Link
          href="https://linkedin.com/in/qurat-hameed-13b935301"
          target="_blank"
          className="social-media-icons bg-[#00abf0] border-2 border-[#081b29] rounded-full w-10 h-10 flex justify-center items-center text-[#081b29] text-2xl mx-4 my-6 sm:mx-6 sm:my-8 hover:bg-[#081b29] hover:text-[#00abf0] transition-all duration-200"
        >
          <i className="bx bxl-linkedin bx-flip-horizontal"></i>
        </Link>

        {/* GitHub Icon */}
        <Link
          href="https://github.com/Qurathameed"
          target="_blank"
          className="social-media-icons bg-[#00abf0] border-2 border-[#081b29] rounded-full w-10 h-10 flex justify-center items-center text-[#081b29] text-2xl mx-4 my-6 sm:mx-6 sm:my-8 hover:bg-[#081b29] hover:text-[#00abf0] transition-all duration-200"
        >
          <i className="bx bxl-github bx-burst bx-flip-horizontal"></i>
        </Link>

        {/* Instagram Icon */}
        <Link
          href="https://www.instagram.com/ainne_reisenart?igsh=Zm44cGxmMTM3MTl0"
          target="_blank"
          className="social-media-icons bg-[#00abf0] border-2 border-[#081b29] rounded-full w-10 h-10 flex justify-center items-center text-[#081b29] text-2xl mx-4 my-6 sm:mx-6 sm:my-8 hover:bg-[#081b29] hover:text-[#00abf0] transition-all duration-200"
        >
          <i className="bx bxl-instagram bx-burst-flip-horizontal"></i>
        </Link>
      </div>
    </main>
  );
};

export default SocialMedia;
