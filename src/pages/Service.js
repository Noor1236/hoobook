import React from "react";
import service1 from "../assets/service1.jpg";
import service2 from "../assets/service2.jpg";
import service3 from "../assets/service3.jpeg";

const Services = () => {
  return (
    <div className="min-h-screen w-full bg-black text-gray-200 p-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-purple-400 mb-6">Our Services</h1>
        <p className="text-lg text-gray-300 mb-10">
          Discover how <span className="text-purple-400 font-semibold">HooBook</span> makes hotel booking simple and stress-free.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <img src={service1} alt="Easy Booking" className="w-full h-48 object-contain rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-purple-400">Easy Booking</h2>
            <p className="mt-2 text-gray-300">Book your stay in just a few clicks with our user-friendly interface.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <img src={service2} alt="Best Deals" className="w-full h-48 object-contain rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-purple-400">Best Deals</h2>
            <p className="mt-2 text-gray-300">Get exclusive discounts and the best prices on top-rated hotels.</p>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg shadow-md">
            <img src={service3} alt="24/7 Support" className="w-full h-48 object-contain rounded-md mb-4" />
            <h2 className="text-2xl font-semibold text-purple-400">24/7 Support</h2>
            <p className="mt-2 text-gray-300">Need help? Our support team is available anytime, anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
