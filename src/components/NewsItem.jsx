import React from "react";

export default function NewsItem(props) {
  let { title, description, imgURL, newsURL, author, date } = props;

  return (
    <div className="card m-2 rounded-lg bg-[#F7DCB9] dark:bg-[#1e293b] flex flex-col h-auto md:h-[30rem]">
      {/* if there is no image url, then a default image will be shown */}
      <img
        src={
          !imgURL
            ? "https://contenthub-static.grammarly.com/blog/wp-content/uploads/2022/08/BMD-3398-760x400.png"
            : imgURL
        }
        className="w-full h-40 object-cover rounded-t-lg"
        alt="..."
      />
      <div className="card-body p-4 flex flex-col flex-grow">
        <h5 className="card-title font-medium text-center text-base md:text-lg dark:text-sky-300 mb-3">
          {title}
        </h5>

        {description && (
          <p className="card-text dark:text-gray-300 font-medium text-orange-600 text-sm mb-3 md:text-base text-center flex-grow">
            {description}
          </p>
        )}

        <a
          rel="noreferrer"
          href={newsURL}
          target="_blank"
          className="bg-[#ffb073] dark:bg-orange-600 dark:text-white flex justify-center w-fit font-medium mx-auto py-1 px-3 rounded-lg hover:bg-[#ffa35c] dark:hover:bg-[#ee6903] mb-2"
        >
          Read More
        </a>

        <div className="text-xs text-orange-600 dark:text-gray-400 mt-auto">
          <p className="card-text text-right">
            {new Date(date).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
