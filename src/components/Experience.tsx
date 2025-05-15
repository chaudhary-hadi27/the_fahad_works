'use client';
import React from 'react';
import { motion } from 'framer-motion';

const experienceData = [
  { year: '2024', label: 'Founded' },
  { year: '2025', label: '10+ AI Models Deployed' },
  { year: '2025', label: '500K+ Lines Processed' },
  { year: '2025', label: '100+ Websites Launched' }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 sm:py-20 bg-gray-800">
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-white mb-8 sm:mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Our Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto relative px-4 sm:px-6">
        {/* Timeline Line for large screens */}
        <div className="hidden sm:block absolute left-1/2 top-0 h-full border-l-2 border-blue-400 transform -translate-x-1/2" />

        {/* Timeline Items */}
        <div className="flex flex-col gap-12">
          {experienceData.map((e, i) => {
            const isLeft = i % 2 === 0;

            return (
              <motion.div
                key={i}
                initial={{ x: isLeft ? -100 : 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="relative w-full"
              >
                {/* For small screens */}
                <div className="sm:hidden bg-gray-700 p-6 rounded-lg shadow-lg w-full text-center">
                  <h4 className="text-xl font-semibold text-white mb-1">{e.year}</h4>
                  <p className="text-gray-300 text-sm">{e.label}</p>
                </div>

                {/* For large screens (alternate layout) */}
                <div className={`hidden sm:flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
                  <div className="bg-gray-700 p-6 rounded-lg shadow-lg w-[80%] sm:w-[60%] lg:w-[40%]">
                    <h4 className="text-xl sm:text-2xl font-semibold text-white mb-1">{e.year}</h4>
                    <p className="text-gray-300 text-sm sm:text-base">{e.label}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
