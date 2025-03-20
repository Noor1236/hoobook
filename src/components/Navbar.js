import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import LoginModal from "./LoginModal";
import SignupModal from "./SignupModal";
import logo2 from "../assets/Black_and_White__Modern_Dream_Hotel_Resort_Design_Logo-removebg-preview.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsAuthenticated(true);
      const parsedUser = JSON.parse(user);
      if (parsedUser.role === "admin") {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsAuthenticated(false);
    setIsAdmin(false);
    navigate("/");
  };

  return (
    <nav className="bg-black text-purple-400 p-4">
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo2} alt="HooBook Logo" className="w-36 h-auto object-contain" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-purple-400 z-50 absolute right-4 top-12"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={30} /> : <FiMenu size={30} />}
        </button>

        {/* Navigation Menu */}
        <ul
          className={`md:flex gap-6 absolute md:static bg-black w-full md:w-auto left-0 transition-all duration-300 ease-in-out
          ${isOpen ? "top-16 flex flex-col items-center py-4" : "-top-60 hidden md:flex md:flex-row"}`}
        >
          <li><Link to="/" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:text-purple-300">Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:text-purple-300">About</Link></li>
          <li><Link to="/listings" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:text-purple-300">Hotels</Link></li>
          <li><Link to="/service" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:text-purple-300">Services</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)} className="px-4 py-2 hover:text-purple-300">Contact</Link></li>

          {/* Authentication Buttons */}
          <li className="mt-4 md:mt-0 flex flex-col sm:flex-row sm:gap-4">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 mb-2 sm:mb-0 w-full sm:w-auto">
                  Dashboard
                </Link>

                {isAdmin && (
                  <Link
                    to="/admin"
                    className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 mb-2 sm:mb-0 w-full sm:w-auto"
                  >
                    Admin Panel
                  </Link>
                )}

                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full sm:w-auto"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setIsLoginOpen(true)}
                  className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 w-full sm:w-auto mb-2 sm:mb-0"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsSignupOpen(true)}
                  className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-200 w-full sm:w-auto"
                >
                  Sign Up
                </button>
              </>
            )}
          </li>
        </ul>
      </div>

      {/* Modals */}
      <LoginModal
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        setIsAuthenticated={setIsAuthenticated}
        setIsAdmin={setIsAdmin}
      />
      <SignupModal
        isOpen={isSignupOpen}
        onClose={() => setIsSignupOpen(false)}
        setIsAuthenticated={setIsAuthenticated}
      />
    </nav>
  );
}

export default Navbar;
