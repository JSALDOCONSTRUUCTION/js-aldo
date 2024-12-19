'use client';

import ContactUsForm from '@/components/ContactUsForm';
import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const Roofing: React.FC = () => {
  return (
    <section className="bg-gray-50">
      <Header />
      <FixedButtons />
      {/* Top Image */}
      <div className="relative h-[50vh]">
        {' '}
        {/* Set height for container */}
        <Image
          src="/siding.jpg"
          alt="Roofing"
          width={1200} // Specify the width of the image
          height={600} // Specify the height of the image
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
            src="/siding4.jpg"
            alt="Roofing Services"
            width={450} // Specify the width of the image
            height={300} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Siding
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>
          <p className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
            Siding is one of the most economical ways to enhance the value of
            your home… <br />
            There are many styles, sizes and colors to choose from… <br />
            We offer all the major brands…
          </p>
        </div>
      </div>
      <div className="list-section1 bg-black py-8">
        <div className="services-container max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-start">
            {/* First Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">
                • New Siding Installation
              </div>
              <div className="service text-white">• Vinyl Siding</div>
              <div className="service text-white">
                • Brick Siding & Stone Siding
              </div>
              <div className="service text-white">• Siding Replacement</div>
            </div>

            {/* Spacing Between Groups */}
            <div className="flex-1"></div>

            {/* Second Group of Services */}
            <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
              <div className="service text-white">• Siding Repair</div>
              <div className="service text-white">• Hardie Board Siding</div>
              <div className="service text-white">• Wood Siding</div>
              <div className="service text-white">• Metal Siding</div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/siding5.jpg"
            alt="Roofing Services"
            width={450} // Specify the width of the image
            height={300} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Vinyl Siding
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed text-center sm:text-left">
            Vinyl Siding Vinyl is the most popular home improvement in the U.S.
            today. It is durable, colorfast, and comes in many styles and
            colors. The industry is so robust that it predicts 25.8 million
            squares of siding (2.5 billion square feet) will be sold. Vinyl
            siding is a one-time purchase product that will last many years. If
            you need to freshen it up, you just need to power wash it.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed text-center sm:text-left">
            <span className="font-medium">
              Vinyl siding is moderately priced at between $5.00 and $7.00 per
              square foot. There are many factors that influence the price, so
              it is best to sit with our sales team to discuss the various
              options.
            </span>
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 px-8 py-12">
        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/siding6.jpg"
            alt="Roofing Services"
            width={450} // Specify the width of the image
            height={300} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Typical Installation
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
              In many cases, siding can be installed over most existing types of
              exterior treatments. However, it is always ideal to remove the
              existing exterior to expose the sheathing and start from scratch.
              This approach allows for the inspection of the sheathing and the
              replacement of any trouble areas. It also helps keep everything
              nice, flat, and even.
              <br />
              At this point, you would wrap the house in a synthetic house wrap,
              like Tyvek, to create a nice wind-resistant barrier. In theory,
              you do not have to insulate above the house wrap; we prefer to do
              so, but we offer it both ways. Using a nice continuous panel,
              known as fanfold, eliminates seams. This panel typically has a
              thickness of ¼” to ½”. Then, the siding would be applied, giving a
              pleasing appearance that you will enjoy for many years.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 px-8 py-12">
        {/* Right Image */}
        <div className="relative">
          <Image
            src="/siding7.jpg"
            alt="Roofing Services"
            width={450} // Specify the width of the image
            height={300} // Specify the height of the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            J.S. Aldo’s offers siding and trim packages for all Budgets.
          </h2>

          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          {/* Content Section */}
          <div className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left ml-0 sm:ml-64">
            <p className="mt-4">
              • We offer siding and trim packages for all budgets. <br />
              • Fiber Cement (Hardie) <br />
              • Vinyl (Certainteed, Royal, Etc.) <br />
              • PVC Trim Boards <br />
              • Aluminum window and fascia wrap <br />
              • House wrap (HDPE) (Tyvek) <br />• Damage repair
            </p>
          </div>
        </div>
      </div>
      <ContactUsForm />
      <Footer />
      <Copyrights />
    </section>
  );
};

export default Roofing;
