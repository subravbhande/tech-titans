import React from "react";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaMapMarkerAlt
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 mt-24">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center font-bold">
                S
              </div>
              <span className="text-xl font-bold text-white">
                Surplusly
              </span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              A surplus food exchange platform connecting restaurants,
              vendors, and NGOs to reduce food waste and build sustainable
              urban communities.
            </p>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Find Nearby</li>
              <li className="hover:text-white cursor-pointer">Trust & Safety</li>
              <li className="hover:text-white cursor-pointer">Vendor</li>
              <li className="hover:text-white cursor-pointer">Restaurant</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-green-500" />
                <span>support@surplusly.in</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-green-500" />
                <span>Sangli, India</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-green-500 transition"
              >
                <FaLinkedinIn />
              </a>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2024 Surplusly. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
