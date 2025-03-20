import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png"; // Ensure correct path

function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Column 1: Logo & About */}
        <div className="flex flex-col items-center text-center">
          <img src={logo} alt="HooBook Logo" className="w-40 h-auto mb-3" />
          <p className="text-sm text-gray-300 max-w-xs">
            HooBook provides the best hotel booking experience with comfort & affordability.
          </p>
        </div>


        {/* Column 2: Quick Links */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400">About</a></li>
            <li><a href="/listings" className="hover:text-purple-400">Hotels</a></li>
            <li><a href="/service" className="hover:text-purple-400">Services</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Column 3: Social Media & Contact */}
        <div className="flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-purple-400 mb-3">Follow Us</h3>
          <div className="flex space-x-4 mb-3">
            <a href="#" className="text-xl hover:text-purple-400"><FaFacebook /></a>
            <a href="#" className="text-xl hover:text-purple-400"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-purple-400"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-purple-400"><FaLinkedin /></a>
          </div>
          <p className="text-sm text-gray-300">Email: support@hoobook.com</p>
          <p className="text-sm text-gray-300">Phone: +92 123 456 789</p>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs text-gray-400 border-t border-gray-600 pt-4">
        &copy; {new Date().getFullYear()} HooBook. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
