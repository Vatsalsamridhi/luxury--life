// sections/CTA.jsx
'use client';
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CTA = () => {
  const ctaRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(ctaRef.current, {
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
        },
        opacity: 0,
        scale: 0.95,
        duration: 1,
        ease: "power2.out",
      });
    }, ctaRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-black text-white py-20 px-6">
      <div
        ref={ctaRef}
        className="max-w-3xl mx-auto text-center border border-gray-700 p-10 rounded-xl shadow-xl"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Redefine Your Space?
        </h2>
        <p className="text-lg text-gray-300 mb-8">
          Explore our premium collection and elevate your living experience with timeless luxury.
        </p>
        <button className="bg-white text-black px-6 py-3 font-semibold rounded-full hover:bg-gray-100 transition">
          Shop the Collection
        </button>
      </div>
    </section>
  );
};

export default CTA;
