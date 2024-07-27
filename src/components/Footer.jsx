import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="bg-[#F8EDED]  dark:bg-[#1e293b] dark:text-white py-8 ">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2 text-orange-400 dark:text-white">
              About Us
            </h5>
            <p className="text-orange-400 dark:text-gray-500">
              We deliver the latest news and live events to keep you updated
              with what's happening around the world. Stay informed with us.
            </p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
            <ul className="text-gray-400">
              <li className="mb-2">
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h5 className="text-lg font-semibold mb-2">Follow Us</h5>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-white"
              >
                <BsFacebook />
              </a>
              <a
                href="https://twitter.com"
                className="text-gray-400 hover:text-white"
              >
                <BsTwitter />
              </a>
              <a
                href="https://instagram.com"
                className="text-gray-400 hover:text-white"
              >
                <BsInstagram />
              </a>
              <a
                href="https://linkedin.com"
                className="text-gray-400 hover:text-white"
              >
                <BsLinkedin />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-6 pt-4">
          <p className="text-center text-gray-400 text-sm">
            &copy; 2024 NewsVerse. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
