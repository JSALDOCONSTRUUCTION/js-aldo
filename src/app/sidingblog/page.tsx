import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      {/* ROOFING BLOG Heading with Background */}
      <section className="bg-[#18245b] py-12">
        <h2 className="text-center text-6xl font-bold text-white">
          SIDING BLOG
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
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Consumers today have many choices available to them to beautify the
          exterior of their homes. Modern plastics are more fade resistant and
          more resilient than they have ever been. The color palette has grown
          inconsiderably with vinyl, and Hardie cement products.
        </p>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          The details pieces and trim choices are a cornucopia of styles. Vinyl
          and polymer dentil molding, rake trim and moldings allow for a wide
          range of custom finishes.
        </p>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          This means two things…. <br /> 1. Today&apos;s siding specialists must
          be finish carpenters as well. <br /> 2. Your salesperson should be
          able to show you many of the fine products available.
        </p>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          JS Aldo has the right team to assist you with your vision. Contact us
          for a consultation today!!!!
        </p>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>

      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
