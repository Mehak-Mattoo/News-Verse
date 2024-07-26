import React from "react";
import newshome from "../images/home.jpg";

export default function Home() {
  const container = {
    position: " relative" /* Set the container's position to relative */,
    minHeight: "100%",
    color: "#FF6464",
    fontWeight: "900",
    fontSize: "3.5vw",
    marginBottom: "2rem",
  };

  const name = {
    position: "absolute",
    bottom: "0",
    left: "0",
    fontSize: "1.5vw",
    color: "#263A29",
    padding: "1rem",
  };

  return (
    <>
      <div
        className="flex flex-col md:flex-row max-h-screen bg-[#EEE1B3]
      "
      >
        <div className="container mt-5 pt-5 flex flex-col w-full md:w-1/2 items-center justify-center pl-5">
          <h2 className=" text-[#FB857C] font-extrabold  text-4xl md:text-7xl mb-8">
            Global Headlines to Your Fingertips
          </h2>
          <div>
            <p>
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
        <div className="w-full md:w-1/2">
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
