'use client';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const experienceData = [
  { 
    year: '2024', 
    label: 'Founded',
    description: 'Started our journey with a vision to revolutionize tech solutions',
    icon: 'M19 14l-7 7m0 0l-7-7m7 7V3'
  },
  { 
    year: '2025', 
    label: '10+ AI Models Deployed',
    description: 'Successfully integrated advanced AI systems for enterprise clients',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  { 
    year: '500K+', 
    label: 'Lines of Code Processed',
    description: 'Massive data processing capabilities with optimized performance',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  { 
    year: '100+', 
    label: 'Websites Launched',
    description: 'Crafted stunning web experiences across various industries',
    icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9'
  }
];

// Floating numbers animation
const FloatingNumbers = () => {
  const numbers = ['01', '02', '03', '04', '05'];
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {numbers.map((num, i) => (
        <motion.div
          key={i}
          className="absolute text-6xl font-bold text-white/5"
          style={{
            left: `${15 + i * 18}%`,
            top: `${20 + (i % 2) * 40}%`,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {num}
        </motion.div>
      ))}
    </div>
  );
};

interface ExperienceData {
  year: string;
  label: string;
  description: string;
  icon: string;
}

const ExperienceCard = ({ data, index }: { data: ExperienceData; index: number }) => (
  <motion.div
    className="group relative"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    {/* Timeline connector for desktop */}
    <div className="hidden lg:block absolute top-1/2 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500/20 to-transparent" />
    
    <motion.div
      className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-gray-500 transition-all duration-500 group-hover:shadow-2xl"
      whileHover={{ scale: 1.02, y: -5 }}
    >
      {/* Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={data.icon} />
        </svg>
      </div>

      {/* Content */}
      <div className="text-center">
        <motion.h3
          className="text-3xl sm:text-4xl font-bold text-white mb-2"
          initial={{ scale: 0.8 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {data.year}
        </motion.h3>
        
        <h4 className="text-lg sm:text-xl font-semibold text-blue-400 mb-3">
          {data.label}
        </h4>
        
        <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
          {data.description}
        </p>
      </div>

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    </motion.div>
  </motion.div>
);

const Experience = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-900 via-black to-gray-900 overflow-hidden"
    >
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="experience-grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgb(156,163,175)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#experience-grid)" />
        </svg>
      </div>

      <FloatingNumbers />

      {/* Parallax elements */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/20 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 10}%`,
            }}
          />
        ))}
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Our{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600">
              Journey
            </span>
          </motion.h2>

          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From startup to success - tracking our milestones and achievements in the tech industry
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Experience Cards */}
        <div className="grid gap-8 sm:gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {experienceData.map((data, index) => (
            <ExperienceCard key={index} data={data} index={index} />
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-2xl px-8 py-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-gray-300 text-sm">Active Projects</span>
            </div>
            <div className="w-px h-6 bg-gray-700" />
            <div className="text-white font-semibold">
              Growing Every Day
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;