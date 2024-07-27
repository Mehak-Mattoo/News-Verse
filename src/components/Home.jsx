import React, { useEffect } from "react";
import newshome from "../images/news-home-.png";
import About from "./About";
import Topheadlines from "./Topheadlines";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Error from "./Error";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    document.title = "News Verse - Home";
  }, []);
  return (
    <>
      <div className="flex bg-[#F7DCB9] items-center flex-col md:flex-row h-2/4 md:min-h-screen dark:bg-[#0f172a] ">
        <div className=" md:w-1/2">
          <img
            src={newshome}
            alt="news home"
            className="object-cover w-3/4 mx-auto mt-5 md:w-full"
          />
        </div>
        <div className="container mt-5 pt-5 flex flex-col w-full md:w-1/2 items-center md:items-start justify-center pl-5">
          <h2 className=" text-[#C36A2D] dark:text-orange-500 font-extrabold text-3xl sm:text-4xl md:text-6xl lg:text-8xl mb-7">
            Stay Informed, Stay Ahead
          </h2>
          <div></div>
          {/* <p className="absolute bottom-0 left-0 text-green-900 text-1.5vw p-4">
            Made by Mehak Mattoo &hearts;
          </p> */}
        </div>
      </div>

      <Topheadlines />

      <About />

      <Footer />
    </>
  );
}
