'use client';
import React from "react";
import Image from "next/image";
import Button from "../components/button";

const About = () => {
  return (
      <div>
      {/* About Section */}
    <div className="mt-[10rem] bg-[#081b29]" id="About">
      {/* Heading */}
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl text-[#00abf0] mb-8">
        About <span className="text-white">Me!</span>
      </h2>

   
          <p className="text-base sm:text-lg leading-relaxed mb-6">
            As a passionate web developer, I specialize in crafting innovative and user-friendly digital experiences. With a strong foundation in Javascript and TypeScript, I'm skilled in HTML, CSS, Javascript, TypeScript, React, NextJS, and Figma. My goal is to leverage my technical expertise to create websites that not only look visually appealing but also provide seamless functionality and a positive user experience. I'm dedicated to staying up-to-date with the latest industry trends and technologies to deliver cutting-edge solutions.
          </p>
          <Button />
        </div>

        {/* About Image Section */}
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
        </div>
      );
};

export default About;
