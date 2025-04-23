import React from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Emily Johnson',
    review: 'Absolutely loved my stay! The host was amazing and the location was perfect.',
    image: '/assets/Review/Emily Johnson.jpg',
  },
  {
    id: 2,
    name: 'Dr. Michael Brown',
    review: 'Had an incredible experience. Highly recommend this listing!',
    image: '/assets/Review/MichaelBrown.jpg',
  },
  {
    id: 3,
    name: 'Sarah Lee',
    review: 'The best vacation ever! Clean, comfortable, and well-equipped.',
    image: '/assets/Review/SarahLee.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Guest Reviews</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-700"
            >
              <div className="flex items-center mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                <p className="ml-2 text-sm font-medium text-gray-800 dark:text-white">{testimonial.name}</p>
              </div>
              <p className="text-gray-600 dark:text-gray-400">{testimonial.review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;