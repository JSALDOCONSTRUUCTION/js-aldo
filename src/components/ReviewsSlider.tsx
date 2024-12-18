'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules'; // Correct import
import 'swiper/css'; // Import Swiper styles
import 'swiper/css/navigation'; // Import Swiper navigation styles
import { FaStar, FaQuoteLeft } from 'react-icons/fa'; // Icon imports

const ReviewsSlider: React.FC = () => {
  return (
    <section className="p-8 bg-white-100 border-b-2 border-gray-300">
      <h2 className="text-5xl font-bold text-center mb-4">
        WHAT OUR CUSTOMER SAY
      </h2>

      <div className="flex justify-center mb-4">
        {/* Golden Stars */}
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500 text-2xl" />
        ))}
      </div>

      <h3 className="text-xl text-center mb-8">5 Star Reviews!</h3>

      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // One slide at a time
        navigation // Enable navigation
        loop // Loop slides
        modules={[Navigation]} // Register the Navigation module
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="flex justify-center items-center p-6 bg--100 rounded-xl shadow-md">
            <div className="w-full text-center">
              {/* Centered Quote Icon */}
              <div className="flex justify-center items-center mb-4 text-4xl text-gray-500">
                <FaQuoteLeft />
              </div>
              {/* Customer Review */}
              <p className="text-lg text-gray-700 mb-4">
                &quot;The best roofing company we&apos;ve ever worked with!
                Excellent service, quick installation, and a team that truly
                cares about the quality of their work.&quot;
              </p>
              {/* Customer Name */}
              <p className="text-lg font-bold text-gray-800">John Doe</p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center items-center p-6 bg-gray-100 rounded-xl shadow-md">
            <div className="w-full text-center">
              <div className="flex justify-center items-center mb-4 text-4xl text-gray-500">
                <FaQuoteLeft />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                &quot;Fantastic experience! They made everything so easy and the
                roof looks amazing. I highly recommend them!&quot;
              </p>
              <p className="text-lg font-bold text-gray-800">Jane Smith</p>
            </div>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
        <SwiperSlide>
          <div className="flex justify-center items-center p-6 bg-gray-100 rounded-xl shadow-md">
            <div className="w-full text-center">
              <div className="flex justify-center items-center mb-4 text-4xl text-gray-500">
                <FaQuoteLeft />
              </div>
              <p className="text-lg text-gray-700 mb-4">
                &quot;Professional, efficient, and friendly. I couldn&apos;t
                have asked for a better roofing experience.&quot;
              </p>
              <p className="text-lg font-bold text-gray-800">Sarah Lee</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default ReviewsSlider;
