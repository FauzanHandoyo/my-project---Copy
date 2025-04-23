import React from 'react';

const categories = [
  { name: 'Entire Homes', icon: '🏠' },
  { name: 'Unique Stays', icon: '✨' },
  { name: 'Pet-Friendly', icon: '🐾' },
  { name: 'OMG! Stays', icon: '🤩' },
];

const Categories = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-200 mb-8">Explore By Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition duration-300 dark:bg-gray-700 dark:text-white"
            >
              <span className="text-4xl mb-4">{category.icon}</span>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-300">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;