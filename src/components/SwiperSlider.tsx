import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import the Swiper styles
import Image from 'next/image'; // Import Next.js Image for optimization

const SwiperSlider: React.FC = () => {
  return (
    <section className="p-0 m-0 bg-gray-100">
      <Swiper
        spaceBetween={0} // Remove space between slides
        slidesPerView={1} // One slide at a time
        navigation
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
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow">
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
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow">
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
            <p className="absolute text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold left-4 top-1/4 text-shadow">
              Our Best Roofing,
              <br /> Windows and <br />
              Gutter Services
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SwiperSlider;
