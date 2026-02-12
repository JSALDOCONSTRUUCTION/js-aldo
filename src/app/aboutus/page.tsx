import React from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const RoofingSection: React.FC = () => {
  return (
    <>
    <Header />
    <section className="flex flex-col md:flex-row items-center justify-between p-6 bg-gray-100 mx-4 md:mx-16">
      <div className="w-full md:w-1/2 mb-6 md:mb-0">
        <Image
          src="/about1.jpg"
          alt="Roofing services"
          layout="responsive" // Ensures responsive scaling
          width={700} // Set width for the image
          height={500} // Set height for the image
          className="w-full h-auto object-cover rounded-lg max-w-lg mx-auto"
        />
      </div>
      <div className="w-full md:w-1/2 md:pl-8 p-6 md:p-24">
        <h2 className="text-2xl md:text-4xl font-semibold mb-4 mt-4">
          About Us
        </h2>

        <p className="text-sm md:text-base pr-4 sm:pr-6 md:pr-8 lg:pr-10 text-justify">
          JS Aldo Construction has been in business since 1990. We are a family owned and operated business. We specialize in home improvements, inside and outside. Both for residential and commercial
 
We operate in Passaic, Essex, Bergen, Hudson, Union, Morris and Warren counties primarily but will venture further depending on the project.
 
 
Please feel free to contact us regarding any construction improvement need.
        </p>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default RoofingSection;
