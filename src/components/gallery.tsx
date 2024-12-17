'use client'; // Add this directive at the top

import Image from 'next/image';
import React, { useState } from 'react';

const Gallery: React.FC = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  const images = Array.from(
    { length: 16 },
    (_, index) => `/gallery/image${index + 1}.jpg`
  );

  const handleNext = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return 0; // Default to first image if `prev` is null
      return prev === images.length - 1 ? 0 : prev + 1;
    });
  };

  const handlePrev = () => {
    setSelectedImageIndex((prev) => {
      if (prev === null) return images.length - 1; // Default to last image if `prev` is null
      return prev === 0 ? images.length - 1 : prev - 1;
    });
  };

  return (
    <section className="bg-white py-8">
      <h2 className="text-center text-3xl font-bold text-[#19245b] mb-8">
        GALLERY
        <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
          {/* Line 1 */}
          <div className="border-t-2 border-white/60 w-1/6"></div>
          {/* Red Dot */}
          <div className="mx-2 bg-red-500 w-1 h-1"></div>
          {/* Line 2 */}
          <div className="border-t-2 border-white/60 w-1/6"></div>
        </span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 px-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group cursor-pointer"
            onClick={() => setSelectedImageIndex(index)}
          >
            <div className="w-full aspect-square overflow-hidden rounded-md">
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={`Gallery image ${index + 1}`}
                  className="object-cover"
                  fill
                />
              </div>
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="text-white text-lg font-semibold">View</span>
            </div>
          </div>
        ))}
      </div>

      {selectedImageIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={() => setSelectedImageIndex(null)}
        >
          <button
            className="absolute left-8 text-white text-3xl p-2 bg-gray-800 bg-opacity-75 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
          >
            ‹
          </button>
          <div className="relative w-full h-[500px]">
            {' '}
            {/* Define container dimensions */}
            <Image
              src={images[selectedImageIndex]}
              alt="Selected"
              className="rounded-md shadow-lg object-contain"
              fill
            />
          </div>
          <button
            className="absolute right-8 text-white text-3xl p-2 bg-gray-800 bg-opacity-75 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
};

export default Gallery;
