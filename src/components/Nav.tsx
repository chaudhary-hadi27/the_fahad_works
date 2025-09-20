'use client';

import React, { useState, useRef, useEffect, useCallback, type FC, JSX } from 'react';
import Image from 'next/image';
import {
  useScroll,
  useTransform,
  motion,
  AnimatePresence,
  MotionValue,
} from 'framer-motion';

interface NavItem {
  label: string;
  href: string;
  icon?: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
  { label: 'Discover', href: '#discover', icon: 'M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' },
  { label: 'Services', href: '#services', icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z' },
  { label: 'Experience', href: '#experience', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { label: 'Testimonials', href: '#testimonials', icon: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' },
  { label: 'Contact', href: '#contact', icon: 'M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
];

// Enhanced scroll hook with better performance
function useNavScrollStyles(): {
  backgroundColor: MotionValue<string>;
  backdropFilter: MotionValue<string>;
  borderColor: MotionValue<string>;
  scale: MotionValue<number>;
} {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 50], ['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)']);
  const backdropFilter = useTransform(scrollY, [0, 50], ['blur(0px)', 'blur(20px)']);
  const borderColor = useTransform(scrollY, [0, 50], ['rgba(107,114,128,0)', 'rgba(107,114,128,0.3)']);
  const scale = useTransform(scrollY, [0, 100], [1, 0.95]);

  return { backgroundColor, backdropFilter, borderColor, scale };
}

// Icon component for nav items
const NavIcon: FC<{ path: string; className?: string }> = ({ path, className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
  </svg>
);

// Tech-styled desktop navigation
const NavItems: FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
  <ul className="hidden lg:flex items-center space-x-1">
    {NAV_ITEMS.map(({ label, href, icon }, index) => (
      <motion.li
        key={label}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1, duration: 0.5 }}
      >
        <motion.a
          href={href}
          onClick={onLinkClick}
          className="group relative flex items-center space-x-2 text-gray-300 hover:text-white px-4 py-3 rounded-lg transition-all duration-300 text-sm font-medium uppercase tracking-wider"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
          <NavIcon path={icon || ''} className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity" />
          <span className="relative z-10">{label}</span>
          
          {/* Hover underline effect */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-white to-transparent"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        </motion.a>
      </motion.li>
    ))}
  </ul>
);

// Tablet navigation with horizontal scroll
const TabletNav: FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
  <div className="hidden md:flex lg:hidden overflow-x-auto scrollbar-hide ml-4 mr-4 flex-1">
    <div className="flex space-x-2 min-w-max px-2">
      {NAV_ITEMS.map(({ label, href, icon }) => (
        <motion.a
          key={label}
          href={href}
          onClick={onLinkClick}
          className="flex items-center space-x-2 text-gray-300 hover:text-white px-3 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 text-sm whitespace-nowrap"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <NavIcon path={icon || ''} className="w-3 h-3" />
          <span>{label}</span>
        </motion.a>
      ))}
    </div>
  </div>
);

