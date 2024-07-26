import React, { useEffect } from "react";
import newshome from "../images/home.jpg";

export default function Home() {
  useEffect(() => {
    document.title = "News Verse - Home";
  }, []);
  return (
    <>
      <div className="flex flex-col md:flex-row max-h-screen bg-[#F8EDED] dark:bg-[#0f172a] ">
        <div className="container mt-5 pt-5 flex flex-col w-full md:w-1/2 items-center justify-center pl-5">
          <h2 className=" text-[#FF8225] font-extrabold text-3xl md:text-7xl mb-8">
            Global Headlines to Your Fingertips
          </h2>
          <div>
            <p className="dark:text-gray-300 text-orange-400 font-medium ">
              News Verse is built using React to deliver live events and latest
              news as it happens. My responsive design adapts to different
              screen sizes to bring you the best content forward. Experience
              easy navigation with news articles organized into different
              categories.
            </p>
          </div>
          {/* <p className="absolute bottom-0 left-0 text-green-900 text-1.5vw p-4">
            Made by Mehak Mattoo &hearts;
          </p> */}
        </div>
        <div className="hidden md:flex md:w-1/2">
          <img
            src={newshome}
            alt="news home"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </>
  );
}
