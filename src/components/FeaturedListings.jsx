import React from 'react';

const listings = [
  {
    id: 1,
    title: 'Cozy Cottage by the Lake',
    location: 'Asheville, NC',
    price: '$120/night',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTkzMzIyMzQ3MzQwNjAyODA5/original/297b43d5-f07a-4cbb-818f-054f2b2a561b.jpeg?im_w=320',
  },
  {
    id: 2,
    title: 'Modern Apartment in the City',
    location: 'New York, NY',
    price: '$200/night',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1216398075445007451/original/11931d4e-98a2-4127-b66a-539112c1d0d3.jpeg?im_w=720',
  },
  {
    id: 3,
    title: 'Luxury Villa with Pool',
    location: 'Miami, FL',
    price: '$300/night',
    image: 'https://a0.muscache.com/im/pictures/miso/Hosting-37578502/original/7e9a14e2-1a8c-460e-94b9-6d46e7d972ae.png?im_w=720',
  },
  {
    id: 4,
    title: 'Treehouse in the Forest',
    location: 'Portland, OR',
    price: '$150/night',
    image: 'https://a0.muscache.com/im/pictures/d06ec2fa-3c7e-4bd5-864e-25374e0450c8.jpg?im_w=720',
  },
  {
    id: 5,
    title: 'Apartement in the City',
    location: 'Portland, OR',
    price: '$150/night',
    image: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1048761407045541691/original/1653c8da-3ad9-4519-b7bb-874cc2c6c184.jpeg?im_w=720',
  },
  {
    id: 6,
    title: 'Room In Elizabeth',
    location: 'Portland, OR',
    price: '$120/night',
    image: 'https://a0.muscache.com/im/pictures/6f5acb85-9e94-45d9-a810-2acaf21ddd77.jpg?im_w=720',
  },
];

const FeaturedListings = () => {
  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {listings.map((listing) => (
            <div
              key={listing.id}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 dark:bg-gray-700"
            >
              <img src={listing.image} alt={listing.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="mt-4">
                <h3 className="text-xl font-medium text-gray-800 dark:text-white">{listing.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{listing.location}</p>
                <p className="text-lg font-bold text-red-500 mt-2">{listing.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;