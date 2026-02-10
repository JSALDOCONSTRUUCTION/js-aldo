"use client";

import React from "react";

const Copyrights: React.FC = () => {
  return (
    <footer className="bg-[#18245b] text-white py-4 px-8 flex flex-col sm:flex-row items-center justify-between border-t border-b border-white/50">
      {/* Left Side - Copyright Text */}
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-md text-center">
          © Copyright 2026 JS Aldo&apos;s Construction.All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Copyrights;
