'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialVariants = {
  enter: { 
    x: 100, 
    opacity: 0,
    scale: 0.8,
    rotateY: 90
  },
  center: { 
    x: 0, 
    opacity: 1,
    scale: 1,
    rotateY: 0,
    transition: { 
      duration: 0.6,
      ease: "easeOut"
    }
  },
  exit: { 
    x: -100, 
    opacity: 0,
    scale: 0.8,
    rotateY: -90,
    transition: { 
      duration: 0.4,
      ease: "easeIn"
    }
  }
};

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CTO, TechStart Inc.',
    text: 'Their AI solutions revolutionized our data pipeline. We saw a 40% increase in processing efficiency within the first month.',
    img: '/client1.jpg',
    rating: 5,
    company: 'TechStart Inc.'
  },
  {
    name: 'Marcus Rodriguez',
    role: 'Lead Developer, DataFlow',
    text: 'Exceptional web development services. The team delivered a scalable Next.js application that exceeded our expectations.',
    img: '/client2.jpg',
    rating: 5,
    company: 'DataFlow Systems'
  },
  {
    name: 'Emily Watson',
    role: 'Marketing Director, GrowthCo',
    text: 'Professional team with deep expertise in digital marketing. Our conversion rates improved by 65% in just 3 months.',
    img: '/client3.jpg',
    rating: 5,
    company: 'GrowthCo Marketing'
  },
  {
    name: 'David Kim',
    role: 'Founder, InnovateLab',
    text: '24/7 support and maintenance services are outstanding. They keep our systems running smoothly with proactive monitoring.',
    img: '/client1.jpg',
    rating: 5,
    company: 'InnovateLab'
  }
];

// Stars rating component
const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center space-x-1 mb-4">
    {[...Array(5)].map((_, i) => (
      <motion.svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-600'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ delay: i * 0.1, duration: 0.3 }}
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </motion.svg>
    ))}
  </div>
);

// Background elements
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Floating quotes */}
    {[...Array(8)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute text-6xl text-white/5 font-serif"
        style={{
          left: `${10 + i * 12}%`,
          top: `${15 + (i % 3) * 30}%`,
        }}
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6 + i,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &ldquo;
      </motion.div>
    ))}
  </div>
);

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent(i => (i + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrent(i => (i + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrent(i => (i - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  return (
    <section id="testimonials" className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="testimonials-grid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="rgb(156,163,175)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#testimonials-grid)" />
        </svg>
      </div>

      <BackgroundElements />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Client{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500">
              Success
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Hear from our satisfied clients about their transformative experiences
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-96 sm:h-80 lg:h-96">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute inset-0 flex items-center justify-center"
              >
                <div className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-3xl shadow-2xl p-8 sm:p-12 w-full max-w-3xl">
                  {/* Quote icon */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl mb-6">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                      </svg>
                    </div>
                  </div>

                  <StarRating rating={testimonials[current].rating} />

                  {/* Testimonial text */}
                  <blockquote className="text-gray-300 text-lg sm:text-xl leading-relaxed text-center mb-8 italic">
                    &ldquo;{testimonials[current].text}&rdquo;
                  </blockquote>

                  {/* Client info */}
                  <div className="flex items-center justify-center space-x-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-full blur-sm opacity-50" />
                      <Image
                        src={testimonials[current].img}
                        alt={testimonials[current].name}
                        width={80}
                        height={80}
                        className="relative rounded-full border-2 border-gray-600"
                      />
                    </div>
                    <div className="text-center sm:text-left">
                      <h4 className="text-xl font-bold text-white">
                        {testimonials[current].name}
                      </h4>
                      <p className="text-orange-400 font-medium">
                        {testimonials[current].role}
                      </p>
                      <p className="text-gray-500 text-sm">
                        {testimonials[current].company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
            onClick={prevTestimonial}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-gray-800/80 hover:bg-gray-700 border border-gray-600 rounded-full text-white transition-all duration-300 hover:scale-110"
            onClick={nextTestimonial}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-12 space-x-3">
          {testimonials.map((_, i) => (
            <motion.button
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current 
                  ? 'bg-gradient-to-r from-orange-500 to-red-500 shadow-lg' 
                  : 'bg-gray-600 hover:bg-gray-500'
              }`}
              onClick={() => goToSlide(i)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Progress bar */}
        <div className="mt-8 max-w-md mx-auto">
          <div className="w-full bg-gray-700 rounded-full h-1">
            <motion.div
              className="bg-gradient-to-r from-orange-500 to-red-500 h-1 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((current + 1) / testimonials.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}