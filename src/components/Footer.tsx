import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 px-4 py-6 text-center text-xs sm:text-sm md:text-base">
      <div className="max-w-screen-xl mx-auto">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-white">the_fahad_works</span>. All rights reserved.
      </div>
    </footer>
  );
}
