'use client';
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  { id: 1, name: "Luxury Sofa", image: "/sofa.jpeg", price: "$1200" },
  { id: 2, name: "Elegant Chair", image: "/chair.jpeg", price: "$650" },
  { id: 3, name: "Premium Lamp", image: "/lamp.jpeg", price: "$300" },
  { id: 4, name: "Modern Table", image: "/table.jpeg", price: "$950" },
];


const BestSellers = () => {
  const sliderRef = useRef();

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <section className="py-16 px-4 bg-white text-black">
      <h2 className="text-3xl font-bold text-center mb-8">Best Selling Products</h2>

      <div className="relative">
        {/* Mobile/Tablet Buttons */}
        <div className="md:hidden absolute left-0 top-1/2 -translate-y-1/2 z-10">
          <button onClick={scrollLeft} className="bg-black text-white p-2 rounded-full">←</button>
        </div>
        <div className="md:hidden absolute right-0 top-1/2 -translate-y-1/2 z-10">
          <button onClick={scrollRight} className="bg-black text-white p-2 rounded-full">→</button>
        </div>

        {/* Scrollable Product List */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory md:justify-center"
        >
          {products.map((item) => (
            <div
              key={item.id}
              className="min-w-[250px] snap-center bg-gray-100 p-4 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
            >
              <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
              <h3 className="mt-4 text-lg font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
