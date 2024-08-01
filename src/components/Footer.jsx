import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#FEF3E2]  dark:bg-[#1e293b] dark:text-white py-8 ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg md:text-xl font-semibold mb-2  dark:text-white">
              About NewsVerse
            </h5>
            <p className="text-orange-600 dark:text-gray-500 ">
              We deliver the latest news and live events to keep you updated
              with what's happening around the world. Stay informed with us.
            </p>
          </div>

          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-orange-600  dark:text-sky-500  hover:text-orange-900"
              >
                <BsFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-orange-600  dark:text-sky-500  hover:text-orange-900"
              >
                <BsTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-orange-600 dark:text-sky-500  hover:text-orange-900"
              >
                <BsInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-orange-600  dark:text-sky-500 hover:text-orange-900"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-orange-700 mt-6 pt-4">
          <p className="text-center font-medium  text-orange-600 dark:text-gray-500 text-sm">
            &copy; 2024 NewsVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
