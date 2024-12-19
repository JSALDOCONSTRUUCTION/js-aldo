import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      {/* ROOFING BLOG Heading with Background */}
      <section className="bg-[#18245b] py-12">
        <h2 className="text-center text-6xl font-bold text-white">
          Design and Drafting <br /> Service
        </h2>
        <span className="relative block mt-4">
          {/* Underline with dot */}
          <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
            <div className="border-t-2 border-white/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-white/60 w-1/6"></div>
          </span>
        </span>
      </section>

      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-8">
        <h3 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          JS Construction Design and Drafting Service
        </h3>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Insurance and Design Restrictions
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          The NJ state law is very clear: construction companies performing the
          work cannot also do the design or engineering for projects. This is a
          fineable offense by the state, and insurance companies may deny a
          claim if any issues arise due to improper design. If you need design
          assistance, we are here to help you get the project on the right track
          with professional project management.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Our Services Include:
        </h4>
        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>Deck Plans</li>
          <li>Kitchen Plans</li>
          <li>Wall Modifications</li>
          <li>Bathroom Remodels and Layouts</li>
        </ul>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Simple deck plans with proper details and spans start at $250.00. We
          cannot do the actual construction work for you according to the state,
          but we can help you with the essential design and drafting process,
          ensuring you get the necessary plans for your project.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Project Management & Support
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          We also offer similar packages for contractors that include Bills of
          Materials (BOMs) and Excel spreadsheets. Let us be your project
          managers with over 35 years of experience and CAD detailing services
          on-premise.
        </p>
        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Why Choose Us?
        </h4>
        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>Professional Design and Drafting Services</li>
          <li>Project Management Experience (35+ years)</li>
          <li>CAD Detailing for Precision and Accuracy</li>
          <li>Comprehensive Plans for Contractors and Homeowners</li>
          <li>Ridge Caps</li>
        </ul>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          With our expertise, we help you navigate the complexities of
          construction projects, ensuring everything is on track from the start.
          Contact us today for your design and drafting needs!
        </p>
      </section>

      {/* Deck Image Section */}
      <section className="py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">Deck</h2>
        <Image
          src="/deck1.jpg" // Make sure the image path starts from the public directory
          alt="Deck"
          width={1200} // Specify the width of the image (adjust as needed)
          height={800} // Specify the height of the image (adjust as needed)
          className="mt-6 w-full max-w-screen-xl h-auto"
        />
      </section>

      {/* Plan Image Section */}
      <section className="py-12 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-center">Plan</h2>
        <Image
          src="/deckplan.jpeg" // Make sure the image path starts from the public directory
          alt="Plan"
          width={1200} // Specify the width of the image (adjust as needed)
          height={800} // Specify the height of the image (adjust as needed)
          className="mt-6 w-full max-w-screen-xl h-auto"
        />
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>
      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
