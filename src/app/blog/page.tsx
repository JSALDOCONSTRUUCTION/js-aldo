import FixedButtons from '@/components/FixedButtons';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import Copyrights from '@/components/Copyrights';

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <BlogSection />
      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
