import Link from "next/link";
import React from "react";

const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col sm:flex-row items-center justify-between bg-[#a53748] text-white py-6 px-8">
      {/* Left Section */}
      <div className="text-lg font-bold">
        Need any roofing help? Contact us now.
      </div>

      {/* Right Section */}
     <div className="mt-4 sm:mt-0">
  <Link
    href="/contact-us"
    className="inline-block border border-white text-white py-2 px-6 rounded-md font-bold hover:bg-white hover:text-[#a53748] transition duration-300"
  >
    CONTACT US NOW
  </Link>
</div>
    </section>
  );
};

export default ContactSection;
