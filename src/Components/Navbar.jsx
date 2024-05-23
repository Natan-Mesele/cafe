// src/components/Navbar.js

import React, { useState } from 'react';

const Navbar = () => {
  // State to manage the visibility of the sidebar
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo section */}
          <div className="flex-shrink-0 text-white">
            {/* Your cafe logo */}
            Cafe Logo
          </div>
          {/* Navigation links section */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {/* Navbar links */}
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Home
              </a>
              <button onClick={toggleMenu} className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none">
                Menu
              </button>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                About
              </a>
              <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar for Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu Item 1</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu Item 2</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Menu Item 3</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
