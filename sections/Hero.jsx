'use client';
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-item", {
        opacity: 0,
        y: 40,
        duration: 1.1,
        ease: "power3.out",
        stagger: 0.2,
      });

      gsap.to(".word", {
        scrollTrigger: {
          trigger: ".hero-paragraph",
          start: "top 85%",
        },
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
        stagger: 0.06,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="w-full min-h-[90vh] md:h-screen bg-black text-white flex flex-col items-center justify-center px-4 md:px-8"
    >
      <h1 className="hero-item text-4xl sm:text-5xl md:text-7xl font-extrabold text-center leading-tight">
        Elevate Your Lifestyle
      </h1>

      <p className="hero-paragraph mt-6 max-w-2xl text-center text-base md:text-lg text-gray-300 flex flex-wrap justify-center gap-x-1">
        {"Discover timeless elegance in every detail. Premium luxury designs crafted for those who seek the extraordinary."
          .split(" ")
          .map((word, i) => (
            <span key={i} className="word opacity-0 translate-y-4 inline-block">
              {word}
            </span>
          ))}
      </p>

      <button className="hero-item mt-10 px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
        Explore Now
      </button>
    </section>
  );
};

export default Hero;
