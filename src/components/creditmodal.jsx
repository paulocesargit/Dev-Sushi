import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaTimes, FaCode } from "react-icons/fa";

const CreditsModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button
        onClick={toggleModal}
        className="px-2 py-2 rounded-md hover:bg-gray-200 flex items-center space-x-2"
      >
        <FaCode className="text-gray-600 text-3xl mt-1 ml-1" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full relative">
            <button
              onClick={toggleModal}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
            >
              <FaTimes size={20} />
            </button>
            <h2 className="text-center text-xl font-semibold mb-4 text-black">
              Desenvolvedor
            </h2>
            <ul className="list-none space-y-4">
              <li className="flex items-center space-x-2 justify-center">
                <FaLinkedin className="text-blue-500" />
                <a
                  href="https://www.linkedin.com/in/paulocesar22"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  LinkedIn - Paulo Cesar
                </a>
              </li>
              <li className="flex items-center space-x-2 justify-center">
                <FaGithub className="text-gray-700" />
                <a
                  href="https://github.com/paulocesargit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:underline"
                >
                  GitHub - Paulocesargit
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditsModal;
