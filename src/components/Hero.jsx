import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-red-500 to-pink-500 py-20 dark:bg-gradient-to-r dark:from-red-900 dark:to-purple-900">
      {/* Overlay Content */}
      <div className="container mx-auto px-4 flex flex-col items-center justify-center h-full">
        {/* Title and Subtitle */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold mb-4 text-gray-800 dark:text-white">Discover Your Next Adventure</h1>
          <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">Find unique stays and experiences around the world.</p>
        </div>

        {/* Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 w-full md:w-3/4">
          <input
            type="text"
            placeholder="Where are you going?"
            className="w-full md:w-64 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white dark:focus:ring-red-400"
          />
          <input
            type="date"
            placeholder="Check-in Date"
            className="w-full md:w-40 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white dark:focus:ring-red-400"
          />
          <input
            type="date"
            placeholder="Check-out Date"
            className="w-full md:w-40 p-3 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-red-500 dark:bg-gray-800 dark:text-white dark:focus:ring-red-400"
          />
          <button className="px-6 py-3 bg-white text-red-500 font-semibold rounded-md hover:bg-red-100 transition duration-300 dark:bg-red-500 dark:text-white dark:hover:bg-red-600">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;