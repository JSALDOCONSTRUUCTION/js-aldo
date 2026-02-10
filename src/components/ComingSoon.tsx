import React from "react";

const ComingSoon: React.FC = () => {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/coming-soon.jpg')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 flex items-center justify-center text-white">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-center">
          COMING SOON
        </h1>
      </div>
    </div>
  );
};

export default ComingSoon;
