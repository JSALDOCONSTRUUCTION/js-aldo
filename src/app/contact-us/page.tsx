import ContactSection from '@/components/ContactSection';
import ContactUsForm from '@/components/ContactUsForm';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />

      <div className="relative">
        <Image
          src="/roofing2.jpg" // Make sure the image path starts from the public directory
          alt="Roofing"
          width={1200} // Specify the width of the image (adjust as needed)
          height={600} // Specify the height of the image (adjust as needed)
          className="w-full h-[50vh] object-cover"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white">
          <h1 className="pl-4 sm:pl-10 md:pl-44 text-4xl sm:text-5xl md:text-6xl font-bold text-left">
            Our Best Roofing <br /> Service & <br />
            Consulting
          </h1>
        </div>
      </div>

      <FixedButtons />

      <ContactUsForm />
      <ContactSection />
      <Footer />
    </>
  );
};

export default page;
