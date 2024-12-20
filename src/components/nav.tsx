"use client";

import { useState } from "react";
import { Menu, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { bottomRoutes, routes } from "./side-bar/sidebar-routes";
import UserDropdown from "./user-drop";

const Navbar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const expandNavbar = () => {
    setIsExpanded((prev) => !prev);
  };

  const allRoutes = routes.concat(bottomRoutes);

  return (
    <>
      {/* Main Navbar */}
      <div className="fixed top-0 left-0 right-0 bg-white border-b">
        <div className="p-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Image
                src="/codeant-logo.png"
                alt="card"
                width={122}
                height={26}
              />
            </Link>

            <button 
              onClick={expandNavbar}
              className="focus:outline-none"
            >
              {isExpanded ? (
                <Plus className="h-6 w-6 rotate-45" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isExpanded && (
        <div 
          className="fixed top-[73px] left-0 right-0 bottom-0 bg-white z-50"
          style={{ height: 'calc(100vh - 73px)' }}
        >
          <div className="p-4 space-y-4">
            {/* User Dropdown Container */}
            <div className="relative">
              <UserDropdown />
            </div>

            {/* Navigation Links */}
            <nav className="pt-4">
              {allRoutes.map((route, index) => (
                <div
                  key={index}
                  className="flex items-center px-2 py-2 text-[16px] font-semibold"
                >
                  <route.icon className="h-4 w-4 mr-2" />
                  {route.label}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;