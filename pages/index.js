'use client';
import Head from "next/head";
import React from "react";
import Hero from "../sections/Hero";
import BestSellers from "../sections/BestSellers";
import FAQ from "../sections/FAQ";
import Testimonials from "../sections/Testimonials";
import CTA from "@/sections/CTA";
import Footer from "../sections/Footer";
import Features from "../sections/Features";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Luxury Living - Elegant Furniture & Decor</title>
        <meta name="description" content="Discover timeless luxury furniture and decor crafted with elegance and precision. Elevate your lifestyle today." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-black text-white">
        {/*  Move Navbar to the top */}
        <Navbar />
        <section id="hero"><Hero /></section>
        <section id="products"><BestSellers /></section>
        <section id="faq"><FAQ /></section>
        <section id="testimonials"><Testimonials /></section>
        <section id="contact"><CTA /></section>
        <Footer />
        <Features />
      </main>
    </>
  );
}
