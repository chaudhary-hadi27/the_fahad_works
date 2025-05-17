'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialVariants = {
  enter: { x: 50, opacity: 0 },
  center: { x: 0, opacity: 1, transition: { duration: 0.5 } },
  exit: { x: -50, opacity: 0, transition: { duration: 0.5 } }
};

const testimonials = [
  {
    name: 'Jane Doe',
    text: 'They transformed our data pipeline efficiently.',
    img: '/client1.jpg'
  },
  {
    name: 'John Smith',
    text: 'Their AI solutions boosted our productivity by 30%.',
    img: '/client2.jpg'
  },
  {
    name: 'Emily Johnson',
    text: 'Professional web development services with great support.',
    img: '/client3.jpg'
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(i => (i + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-900 text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12"
        initial="enter"
        animate="center"
        transition={{ duration: 1 }}
      >
        Testimonials
      </motion.h2>
      <div className="max-w-3xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            custom={current}
            variants={testimonialVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="bg-gray-800 rounded-lg shadow-lg p-8 text-center"
          >
            <Image
              src={testimonials[current].img}
              alt={testimonials[current].name}
              width={96}
              height={96}
              className="mx-auto rounded-full mb-4"
            />
            <p className="italic text-gray-300 mb-4">
              &quot;{testimonials[current].text}&quot;
            </p>
            <h4 className="text-xl font-semibold">
              {testimonials[current].name}
            </h4>
          </motion.div>
        </AnimatePresence>
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              aria-label={`Slide ${i + 1}`}
              className={`w-3 h-3 rounded-full ${
                i === current ? 'bg-white' : 'bg-gray-600'
              }`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
