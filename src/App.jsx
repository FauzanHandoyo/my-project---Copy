import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Categories from './components/Categories';
import FeaturedListings from './components/FeaturedListings';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import TravelTips from './components/TravelTips';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4">
        <Hero />
        <Categories />
        <TravelTips />  
        <FeaturedListings />
        <Testimonials />
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;