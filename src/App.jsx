import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VendorDashboard from "./component/VendorDashboard";
import RestaurantDashboard from "./component/RestaurantDashboard";
import MapComponent from "./component/MapComponent";
import Trust from "./component/Trust";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  /*
    NOTE:
    - Authentication, OTP, admin module, pricing logic are backend responsibilities
    - This App.jsx only handles page-level navigation as per SRS
  */

  const HomePage = () => (
    <>
      {/* HERO / INTRO */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/hero-street-food.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Hyperlocal Surplus Food Marketplace
          </h1>

          <p className="text-lg md:text-2xl max-w-4xl mx-auto text-gray-200 mb-10">
            A B2B platform connecting restaurants and hotels with nearby
            small vendors to redistribute surplus raw and semi-processed
            food materials before expiry.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setCurrentPage("restaurant")}
              className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-semibold text-lg"
            >
              Restaurant Module
            </button>

            <button
              onClick={() => setCurrentPage("vendor")}
              className="border border-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition"
            >
              Vendor Module
            </button>
          </div>
        </div>
      </section>

      {/* PROBLEM & SOLUTION */}
      <section className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-gray-800">
            Problem & Proposed Solution
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed max-w-5xl mx-auto text-center mb-16">
            Large restaurants and hotels frequently generate surplus raw and
            semi-processed food due to demand uncertainty and bulk procurement.
            This surplus is often wasted or sold informally without tracking,
            quality assurance, or fair pricing.
            <br /><br />
            This platform provides a structured, digital, and hyperlocal
            marketplace where surplus food can be listed, discovered, and
            purchased by nearby small vendors within a limited radius.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Restaurant Module
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Restaurants can list surplus items with quantity, expiry time,
                and quality grade, and track waste reduction and recovered value.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Vendor Module
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Vendors can browse nearby surplus listings, filter by distance
                and price, and confirm purchase and pickup.
              </p>
            </div>

            <div className="p-8 bg-gray-50 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Hyperlocal Design
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Listings are visible only within a limited geographic radius to
                ensure fast pickup, low logistics cost, and reduced spoilage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      {currentPage === "home" && <HomePage />}
      {currentPage === "map" && <MapComponent />}
      {currentPage === "trust" && <Trust />}
      {currentPage === "vendor" && <VendorDashboard />}
      {currentPage === "restaurant" && <RestaurantDashboard />}

      <Footer />
    </div>
  );
};

export default App;
