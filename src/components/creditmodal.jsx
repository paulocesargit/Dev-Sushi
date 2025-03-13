import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTimes, FaCode } from "react-icons/fa";
import * as framer from "framer-motion";

const { motion, AnimatePresence } = framer;

const CreditsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.3 }}
    >
      <button
        onClick={toggleModal}
        className="px-4 py-2 pl-7 rounded-full hover:bg-gray-200 flex items-center space-x-2 transition duration-300 ease-in-out transform hover:scale-105"
      >
        <FaCode className="text-gray-600 text-3xl" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 transition duration-200"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
              Desenvolvedor:
            </h2>
            <p className="text-center text-xl font-medium text-gray-800 mb-6">
              Paulo Cesar
            </p>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-3 justify-center">
                <FaLinkedin className="text-blue-600 text-lg" />
                <a
                  href="https://www.linkedin.com/in/paulocesar22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:text-blue-800 hover:underline"
                >
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center space-x-3 justify-center">
                <FaGithub className="text-gray-800 text-lg" />
                <a
                  href="https://github.com/paulocesargit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-800 font-medium hover:text-gray-900 hover:underline"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default CreditsModal;
