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
        <div className="relative w-full h-[50vh] overflow-hidden">
          <Image
            src="/carpentry2.jpg"
            alt="Carpentry"
            width={1920}
            height={800}
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
            <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
              <div className="border-t-2 border-black/60 w-1/6"></div>
              <div className="mx-2 bg-red-500 w-1 h-1"></div>
              <div className="border-t-2 border-black/60 w-1/6"></div>
            </span>
          </span>
        </div>

        {/* Content Section */}
        <div className="flex flex-col lg:flex-row items-center gap-12 px-8 py-12">
          
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <Image
              src="/carpentry3.jpg"
              alt="Carpentry Services"
              width={450}
              height={300}
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 px-4 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              CARPENTRY
            </h2>

            <div className="flex justify-center items-center mt-2 mb-10">
              <div className="border-t-2 border-black/60 w-1/6"></div>
              <div className="mx-2 bg-red-500 w-1 h-1"></div>
              <div className="border-t-2 border-black/60 w-1/6"></div>
            </div>

            {/* Side-by-Side Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-700 leading-relaxed">
              
              {/* Interior Carpentry */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#b2303c]">
                  Interior Carpentry
                </h3>
                <ul className="space-y-2">
                  <li>• Molding</li>
                  <li>• Doors</li>
                  <li>• Wainscoting</li>
                  <li>• Framing</li>
                  <li>• Painting</li>
                  <li>• Kitchens</li>
                  <li>• Bathrooms</li>
                </ul>
              </div>

              {/* Exterior Carpentry */}
              <div>
                <h3 className="text-xl font-semibold mb-4 text-[#b2303c]">
                  Exterior Carpentry
                </h3>
                <ul className="space-y-2">
                  <li>• Decks</li>
                  <li>• Pergolas</li>
                  <li>• Fascia and trim replacement</li>
                  <li>• Exterior painting</li>
                </ul>
              </div>

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
