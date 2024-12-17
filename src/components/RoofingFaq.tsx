import React, { useState } from 'react';

const RoofingFaq: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const questionsAndAnswers = [
    {
      question: 'What are the signs that indicate I need a new roof?',
      answer:
        'Answer: Look for signs such as missing or damaged shingles, water stains on ceilings, sagging roof deck, and excessive granules in gutters. If your roof is over 20 years old, it may also be time to consider replacement.',
    },
    {
      question: 'How long does a roof typically last?',
      answer:
        'Answer: The lifespan of a roof depends on several factors, including the materials used, climate conditions, and maintenance. Asphalt shingle roofs typically last around 20-30 years, while metal roofs can last 50 years or more.',
    },
    {
      question: 'What should I consider when choosing roofing materials?',
      answer:
        'Answer: Consider factors such as durability, cost, aesthetics, and suitability for your climate. Common roofing materials include asphalt shingles, metal, wood shakes, and tile, each with its own advantages and considerations.',
    },
    {
      question: 'What does roof maintenance involve?',
      answer:
        'Answer: Regular roof maintenance includes inspecting for damage, cleaning gutters, trimming overhanging branches, and checking for signs of wear and tear. Prompt repairs can extend the lifespan of your roof and prevent costly damage.',
    },
    {
      question: 'Do I need a permit to replace my roof?',
      answer:
        "Answer: In most areas, yes, you will need a permit to replace your roof. Regulations vary by location, so it's important to check with your local building department or contractor to ensure compliance with local codes and requirements.",
    },
  ];

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold">Frequently Asked Questions</h2>
          <div className="spacer-half"></div>
        </div>
        <div className="mx-auto w-full max-w-2xl">
          <div className="space-y-4">
            {questionsAndAnswers.map((item, index) => (
              <div
                key={index}
                className={`p-4 border border-black rounded-md cursor-pointer ${
                  activeIndex === index ? 'bg-gray-100' : 'bg-white'
                }`}
                onClick={() => handleToggle(index)}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-xl font-medium">{item.question}</h4>
                  <span className="text-lg">
                    {activeIndex === index ? '↓' : '→'}
                  </span>
                </div>
                {activeIndex === index && (
                  <div className="mt-2 p-3 bg-gray-50 rounded-md">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoofingFaq;
