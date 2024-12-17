'use client';

import React from 'react';
import Socialicons from './Socialicons';

const Copyrights: React.FC = () => {
  return (
    <footer className="bg-black text-white py-4 px-8 flex flex-col sm:flex-row items-center justify-between">
      {/* Left Side - Copyright Text */}
      <p className="text-sm sm:ml-36 text-center sm:text-left">
        © Copyright 2024 JS Aldo&apos;s Construction. Designed and developed by{' '}
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

      {/* Right Side - Logo Components */}
      <div className="flex items-center space-x-4 mt-4 sm:mt-0 sm:mr-36 justify-center sm:justify-start">
        <Socialicons />
      </div>
    </footer>
  );
};

export default Copyrights;
