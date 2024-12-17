import FixedButtons from '@/components/FixedButtons';
import BlogSection from '@/components/BlogSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <BlogSection />
      <Footer />
    </>
  );
};

export default page;
