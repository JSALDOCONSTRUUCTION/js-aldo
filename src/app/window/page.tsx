"use clint"
import FixedButtons from '@/components/FixedButtons'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WindowContentOne from '@/components/WindowContentOne'
import React from 'react'
import Image from 'next/image';
import Copyrights from '@/components/Copyrights'

const page = () => {
  return (
    <>
      <section className="bg-gray-50">
        <Header />
        <FixedButtons />
        {/* Top Image */}
        <div className="relative">
          <Image
            src="/roofing2.jpg"
            alt="Roofing"
            width={1200} // Set the width for your image (adjust based on the actual size)
            height={600} // Set the height for your image (adjust based on the actual size)
            className="object-cover h-[50vh] w-full"
          />
        </div>

        {/* Centered Heading */}
        <div className="text-center py-12">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#b2303c]">
            WINDOWS
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
              src="/win1.jpg"
              alt="Roofing Services"
              width={450} // Set the width of the image
              height={300} // Set the height of the image
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 px-4 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              We offer a few different windows, based on a few different price
              points for vinyl replacement.
            </h2>
            <div className="flex justify-center items-center mt-2">
              {/* Underline with dot */}
              <div className="border-t-2 border-black/60 w-1/6"></div>
              <div className="mx-2 bg-red-500 w-1 h-1"></div>
              <div className="border-t-2 border-black/60 w-1/6"></div>
            </div>
            <p className="mt-6 text-gray-700 leading-relaxed text-center sm:text-left">
              &quot;1&quot; being the least expensive to 4 being the more
              expensive option. <br />
              1. White vinyl interior and exterior. <br />
              2. Vinyl with colored or wood grained interiors <br />
              3. Wood interior / vinyl exterior <br />
              4. Energy Star rated, eligible for rebates and government
              incentive programs We offer custom windows by Simonton, Pella,
              United and others… <br />
              <span className="font-bold">
                We utilize the JS Aldo&apos;s Construction Triple S Platinum
                Installation <br />
                1. Squared <br /> 2. Sealed <br /> 3. Satisfaction Guaranteed.{' '}
                <br />
                Please book an appointment and discuss your windows needs with
                our sales team.
              </span>
            </p>
          </div>
        </div>
        <div className="list-section1 bg-black py-8">
          <div className="services-container max-w-7xl mx-auto px-6">
            <div className="flex flex-col lg:flex-row justify-between items-start">
              {/* First Group of Services */}
              <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
                <div className="service text-white">• Window Installation</div>
                <div className="service text-white">• Window Replacement</div>
              </div>

              {/* Spacing Between Groups */}
              <div className="flex-1"></div>

              {/* Second Group of Services */}
              <div className="services-group flex flex-col gap-4 mb-6 lg:mb-0">
                <div className="service text-white">• Window Caulking</div>
                <div className="service text-white">• Custom Window Design</div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
          {/* Left Image */}

          <div className="flex-1 flex justify-center">
            <Image
              src="/win2.jpeg"
              alt="Roofing Services"
              width={450} // Set the width of the image
              height={300} // Set the height of the image
              className="object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 px-4 lg:px-20">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Window Tips
            </h2>
            <div className="flex justify-center items-center mt-2">
              {/* Underline with dot */}
              <div className="border-t-2 border-black/60 w-1/6"></div>
              <div className="mx-2 bg-red-500 w-1 h-1"></div>
              <div className="border-t-2 border-black/60 w-1/6"></div>
            </div>

            <p className="mt-4 text-gray-700 leading-relaxed text-center sm:text-left">
              Here are some window tips. In reality the window is as good as the
              installation. If you check window reviews of vinyl replacement
              windows the common complaint is stickiness, window malfunction,
              and hardware failure. All but the last one is usually due to poor
              installation. We sell mostly Simonton, Pella and United (local NJ
              company) and they all offer Low E glass, Argon, double pane,
              welded vinyl frame windows. These are all moderately priced vinyl
              replacements. If you want a fancier window, there is always
              Andersen, Pella (higher end options) and many others that will do
              an upscale window.
            </p>
          </div>
        </div>
        <WindowContentOne />
        <Footer />
        <Copyrights />
      </section>
    </>
  );
}

export default page
