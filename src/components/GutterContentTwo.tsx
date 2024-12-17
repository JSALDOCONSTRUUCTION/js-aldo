'use client';

import ContactUsForm from '@/components/ContactUsForm';
import Image from 'next/image';
import React from 'react';

const Roofing: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 px-8 py-12">
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/gutter4.jpg"
            alt="Roofing Services"
            width={450} // Match Tailwind width
            height={300} // Match Tailwind height
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Gutter Replacement
          </h2>

          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          {/* Content Section */}
          <div className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
            <p className="mt-4">
              Gutter replacement is essential for maintaining your home&apos;s
              protection and ensuring efficient water management. At Aldo
              Constructions, we specialize in replacing outdated or damaged
              gutters with high-quality systems that enhance your home&apos;s
              functionality and curb appeal. Our team will guide you through the
              process of selecting the best replacement gutters, explaining the
              benefits of various materials and designs to meet your specific
              needs. With our expert installation, you&apos;ll benefit from a
              reliable and effective drainage solution that prevents water
              damage and extends the life of your home&apos;s exterior. Once
              you&apos;ve chosen your new gutters, we handle the replacement
              with precision and care, ensuring a seamless transition and
              optimal performance.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/gutter5.jpg"
            alt="Roofing Services"
            width={450} // Match the Tailwind width
            height={300} // Match the Tailwind height
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Gutter Cleaning Services
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
            Regular gutter cleaning is vital for preventing water damage and
            ensuring your home&apos;s drainage system operates efficiently. At
            JS Aldo&apos;s Construction, we provide professional gutter cleaning
            services that help maintain your gutters in top condition and
            protect your home from potential issues. Our experienced team will
            thoroughly clean your gutters, removing leaves, debris, and
            blockages to ensure proper water flow and prevent overflow. With our
            meticulous service, you&apos;ll avoid common problems such as roof
            leaks, foundation damage, and landscape erosion.
          </p>
        </div>
      </div>
      <div className="flex-1 px-4 lg:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
          Gutter Cleaning Services
        </h2>
        <div className="flex justify-center items-center mt-2">
          {/* Underline with dot */}
          <div className="border-t-2 border-black/60 w-1/6"></div>
          <div className="mx-2 bg-red-500 w-1 h-1"></div>
          <div className="border-t-2 border-black/60 w-1/6"></div>
        </div>

        {/* Images Section */}
        <div className="mt-6 flex flex-col sm:flex-row sm:gap-4 items-center justify-center">
          <div className="flex flex-wrap">
            <div className="flex-1">
              <Image
                src="/chartLeft.jpg"
                alt="Gutter Cleaning Image 1"
                width={500} // Match Tailwind width
                height={250} // Match Tailwind height
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1 mt-4 sm:mt-0">
              <Image
                src="/chartRight.jpg"
                alt="Gutter Cleaning Image 2"
                width={400} // Match Tailwind width
                height={250} // Match Tailwind height
                className="object-contain rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <ContactUsForm />
    </section>
  );
};

export default Roofing;
