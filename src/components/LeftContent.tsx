import Link from "next/link";
import { FaMapMarkerAlt, FaPhone } from "react-icons/fa";

const LeftContent = () => {
  return (
    <div className="w-full md:w-1/2 px-4 py-6 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-2 text-white">Get in Touch</h2>
      <h2 className="text-3xl font-bold mb-4 text-white">Book A Service</h2>

      <p className="text-xl text-white mb-6">
        The latest tips, trends and resources!
      </p>

      {/* Address Section */}
      <div className="text-sm text-gray-200 space-y-5 mb-6">

        {/* Main Office */}
        <div>
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Main Office / Warehouse
          </p>

          <div className="flex items-start gap-2 mt-2">
            <FaMapMarkerAlt className="text-red-600 mt-1" />
            <p>
              JS Aldo Construction <br />
              69 Buffalo Ave <br />
              Paterson, NJ 07503
            </p>
          </div>
        </div>

        {/* Sales Office */}
        <div>
          <p className="text-red-600 font-semibold uppercase tracking-wide">
            Sales Office – Wanaque
          </p>

          <div className="flex items-center gap-2 mt-2">
            <FaPhone className="text-red-600" />
            <a
              href="tel:+12016555721"
              className="hover:text-white transition"
            >
              201-655-5721
            </a>
          </div>
        </div>

      </div>

      {/* List Section */}
      <div className="space-y-4 mb-6 text-white">
        <p className="flex items-center">
          <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
          Featured Projects
        </p>
        <p className="flex items-center">
          <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
          Homeowner Testimonials
        </p>
        <p className="flex items-center">
          <span className="w-3 h-3 bg-white rounded-full mr-3"></span>
          Special Event Announcements
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col space-y-6 mt-4">
        <Link href="/blog">
          <button className="py-3 px-10 bg-[#a53748] text-white font-semibold rounded-md hover:bg-[#8b2c3d] transition-colors">
            BLOG
          </button>
        </Link>

        <div className="flex justify-start">
          <a
            href="https://app.gethearth.com/partners/js-aldo-construction?utm_campaign=51999&utm_content=darkblue&utm_medium=contractor-website&utm_source=contractor&utm_term=700x110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://app.gethearth.com/contractor_images/js-aldo-construction/banner.jpg?size_id=700x110&color=darkblue"
              alt="Home Improvement Financing Banner"
              className="w-[300px] h-auto sm:w-[400px] md:w-[400px] lg:w-[500px]"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftContent;
