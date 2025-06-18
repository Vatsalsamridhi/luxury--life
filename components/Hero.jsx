'use client';
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-black mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Redefine Luxury Living
      </motion.h1>
      <motion.p 
        className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        Discover elegance and craftsmanship in every detail. Live the life you’ve always desired.
      </motion.p>
      <motion.a 
        href="#"
        className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Browse Collections
      </motion.a>
    </section>
  );
};

export default Hero;
