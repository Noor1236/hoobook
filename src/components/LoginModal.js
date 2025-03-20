import React, { useState } from "react";

function LoginModal({ isOpen, onClose, setIsAuthenticated, setIsAdmin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Dummy login check for admin (use proper API calls for real login)
    if (email === "admin@example.com" && password === "admin123") {
      const user = { name: "Admin", email, role: "admin" };
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
      setIsAdmin(true);  // Set admin status
      onClose();
    } 
    // Dummy login check for a normal user (you can modify or extend this as needed)
    else if (email === "noor@example.com" && password === "password123") {
      const user = { name: "Noor Fatima", email, role: "user" };
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
      setIsAdmin(false);  // Set non-admin status
      onClose();
    } else {
      alert("Invalid credentials");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96 relative">
        <h2 className="text-xl font-bold text-center">Login</h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="bg-purple-600 w-full p-2 rounded-md mt-2 hover:bg-purple-700"
          onClick={handleLogin}
        >
          Login
        </button>
        <button className="text-gray-400 mt-2 w-full" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}

export default LoginModal;
