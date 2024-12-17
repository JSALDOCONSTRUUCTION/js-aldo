import React from 'react';
import Image from 'next/image';

const RoofingContentThree: React.FC = () => {
  return (
    <section
      id="section-services"
      className="jarallax text-light padding-zero"
      style={{ backgroundColor: '#ffffff' }}
    >
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
                JS Aldo&apos;s Construction offers a few different roofing
                packages based on different price points.
              </p>
              <p className="font-bold">
                Our economical, or base package, is a great bargain for those on
                a budget:
              </p>
              <ul className="list-none pl-4 mt-2">
                <li>
                  • Ice and water shield: Carlisle WIP 100 Ice and water shield
                  or equivalent
                </li>
                <li>
                  • Synthetic Underlayment: Distributor brand (ABC, Beacon)
                </li>
                <li>
                  • Shingles: GAF Timberline HDZ, Owens Corning Duration, IKO
                  Cambridge, or Tamko Titan XT
                </li>
                <li>
                  • JS Aldo&apos;s Construction Platinum Warranty: 10 years
                  against installation-related issues
                </li>
                <p className="font-bold">
                  Our second-level pricing is a system offering where all
                  components must be from <br />
                  the same manufacturer, enabling the consumer to purchase an
                  additional <br /> manufacturer&apos;s warranty if desired:
                </p>
                <li>
                  • Repairs and Maintenance Plans:
                  <ul className="list-none mt-2">
                    <li>• Ice and water shield: GAF Weatherwatch</li>
                    <li>• Synthetic Underlayment: GAF FeltBuster</li>
                    <li>• Shingles: GAF Timberline HDZ</li>
                    <li>• Caps: GAF Seal-A-Ridge</li>
                    <li>
                      • Ridge Venting (if applicable): GAF Cobra Exhaust Vent
                    </li>
                  </ul>
                </li>
              </ul>
              <p className="font-bold">
                Our third-level pricing is also a system package where all
                components are from <br />
                the same manufacturer, but it is their premium grade products:
              </p>
              <li>
                • Repairs and Maintenance Plans:
                <ul className="list-none mt-2">
                  <li>• Ice and water shield: GAF Weatherwatch</li>
                  <li>• Synthetic Underlayment: GAF FeltBuster</li>
                  <li>• Shingles: GAF Timberline HDZ or UHDZ</li>
                  <li>• Caps: GAF Seal-A-Ridge / Timbertex</li>
                  <li>
                    • Ridge Venting (if applicable): GAF Cobra Exhaust Vent or
                    equivalent
                  </li>
                </ul>
              </li>
              <p>
                The same grade systems can be assembled using any
                manufacturer&apos;s product line. Manufacturers design their
                shingles and accessories to perform at their peak when used as a
                system.
              </p>
              <p>
                Please contact JS Aldo&apos;s Construction today for your free
                roof estimate.
              </p>
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
    </section>
  );
};

export default RoofingContentThree;
