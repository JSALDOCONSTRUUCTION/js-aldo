import Copyrights from '@/components/Copyrights'
import FixedButtons from '@/components/FixedButtons'
import Footer from '@/components/Footer'
import Gallery from '@/components/gallery'
import Header from '@/components/Header'
import React from 'react'

const page = () => {
  return (
    <>
      <Header />
      <FixedButtons />
      <Gallery />
      <Footer />
      <Copyrights />
    </>
  );
}

export default page
