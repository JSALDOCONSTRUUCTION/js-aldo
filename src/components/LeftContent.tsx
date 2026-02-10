import Link from "next/link";

const LeftContent = () => {
  return (
    <div className="w-full md:w-1/2 px-4 py-6 flex flex-col justify-center">
      <h2 className="text-3xl font-bold mb-4 text-white">Get in Touch</h2>
      <h2 className="text-3xl font-bold mb-4 text-white">Book A Service</h2>
      <p className="text-2xl text-white mb-4">
        The latest tips, trends and resources!
      </p>

      {/* List of items with dots */}
      <div className="space-y-4 mb-4 text-white">
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
        <p className="text-2xl text-white mb-4">
          The latest tips, trends and resources!
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col space-y-6 mt-4">
        <Link href="/blog">
          <button className="py-3 px-10 bg-[#a53748] text-white font-semibold rounded-md hover:bg-[#8b2c3d] transition-colors">
            BLOG
          </button>
        </Link>

        {/* Hearth Banner */}
        <div className="flex justify-left">
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
