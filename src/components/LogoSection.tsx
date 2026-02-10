import React from "react";
import Image from "next/image";

const LogoSection: React.FC = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        <div className="flex justify-center">
          <Image
            src="/logo1.png"
            alt="Logo 1"
            width={144} // Adjust size as needed
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo2.png"
            alt="Logo 2"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo3.png"
            alt="Logo 3"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo4.png"
            alt="Logo 4"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
        <div className="flex justify-center">
          <Image
            src="/logo5.png"
            alt="Logo 5"
            width={144}
            height={144}
            className="transform transition-transform duration-300 hover:scale-110 cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
