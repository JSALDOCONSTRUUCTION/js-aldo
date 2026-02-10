import Copyrights from "@/components/Copyrights";
import FixedButtons from "@/components/FixedButtons";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LogoSection from "@/components/LogoSection";
import React from "react";

const page = () => {
  return (
    <>
      <Header />
 <FixedButtons />
      {/* DECKS BLOG Heading with Background */}
      <section className="bg-[#18245b] py-12">
        <h2 className="text-center text-6xl font-bold text-white">
          CARPENTRY BLOG
        </h2>

        <span className="relative block mt-4">
          {/* Underline with dot */}
          <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
            <div className="border-t-2 border-white/60 w-1/6"></div>
            <div className="mx-2 bg-red-500 w-1 h-1"></div>
            <div className="border-t-2 border-white/60 w-1/6"></div>
          </span>
        </span>
      </section>

      {/* Content Section */}
      <section className="py-8 px-4 sm:px-6 md:px-8 lg:px-8 text-justify">
        <h3 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Decks by JS Aldo&apos;s Construction
        </h3>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          There is no exterior home improvement more gratifying than a deck or
          patio. These additions serve your needs and provide enjoyment for
          eight to ten months out of the year. One of the great advantages of
          decks is that, due to the wide variety of materials available, almost
          any deck you can imagine can be designed and built.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Deck Materials
        </h4>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          The most basic deck material is pressure-treated southern pine lumber.
          This material is commonly used for the frame, decking, and railings.
          It requires staining every three to five years and regular
          maintenance. Pressure-treated lumber is available in #1 Premium Grade
          and #2 Grade. The #1 grade has fewer knots, a better aesthetic
          appearance, and generally superior quality. Most lumber yards carry #1
          grade lumber, while #2 grade lumber, which may have more
          imperfections, is often available at big box stores at a lower cost.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Polymer, Synthetic Decks & Rails
        </h4>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Over the past five to ten years, there has been a major expansion in
          the variety of polymer and synthetic decking materials available.
          Brands such as Trex, TimberTech, Fiberon, Azek, and many others offer
          a wide range of styles, colors, and finishes. These materials provide
          long-lasting durability and reduced maintenance. Due to the variety
          available, this blog cannot fully cover all composite and polymer
          decking options in detail.
        </p>

        <h4 className="text-left ml-4 sm:ml-10 md:ml-16 lg:ml-36 font-bold text-black text-2xl sm:text-3xl md:text-4xl lg:text-4xl mt-4">
          Helpful Tips
        </h4>

        <ul className="list-disc px-8 sm:px-12 md:px-16 lg:px-44 py-6 space-y-3">
          <li>
            Check with your local building department to understand the
            requirements for building a deck. Some departments provide design
            guidelines and may take four months or longer to approve deck plans,
            so start early.
          </li>
          <li>
            Ensure you have a current property survey available before beginning
            the process.
          </li>
          <li>
            Hire a licensed designer or exterior design professional for deck
            plans. In New Jersey, contractors are not legally permitted to
            provide design plans. If discovered, construction may be halted or
            the deck may need to be removed.
          </li>
          <li>
            Verify that your home improvement contract is complete and
            compliant. Always obtain copies of the contractor&apos;s company
            registration and insurance certificates.
          </li>
        </ul>

        <p className="px-4 sm:px-6 md:px-8 lg:px-36 py-6">
          Please call and schedule an appointment to have our sales engineer
          visit your property and discuss your deck or patio project in detail.
        </p>
      </section>

      <section className="w-full h-11 bg-[#18245b]"></section>
      <LogoSection />
      <Footer />
      <Copyrights />
    </>
  );
};

export default page;
