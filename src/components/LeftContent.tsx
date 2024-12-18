import Link from 'next/link';

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
      <div className="flex space-x-4 mt-4">
        <Link href="/blog">
          <button className="py-3 px-10 bg-[#a53748] text-white font-semibold rounded-md hover:bg-[#8b2c3d] transition-colors">
            BLOG
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LeftContent;
