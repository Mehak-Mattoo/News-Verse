import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/logo.png";
import { FiSun, FiMoon } from "react-icons/fi";
import SearchBar from "./SearchBar";

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

  const navigate = useNavigate();

  const handleSearch = (query) => {
    navigate(`/search/${query}`);
  };

  return (
    <>
      <nav className="bg-[#FEF3E2] px-4 fixed w-full dark:bg-[#0f172a] py-2 z-10">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0">
            <Link to="/">
              <img src={logo} alt="logo" className="w-[9rem]" />
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
              className="flex items-center px-3 py-2 border-2 rounded text-orange-500 border-orange-500 hover:text-white hover:bg-orange-500"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
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
                className="block mt-4  lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Home
              </Link>
              <Link
                to="/business"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Business
              </Link>

              <Link
                to="/entertainment"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Entertainment
              </Link>
              <Link
                to="/health"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Health
              </Link>
              <Link
                to="/science"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Science
              </Link>
              <Link
                to="/technology"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold  dark:text-orange-500 text-orange-400 hover:text-orange-500 mr-4"
              >
                Technology
              </Link>
              <Link
                to="/sports"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold mr-10 dark:text-orange-500 text-orange-400 hover:text-orange-500 "
              >
                Sports
              </Link>

              <div className="mt-4 lg:mt-0">
                {" "}
                <SearchBar onSearch={handleSearch} />
              </div>
            </div>
            <div className="flex items-center mt-4 lg:mt-0 lg:flex-shrink-0">
              <button
                onClick={toggleDarkMode}
                className={`flex ml-0 items-center p-3  md:ml-3 rounded-lg 
    ${
      isDarkMode
        ? "bg-gray-500 dark:bg-gray-600 text-gray-100"
        : "bg-orange-400 dark:bg-gray-500 text-white"
    }
    hover:${
      isDarkMode
        ? "bg-gray-700 dark:bg-gray-800"
        : "bg-orange-600 dark:bg-gray-600"
    }
  `}
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
