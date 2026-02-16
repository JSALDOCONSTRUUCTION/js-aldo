import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  imageSrc,
  title,
  description,
  link,
}) => {
  return (
    <div className="service-card bg-[#0e1642] text-white shadow-lg flex flex-col h-full border border-white/40">
      
      {/* Image */}
      <div className="relative w-full h-[288px]">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-10 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-4">{title}</h3>

        {/* flex-grow makes description take remaining space */}
        <p className="mb-6 text-sm leading-loose whitespace-pre-line flex-grow">
          {description}
        </p>

        {/* Button pushed to bottom */}
        <Link href={link} className="mt-auto">
          <button className="btn-custom bg-[#a53748] py-2 px-4 rounded-sm hover:opacity-90 transition">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
