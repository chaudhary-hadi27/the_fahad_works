'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 }
  })
};

interface ServiceItem {
  key: string;
  title: string;
  points: string[];
  img: string;
}

const coreServices: ServiceItem[] = [
  {
    key: 'ai',
    title: 'AI & Automation',
    points: [
      'Custom GenAI & LLMs',
      'Seamless AI Integrations',
      'Deep Learning Pipelines',
      'Monitoring & Scaling'
    ],
    img: '/AI.webp'
  },
  {
    key: 'web',
    title: 'Web Development',
    points: [
      'Next.js · React · SSR/SSG',
      'Tailwind-powered UI',
      'Robust API Layers',
      'Load & SEO Optimized'
    ],
    img: '/Webdev.jpeg'
  },
  {
    key: 'data',
    title: 'Data & Office Support',
    points: [
      'End-to-end ETL',
      'Advanced Excel Automation',
      'Live Dashboards',
      'Workflow Orchestration'
    ],
    img: '/Data.webp'
  }
];

const marketingServices: ServiceItem[] = [
  {
    key: 'digital',
    title: 'Digital Marketing',
    points: [
      'SEO & PPC Campaigns',
      'Social Media Strategy',
      'Email Drip Funnels',
      'KPI Analytics'
    ],
    img: '/D-M.jpg'
  },
  {
    key: 'creative',
    title: 'Creative Design',
    points: [
      'Brand Identity Kits',
      'Marketing Collateral',
      'Ad & Banner Graphics',
      'Social Content Packs'
    ],
    img: '/tools.jpeg'
  },
  {
    key: 'support',
    title: '24/7 Client Support',
    points: [
      'Live Chat & Tickets',
      'Code Maintenance',
      'Performance Monitoring',
      'Dedicated Account Manager'
    ],
    img: '/support.png'
  }
];

const ServiceCard = ({ svc, index }: { svc: ServiceItem; index: number }) => (
  <motion.div
    className="relative flex flex-col bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 overflow-hidden"
    custom={index}
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <div className="p-4 sm:p-6 flex-1 flex flex-col">
      <div className="flex items-center mb-3 sm:mb-4">
        <CheckCircle className="text-blue-400 w-6 h-6 sm:w-8 sm:h-8 mr-2 sm:mr-3" />
        <h3 className="text-lg sm:text-xl font-semibold text-white">{svc.title}</h3>
      </div>
      <ul className="space-y-1 sm:space-y-2 mb-4 sm:mb-6 flex-1 text-gray-300 text-xs sm:text-sm">
        {svc.points.map((pt, i) => (
          <li key={i} className="flex items-start">
            <span className="mt-1 mr-1 sm:mr-2 text-blue-400">•</span>
            <span>{pt}</span>
          </li>
        ))}
      </ul>
      <a
        href={`#${svc.key}`}
        className="self-start inline-block text-blue-300 hover:text-white font-medium text-xs sm:text-sm"
      >
        Learn More →
      </a>
    </div>
    <div className="h-32 sm:h-40 md:h-48 w-full relative">
      <Image
        src={svc.img}
        alt={svc.title}
        fill
        className="object-cover opacity-50"
        loading="lazy"
      />
    </div>
  </motion.div>
);

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-bold text-white mb-3 sm:mb-4">
          Our Services
        </h2>
        <p className="text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
          From cutting-edge AI to full-stack web development and marketing, we’ve got the expertise to drive your business forward.
        </p>

        {/* Core Services */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-12 sm:mb-16">
          {coreServices.map((svc, i) => (
            <ServiceCard key={svc.key} svc={svc} index={i} />
          ))}
        </div>

        {/* Marketing & Support */}
        <div className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {marketingServices.map((svc, i) => (
            <ServiceCard key={svc.key} svc={svc} index={i + coreServices.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
