import React from 'react';
import WindowsLogo from './Windowslogo';
import ContactUsForm from './ContactUsForm';
import Image from 'next/image';

const WindowContentOne = () => {
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
            width={450} // Set width for the image
            height={300} // Set height for the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Left Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Vinyl Replacement Windows
          </h2>

          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          {/* Content Section */}
          <p className="mt-4 text-gray-700 leading-relaxed text-center text-justify">
            As the season shifts, many homeowners start thinking about upgrading
            to vinyl replacement windows. When it comes to choosing new windows,
            two common questions arise: <br />
            <strong>• Can I get a rebate?</strong> Yes, you may be eligible for
            rebates on vinyl replacement windows. <br />
            <strong>• Are there energy-efficient options?</strong> Absolutely!
            You can select Energy Star-rated vinyl replacement windows to
            maximize efficiency.
          </p>
          <p className="mt-4 text-gray-700">
            For detailed information on available rebates and the benefits of
            Energy Star windows,
            <a
              href="https://www.energy.gov/policy/articles/making-our-homes-more-efficient-clean-energy-tax-credits-consumers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              click here to read more
            </a>
            .
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 px-8 py-12">
        {/* Left Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/roofing4.jpg"
            alt="Roofing Services"
            width={450} // Set the width for the image
            height={300} // Set the height for the image
            className="object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1 px-4 lg:px-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
            Explore Energy Star Certified Windows
          </h2>
          <div className="flex justify-center items-center mt-2">
            {/* Underline with dot */}
            <div className="border-t-2 border-black/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-black/60 w-1/6"></div>
          </div>

          <p className="mt-4 text-gray-700 leading-relaxed text-center text-justify">
            Discover energy-efficient replacement windows that can enhance your
            home&apos;s comfort and efficiency. Click below to find Energy Star
            certified windows that meet high performance standards:
          </p>

          {/* Button for Energy Star Certified Windows */}
          <div className="text-center mt-4">
            <a
              href="https://www.energystar.gov/most-efficient/me-certified-windows/results?formId=6026547-131-4-85553971330&scrollTo=645&search_text=&product_category_full_filter=&is_most_efficient_filter=Most+Efficient&is_most_efficient_filter=0&energy_star_climate_zone_filter=&product_type_full_filter_proxy=Double+Hung&product_type_full_isopen=0&energy_star_manufacturer_name_isopen=0&zip_code_filter=&product_types=Select+a+Product+Category&sort_by=product_type_full&sort_direction=asc&currentZipCode=07420&page_number=0&lastpage=0&product_type_full_filter=Double+Hung"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-[#a53748] text-white font-bold rounded-full hover:bg-[#8c2f3c] transition duration-300"
            >
              View Energy Star Certified Windows
            </a>
          </div>
        </div>
      </div>
      <WindowsLogo />
      <ContactUsForm />
    </div>
  );
};

export default WindowContentOne;
