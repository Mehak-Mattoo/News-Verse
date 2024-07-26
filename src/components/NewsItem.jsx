import React from "react";

export default function NewsItem(props) {
  let { title, description, imgURL, newsURL, author, date } = props;

  return (
    <>
      <div className="card m-2  p-4 rounded-lg bg-[#B43F3F] dark:bg-[#1e293b]">
        {/* if there is no image url, then a default image will be shown*/}
        <img
          src={
            !imgURL
              ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
              : imgURL
          }
          className="h-22 md:h-25 p-4"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title text-center text-base text-white md:text-lg dark:text-sky-300 mb-3 ">
            {title}
          </h5>

          {description && (
            <p className="card-text dark:text-gray-300 text-red-200 text-sm mb-3 md:text-base text-center">
              {description}
            </p>
          )}
          <a
            rel="noreferrer"
            href={newsURL}
            target="_blank"
            className="bg-[#FF8225] dark:bg-orange-600 flex justify-center w-fit text-white mx-auto py-1 px-3 rounded-lg hover:bg-[#ec7011] dark:hover:bg-[#ee6903]"
          >
            Read More
          </a>

          <div className="items-center justify-between text-xs text-red-300 mt-3">
            {/* <p> {author ? author : "Unknown"}</p> */}
            <p className="card-text text-end  dark:text-gray-400 ">
              {new Date(date).toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
