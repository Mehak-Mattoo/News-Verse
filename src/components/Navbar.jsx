import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/android-chrome-512x512.png";

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
      <nav className="bg-sky-500  dark:bg-[#00215E] p-2">
        <div className="container mx-auto flex items-center justify-between flex-wrap">
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img src={logo} alt="logo" className="w-[7rem] mr-2" />
              <span className="text-4xl font-black text-white font-sans "></span>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              onClick={toggleMenu}
              className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
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
            <div className="lg:flex-grow items-center mr-10 lg:flex lg:justify-center">
              <Link
                to="/"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-white hover:text-gray-100 mr-4"
              >
                Home
              </Link>
              {/* <Link
                to="/about"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-white hover:text-gray-100 mr-4"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block mt-4 lg:inline-block lg:mt-0 font-semibold text-white hover:text-gray-100 mr-4"
              >
                Contact
              </Link> */}
            </div>
            <div className="flex items-center mt-4 lg:mt-0">
              {/* <SignedOut>
                <SignInButton className="bg-white text-sky-400 font-semibold rounded-md py-1 px-2" />
              </SignedOut>
              <SignedIn>
                <div className="flex items-center text-white">
                  {isLoaded && isSignedIn && user && (
                    <>
                      {/* <span className="mr-2">{user.firstName}</span> 
                      <UserButton />
                      <Link
                        to="/profile"
                        className="block lg:inline-block lg:mt-0 font-semibold text-white hover:text-gray-100 ml-4"
                      >
                        My Profile
                      </Link>
                    </>
                  )}
                </div>
              </SignedIn> */}
              <button
                onClick={toggleDarkMode}
                className="flex ml-2 items-center justify-center bg-gray-200 dark:bg-gray-500  py-2 px-2 mr-3 rounded-lg hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100"
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
