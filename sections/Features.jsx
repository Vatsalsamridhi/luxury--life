// sections/Features.jsx
'use client';
import React, { useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: "Premium Quality",
    desc: "Crafted with the finest materials to ensure luxury and durability.",
  },
  {
    title: "Timeless Design",
    desc: "Elegant aesthetics that never go out of style.",
  },
  {
    title: "Eco-Friendly",
    desc: "Sustainably sourced and responsibly manufactured.",
  },
  {
    title: "Customizable",
    desc: "Tailored options to suit your personal taste.",
  },
];

const Features = () => {
  const featureRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        scrollTrigger: {
          trigger: featureRef.current,
          start: "top 80%",
        },
        opacity: 0,
        y: 50,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.2,
      });
    }, featureRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={featureRef}
      className="bg-white text-black py-20 px-4 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Why Choose Us?
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, i) => (
          <div
            key={i}
            className="feature-card bg-gray-100 p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <CheckCircle className="text-green-600 mb-4" size={28} />
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
