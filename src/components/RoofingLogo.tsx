import React from "react";
import Image from "next/image";
import Link from "next/link";

const logos = [
  { src: "/logo1.png", alt: "Roofing Company Logo 1", href: "https://www.gaf.com/en-us/residential" },
  { src: "/logo10.jpg", alt: "Roofing Company Logo 2", href: "https://www.owenscorning.com/en-us/roofing" },
  { src: "/iko.png", alt: "Roofing Company Logo 3", href: "https://www.iko.com/na" },
  { src: "/tmko.png", alt: "Roofing Company Logo 4", href: "https://www.tamko.com/" },
 
];

const RoofingLogo: React.FC = () => {
  return (
    <section className="p-6 bg-gray-100">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
        {logos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <Link href={logo.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={144}
                height={144}
                className="transition-transform duration-300 hover:scale-110 cursor-pointer"
              />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RoofingLogo;
