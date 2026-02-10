"use client"; // Add this directive at the top

import React from "react";
import Link from "next/link";

const BlogSection: React.FC = () => {
  return (
    <section className="bg-[#18245b] py-12">
      <h2 className="text-center text-4xl font-bold text-white mb-16 relative">
        BLOG SECTION
        <span className="absolute left-0 right-0 -bottom-8 flex justify-center">
          {/* Line 1 */}
          <div className="border-t-2 border-white/60 w-1/6"></div>
          {/* Red Dot */}
          <div className="mx-2 bg-red-500 w-1 h-1"></div>
          {/* Line 2 */}
          <div className="border-t-2 border-white/60 w-1/6"></div>
        </span>
      </h2>
      <div className="flex flex-col items-center gap-8">
        {/* Buttons */}
        <Link
          href="/roofingblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          ROOFING
        </Link>
        <Link
          href="/sidingblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          SIDING
        </Link>
        <Link
          href="/windowsblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          WINDOWS
        </Link>
        <Link
          href="/guttersblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          GUTTERS
        </Link>
        <Link
          href="/carpentryblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          CARPENTRY
        </Link>
        <Link
          href="/masonryblog"
          className="bg-[#b2303f] text-white py-6 px-12 rounded-lg text-lg w-[80%] max-w-[800px] hover:bg-[#152049] transition-colors duration-300 text-center"
        >
          MASONRY
        </Link>
      </div>
    </section>
  );
};

export default BlogSection;
