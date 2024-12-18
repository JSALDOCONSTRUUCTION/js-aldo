import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; // React components
import 'swiper/css'; // Swiper core styles
import 'swiper/css/navigation'; // Navigation styles
import 'swiper/css/autoplay'; // Autoplay styles (optional)

import { Navigation, Autoplay } from 'swiper/modules'; // Import modules correctly for Swiper >= v7
import Image from 'next/image'; // Next.js Image optimization

const SwiperSlider: React.FC = () => {
  return (
    <section className="p-0 m-0 bg-gray-100">
      <Swiper
        modules={[Navigation, Autoplay]} // Use modules directly in Swiper
        spaceBetween={0} // Remove space between slides
        slidesPerView={1} // One slide at a time
        navigation // Enable navigation
        loop
        autoplay={{ delay: 5000 }} // Auto-slide every 5 seconds
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-[600px] w-full relative">
            <Image
              src="/slide1.jpg"
              alt="Roofing services"
              layout="fill" // Fills the container while maintaining the aspect ratio
              objectFit="cover" // Ensures the image covers the area without distortion
            />
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow pl-10">
              Elevate Your
              <br /> Home with
              <br /> Superior Roofing
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-[600px] w-full relative">
            <Image
              src="/slide2.jpg"
              alt="Roof repair"
              layout="fill" // Fills the container while maintaining the aspect ratio
              objectFit="cover" // Ensures the image covers the area without distortion
            />
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow pl-10">
              Professional
              <br /> Windows for <br />
              Safety and Style
            </p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div className="flex justify-center items-center h-[600px] w-full relative">
            <Image
              src="/slide3.jpg"
              alt="Roof maintenance"
              layout="fill" // Fills the container while maintaining the aspect ratio
              objectFit="cover" // Ensures the image covers the area without distortion
            />
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow pl-10">
              Our Best Roofing,
              <br /> Windows and <br />
              Gutter Services
            </p>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Buttons */}
    
    
    </section>
  );
};

export default SwiperSlider;
