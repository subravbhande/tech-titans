import React from "react";
import { FaMapMarkedAlt, FaShieldAlt, FaStore } from "react-icons/fa";

const Header = ({
  currentPage,
  setCurrentPage
}) => {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "map", label: "Find Nearby", icon: <FaMapMarkedAlt /> },
    { key: "trust", label: "Trust", icon: <FaShieldAlt /> },
    { key: "vendor", label: "Vendor", icon: <FaStore /> },
    { key: "restaurant", label: "Restaurant", icon: <FaStore /> }
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded-lg font-bold">
            S
          </div>
          <span className="text-xl font-bold text-green-600">
            Surplusly
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
                currentPage === item.key
                  ? "bg-green-500 text-white shadow"
                  : "text-gray-600 hover:text-green-600 hover:bg-green-50"
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
