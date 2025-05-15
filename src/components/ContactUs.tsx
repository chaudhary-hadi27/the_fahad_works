'use client';
import React from 'react';

const ContactUs = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="max-w-3xl mx-auto px-4 flex flex-col items-center text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Get in Touch
        </h2>
        <p className="mb-8 text-base md:text-lg text-gray-300">
          Whether you need AI, marketing, data support, or full consulting, our team covers it all—reach out and let’s talk!
        </p>

        {/* Contact Box for emails */}
        <div className="space-y-4">
          {/* Email 1 */}
          <div className="inline-block backdrop-blur-md bg-white/10 border border-white/10 text-white px-8 py-6 rounded-2xl shadow-xl">
            <a
              href="mailto:info1@thefahadworks.com"
              className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 px-6 py-3 rounded-full transition-transform transform hover:scale-105 inline-block"
            >
              Mail-to: M.Fahad
            </a>
          </div>

          {/* Email 2 */}
          <div className="inline-block backdrop-blur-md bg-white/10 border border-white/10 text-white px-8 py-6 rounded-2xl shadow-xl">
            <a
              href="mailto:chaudharyhadi27@gmail.coom"
              className="text-lg md:text-xl font-medium bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 px-6 py-3 rounded-full transition-transform transform hover:scale-105 inline-block"
            >
              Mail-to: Ch Hadi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
