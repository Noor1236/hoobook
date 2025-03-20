import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6">
      <div className="max-w-3xl w-full bg-gray-900 p-6 sm:p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-purple-400 text-center mb-6">Contact Us</h1>
        <p className="text-lg text-center text-gray-300 mb-8">
          Have questions or need assistance? Fill out the form below, and we'll get back to you soon.
        </p>

        <motion.form 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.5 }} 
          className="space-y-6"
        >
          <div>
            <label className="text-gray-300 block mb-2">Name</label>
            <input 
              type="text" 
              placeholder="Enter your name" 
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 sm:text-lg"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Email</label>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 sm:text-lg"
            />
          </div>

          <div>
            <label className="text-gray-300 block mb-2">Message</label>
            <textarea 
              placeholder="Enter your message" 
              rows="4" 
              className="w-full p-3 bg-gray-800 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 sm:text-lg"
            ></textarea>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} 
            whileTap={{ scale: 0.95 }} 
            className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
