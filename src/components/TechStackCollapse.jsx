import React, { useState, useRef } from "react";
import { HiInboxStack } from "react-icons/hi2";

const TechStackCollapse = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const LogoData = ["logo-1.png", "logo-2.png", "logo-3.png", "logo-4.png", "logo-5.png", "logo-6.png", "logo-7.png"]

  return (
    <div className="w-full lg:w-[80%]">
      <button
        className="flex items-center gap-1 mt-10 font-bold text-[#E85A71] px-6 py-2.5 rounded-3xl border border-[#E85A71]"
        onClick={() => setIsOpen(!isOpen)}
      >
        <HiInboxStack /> Tech-Stack and Tools
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0px",
        }}
      >
        <div className=" text-gray-600 grid grid-cols-6 md:grid-cols-8 lg:grid-cols-12 gap-4 mt-4 px-1">
          {LogoData.map(logo =>
            <div key={logo}>
              <img src={logo} className="w-11 object-contain" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TechStackCollapse;
