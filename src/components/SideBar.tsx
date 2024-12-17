import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'; // Import React Icons
import { FaXTwitter } from 'react-icons/fa6';


// Define types for the props
interface SideBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const SideBar: React.FC<SideBarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={toggleSidebar}>
            <i className="fa fa-times fa-lg text-gray-800"></i>
          </button>
        </div>
        <ul className="mt-4 space-y-4">
          <li>
            <Link href="/">
              <span className="block px-4 py-2 hover:bg-gray-100">HOME</span>
            </Link>
          </li>
          <li className="relative group">
            <Link href="#">
              <span className="px-4 py-2 flex justify-between hover:bg-gray-100">
                SERVICES <i className="fa fa-chevron-down"></i>
              </span>
            </Link>
            <ul className="mt-2 ml-4 space-y-2">
              <li>
                <Link href="/our-services">
                  <span className="block px-4 py-2 hover:bg-gray-100">
                    OUR SERVICES
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/designing-and-drafting-service">
                  <span className="block px-4 py-2 hover:bg-gray-100">
                    DESIGN & DRAFTING SERVICE
                  </span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#">
              <span className="block px-4 py-2 hover:bg-gray-100">
                ABOUT US
              </span>
            </Link>
          </li>
          <li>
            <Link href="/review">
              <span className="block px-4 py-2 hover:bg-gray-100">REVIEWS</span>
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              <span className="block px-4 py-2 hover:bg-gray-100">GALLERY</span>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <span className="block px-4 py-2 hover:bg-gray-100">BLOG</span>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <span className="block px-4 py-2 hover:bg-gray-100">CONTACT</span>
            </Link>
          </li>
        </ul>
        <div className="mt-8 px-4">
          <div className="flex space-x-4">
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
      </div>
    </div>
  );
};

export default SideBar;
