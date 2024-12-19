import ContactUsForm from '@/components/ContactUsForm';
import Copyrights from '@/components/Copyrights';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <>
      <section className="bg-gray-50">
        <Header />
        <FixedButtons />
        {/* Top Image */}
        <div className="relative w-full h-[50vh] overflow-hidden ">
          <Image
            src="/masonry3.jpg"
            alt="Roofing"
            width={1200} // Specify the width of the image (you can adjust to match the container size)
            height={600} // Specify the height to match the container height
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
              src="/masonry.jpg"
              alt="Roofing Services"
              width={450} // Specify the width of the image
              height={300} // Specify the height of the image
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 px-4 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Carpentry
            </h2>
            <div className="flex justify-center items-center mt-2">
              {/* Underline with dot */}
              <div className="border-t-2 border-black/60 w-1/6"></div>
              <div className="mx-2 bg-red-500 w-1 h-1"></div>
              <div className="border-t-2 border-black/60 w-1/6"></div>
            </div>

            <div className="flex flex-col justify-center items-center mt-6 text-gray-700 leading-relaxed sm:text-left">
              <p className="mt-4">• Decks</p>
              <p className="mt-4">• Framing</p>
              <p className="mt-4">• Walls</p>
              <p className="mt-4">• Additions</p>
              <p className="mt-4">• Kitchens</p>
              <p className="mt-4">• Bathrooms</p>
            </div>
          </div>
        </div>
        <ContactUsForm />
        <Footer />
        <Copyrights />
      </section>
    </>
  );
};

export default page;
