import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import VendorDashboard from "./component/VendorDashboard";
import RestaurantDashboard from "./component/RestaurantDashboard";
import MapComponent from "./component/MapComponent";
import Trust from "./component/Trust";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [currentUser, setCurrentUser] = useState(null);

  const impactStats = [
    { number: "1.2 Tons", label: "Food Rescued" },
    { number: "120+", label: "Vendors Supported" },
    { number: "90+", label: "Restaurants Onboarded" },
    { number: "₹60,000+", label: "Cost Saved" }
  ];

  const HomePage = () => (
    <>
      {/* HERO SECTION */}
      <section
        className="relative text-white"
        style={{
          backgroundImage: "url('/images/hero-street-food.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-65"></div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Turning Food Surplus <br className="hidden md:block" />
            into Shared Value
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-200 mb-10">
            Surplusly connects restaurants, hotels, and cloud kitchens with
            nearby vendors and NGOs to reduce food waste and build a more
            sustainable urban food ecosystem.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <button
              onClick={() => setCurrentPage("map")}
              className="bg-green-500 hover:bg-green-600 px-10 py-4 rounded-xl font-semibold text-lg shadow-lg"
            >
              Find Nearby Surplus
            </button>

            <button
              onClick={() => setCurrentPage("trust")}
              className="border border-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-black transition"
            >
              Trust & Safety
            </button>
          </div>
        </div>
      </section>

      {/* IMPACT STATS */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-lg transition"
              >
                <div className="text-3xl font-bold text-green-600">
                  {stat.number}
                </div>
                <div className="text-gray-600 mt-2 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PROJECT */}
      <section className="bg-white py-24 border-t border-gray-200">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
            Why Surplusly Exists
          </h2>

          <p className="text-gray-600 text-lg max-w-4xl mx-auto leading-relaxed mb-16">
            Every day, large food establishments discard usable raw and
            semi-processed food due to overproduction, storage limits, or timing
            issues. At the same time, street vendors and small food businesses
            struggle with rising procurement costs.
            <br /><br />
            Surplusly bridges this gap by enabling real-time discovery and
            coordination of food surplus within local communities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="p-8 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Restaurants & Hotels
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Reduce food waste, lower disposal costs, and contribute to
                sustainability without operational complexity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Vendors & Cloud Kitchens
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Access affordable raw materials nearby and stabilize daily
                operating costs.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gray-50 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-3 text-green-600">
                Cities & Communities
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Less landfill waste, reduced carbon footprint, and a more
                efficient food distribution system.
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
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
      />

      {currentPage === "home" && <HomePage />}
      {currentPage === "map" && <MapComponent currentUser={currentUser} />}
      {currentPage === "trust" && <Trust />}
      {currentPage === "vendor" && (
        <VendorDashboard currentUser={currentUser} />
      )}
      {currentPage === "restaurant" && (
        <RestaurantDashboard currentUser={currentUser} />
      )}

      <Footer />
    </div>
  );
};

export default App;
