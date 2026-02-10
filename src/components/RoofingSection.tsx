import React from "react";
import Image from "next/image";

const RoofingSection: React.FC = () => {
  return (
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
          Our professional team provides quality roofing services
        </h2>

        <p className="text-sm md:text-base pr-4 sm:pr-6 md:pr-8 lg:pr-10 text-justify">
          Our professional team delivers top-quality roofing services,
          specializing in installation, repairs, and maintenance. With a
          commitment to excellence, we ensure durable and reliable roofs
          tailored to meet the unique needs of every client. Trust our expertise
          to safeguard your property with superior craftsmanship and materials.
        </p>
      </div>
    </section>
  );
};

export default RoofingSection;
