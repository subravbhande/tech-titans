import React from "react";

const Header = ({
  currentPage,
  setCurrentPage,
  currentUser,
  setCurrentUser,
  setShowModal
}) => {
  const navItems = [
    { key: "home", label: "Home" },
    { key: "map", label: "Find Nearby" },
    { key: "trust", label: "Trust & Safety" },
    { key: "vendor", label: "Vendor" },
    { key: "restaurant", label: "Restaurant" }
  ];

  return (
    <header className="bg-white border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setCurrentPage("home")}
        >
          <div className="w-10 h-10 bg-green-500 text-white flex items-center justify-center rounded font-bold">
            S
          </div>
          <span className="text-xl font-bold text-green-600">
            Surplusly
          </span>
        </div>

        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={() => setCurrentPage(item.key)}
              className={`px-3 py-2 rounded ${
                currentPage === item.key
                  ? "bg-green-500 text-white"
                  : "text-gray-600 hover:text-green-600"
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {!currentUser ? (
          <div className="flex gap-3">
            <button
              onClick={() => setShowModal("login")}
              className="px-4 py-2 border rounded"
            >
              Login
            </button>
            <button
              onClick={() => setShowModal("signup")}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Join
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              setCurrentUser(null);
              setCurrentPage("home");
            }}
            className="px-4 py-2 border rounded"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
