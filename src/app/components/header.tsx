"use client";
import React, { useState } from 'react'
import Link from 'next/link'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-5 bg-transparent flex justify-between items-center z-50">
      <a href="#" className="text-xl text-white font-semibold">Qurat Hameed</a>
      <nav className="hidden md:flex">
        <a href="/" className="text-lg text-white font-medium ml-9 hover:text-[#00abf0] transition-all">Home</a>
        <a href="/about" className="text-lg text-white font-medium ml-9 hover:text-[#00abf0] transition-all">About</a>
        <a href="/services" className="text-lg text-white font-medium ml-9 hover:text-[#00abf0] transition-all">Services</a>
        <a href="/contact" className="text-lg text-white font-medium ml-9 hover:text-[#00abf0] transition-all">Contact</a>
      </nav>

      {/* Hamburger Icon (visible on mobile) */}
      <button onClick={toggleMenu} className="block md:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      <div className={`md:hidden ${menuOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-[#081b29] p-5`}>
        <a href="/" className="text-lg text-white font-medium block py-2 hover:text-[#00abf0] transition-all">Home</a>
        <a href="/about" className="text-lg text-white font-medium block py-2 hover:text-[#00abf0] transition-all">About</a>
        <a href="/services" className="text-lg text-white font-medium block py-2 hover:text-[#00abf0] transition-all">Services</a>
        <a href="/contact" className="text-lg text-white font-medium block py-2 hover:text-[#00abf0] transition-all">Contact</a>
      </div>
    </header>
  )
}

export default Header
