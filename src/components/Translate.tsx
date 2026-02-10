"use client"; // Mark the component as a client-side component

import React, { useState, useEffect } from "react";

const Translate: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("English");

  // Handle scroll event to close the dropdown when scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (language: string) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // You can add translation logic here, e.g. updating context or calling an API
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="fixed top-4 right-4 p-2 bg-blue-500 text-white rounded-full shadow-lg z-50"
      >
        <i className="fas fa-language"></i>
      </button>

      <div
        className={`${
          isOpen ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 w-64 h-full bg-gray-800 text-white p-4 transition-transform duration-300 z-40`}
      >
        <h2 className="text-xl font-semibold mb-4">Select Language</h2>
        <ul>
          <li
            onClick={() => handleLanguageSelect("English")}
            className="cursor-pointer hover:text-blue-400 mb-3"
          >
            English
          </li>
          <li
            onClick={() => handleLanguageSelect("Spanish")}
            className="cursor-pointer hover:text-blue-400 mb-3"
          >
            Spanish
          </li>
          <li
            onClick={() => handleLanguageSelect("French")}
            className="cursor-pointer hover:text-blue-400 mb-3"
          >
            French
          </li>
          {/* Add more languages here */}
        </ul>
        <p className="mt-4">Current Language: {selectedLanguage}</p>
      </div>
    </div>
  );
};

export default Translate;
