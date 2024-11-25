import React from "react";

const Button = () => {
  return (
    <main>
      <a
        href="/services"
        className="mt-5 py-4 px-11 bg-[#00abf0] text-[#081b29] rounded-full shadow-lg text-xl font-semibold tracking-wider cursor-pointer transition-all duration-300 
          hover:bg-[#006d9f] 
          sm:py-3 sm:px-8 sm:text-lg 
          md:py-4 md:px-10 md:text-xl 
          lg:py-5 lg:px-12 lg:text-2xl"
      >
        Read More
      </a>
    </main>
  );
};

export default Button;
