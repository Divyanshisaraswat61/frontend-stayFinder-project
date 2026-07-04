import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black text-white">

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">

        <div>
          <h2 className="text-3xl font-bold">StayFinder</h2>
          <p className="mt-4 text-gray-400">
            Find the best hotels at the best prices.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Quick Links</h3>

          <div className="flex flex-col gap-3">
            <Link to="/">Home</Link>
            <Link to="/wishlist">Wishlist</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">Follow Us</h3>

          <div className="flex gap-5 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedin />
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 py-5 text-center text-gray-400">
        © 2026 StayFinder. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;