import React from "react";

function AuthModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold text-center">Login / Sign Up</h2>

        <input type="email" placeholder="Email" className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />
        <input type="text" placeholder="Name" className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />
        <input type="password" placeholder="Password" className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />

        <button className="bg-purple-600 w-full p-2 rounded-md mt-2 hover:bg-purple-700">Submit</button>
        <button className="text-gray-400 mt-2 w-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AuthModal;
