import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/android-chrome-512x512.png";
import { FiSun, FiMoon } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <>
      <nav className="bg-[#F8EDED] dark:bg-[#0f172a] p-2">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="w-[3rem] mr-2" />
              <span className="text-4xl font-black text-white font-sans "></span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-orange-400 border-orange-500 hover:text-white hover:bg-orange-500"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className={`w-full ${
              isOpen ? "block" : "hidden"
            } lg:flex lg:items-center lg:w-auto mt-4 lg:mt-0 transition duration-600 ease-out`}
          >
            <div className="lg:flex-grow items-center lg:flex lg:justify-start">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  text-orange-400 hover:text-orange-500 mr-4"
              >
                Home
              </Link>
              <Link
                to="/business"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  text-orange-400 hover:text-orange-500 mr-4"
              >
                Business
              </Link>
              <Link
                to="/entertainment"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-orange-400 hover:text-orange-500 mr-4"
              >
                Entertainment
              </Link>
              <Link
                to="/health"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-orange-400 hover:text-orange-500 mr-4"
              >
                Health
              </Link>
              <Link
                to="/science"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  text-orange-400 hover:text-orange-500 mr-4"
              >
                Science
              </Link>
              <Link
                to="/technology"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-orange-400 hover:text-orange-500 mr-4"
              >
                Technology
              </Link>
              <Link
                to="/sports"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  text-orange-400 hover:text-orange-500 mr-4"
              >
                Sports
              </Link>
            </div>
            <div className="flex items-center mt-4 lg:mt-0 lg:flex-shrink-0">
              <button
                onClick={toggleDarkMode}
                className="flex ml-2 items-center  bg-gray-200 dark:bg-gray-500  py-2 px-2 mr-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
              >
                {isDarkMode ? <FiMoon /> : <FiSun />}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
