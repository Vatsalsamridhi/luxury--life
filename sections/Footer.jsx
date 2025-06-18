// sections/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-center space-y-4 md:space-y-0">
        <h3 className="text-xl font-bold">LUXE Living</h3>
        <ul className="flex flex-wrap justify-center space-x-6 text-sm">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
        <p className="text-xs">&copy; 2025 Luxe Living. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
