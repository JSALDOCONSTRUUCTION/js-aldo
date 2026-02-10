import React from "react";

const FixedButtons: React.FC = () => {
  return (
    <>
      <div className="fixed right-0 bottom-[180px] bg-[#186ba2] text-white border border-white p-2.5 text-center font-sans z-[1000] min-w-[180px] flex items-center">
        <i className="fas fa-phone mr-2 text-white"></i> {/* Phone icon */}
        <a href="tel: 973-445-4511" className="text-white no-underline">
          973-445-4511
        </a>
      </div>

      <div className="fixed right-0 bottom-[110px] bg-[#186ba2] text-white border border-white p-2.5 text-center font-sans z-[1000] min-w-[180px] flex items-center">
        <i className="fas fa-quote-left mr-2 text-white"></i> {/* Quote icon */}
        <a href="contact-us.html" className="text-white no-underline">
          GET A QUOTE
        </a>
      </div>
    </>
  );
};

export default FixedButtons;
