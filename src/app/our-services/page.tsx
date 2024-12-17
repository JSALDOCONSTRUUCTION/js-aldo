import ContactSection from '@/components/ContactSection';
import FixedButtons from '@/components/FixedButtons';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ServicesSection from '@/components/ServicesSection';
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default page
