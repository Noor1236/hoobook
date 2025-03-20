import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupModal({ isOpen, onClose, setIsAuthenticated }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleSignup = () => {
    if (name && email && password) {
      const user = { name, email };
      localStorage.setItem("user", JSON.stringify(user));
      setIsAuthenticated(true);
      onClose();
      navigate("/dashboard");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-6 rounded-lg w-96">
        <h2 className="text-xl font-bold text-center">Sign Up</h2>
        
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full p-2 my-2 bg-gray-800 border border-gray-700 rounded" />
        
        <button onClick={handleSignup} className="bg-purple-600 w-full p-2 rounded-md mt-2 hover:bg-purple-700">Sign Up</button>
        <button className="text-gray-400 mt-2 w-full" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default SignupModal;
