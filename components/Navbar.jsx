'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <div className="text-xl font-bold">Luxury</div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <a href="#hero" className="hover:text-yellow-500">Home</a>
        <a href="#products" className="hover:text-yellow-500">Products</a>
        <a href="#faq" className="hover:text-yellow-500">FAQ</a>
        <a href="#testimonials" className="hover:text-yellow-500">Testimonials</a>
        <a href="#contact" className="hover:text-yellow-500">Contact</a>
      </div>

      {/* Mobile Toggle */}
      <button
        className="md:hidden focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center md:hidden">
          <a href="#hero" className="py-2 hover:text-yellow-500">Home</a>
          <a href="#products" className="py-2 hover:text-yellow-500">Products</a>
          <a href="#faq" className="py-2 hover:text-yellow-500">FAQ</a>
          <a href="#testimonials" className="py-2 hover:text-yellow-500">Testimonials</a>
          <a href="#contact" className="py-2 hover:text-yellow-500">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
