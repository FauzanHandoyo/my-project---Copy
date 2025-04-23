import React from 'react';

const travelTips = [
  {
    id: 1,
    icon: '🎒',
    title: 'Pack Light and Smart',
    description: 'Bring only what you need to avoid extra baggage fees.',
  },
  {
    id: 2,
    icon: '📅',
    title: 'Book Early to Save Money',
    description: 'Early bookings often come with better rates and availability.',
  },
  {
    id: 3,
    icon: '🍴',
    title: 'Explore Local Cuisine',
    description: 'Try local dishes to immerse yourself in the culture.',
  },
  {
    id: 4,
    icon: '🔒',
    title: 'Stay Safe While Traveling',
    description: 'Keep your valuables secure and share your itinerary with loved ones.',
  },
];

const TravelTips = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        {/* Title */}
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">Travel Tips for Your Next Adventure</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Get expert advice to make your trip smoother, safer, and more enjoyable.
        </p>

        {/* Tips Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {travelTips.map((tip) => (
            <div
              key={tip.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-700"
            >
              {/* Icon */}
              <div className="text-4xl text-red-500 dark:text-red-400 mb-4">{tip.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-medium text-gray-800 dark:text-white mb-2">{tip.title}</h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TravelTips;