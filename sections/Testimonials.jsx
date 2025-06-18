'use client';
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    setTestimonials([
      {
        name: "John Doe",
        quote: "Amazing service!",
        image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
      },
      {
        name: "Jane Smith",
        quote: "Loved the experience.",
        image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
      },
      {
        name: "Alex Lee",
        quote: "Top notch design.",
        image: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
      }
    ]);
  }, []);

  return (
    <section className="bg-white text-black py-16 px-6">
      <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div key={i} className="p-6 bg-gray-100 rounded-xl shadow-md text-center">
            <img
              src={t.image}
              alt={t.name}
              className="w-20 h-20 rounded-full mx-auto mb-4"
            />
            <p className="italic">"{t.quote}"</p>
            <h4 className="mt-4 font-semibold">{t.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