// Enhanced mobile menu with tech styling
const MobileMenu: FC<{ menuRef: React.Ref<HTMLDivElement>; onClose: () => void }> = ({
  menuRef,
  onClose,
}) => (
  <AnimatePresence>
    <motion.div
      id="mobile-menu"
      ref={menuRef}
      tabIndex={-1}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Grid background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mobile-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgb(107,114,128)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mobile-grid)" />
        </svg>
      </div>

      <div className="relative flex flex-col h-full">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-800">
          <motion.h2
            className="text-xl font-bold text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            Navigation
          </motion.h2>
          <motion.button
            className="text-white p-3 rounded-full hover:bg-white/10 transition-all duration-200"
            onClick={onClose}
            aria-label="Close menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ delay: 0.1 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 flex flex-col justify-center px-6 space-y-2">
          {NAV_ITEMS.map(({ label, href, icon }, index) => (
            <motion.a
              key={label}
              href={href}
              onClick={onClose}
              className="group flex items-center space-x-4 text-gray-300 hover:text-white py-4 px-6 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-gray-700"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
              whileHover={{ x: 10 }}
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-800 group-hover:bg-gray-700 transition-colors">
                <NavIcon path={icon || ''} className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <span className="text-lg font-medium">{label}</span>
                <div className="text-xs text-gray-500 uppercase tracking-widest">
                  {href.replace('#', '')}
                </div>
              </div>
              <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-800">
          <div className="text-center text-xs text-gray-500 uppercase tracking-widest">
            the_fahad_works
          </div>
        </div>
      </div>
    </motion.div>
  </AnimatePresence>
);

// Enhanced hamburger menu with animation
const HamburgerIcon: FC<{ isOpen: boolean }> = ({ isOpen }) => (
  <div className="relative w-6 h-6 flex flex-col justify-center items-center">
    <motion.span
      className="absolute w-6 h-0.5 bg-white block"
      animate={{
        rotate: isOpen ? 45 : 0,
        y: isOpen ? 0 : -6,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="absolute w-6 h-0.5 bg-white block"
      animate={{
        opacity: isOpen ? 0 : 1,
      }}
      transition={{ duration: 0.3 }}
    />
    <motion.span
      className="absolute w-6 h-0.5 bg-white block"
      animate={{
        rotate: isOpen ? -45 : 0,
        y: isOpen ? 0 : 6,
      }}
      transition={{ duration: 0.3 }}
    />
  </div>
);

// Enhanced logo with animation
const Logo: FC = () => (
  <motion.div
    className="relative group cursor-pointer"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="relative bg-white rounded-full p-2 shadow-2xl border border-gray-200">
      <Image
        src="/logo.png"
        alt="the_fahad_works"
        width={40}
        height={40}
        className="sm:w-10 sm:h-10 lg:w-12 lg:h-12"
        priority
      />
    </div>
  </motion.div>
);

const Nav: FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverBlackSection, setIsOverBlackSection] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { backgroundColor, backdropFilter, scale } = useNavScrollStyles();

  // Intersection observer to detect black section
  useEffect(() => {
    const target = document.querySelector('#black-section');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverBlackSection(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: '-50px 0px -50px 0px' }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);

  // Focus and scroll management
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const firstFocusable = menuRef.current?.querySelector<HTMLElement>('a, button');
        firstFocusable?.focus();
      });
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  // Event handlers
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('touchstart', handleTouchStart);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('touchstart', handleTouchStart);
    };
  }, [menuOpen]);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <style jsx>{`
        .scrollbar-hide {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>

      <header className="fixed top-0 left-0 w-full z-40">
        <nav role="navigation" aria-label="Main navigation">
          {!menuOpen ? (
            <motion.div
              className={`
                mx-auto mt-4 px-4 sm:px-6 lg:px-8 max-w-7xl
                transition-all duration-500 ease-out
                ${isOverBlackSection ? 'opacity-0 pointer-events-none' : 'opacity-100'}
              `}
              style={{ scale }}
            >
              <motion.div
                className="flex items-center justify-between py-3 px-6 rounded-2xl border-2 border-white/20 hover:border-white/40 transition-all duration-300"
                style={{
                  backgroundColor,
                  backdropFilter,
                }}
              >
                <Logo />
                <NavItems />
                <TabletNav />

                <motion.button
                  ref={hamburgerRef}
                  className="lg:hidden p-3 text-white hover:bg-white/10 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20"
                  onClick={openMenu}
                  aria-label="Open menu"
                  aria-expanded={menuOpen}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <HamburgerIcon isOpen={menuOpen} />
                </motion.button>
              </motion.div>
            </motion.div>
          ) : (
            <MobileMenu menuRef={menuRef} onClose={closeMenu} />
          )}
        </nav>
      </header>
    </>
  );
};

export default Nav;