"use client"; // Enables client-side rendering for this component

import React, { useState } from "react";
import { FaBars } from "react-icons/fa"; // Import React Icons for the menu icon
import Socialicons from "./Socialicons";
import NavigationMenu from "./NavigationMenu";
import SideBar from "./SideBar";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar open/close
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={180} height={80} />
        </Link>
        {/* Centered Navigation Menu (Visible After 1280px) */}
        <div className="hidden xl:flex flex-grow justify-center space-x-4 items-center">
          <NavigationMenu />
        </div>

        {/* Social Icons */}
        <div className="hidden xl:flex space-x-4 items-center">
          <Socialicons />
        </div>

        {/* Menu Icon (Mobile Only) */}
        <button
          className="xl:hidden text-gray-800"
          id="menuIcon"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </header>
  );
};

export default Header;
