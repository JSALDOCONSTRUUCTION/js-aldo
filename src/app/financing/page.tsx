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
          FINANCING
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
        <p className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          See your personalized monthly payment options within minutes and without affecting your credit score. No prepayment penalties. No home equity required.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-xl sm:text-2xl md:text-3xl lg:text-3xl mt-4">
          Hearth makes it easy for you to find monthly payment options for your project, with:
        </h4>

        <ul className="ml-4 sm:ml-10 md:ml-16 lg:ml-36 mt-4 text-black list-disc">
          <li>Loan amounts up to $250,000</li>
          <li>Affordable monthly payment options</li>
          <li>Funding within 1-3 days</li>
          <li>No prepayment penalties</li>
          <li>No home equity required</li>
        </ul>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6 font-bold">
          Find convenient monthly payment options for your project. See your personalized payment plans without affecting your credit score now.
        </p>

        {/* Hearth Banner */}
        <div className="flex justify-center my-8">
          <a
            href="https://app.gethearth.com/partners/js-aldo-construction?utm_campaign=51999&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://app.gethearth.com/contractor_images/js-aldo-construction/banner.jpg?size_id=700x110&color=darkblue"
              alt="Home Improvement Financing Banner"
              style={{ height: '110px', width: '700px' }}
            />
          </a>
        </div>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>
      <LogoSection />
      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
