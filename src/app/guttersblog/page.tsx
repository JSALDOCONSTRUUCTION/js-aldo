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
          GUTTER BLOG
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
          Gutter Services by JS Aldo&apos;s Construction
        </h3>{' '}
        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          New Gutters
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          New gutters are essential for protecting your home from water damage
          and ensuring effective drainage. At JS Aldo&apos;s Construction, we
          specialize in installing high-quality gutters that safeguard your
          property and enhance its functionality. Our team will help you select
          the best gutter system for your home, explaining the advantages of
          different materials and designs. With our expert installation,
          you&apos;ll enjoy a reliable drainage solution that prevents issues
          like erosion and foundation damage, all while ensuring a perfect fit
          and optimal performance.
        </p>
        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Gutter Replacement
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Replacing outdated or damaged gutters is crucial for maintaining your
          home&apos;s protection and efficient water management. We specialize
          in high-quality gutter replacement that enhances your home&apos;s
          functionality and curb appeal. Our team will guide you in selecting
          the best replacement gutters, explaining the benefits of various
          materials and designs. Our expert installation ensures a seamless
          transition and reliable performance, preventing water damage and
          extending the life of your home&apos;s exterior.
        </p>
        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Gutter Cleaning Services
        </h4>
        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Regular gutter cleaning is vital for preventing water damage and
          ensuring efficient drainage. We provide professional gutter cleaning
          services to maintain your gutters and protect your home from potential
          issues. Our experienced team will thoroughly clean your gutters,
          removing leaves, debris, and blockages to ensure proper water flow and
          prevent overflow. With our meticulous service, you’ll avoid common
          problems like roof leaks, foundation damage, and landscape erosion.
        </p>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>

      <Footer />
    </>
  );
};

export default page;
