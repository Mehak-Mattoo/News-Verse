import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import Error from "./ErrorMsg";
import ErrorMsg from "./ErrorMsg";

const Topheadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const url =
      "https://real-time-news-data.p.rapidapi.com/top-headlines?limit=9&country=IN&lang=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_NEWS_API_KEY,
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      setHeadlines(result.data || []); // Use result.data to set headlines
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className="p-10  bg-[#C36A2D] dark:bg-[#0f172a]">
      <h2 className="text-xl pt-8  sm:text-2xl md:text-4xl lg:text-6xl  dark:text-orange-500 font-extrabold  text-orange-100 mb-12">
        Top Headlines
      </h2>

      {loading && <Spinner />}
      {error && <ErrorMsg />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {headlines.map((headline, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#2d3748] rounded-lg shadow-lg overflow-hidden"
          >
            {headline.photo_url && (
              <img
                src={headline.photo_url}
                alt={headline.title}
                className="w-full h-40 object-cover"
              />
            )}
            <div className="p-4">
              <h3 className="text-center text-base font-semibold text-gray-800 dark:text-sky-300 mb-2">
                {headline.title}
              </h3>
              <p className="text-center text-sm text-gray-600 dark:text-gray-300 mb-3">
                {headline.snippet}
              </p>
              <a
                href={headline.link}
                className="bg-[#ffb073] dark:bg-orange-600 dark:text-white flex justify-center w-fit font-medium mx-auto py-1 px-3 rounded-lg hover:bg-[#ffa35c] dark:hover:bg-[#ee6903]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topheadlines;
