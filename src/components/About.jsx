import React from "react";
import aboutImg from "../images/news_guy.png";

const About = () => {
  return (
    <div className="bg-[#C36A2D] dark:bg-[#0f172a]  py-5">
      <div className="container mx-auto px-4">
        {/* <h1 className="text-4xl font-extrabold text-[#F8EDED] dark:text-gray-100 text-center mb-8">
          About News Verse
        </h1> */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col justify-center">
            {/* <h2 className="text-3xl font-bold text-[#FF8225] dark:text-gray-100 mb-4">
              Welcome to News Verse
            </h2> */}
            <p className="text-base text-[#F8EDED] text-center dark:text-gray-300 mb-4">
              Experience easy navigation with news articles organized into
              different categories.
            </p>
            <h3 className="text-xl md:text-2xl font-semibold text-orange-200 dark:text-gray-100 mt-6 mb-3">
              Key Features:
            </h3>
            <ul className="list-disc list-inside text-sm md:text-base text-orange-200 dark:text-gray-300">
              <li className="mb-2">Live updates of global news.</li>

              <li className="mb-2">
                Easy navigation with categorized news articles.
              </li>

              <li className="mb-2">Reliable and up-to-date information.</li>
              <li className="mb-2">
                Dark mode support for a better reading experience.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img src={aboutImg} alt="News" className="w-full hidden md:flex" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
