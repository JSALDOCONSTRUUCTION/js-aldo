import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="service-card bg-[#0e1642] text-white shadow-lg flex flex-col h-full border-t border border-white/40">
      <div className="relative w-full h-[288px]">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill" // Automatically scales the image within the parent div
          objectFit="cover" // Ensures the image covers the div without distortion
          className="mb-2"
        />
      </div>
      <div className="p-10">
        <h3 className="text-xl font-bold mb-4">{title}</h3>
        <p className="mb-4 text-sm leading-loose">{description}</p>
        {/* Removed <a> tag */}
        <Link href={link}>
          <button className="btn-custom text-light bg-[#a53748] py-2 px-4 rounded-sm self-start mt-auto">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
