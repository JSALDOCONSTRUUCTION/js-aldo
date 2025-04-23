import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import LogoSection from '@/components/LogoSection';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      {/* ROOFING BLOG Heading with Background */}
      <section className="bg-[#18245b] py-12">
        <h2 className="text-center text-6xl font-bold text-white">
          WINDOWS BLOG
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

      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-8 text-justify">
        <h3 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Understanding Window Specifications
        </h3>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          What is the U-Factor?
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          The U-Factor measures how much heat is transferred through a complete
          window. The lower the U-Factor, the better the window&apos;s
          insulating properties. Typically, double-pane, white vinyl windows
          will have a U-Factor between 0.25 and 1.24. Triple-pane windows can
          have a U-Factor as low as 0.15, which is why some windows qualify for
          Energy Star rebates. The optimal U-Factor for your location depends on
          your climate. In the Northeast, there are two zones: a very cold zone
          (Northern) and North-Central. New Jersey falls in the latter zone,
          where a U-Factor of 0.25 to 0.32 is typically ideal.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          What is the SHGC? (Solar Heat Gain Coefficient)
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          The Solar Heat Gain Coefficient (SHGC) represents how much heat from
          the sun passes through a window. People in colder regions may prefer a
          higher SHGC, around 0.35 to 0.60, to allow more solar heat gain. Those
          in mixed climate zones generally aim for an SHGC of 0.30 or lower to
          minimize additional heat. The higher the SHGC, the more heat is added
          from sunlight; the lower the SHGC, the less heat is added. This is
          where “Low-E” glass coatings are beneficial.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Air Leakage
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Air leakage measures how much air escapes through a window. Regardless
          of the zone, it is desirable to have this number as low as possible.
          The window will have an air leakage rating, but proper installation is
          also crucial for minimizing air leakage.
        </p>
        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          What Qualifies as an Energy Star Rated Window?
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          To qualify as Energy Star rated, a window must meet the following
          criteria:
        </p>
        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>U-Factor: 0.30 or less</li>
          <li>SHGC: 0.40 or less</li>
          <li>Air Leakage: 0.3 cubic feet or less</li>
        </ul>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Windows that meet these criteria are certified through rigorous
          testing. Many Energy Star windows are triple-pane, use a heavier gas
          than argon (which is typical in double-pane windows), and may have
          insulated vinyl cavities. However, the most important factor in window
          performance is proper installation.
        </p>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>
<LogoSection />
      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
