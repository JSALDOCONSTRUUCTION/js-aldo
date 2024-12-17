'use client';

import Footer from '@/components/Footer';
import Header from '../components/Header';
import ServicesSection from '@/components/ServicesSection';
import RoofingSection from '@/components/RoofingSection';
import LogoSection from '@/components/LogoSection';
import SwiperSlider from '@/components/SwiperSlider';
import ReviewsSlider from '@/components/ReviewsSlider';
import ContactUsForm from '@/components/ContactUsForm';

export default function Home() {
  return (
    <>
      <Header />
      <SwiperSlider />  
      <ServicesSection />
      <RoofingSection />
      <LogoSection />
      <ReviewsSlider />
      <ContactUsForm />
      <Footer />
    </>
  );
}
