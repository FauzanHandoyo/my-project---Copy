import React, { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'How do I book a stay?',
    answer:
      'To book a stay, search for your desired location, select a listing, and follow the booking process. You’ll need to provide payment details and confirm your reservation.',
  },
  {
    id: 2,
    question: 'What if I need to cancel my reservation?',
    answer:
      'You can cancel your reservation through your account. The refund policy depends on the host’s cancellation terms, so check the details before booking.',
  },
  {
    id: 3,
    question: 'How do I become a host?',
    answer:
      'To become a host, click on the "Become a Host" button in the header or footer. Follow the steps to list your property and start earning.',
  },
  {
    id: 4,
    question: 'Is my payment information secure?',
    answer:
      'Yes, we use industry-standard encryption to protect your payment information. Your data is safe with us.',
  },
  {
    id: 5,
    question: 'Can I contact the host before booking?',
    answer:
      'Yes, you can send a message to the host through the platform to ask any questions before making a reservation.',
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle FAQ item
  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={faq.id} className="bg-white rounded-lg shadow-md overflow-hidden dark:bg-gray-700">
              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-medium text-gray-800 dark:text-white flex justify-between items-center hover:bg-gray-100 dark:hover:bg-gray-600 transition duration-300"
              >
                <span>{faq.question}</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-5 h-5 transform ${activeIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {/* Answer */}
              {activeIndex === index && (
                <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;