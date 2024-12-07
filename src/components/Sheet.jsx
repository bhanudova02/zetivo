import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from React Router
import { headerData } from "../lib/data";

const Sheet = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSheet = () => setIsOpen(true);
  const closeSheet = () => setIsOpen(false);
  const location = useLocation(); // Get current location (path)
  return (
    <>
      {/* Menu Button */}
      <button
        onClick={openSheet}
        className="text-black text-2xl focus:outline-none"
      >
        <RiMenu3Fill />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeSheet}
        ></div>
      )}

      {/* Sliding Sheet */}
      <div
        className={`fixed top-0 left-0 w-3/4 max-w-sm h-full bg-white shadow-xl z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out flex flex-col`}
      >
        {/* Header with Close Button */}
        <div className="flex justify-between items-center p-6 text-black border-b">
          <h2 className="text-2xl font-semibold">Zetivo</h2>
          <button
            onClick={closeSheet}
            className="text-black text-2xl hover:text-gray-400 focus:outline-none"
          >
            ✕
          </button>
        </div>

        {/* Sheet Body */}
        <div className="p-6 space-y-6 flex-1 overflow-y-auto">
          {headerData.map((data, index) => (
            <Link
              key={index}
              to={data.url}
              onClick={closeSheet} // Close the sheet on link click
              className={`block text-xl font-medium py-2 px-4 relative transition-all duration-300 ease-in-out ${
                location.pathname === data.url
                  ? "text-gray-900" // Active text color
                  : "hover:text-gray-900 hover:bg-gray-200"
              }`}
            >
              {data.title}

              {/* Half Underline for Active Link */}
              {location.pathname === data.url && (
                <span className="absolute bottom-0 left-4 w-[10%] h-1 bg-orange-500 rounded-lg"></span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sheet;
