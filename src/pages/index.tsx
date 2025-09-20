'use client';
import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { motion, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';
import Nav from '../components/Nav';
import WhatsAppButton from '../components/WhatsAppButton';

const DiscoverUs   = dynamic(() => import('../components/DiscoverUs'),   { ssr: false });
const Services     = dynamic(() => import('../components/Services'),     { ssr: false });
const Experience   = dynamic(() => import('../components/Experience'),   { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const ContactUs    = dynamic(() => import('../components/ContactUs'),    { ssr: false });

// Animated grid background component
const AnimatedGrid = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="grid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(156, 163, 175, 0.1)"
              strokeWidth="1"
            />
          </pattern>
          <linearGradient id="fadeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(0,0,0,0.8)" />
            <stop offset="50%" stopColor="rgba(0,0,0,0.4)" />
            <stop offset="100%" stopColor="rgba(0,0,0,0.8)" />
          </linearGradient>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#fadeGrad)" />
      </svg>
    </div>
  );
};

// Floating particles component
const FloatingParticles = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number}>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-gray-400 rounded-full opacity-20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Tech icons component
const TechIcons = () => {
  const icons = [
    { d: "M12 2L2 7v10c0 5.55 3.84 9.739 9 9.99C16.16 26.739 20 22.55 20 17V7l-10-5z", label: "Security" },
    { d: "M20 6L9 17l-5-5", label: "Success" },
    { d: "M13 2L3 14h9l-1 8 10-12h-9l1-8z", label: "Performance" },
    { d: "M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z", label: "Analytics" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${20 + index * 20}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ delay: index * 0.5, duration: 1 }}
        >
          <svg
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-gray-400"
          >
            <path d={icon.d} />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export default function Home() {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" }
    });
  }, [controls]);

  return (
    <>
      <Head>
        <title>the_fahad_works</title>
        <meta name="description" content="Professional AI, Web, Data & Support Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <link rel="icon" href="/logo.png" />
        <meta property="og:title" content="the_fahad_works" />
        <meta property="og:description" content="Empowering Your Business with Professional AI, Web, Data, Design & Support Services" />
        <meta property="og:image" content="/logo.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      
      <Nav />
      
      <main className="pt-28 text-white bg-black overflow-x-hidden scroll-smooth">
        <section
          id="home"
          className="relative w-full overflow-hidden min-h-[100vh] flex items-center justify-center"
        >
          {/* Tech Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <AnimatedGrid />
          <FloatingParticles />
          <TechIcons />
          
          {/* Animated corner accents */}
          <motion.div
            className="absolute top-0 left-0 w-32 h-32"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-full h-full border-l-2 border-t-2 border-gray-600" />
          </motion.div>
          
          <motion.div
            className="absolute bottom-0 right-0 w-32 h-32"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            <div className="w-full h-full border-r-2 border-b-2 border-gray-600" />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="z-10 relative max-w-5xl text-center mx-auto px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            animate={controls}
          >
            {/* Animated title with tech styling */}
            <motion.div className="mb-8">
              <motion.h1 
                className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
              >
                <span className="inline-block">
                  Welcome to{' '}
                  <motion.span
                    className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-300 to-gray-500 inline-block"
                    animate={{
                      backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '200% 200%',
                    }}
                  >
                    the_fahad_works
                  </motion.span>
                </span>
              </motion.h1>
            </motion.div>

            {/* Subtitle with typewriter effect */}
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 font-light tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
            >
              Empower Your Business With{' '}
              <motion.span
                className="text-white font-semibold relative"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Tech Solutions
                <motion.span
                  className="absolute -right-1 top-0 w-0.5 h-full bg-white"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </motion.span>
            </motion.p>

            {/* Tech stats or features */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12 text-sm text-gray-400"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1 }}
            >
              {[
                { label: 'AI Solutions', value: '100+' },
                { label: 'Projects Delivered', value: '500+' },
                { label: 'Client Satisfaction', value: '99%' },
                { label: 'Support Available', value: '24/7' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2 + index * 0.2, duration: 0.5 }}
                >
                  <div className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to action */}
            <motion.div
              className="mt-12"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2.5, duration: 0.8 }}
            >
              <motion.button
                className="bg-transparent border-2 border-gray-600 text-white px-8 py-4 text-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wider"
                whileHover={{ scale: 1.05, borderColor: '#ffffff' }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Solutions
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <motion.div
              className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
              animate={{ borderColor: ['#4B5563', '#9CA3AF', '#4B5563'] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                className="w-1 h-3 bg-gray-400 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>
        </section>

        <DiscoverUs />
        <Services />
        <Experience />
        <Testimonials />
        <ContactUs />
        <WhatsAppButton />
      </main>
    </>
  );
}