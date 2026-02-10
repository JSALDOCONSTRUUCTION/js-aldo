import React from "react";
import ServiceCard, { ServiceCardProps } from "./ServiceCard";

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      imageSrc: "/roofing1.jpg",
      title: "ROOFING",
      description:
        "Roofing entails installing and maintaining the protective outer layer of a building. It shields the structure from weather elements and enhances its durability and appearance.",
      link: "/roofing",
    },
    {
      imageSrc: "/siding1.jpg",
      title: "SIDING",
      description:
        "Siding is the exterior material applied to a building’s walls for protection and aesthetics. It helps insulate the home and defends against weather while contributing to the overall design.",
      link: "/siding",
    },
    {
      imageSrc: "/window1.jpeg",
      title: "WINDOWS",
      description:
        "JS Aldo's Construction offers vinyl replacement windows and replacement doors for better energy efficiency.",
      link: "/window",
    },
    {
      imageSrc: "/gutter1.jpg",
      title: "GUTTERS",
      description:
        "Gutters are channels installed along the edges of a roof to collect and direct rainwater away from the building’s foundation. They help prevent water damage and erosion.",
      link: "/gutter",
    },
    {
      imageSrc: "/carpentry.jpg",
      title: "CARPENTRY",
      description:
        "Carpentry involves the craft of working with wood to create, install, and repair structures and fixtures. It includes tasks such as framing, cabinetry, and trim work.",
      link: "/carpentry",
    },
    {
      imageSrc: "/masonry.jpg",
      title: "MASONRY",
      description:
        "Masonry involves building structures from individual units laid in and bound together by mortar. It includes tasks like brickwork, stonework, and concrete work.",
      link: "/masonry",
    },
  ];

  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-80 bg-[#18245b] pt-12 pb-16 border-t">
      {/* Heading */}
      <h2 className="text-3xl text-white font-bold mb-8 text-center">
        OUR SERVICES
      </h2>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 text-justify">
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            imageSrc={service.imageSrc}
            title={service.title}
            description={service.description}
            link={service.link}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
