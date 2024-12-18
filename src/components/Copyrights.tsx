'use client';

import React from 'react';

const Copyrights: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 px-8 flex flex-col sm:flex-row items-center justify-between border-t border-b border-white">
      {/* Left Side - Copyright Text */}
      <div className="flex justify-center items-center h-full w-full">
        <p className="text-md text-center">
          © Copyright 2024 JS Aldo&apos;s Construction. Designed and developed
          by{' '}
          <a
            href="https://compumaxllc.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            Compumax LLC
          </a>
          .
        </p>
      </div>
    </footer>
  );
};

export default Copyrights;
