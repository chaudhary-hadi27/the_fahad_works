'use client';
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { motion } from 'framer-motion';
import dynamic from 'next/dynamic';
import Nav from '../components/Nav';

import WhatsAppButton from '../components/WhatsAppButton';
import Footer from '../components/Footer';

const DiscoverUs   = dynamic(() => import('../components/DiscoverUs'),   { ssr: false });
const Services     = dynamic(() => import('../components/Services'),     { ssr: false });
const Experience   = dynamic(() => import('../components/Experience'),   { ssr: false });
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: false });
const ContactUs    = dynamic(() => import('../components/ContactUs'),    { ssr: false });

export default function Home() {
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
          className="relative w-full overflow-hidden h-[50vh] sm:h-[80vh] md:h-[90vh]"
        >
          <Image
            src="/b_g.webp"
            alt="Hero background"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_40%] sm:object-center"
            role="presentation"
          />

          <motion.div
            className="z-10 relative max-w-3xl text-center mx-auto flex flex-col items-center justify-center h-full"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight drop-shadow-lg">
              Welcome to <span className="text-white">the_fahad_works</span>
            </h1>
            <p className="text-lg md:text-xl drop-shadow-2xl filter brightness-300">
            Empower Your Business With Tech Solutions
            </p>
          </motion.div>
        </section>

        <DiscoverUs />
        <Services />
        <Experience />
        <Testimonials />
        <ContactUs />

        <WhatsAppButton />
        <Footer />
      </main>
    </>
  );
}
