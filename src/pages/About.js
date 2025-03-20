import React from "react";
import img1 from "../assets/mission.jpg";
import img2 from "../assets/why.jpg";
import img3 from "../assets/work.jpg";

const About = () => {
  return (
    <div className="min-h-screen w-full bg-black text-gray-200 flex justify-center items-center">
      <div className="max-w-4xl w-full px-4 sm:px-6 lg:px-8 py-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-purple-400 text-center mb-6">
          About HooBook
        </h1>

        <p className="text-base sm:text-lg text-center text-gray-300 mb-8">
          Welcome to <span className="text-purple-400 font-semibold">HooBook</span>, your ultimate hotel booking platform. We make finding and reserving accommodations seamless, convenient, and hassle-free.
        </p>

        <div className="space-y-6">
          {/* Mission Section */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md">
            <img src={img1} alt="Our Mission" className="w-full h-auto max-h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">Our Mission</h2>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              Our mission is to provide travelers with the best hotel booking experience by offering a vast selection of hotels, competitive prices, and a user-friendly platform.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md">
            <img src={img2} alt="Why Choose Us" className="w-full h-auto max-h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">Why Choose Us?</h2>
            <ul className="list-disc list-inside mt-2 text-gray-300 text-sm sm:text-base">
              <li>Easy and fast hotel booking process</li>
              <li>Best deals and discounts</li>
              <li>Secure payment methods</li>
              <li>Real customer reviews</li>
              <li>24/7 customer support</li>
            </ul>
          </div>

          {/* How It Works Section */}
          <div className="bg-gray-900 p-4 sm:p-6 rounded-lg shadow-md">
            <img src={img3} alt="How It Works" className="w-full h-auto max-h-64 object-cover rounded-md mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold text-purple-400">How It Works?</h2>
            <p className="mt-2 text-gray-300 text-sm sm:text-base">
              Simply search for a hotel, compare prices and features, and book your stay in just a few clicks. Whether you're planning a vacation, business trip, or weekend getaway, HooBook has you covered.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
