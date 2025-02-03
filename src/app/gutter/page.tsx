'use client';

import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import GutterContentTwo from '@/components/GutterContentTwo';
import Header from '@/components/Header';
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
          src="/siding.jpg"
          alt="Roofing"
          width={1920} // Specify the width of the image (adjust based on your layout)
          height={600} // Specify the height to match your container's size
          className="object-cover h-[50vh] w-full"
        />
      </div>

      {/* Centered Heading */}
      <div className="text-center py-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#b2303c]">
          Gutters by JS Aldo&apos;s Construction
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
            src="/gutter2.jpg"
            alt="Roofing Services"
            width={350} // Specify the width of the image
            height={450} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <p className="mt-6 text-gray-700 leading-relaxed text-center text-justify">
            JS Aldo&apos;s Construction offers replacement gutter systems of all
            sizes, materials, and colors. <br /> <br />
            5, 6 and 7” K Style Guttersbr&apos;
            <br /> 2x3, 3x4 Leaders <br /> Heavy Duty .027 and .032 thickness{' '}
            <br /> Hidden fasteners <br />
            Termination into French drains, or away from the foundation via
            extension <br /> 3 Levels of gutter guard protection <br /> Expert
            installation <br />
            Gutters are made in the USA <br /> We also install half round
            systems, strap hung gutters, and commercial drainage repair and
            systems b<br />
            <br /> Please set up an appointment for a gutter quote today…
          </p>
        </div>
      </div>
      <div className="list-section1 bg-black py-8">
        <div className="services-container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* First Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">
                • New Gutters & Downspouts
              </div>
              <div className="service text-white">• Gutter Upgrades</div>
              <div className="service text-white">•Custom Seamless Gutters</div>
              <div className="service text-white">
                •Gutter Cleaning Services
              </div>
            </div>

            {/* Spacing Between Groups */}
            <div className="flex-1"></div>

            {/* Second Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">•Gutter Replacement</div>
              <div className="service text-white">• Gutter Installation</div>
              <div className="service text-white">• 5” Gutters</div>
              <div className="service text-white">• 6” Gutters</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/gutter3.jpg"
            alt="Roofing Services"
            width={450} // Specify the width of the image
            height={300} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            New Gutters
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-center text-justify">
            New gutters are crucial for protecting your home from water damage
            and ensuring effective drainage. At JS Aldo&apos;s Construction, we
            specialize in installing high-quality new gutters that safeguard
            your property and enhance its functionality. Our team will assist
            you in selecting the best gutter system for your home, explaining
            the advantages of different materials and designs to help you make
            an informed decision. With our expert installation, you&apos;ll
            enjoy a reliable and efficient drainage solution that directs water
            away from your home, preventing issues like erosion and foundation
            damage. Once you&apos;ve chosen your new gutters, we&apos;ll handle
            the installation with precision and care, ensuring a perfect fit and
            optimal performance
          </p>
        </div>
      </div>
      <GutterContentTwo />
      <Footer />
      <Copyrights />
    </section>
  );
};

export default Roofing;
