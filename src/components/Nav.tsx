'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';

const NAV_ITEMS = ['Home', 'Discover', 'Services', 'Experience', 'Testimonials', 'Contact'];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const background = useTransform(scrollY, [0, 50], ['transparent', 'rgba(17,24,39,0.95)']);
  const padding    = useTransform(scrollY, [0, 50], ['1rem', '0.5rem']);
  // <-- Tell TS this is a div
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    setTimeout(() => {
      const container = menuRef.current;
      if (!container) return;
      const firstFocusable = container.querySelector<HTMLAnchorElement | HTMLButtonElement>('a, button');
      firstFocusable?.focus();
    }, 0);
  }, [menuOpen]);

  return (
    <nav
      role="navigation"
      aria-label="Main site navigation"
      className="fixed top-0 left-0 w-full z-50 pointer-events-none"
    >
      {!menuOpen ? (
        <motion.div
          className="pointer-events-auto max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 border-4 border-white/70 rounded-full"
          style={{ backgroundColor: background, padding }}
        >
          <div className="bg-white rounded-full p-2">
            <Image src="/logo.png" alt="Logo" width={56} height={56} priority aria-hidden />
          </div>
          <ul className="hidden md:flex space-x-6 text-white font-medium">
            {NAV_ITEMS.map(item => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="px-6 py-4 rounded-full hover:bg-blue-400 hover:text-white transition text-sm"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="md:hidden text-white p-2 focus:outline-none"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <span className="text-2xl">&#9776;</span>
          </button>
        </motion.div>
      ) : (
        <motion.div
          ref={menuRef}
          className="fixed inset-0 flex flex-col items-center justify-center space-y-6 pointer-events-auto"
          style={{ backgroundColor: background }}
        >
          <button
            className="absolute top-5 right-5 text-white text-4xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            &times;
          </button>
          {NAV_ITEMS.map(item => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-white font-medium text-2xl hover:underline whitespace-nowrap"
            >
              {item}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
