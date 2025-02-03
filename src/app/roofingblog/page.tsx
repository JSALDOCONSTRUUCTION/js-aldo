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
          ROOFING BLOG
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
          Understanding Roofing Issues and Systems
        </h3>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Insurance Companies and Roof Issues
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6 text-justify">
          Many people today are experiencing the rejection of insurance claims
          due to the condition of their roofs. Insurance companies reimburse for
          more leaky roof claims than almost any other type of claim, leading to
          many policies being rejected for roofs that appear older or show
          obvious patching and other repairs. If you have been rejected for a
          roof claim, you can schedule an appointment for us to come and write a
          report based on our findings. This may or may not sway the insurance
          company, but an extra set of eyes certainly won&apos;t hurt. This is a
          fee-based service.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Roofing Systems
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6 text-justify">
          A roofing system is defined as a complete job using most of one
          manufacturer&apos;s components. From the ice and water shield to the
          ridge caps and ridge venting, all components should be made by one
          company. For example, with GAF, it must include three other products
          in addition to the shingles.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Components
        </h4>
        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>Ice and water shield</li>
          <li>Underlayment</li>
          <li>Starters</li>
          <li>Shingles</li>
          <li>Ridge Caps</li>
        </ul>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Accessories
        </h4>
        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>Deck Mounted Fans</li>
          <li>Venting, both intake and exhaust</li>
          <li>Pipe collar boots</li>
        </ul>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6 text-justify">
          Utilizing a complete roofing system will entitle you to purchase a
          system warranty for a small additional charge, which is usually
          transferable within a certain time frame. This warranty is pro-rated
          and begins after the initial 10-year material warranty has finished.
        </p>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>

      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
