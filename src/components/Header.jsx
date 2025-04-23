import React, { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md dark:bg-gray-800 dark:border-b dark:border-gray-700">
      {/* Container */}
      <div className="flex items-center justify-between px-4 py-3 mx-auto max-w-7xl">
        {/* Logo */}
        <div className="text-2xl font-bold text-red-500 dark:text-red-400">
          <a href="/">airbnb</a>
        </div>

        {/* Navigation Links (Hidden on Small Screens) */}
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex space-x-6 absolute md:relative top-full left-0 w-full md:w-auto bg-white dark:bg-gray-800 md:bg-transparent py-4 md:py-0`}
        >
          <a href="/stays" className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white md:inline-block">
            Stays
          </a>
          <a href="/experiences" className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white md:inline-block">
            Experiences
          </a>
          <a href="/online-experiences" className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white md:inline-block">
            Online Experiences
          </a>
          <a href="/help-center" className="block text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white md:inline-block">
            Help Center
          </a>
        </nav>

        {/* Right Side (Host and Profile + Hamburger Menu) */}
        <div className="flex items-center space-x-4">
          {/* Become a Host Button */}
          <a
            href="/become-a-host"
            className="hidden px-4 py-2 text-sm font-medium text-gray-700 border rounded-full md:block hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 dark:border-gray-600"
          >
            Become a Host
          </a>

          {/* Theme Toggle */}
          <ThemeToggle />

          {/* Hamburger Menu (Visible Only on Small Screens) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-700 rounded-full hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;