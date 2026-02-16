import React from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      imageSrc: "/roofing1.jpg",
      title: "ROOFING",
      description:
  "Residential / Commercial\nWe offer very competitive rates. Complete with manufacturer warranties and our own\n15 Year Platinum Warranty.",

      link: "/roofing",
    },
    {
      imageSrc: "/siding1.jpg",
      title: "SIDING",
      description:
        "All styles of vinyl siding\nCement Board sidings\nPVC No rot designer trim",
      link: "/siding",
    },
    {
      imageSrc: "/window1.jpeg",
      title: "WINDOWS",
      description:
        "The best vinyl replacement windows\nFully installed, energy efficient\nPella, Andersen, Simonton",
      link: "/window",
    },
    {
      imageSrc: "/gutter1.jpg",
      title: "GUTTERS",
      description:
        "Residential / Commercial applications\n5”, 6”, 7” Sizes, Aluminum and other materials\nMany styles of gutter screens",
      link: "/gutter",
    },
    {
      imageSrc: "/carpentry.jpg",
      title: "CARPENTRY",
      description:
        "Porches, Decks, Doors\nSteps, railings, molding\nRepair and replace",
      link: "/carpentry",
    },
    {
      imageSrc: "/masonry.jpg",
      title: "MASONRY",
      description:
        "Slabs, stairs, sidewalks\nPavers, patios, driveways\nRetaining walls, and other projects",
      link: "/masonry",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-80 bg-[#18245b] pt-12 pb-16 border-t">
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        OUR SERVICES
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
