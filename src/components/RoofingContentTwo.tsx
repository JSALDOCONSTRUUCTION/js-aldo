import React from "react";
import RoofingContentThree from "./RoofingContentThree";
import RoofingFaq from "./RoofingFaq";
import Image from "next/image";
import RoofingLogo from "./RoofingLogo";

const RoofingContentTwo = () => {
  return (
    <div>
      {/* Header Section */}

      {/* Content Section */}
    <div className="flex items-center justify-center min-h-screen px-4 lg:px-20">
        <div className="flex-1 max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            JS Aldo&apos;s Construction roofing packages based <br /> on
            different price points
          </h2>

          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          {/* Flex container for content and images */}
          <div className="flex flex-col lg:flex-row mt-6 gap-32">
            {/* Content Section */}
            <div className="flex-1 text-gray-700 leading-relaxed text-center sm:text-left sm:ml-4 md:ml-0">
              <p>
                JS Aldo Construction offers price point packages based on a good, better and best rating.
              </p>
              <p className="font-bold">
                All roofing packages come with the JS Aldo 15 Year Platinum Warranty.
              </p>
              
              <p className="font-bold">
                Brands include:
              </p>
             
              <p>
                GAF / IKO / Tamko / Owens Corning
              </p>
             <RoofingLogo />
            </div>

            {/* Images Section */}
            <div className="flex-1">
              <div className="relative mb-6">
                <Image
                  src="/roofing-before.jpg"
                  alt="Before"
                  width={400} // Set explicit width for optimization
                  height={350} // Set explicit height for optimization
                  className="object-cover"
                />
                <div className="absolute top-2 left-4 text-white text-xl font-bold">
                  Before
                </div>
              </div>
              <div className="relative">
                <Image
                  src="/roofing-after.jpg"
                  alt="After"
                  width={400} // Set explicit width for optimization
                  height={350} // Set explicit height for optimization
                  className="object-cover"
                />
                <div className="absolute top-2 left-4 text-white text-xl font-bold">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/roofing-after.jpg"
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

          <p className="mt-4 text-gray-700 leading-relaxed text-justify">
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
