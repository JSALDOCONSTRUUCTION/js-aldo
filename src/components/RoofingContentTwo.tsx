import React from 'react';
import RoofingContentThree from './RoofingContentThree';
import RoofingFaq from './RoofingFaq';
import Image from 'next/image';

const RoofingContentTwo = () => {
  return (
    <div>
      {/* Header Section */}

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row-reverse items-center gap-8 px-8 py-12">
  {/* Right Image */}
  <div className="flex-1 flex justify-center">
    <Image
      src="/roofing5.jpg"
      alt="Roofing Services"
      width={450} // Set explicit width for optimization
      height={300} // Set explicit height for optimization
      className="object-cover rounded-lg shadow-lg"
    />
  </div>

  {/* Left Content */}
  <div className="flex-1 px-4 lg:px-20 lg:flex lg:flex-col lg:justify-center">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
      Commercial Roofing
    </h2>

    <div className="flex justify-center items-center mt-2">
      {/* Underline with dot */}
      <div className="border-t-2 border-black/60 w-1/6"></div>
      <div className="mx-2 bg-red-500 w-1 h-1"></div>
      <div className="border-t-2 border-black/60 w-1/6"></div>
    </div>

    {/* Content Section */}
    <div className="flex flex-col justify-center items-center mt-6 text-gray-700 leading-relaxed text-center sm:text-left sm:ml-4 md:ml-0"> 
      <ul className="list-none pl-4 mt-2">
        <li>
          <strong>• TPO and PVC Systems</strong>
        </li>
        <li>
          <strong>• Asphalt Systems for Smaller Roofs</strong>
        </li>
        <li>
          <strong>• Complete Tear-Offs</strong>
        </li>
        <li>
          <strong>• Coatings</strong>
        </li>
        <li>
          <strong>• Repairs and Maintenance Plans:</strong>
          <ul className="list-none mt-2">
            <li>• Emergency Repairs</li>
            <li>• Snow Removal</li>
            <li>• Coating Plans</li>
          </ul>
        </li>
      </ul>
      <p className="mt-4">
        Please contact JS Aldo&apos;s Construction today for your free roof estimate.
      </p>
    </div>
  </div>
</div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/public/gallery/image14.jpg"
            alt="Roofing Services"
            width={450} // Set explicit width for optimization
            height={300} // Set explicit height for optimization
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Roof Repair & Maintenance
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed text-center text-justify">
            For immediate assistance with repairs, please call the office at
            973-445-4511 and we will respond immediately. Leaks, shingle
            blow-offs, gutter disconnections, or any maintenance
            emergency—please do not hesitate to contact us.
          </p>
        </div>
      </div>
      <RoofingContentThree />
      <RoofingFaq />
    </div>
  );
};

export default RoofingContentTwo;
