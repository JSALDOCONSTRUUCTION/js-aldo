import Link from 'next/link';
import React from 'react';

const NavigationMenu = () => {
  return (
    <div>
      {/* Navigation Menu */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6">
          <li>
            <Link
              href="/"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              HOME
            </Link>
          </li>
          <li className="relative group">
            <div className="text-gray-800 hover:text-gray-600 font-bold">
              SERVICES <i className="fa fa-chevron-down ml-1"></i>
            </div>
            <ul className="absolute left-0 w-48 bg-white shadow-md rounded hidden group-hover:block">
              <li>
                <Link
                  href="/our-services"
                  className="block px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  OUR SERVICES
                </Link>
              </li>
              <li>
                <Link
                  href="/designing-and-drafting-service"
                  className="block px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  DESIGN & DRAFTING SERVICE
                </Link>
              </li>
              <li>
                <Link
                  href="/financing"
                  className="block px-4 py-2 hover:bg-gray-100 font-bold"
                >
                  FINANCING
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link
              href="/aboutus"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              href="/review"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              REVIEWS
            </Link>
          </li>
          <li>
            <Link
              href="/gallery"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              GALLERY
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              BLOG
            </Link>
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-gray-800 hover:text-gray-600 font-bold"
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMenu;
