import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Top Section: Logo and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between mb-8">
          {/* Logo and Tagline */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-3xl font-bold text-red-500">airbnb</h1>
            <p className="text-gray-400 mt-2">Belong Anywhere</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
            {/* About Us */}
            <div>
              <h3 className="text-lg font-medium mb-2">About Us</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/our-story" className="hover:text-white">Our Story</a></li>
                <li><a href="/careers" className="hover:text-white">Careers</a></li>
                <li><a href="/press" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-lg font-medium mb-2">Support</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/help-center" className="hover:text-white">Help Center</a></li>
                <li><a href="/safety-info" className="hover:text-white">Safety Information</a></li>
                <li><a href="/contact-us" className="hover:text-white">Contact Us</a></li>
              </ul>
            </div>

            {/* Hosting */}
            <div>
              <h3 className="text-lg font-medium mb-2">Hosting</h3>
              <ul className="space-y-1 text-gray-400">
                <li><a href="/become-a-host" className="hover:text-white">Become a Host</a></li>
                <li><a href="/hosting-resources" className="hover:text-white">Hosting Resources</a></li>
                <li><a href="/community-forum" className="hover:text-white">Community Forum</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Middle Section: Legal Information */}
        <div className="border-t border-gray-700 py-6 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 text-gray-400">
            <a href="/terms" className="hover:text-white">Terms of Service</a>
            <a href="/privacy" className="hover:text-white">Privacy Policy</a>
            <a href="/cookies" className="hover:text-white">Cookie Policy</a>
          </div>
          <p className="text-gray-400 mt-4 md:mt-0">© 2025 Airbnb Clone. All rights reserved.</p>
        </div>

        {/* Bottom Section: Newsletter Signup */}
        <div className="border-t border-gray-700 py-6">
          <h3 className="text-lg font-medium mb-4">Subscribe for Exclusive Offers</h3>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-64 p-3 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <button className="px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;