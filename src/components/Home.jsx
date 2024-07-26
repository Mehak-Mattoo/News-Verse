import React, { useEffect } from "react";
import newshome from "../images/news-home-.png";
import About from "./About";

export default function Home() {
  useEffect(() => {
    document.title = "News Verse - Home";
  }, []);
  return (
    <>
      <div className="flex bg-[#F8EDED] flex-col md:flex-row min-h-screen dark:bg-[#0f172a] ">
        <div className="hidden md:flex md:w-1/2">
          <img
            src={newshome}
            alt="news home"
            className="object-cover w-full h-[33rem]"
          />
        </div>
        <div className="container mt-5 pt-5 flex flex-col w-full md:w-1/2 items-center md:items-start justify-center pl-5">
          <h2 className=" text-[#C36A2D] font-extrabold text-3xl md:text-7xl mb-8">
            Global Headlines To Your Fingertips
          </h2>
          <div>
            <p className="dark:text-gray-400 text-orange-400">
              Experience your daily news with a moderm touch.
            </p>
          </div>
          {/* <p className="absolute bottom-0 left-0 text-green-900 text-1.5vw p-4">
            Made by Mehak Mattoo &hearts;
          </p> */}
        </div>
      </div>

      <div className="bg-[#C36A2D]">
        <About />
      </div>
    </>
  );
}
