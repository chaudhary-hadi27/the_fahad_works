'use client';
import React from 'react';
import { motion } from 'framer-motion';

const DiscoverUs = () => {
  return (
    <section id="discover" className="py-16 sm:py-24 bg-gray-900">
      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-[clamp(1.75rem,5vw,3rem)] font-bold text-white mb-6">
          Discover Us
        </h2>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
          At <strong>the_fahad_works</strong>, we’re driven by pure passion and technical mastery. Our team thrives on building powerful digital experiences that blend intelligence, performance, and creativity.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Whether it's developing advanced AI & Automation systems, crafting responsive Next.js web applications, or designing captivating brand visuals — we aim for nothing less than excellence.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6">
          We specialize in <strong>Custom GenAI, LLMs, seamless AI integrations, and deep learning pipelines</strong>, scaling intelligent systems that evolve with your business.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-4">
          Our web solutions are crafted with <strong>React, Tailwind CSS, and robust APIs</strong> to ensure fast, secure, and SEO-optimized performance.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6">
          Beyond tech, we offer solid support in <strong>data automation, creative design, digital marketing</strong>, and <strong>24/7 client support</strong> — empowering brands to stay ahead in a competitive digital landscape.
        </p>
        <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed mt-6">
          Every project we take on is guided by innovation, dedication, and a strong focus on delivering measurable results. Let's build something exceptional — together.
        </p>
      </motion.div>
    </section>
  );
};

export default DiscoverUs;