'use client';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  type FC,
  type ReactNode,
  JSX,
} from 'react';
import Image from 'next/image';
import { useScroll, useTransform, motion, MotionValue } from 'framer-motion';

/** List of navigation labels (and anchor IDs). */
const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Discover', href: '#discover' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

/** Custom hook: returns backgroundColor, padding, and borderColor MotionValues based on scrollY */
function useNavScrollStyles(): {
  backgroundColor: MotionValue<string>;
  verticalPadding: MotionValue<string>;
  borderColor: MotionValue<string>;
} {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 50],
    ['transparent', 'rgba(17,24,39,0.95)']
  );
  const verticalPadding = useTransform(scrollY, [0, 50], ['1rem', '0.5rem']);
  const borderColor = useTransform(
    scrollY,
    [0, 50],
    ['rgba(255,255,255,0)', 'rgba(255,255,255,0.7)']
  );

  return { backgroundColor, verticalPadding, borderColor };
}

/**
 * Renders a list of navigation links (desktop view).
 * Hidden on small screens; shown starting at `md:` breakpoint.
 */
const NavItems: FC<{ onLinkClick?: () => void }> = ({ onLinkClick }) => {
  return (
    <ul className="hidden md:flex space-x-6 ml-4">
      {NAV_ITEMS.map(({ label, href }) => (
        <li key={label}>
          <a
            href={href}
            onClick={onLinkClick}
            className="
              text-white 
              font-medium 
              px-6 
              py-4 
              rounded-full 
              text-sm 
              hover:bg-blue-400 
              hover:text-white 
              transition
            "
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

/**
 * Full-screen mobile menu that appears when hamburger is clicked.
 * Covers whole viewport, centers links vertically, and traps focus.
 */
const MobileMenu: FC<{
  menuRef: React.RefObject<HTMLDivElement>;
  onClose: () => void;
}> = ({ menuRef, onClose }) => {
  return (
    <motion.div
      ref={menuRef}
      tabIndex={-1}
      className="
        fixed 
        inset-0 
        flex 
        flex-col 
        items-center 
        justify-center 
        space-y-6 
        bg-[rgba(17,24,39,0.95)]
        pt-4
      "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Close Button */}
      <button
        className="
          absolute 
          top-5 
          right-5 
          text-white 
          text-4xl 
          p-3 
          focus:outline-none
        "
        onClick={onClose}
        aria-label="Close menu"
      >
        &times;
      </button>

      {/* Mobile Links */}
      {NAV_ITEMS.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          onClick={onClose}
          className="
            text-white 
            font-medium 
            text-2xl 
            hover:underline 
            whitespace-nowrap
          "
        >
          {label}
        </a>
      ))}
    </motion.div>
  );
};

/**
 * Main navigation component.
 */
export default function Nav(): JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const { backgroundColor, verticalPadding, borderColor } = useNavScrollStyles();

  /** When menuOpen changes, manage focus */
  useEffect(() => {
    if (menuOpen) {
      setTimeout(() => {
        const container = menuRef.current;
        const firstFocusable = container?.querySelector<HTMLElement>('a, button');
        firstFocusable?.focus();
      }, 0);
    } else {
      hamburgerRef.current?.focus();
    }
  }, [menuOpen]);

  /** Close menu on ESC key or outside click */
  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
      }
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
              className="
                pointer-events-auto 
                mx-auto 
                flex 
                items-center 
                justify-between 
                max-w-fit 
                px-4 
                gap-52 
                transition-all 
                duration-300 
                rounded-full 
                border-4 
                border-solid
              "
              style={{
                backgroundColor,
                paddingTop: verticalPadding,
                paddingBottom: verticalPadding,
                borderColor,
              }}
            >
              {/* Logo (always visible) */}
              <div className="bg-white rounded-full p-2">
                <Image
                  src="/logo.png"
                  alt="Company Logo"
                  width={56}
                  height={56}
                  priority
                  aria-hidden="true"
                />
              </div>

              {/* Desktop Nav Items (hidden on small screens) */}
              <NavItems />

              {/* Hamburger Button (visible only on small screens) */}
              <button
                ref={hamburgerRef}
                className="md:hidden text-white p-3 focus:outline-none"
                onClick={openMenu}
                aria-label="Open menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
              >
                <span className="text-2xl">&#9776;</span>
              </button>
            </motion.div>
          ) : (
            // Full-screen overlay menu
            <MobileMenu menuRef={menuRef} onClose={closeMenu} />
          )}
        </nav>
      </header>
    </>
  );
}
