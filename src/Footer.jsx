const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold text-white">Surplusly</h3>
          <p className="text-sm mt-2">
            A surplus food exchange platform connecting restaurants,
            vendors, and NGOs to reduce food waste.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Contact</h4>
          <p className="text-sm">support@surplusly.in</p>
          <p className="text-sm">Mumbai, India</p>
        </div>

        <div>
          <h4 className="font-semibold text-white mb-2">Legal</h4>
          <p className="text-sm">Trust & Safety</p>
          <p className="text-sm">Terms & Privacy</p>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 mt-8">
        © 2024 Surplusly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
