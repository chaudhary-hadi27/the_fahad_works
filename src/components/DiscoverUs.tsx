'use client';
import React from 'react';
import { motion } from 'framer-motion';

// Floating tech elements
const TechElements = () => {
  const elements = [
    { icon: '⚡', delay: 0, x: '10%', y: '20%' },
    { icon: '🚀', delay: 0.5, x: '85%', y: '10%' },
    { icon: '💡', delay: 1, x: '15%', y: '80%' },
    { icon: '🔧', delay: 1.5, x: '90%', y: '75%' },
    { icon: '⚙️', delay: 2, x: '70%', y: '40%' },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((el, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl opacity-10"
          style={{ left: el.x, top: el.y }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, 0],
          }}
          transition={{
            opacity: { delay: el.delay, duration: 1 },
            scale: { delay: el.delay, duration: 1 },
            y: { duration: 4, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
        >
          {el.icon}
        </motion.div>
      ))}
    </div>
  );
};

const DiscoverUs = () => {
  const features = [
    { title: "AI & Automation", desc: "Custom GenAI, LLMs, deep learning pipelines" },
    { title: "Web Development", desc: "React, Next.js, Tailwind CSS, robust APIs" },
    { title: "Data Solutions", desc: "End-to-end ETL, automation, live dashboards" },
    { title: "Creative Design", desc: "Brand identity, marketing collateral, graphics" },
    { title: "Digital Marketing", desc: "SEO, PPC, social media, email campaigns" },
    { title: "24/7 Support", desc: "Live chat, maintenance, monitoring" },
  ];

  return (
    <section id="discover" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="discover-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(156,163,175)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#discover-grid)" />
        </svg>
      </div>

      <TechElements />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
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
            Discover{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500">
              Us
            </span>
          </motion.h2>
          
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-white to-transparent mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                At <span className="text-white font-semibold">the_fahad_works</span>, we&apos;re driven by pure passion and technical mastery. Our team thrives on building powerful digital experiences that blend intelligence, performance, and creativity.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                Whether it&apos;s developing advanced <span className="text-white font-medium">AI & Automation systems</span>, crafting responsive <span className="text-white font-medium">Next.js web applications</span>, or designing captivating brand visuals — we aim for nothing less than excellence.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
              >
                Every project we take on is guided by innovation, dedication, and a strong focus on delivering measurable results. Let&apos;s build something exceptional — together.
              </motion.p>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="group relative bg-transparent border-2 border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider overflow-hidden"
                whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Learn More</span>
                <motion.div
                  className="absolute inset-0 bg-white"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Features Grid */}
          <motion.div
            className="grid gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group relative bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-4 sm:p-6 hover:border-gray-500 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                
                <div className="relative">
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.desc}
                  </p>
                </div>

                {/* Hover indicator */}
                <motion.div
                  className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverUs;