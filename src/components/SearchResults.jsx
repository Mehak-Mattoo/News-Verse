import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import ErrorMSG from "./ErrorMsg";

const SearchResults = () => {
  const { query } = useParams();
  const [newsResults, setNewsResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      const url = `https://real-time-news-data.p.rapidapi.com/search?query=${encodeURIComponent(
        query
      )}&time_published=1y&lang=en`;
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key": import.meta.env.VITE_NEWS_API_KEY,
          "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        if (!response.ok) {
          console.error("Response status:", response.status); // Log response status
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        console.log("API Response:", result); // Log the API response
        setNewsResults(result.data || []);
      } catch (error) {
        console.error("Fetch error:", error); // Log the error
        setError(error.message); // Set the error message
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [query]);

  return (
    <main className="px-10 min-h-screen items-center justify-center bg-[#C36A2D] dark:bg-[#1e293b]">
      {error && (
        <div>
          <ErrorMSG />
        </div>
      )}
      <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl pt-[10rem] font-bold mb-5 text-center text-white">
        Search Results for: {query}
      </h2>

      {loading ? (
        <Spinner />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {newsResults.length > 0
            ? newsResults.map((news, index) => (
                <div
                  key={index}
                  className="bg-[#F7DCB9] dark:bg-[#2d3748] rounded-lg shadow-lg overflow-hidden"
                >
                  {news.photo_url && (
                    <img
                      src={news.photo_url}
                      alt={news.title}
                      className="w-full h-40 object-cover"
                    />
                  )}
                  <div className="p-4">
                    <h3 className="text-center text-base md:text-lg  font-medium text-gray-800 dark:text-sky-300 mb-2">
                      {news.title}
                    </h3>
                    <p className="text-center   text-sm  md:text-base  text-orange-600 font-medium dark:text-gray-300 mb-3">
                      {news.snippet}
                    </p>
                    <a
                      href={news.link}
                      className="bg-[#ffb073] dark:bg-orange-600 dark:text-white flex justify-center w-fit font-medium mx-auto py-1 px-3 rounded-lg hover:bg-[#ffa35c] dark:hover:bg-[#ee6903]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more
                    </a>
                  </div>
                </div>
              ))
            : !error && <ErrorMSG />}
        </div>
      )}
    </main>
  );
};

export default SearchResults;
