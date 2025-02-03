import React from 'react';
import Socialicons from './Socialicons';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e1642] text-white py-12 border-t border-white/20">
      <div className="bg-[#0e1642] text-white py-6">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {/* First Column: Logo and Social Media */}
            <div className="flex flex-col items-start space-y-4">
              <div className="text-xl font-semibold">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={128} // Width in pixels
                  height={64} // Height in pixels
                  className="w-32 h-auto"
                />
              </div>
              <Socialicons />
              <p className="text-sm text-white mt-4">
                Our professional team delivers top-quality roofing services,
                specializing in installation, repairs, and maintenance.
              </p>
            </div>

            {/* Second Column: Other Services */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-[#a53748]">
                OTHER SERVICES
              </h3>
              <ul className="space-y-1">
                <li>
                  <a href="/roofing" className="text-white hover:text-gray-300">
                    Roofing
                  </a>
                </li>
                <li>
                  <a href="/window" className="text-white hover:text-gray-300">
                    Windows
                  </a>
                </li>
                <li>
                  <a href="/gutter" className="text-white hover:text-gray-300">
                    Gutter
                  </a>
                </li>
                <li>
                  <a href="/siding" className="text-white hover:text-gray-300">
                    Siding
                  </a>
                </li>
                <li>
                  <a
                    href="/carpentry"
                    className="text-white hover:text-gray-300"
                  >
                    Carpentry
                  </a>
                </li>
                <li>
                  <a href="/masonry" className="text-white hover:text-gray-300">
                    Masonry
                  </a>
                </li>
              </ul>
            </div>

            {/* Third Column: Contact Us */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold mb-3 text-[#a53748]">
                CONTACT US
              </h3>
              <p className="text-sm pb-3">
                <span className="text-red-500">Phone:</span>{' '}
                <span className="text-white">973-445-4511</span>
              </p>
              <p className="text-sm pb-3">
                <span className="text-red-500">Email:</span>{' '}
                <span className="text-white">
                  jvanburen@jsaldoconstruction.com
                </span>
              </p>
              <p className="text-sm pb-3">
                <span className="text-red-500">Email:</span>{' '}
                <span className="text-white">
                  office@jsaldoconstruction.com
                </span>
              </p>
              <p className="text-sm pb-3">
                <span className="text-red-500">Web:</span>{' '}
                <a href="http://jsaldoconstruction.com" className="text-white">
                  jsaldoconstruction.com
                </a>
              </p>
              <p className="text-sm pb-3">
                <span className="text-red-500">REG.NO:</span>{' '}
                <span className="text-white">13VH031133100</span>
              </p>
            </div>

            {/* Fourth Column: Quick Links */}
            <div className="flex flex-col space-y-2">
              <h3 className="text-lg font-semibold text-[#a53748]">
                QUICK LINKS
              </h3>

              <ul className="space-y-1">
                <li>
                  <Link href="/" className="text-white hover:text-gray-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white hover:text-gray-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/our-services"
                    className="text-white hover:text-gray-300"
                  >
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/designing-and-drafting-service"
                    className="text-white hover:text-gray-300"
                  >
                    Design & Drafting Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/review"
                    className="text-white hover:text-gray-300"
                  >
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white hover:text-gray-300">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-white hover:text-gray-300"
                  >
                    Contactt
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
