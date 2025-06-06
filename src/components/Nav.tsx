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
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Discover', href: '#discover' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

// Custom scroll style hook
function useNavScrollStyles(): {
  backgroundColor: MotionValue<string>;
  verticalPadding: MotionValue<string>;
  borderColor: MotionValue<string>;
} {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(scrollY, [0, 10], ['transparent', 'rgba(17,24,39,0.95)']);
  const verticalPadding = useTransform(scrollY, [0, 50], ['1rem', '0.5rem']);
  const borderColor = useTransform(scrollY, [0, 10], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)']);

  return { backgroundColor, verticalPadding, borderColor };
}

const NavItems: FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => (
  <ul className="hidden md:flex space-x-6 ml-4">
    {NAV_ITEMS.map(({ label, href }) => (
      <li key={label}>
        <a
          href={href}
          onClick={onLinkClick}
          className="text-white font-extrabold uppercase tracking-wide px-6 py-4 rounded-full text-lg hover:bg-blue-500 hover:text-white transition"
        >
          {label}
        </a>
      </li>
    ))}
  </ul>
);

const MobileMenu: FC<{ menuRef: React.Ref<HTMLDivElement>; onClose: () => void }> = ({
  menuRef,
  onClose,
}) => (
  <AnimatePresence>
    <motion.div
      id="mobile-menu"
      ref={menuRef}
      tabIndex={-1}
      className="fixed inset-0 flex flex-col items-center justify-center space-y-6 bg-[rgba(17,24,39,0.95)] pt-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <button
        className="absolute top-5 right-5 text-white text-4xl p-3 focus:outline-none"
        onClick={onClose}
        aria-label="Close menu"
      >
        &times;
      </button>
      {NAV_ITEMS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={onClose}
          className="text-white font-medium text-2xl hover:underline whitespace-nowrap"
        >
          {label}
        </a>
      ))}
    </motion.div>
  </AnimatePresence>
);

const Nav: FC = (): JSX.Element => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOverBlackSection, setIsOverBlackSection] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const { backgroundColor, verticalPadding, borderColor } = useNavScrollStyles();

  // Intersection observer to detect black section
  useEffect(() => {
    const target = document.querySelector('#black-section');
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsOverBlackSection(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(target);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (menuOpen) {
      requestAnimationFrame(() => {
        const firstFocusable = menuRef.current?.querySelector<HTMLElement>('a, button');
        firstFocusable?.focus();
      });
    } else {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  const openMenu = useCallback(() => setMenuOpen(true), []);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <noscript>
        <style>{`
          nav ul { display: flex !important; }
          nav button[aria-label="Open menu"] { display: none !important; }
        `}</style>
      </noscript>

      <header className="fixed top-0 left-0 w-full z-50">
        <nav role="navigation" aria-label="Main site navigation">
          {!menuOpen ? (
            <motion.div
              tabIndex={-1}
              className={`
                pointer-events-auto 
                mx-auto 
                flex 
                items-center 
                justify-between 
                w-full
                md:max-w-fit 
                px-4 
                transition-all 
                duration-300 
                rounded-full 
                border-4 
                border-solid 
                ${isOverBlackSection ? 'opacity-0' : 'opacity-100'}
              `}
              style={{
                backgroundColor,
                paddingTop: verticalPadding,
                paddingBottom: verticalPadding,
                borderColor,
              }}
            >
              <div className="bg-white rounded-full p-2 drop-shadow-md md:mr-24">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={56}
                  height={56}
                  priority
                  aria-hidden="true"
                />
              </div>

              <NavItems />

              <button
                ref={hamburgerRef}
                className="md:hidden text-white p-3 focus:outline-none ml-4"
                onClick={openMenu}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span className="text-2xl">&#9776;</span>
              </button>
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
