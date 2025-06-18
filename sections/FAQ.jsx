'use client';
import React, { useState } from "react";

const faqs = [
  {
    question: "What makes our luxury products unique?",
    answer: "Each product is crafted with premium materials, precision, and attention to timeless design."
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship globally with tracked and insured delivery partners."
  },
  {
    question: "Can I customize a product before ordering?",
    answer: "Absolutely. We offer personalized customization options on most items."
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
      <div className="max-w-2xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left flex justify-between items-center text-lg font-medium"
            >
              {faq.question}
              <span>{openIndex === index ? "−" : "+"}</span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openIndex === index ? "max-h-40 mt-2 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
