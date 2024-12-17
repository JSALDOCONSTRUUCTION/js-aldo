import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa'; // Import React Icons
import { FaXTwitter } from 'react-icons/fa6';

const Socialicons = () => {
  return (
    <div>
      {/* Social Icons */}
      <div className="hidden md:flex space-x-4">
        <a
          href="https://www.facebook.com/people/JS-Aldo-Construction/100083047426637/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-[#a53748] text-white hover:bg-[#8b2c3d] transition-colors"
        >
          <FaFacebookF size={20} /> {/* Facebook icon */}
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-[#a53748] text-white hover:bg-[#8b2c3d] transition-colors"
        >
          <FaXTwitter size={20} /> {/* X icon instead of Twitter */}
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-[#a53748] text-white hover:bg-[#8b2c3d] transition-colors"
        >
          <FaYoutube size={20} /> {/* YouTube icon */}
        </a>
        <a
          href="https://www.instagram.com/jsaldoconstruction/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex justify-center items-center bg-[#a53748] text-white hover:bg-[#8b2c3d] transition-colors"
        >
          <FaInstagram size={20} /> {/* Instagram icon */}
        </a>
      </div>
    </div>
  );
};

export default Socialicons;
