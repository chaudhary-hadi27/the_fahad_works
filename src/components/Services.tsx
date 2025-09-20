'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.6, 
      delay: i * 0.15,
      ease: "easeOut"
    }
  })
};

interface ServiceItem {
  key: string;
  title: string;
  subtitle: string;
  points: string[];
  img: string;
  icon: string;
}

const coreServices: ServiceItem[] = [
  {
    key: 'ai',
    title: 'AI & Automation',
    subtitle: 'Intelligent Solutions',
    points: [
      'Custom GenAI & LLMs',
      'Seamless AI Integrations',
      'Deep Learning Pipelines',
      'Monitoring & Scaling'
    ],
    img: '/AI.webp',
    icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    key: 'web',
    title: 'Web Development',
    subtitle: 'Modern Applications',
    points: [
      'Next.js · React · SSR/SSG',
      'Tailwind-powered UI',
      'Robust API Layers',
      'Load & SEO Optimized'
    ],
    img: '/Webdev.jpeg',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4'
  },
  {
    key: 'data',
    title: 'Data & Office Support',
    subtitle: 'Smart Analytics',
    points: [
      'End-to-end ETL',
      'Advanced Excel Automation',
      'Live Dashboards',
      'Workflow Orchestration'
    ],
    img: '/Data.webp',
    icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  }
];

const marketingServices: ServiceItem[] = [
  {
    key: 'digital',
    title: 'Digital Marketing',
    subtitle: 'Growth Strategy',
    points: [
      'SEO & PPC Campaigns',
      'Social Media Strategy',
      'Email Drip Funnels',
      'KPI Analytics'
    ],
    img: '/D-M.jpg',
    icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    key: 'creative',
    title: 'Creative Design',
    subtitle: 'Brand Identity',
    points: [
      'Brand Identity Kits',
      'Marketing Collateral',
      'Ad & Banner Graphics',
      'Social Content Packs'
    ],
    img: '/tools.jpeg',
    icon: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3H5a2 2 0 00-2 2v12a4 4 0 004 4h2a2 2 0 002-2V5a2 2 0 00-2-2H7z'
  },
  {
    key: 'support',
    title: '24/7 Client Support',
    subtitle: 'Always Available',
    points: [
      'Live Chat & Tickets',
      'Code Maintenance',
      'Performance Monitoring',
      'Dedicated Account Manager'
    ],
    img: '/support.png',
    icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z'
  }
];

const ServiceCard = ({ svc, index }: { svc: ServiceItem; index: number }) => (
  <motion.div
    className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    whileHover={{ 
      y: -10,
      transition: { duration: 0.3 }
    }}
  >
    {/* Hover overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    {/* Header with icon */}
    <div className="relative p-6 border-b border-gray-700/50">
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl border border-gray-600 mr-4">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={svc.icon} />
          </svg>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
            {svc.title}
          </h3>
          <p className="text-sm text-gray-400 font-medium">
            {svc.subtitle}
          </p>
        </div>
      </div>
      
      {/* Features list */}
      <ul className="space-y-3">
        {svc.points.map((point, i) => (
          <motion.li
            key={i}
            className="flex items-start text-gray-300 text-sm"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <span className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full mt-2 mr-3" />
            <span>{point}</span>
          </motion.li>
        ))}
      </ul>
    </div>

    {/* Image section */}
    <div className="relative h-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
      <Image
        src={svc.img}
        alt={svc.title}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
        loading="lazy"
      />
      
      {/* CTA Button overlay */}
      <div className="absolute bottom-4 left-4 right-4 z-20">
        <motion.a
          href={`#${svc.key}`}
          className="inline-flex items-center text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.a>
      </div>
    </div>
  </motion.div>
);

// Animated background elements
const BackgroundElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Animated circles */}
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-white/10"
        style={{
          width: `${100 + i * 50}px`,
          height: `${100 + i * 50}px`,
          left: `${20 + i * 15}%`,
          top: `${10 + i * 20}%`,
        }}
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
          scale: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" }
        }}
      />
    ))}
  </div>
);

export default function Services() {
  return (
    <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgb(156,163,175)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <BackgroundElements />

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600">
              Services
            </span>
          </motion.h2>
          
          <motion.p
            className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From cutting-edge AI to full-stack web development and marketing, we&apos;ve got the expertise to drive your business forward.
          </motion.p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mt-8"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Core Services */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            viewport={{ once: true }}
          >
            Core Technologies
          </motion.h3>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {coreServices.map((svc, i) => (
              <ServiceCard key={svc.key} svc={svc} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Marketing & Support Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          viewport={{ once: true }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-center text-white mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            viewport={{ once: true }}
          >
            Marketing & Support
          </motion.h3>
          
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {marketingServices.map((svc, i) => (
              <ServiceCard key={svc.key} svc={svc} index={i + coreServices.length} />
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}