'use client';

import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import RoofingContentTwo from '@/components/RoofingContentTwo';
import Image from 'next/image';

import React from 'react';

const Roofing: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <Header />
      <FixedButtons />
      {/* Top Image */}
      <div className="relative">
        <Image
          src="/roofing2.jpg"
          alt="Roofing"
          width={1200} // Width for your image (adjust as per the actual size)
          height={600} // Height for your image (adjust as per the actual size)
          className="object-cover h-[50vh] w-full"
        />
      </div>

      {/* Centered Heading */}
      <div className="text-center py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#b2303c]">
          Serving all of North Jersey, parts of NY and <br />
          Pennsylvania
        </h1>
        <span className="relative block mt-4">
          {/* Underline with dot */}
          <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </span>
        </span>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}

        <div className="flex-1 flex justify-center">
          <Image
            src="/roofing3.jpg"
            alt="Roofing Services"
            width={450} // Set the width of the image
            height={300} // Set the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Roofing
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
            Your roof is your home&apos;s main defense against the elements. At
            JS Aldo&apos;s Construction, we will help you choose the best roof
            for performance and to fit within your budget. With our expert
            installation, you&apos;ll enjoy lasting protection and peace of
            mind. Our commitment extends beyond just installation; we offer
            ongoing support and maintenance to keep your roof in optimal
            condition.
          </p>
        </div>
      </div>
      <div className="list-section1 bg-black py-8">
        <div className="services-container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* First Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">
                • Residential Roof Replacement
              </div>
              <div className="service text-white">
                • Commercial Roof Replacement
              </div>
              <div className="service text-white">
                • Residential Roof Repair
              </div>
              <div className="service text-white">• Commercial Roof Repair</div>
              <div className="service text-white">• Roof Leak Repair</div>
            </div>

            {/* Spacing Between Groups */}
            <div className="flex-1"></div>

            {/* Second Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">• Roofing Maintenance</div>
              <div className="service text-white">
                • Emergency Roofing Repair
              </div>
              <div className="service text-white">
                • Asphalt Shingle Roofing
              </div>
              <div className="service text-white">• Gutter Installation</div>
              <div className="service text-white">• Skylight Installation</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/public/gallery/image9.jpg"
            alt="Roofing Services"
            width={450} // Set the width of the image
            height={300} // Set the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Residential Roofing
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
            <span className="font-bold">
              JS Aldo&apos;s Construction is your go-to contractor for all
              roofing needs, whether it&apos;s single-family, multi-family, or
              multi-dwelling properties. From basic Cape Cod style homes to
              multi-unit, multi-floor condos, we offer comprehensive services to
              meet your roofing requirements.
            </span>
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-center sm:text-left">
            Our premium systems can also be assembled using products from any
            manufacturer. Each manufacturer designs their shingles and
            accessories to work optimally as a system.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-center sm:text-left">
            <span className="font-medium">
              Please contact JS Aldo&apos;s Construction today for your free
              roof estimate.
            </span>
          </p>
        </div>
      </div>
      <RoofingContentTwo />
      <Footer />
      <Copyrights />
    </section>
  );
};

export default Roofing;
