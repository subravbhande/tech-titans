import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
//import Login from "./component/auth/Login";
//import Signup from "./component/auth/Signup";
import VendorDashboard from "./component/VendorDashboard";
import RestaurantDashboard from "./component/RestaurantDashboard";
import MapComponent from "./component/MapComponent";
import Trust from "./component/Trust";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [showModal, setShowModal] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);

  const impactStats = [
    { number: "1.2 Tons", label: "Food Rescued" },
    { number: "120+", label: "Vendors Supported" },
    { number: "90+", label: "Restaurants Onboarded" },
    { number: "₹60,000+", label: "Cost Saved" }
  ];

  const HomePage = () => (
    <>
      <div
        className="text-white text-center py-24"
        style={{
          backgroundImage: "url('/images/hero-street-food.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="bg-black bg-opacity-60 py-16 px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Turn Food Surplus into Value
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Surplusly connects restaurants with vendors and NGOs to redistribute excess food before it goes to waste.
          </p>
          <button
            onClick={() =>
              currentUser
                ? setCurrentPage(currentUser.userType)
                : setShowModal("signup")
            }
            className="bg-green-500 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-green-600"
          >
            {currentUser ? "Go to Dashboard" : "Get Started"}
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {impactStats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl shadow text-center"
            >
              <div className="text-3xl font-bold text-green-600">
                {stat.number}
              </div>
              <div className="text-gray-600 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <Header
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        currentUser={currentUser}
        setCurrentUser={setCurrentUser}
        setShowModal={setShowModal}
      />

      {currentPage === "home" && <HomePage />}
      {currentPage === "map" && (
        <MapComponent currentUser={currentUser} />
      )}
      {currentPage === "trust" && <Trust />}
      {currentPage === "vendor" && (
        <VendorDashboard currentUser={currentUser} />
      )}
      {currentPage === "restaurant" && (
        <RestaurantDashboard currentUser={currentUser} />
      )}

      <Footer />

      {showModal === "login" && (
        <Login
          onClose={() => setShowModal(null)}
          onSuccess={(user) => {
            setCurrentUser(user);
            setCurrentPage(user.userType);
            setShowModal(null);
          }}
          switchToSignup={() => setShowModal("signup")}
        />
      )}

      {showModal === "signup" && (
        <Signup
          onClose={() => setShowModal(null)}
          onSuccess={(user) => {
            setCurrentUser(user);
            setCurrentPage(user.userType);
            setShowModal(null);
          }}
          switchToLogin={() => setShowModal("login")}
        />
      )}
    </div>
  );
};

export default App;
