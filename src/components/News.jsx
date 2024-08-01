import React, { useEffect, useState, useCallback } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import ErrorMsg from "./ErrorMsg";

const News = ({ country, pageSize = 8, category, setProgress }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  };

  const updateNews = useCallback(async () => {
    setProgress(10);
    const url = `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${category}&limit=${pageSize}&country=${country}&lang=en`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": import.meta.env.VITE_NEWS_API_KEY,
        "x-rapidapi-host": "real-time-news-data.p.rapidapi.com",
      },
    };

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("API response:", result);

      // Check if the result contains the expected data
      if (result && result.data) {
        setArticles(result.data);
        setTotalResults(result.totalResults || 0); // Adjust if necessary
      } else {
        setArticles([]);
        setTotalResults(0);
      }

      setLoading(false);
      setProgress(100);
    } catch (error) {
      console.error("Fetch error:", error.message);
      setError(error.message);
      setLoading(false);
      setProgress(100);
    }
  }, [category, country, pageSize, setProgress]);

  useEffect(() => {
    document.title = `News Verse - ${capitalizeFirstLetter(category)}`;
    updateNews();
    // eslint-disable-next-line
  }, [category, updateNews]);

  const fetchMoreData = useCallback(async () => {
    const url = `https://real-time-news-data.p.rapidapi.com/topic-headlines?topic=${category}&limit=${pageSize}&country=${country}&lang=en`;
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
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const result = await response.json();
      console.log("More data fetched:", result);

      // Append new articles to existing articles
      if (result && result.data) {
        setArticles((prevArticles) => [
          ...prevArticles,
          ...(result.data || []),
        ]);
      }
    } catch (error) {
      console.error("Fetch error:", error.message);
    }
  }, [category, country, pageSize]);

  if (error) {
    return (
      <div className="text-center text-red-500">
        Error: <ErrorMsg />{" "}
      </div>
    );
  }

  return (
    <div className="bg-[#C36A2D] min-h-screen dark:bg-[#0f172a]">
      <h1 className="text-center pt-[7rem] pb-[2rem] text-2xl  sm:text-4xl md:text-5xl  text-white font-bold ">
        {capitalizeFirstLetter(category)} News
      </h1>

      {loading && <Spinner />}

      {!loading && (
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalResults} // Adjust this if totalResults is not in the response
          loader={<Spinner />}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {articles.map((element, index) => (
                <div
                  className={`${
                    (index + 1) % 4 === 0
                      ? "md:col-span-1"
                      : "md:col-span-1 lg:col-span-1 xl:col-span-1"
                  }`}
                  key={`${element.link}-${index}`}
                >
                  <NewsItem
                    title={element.title || ""}
                    description={element.snippet || ""}
                    imgURL={element.photo_url}
                    newsURL={element.link}
                    author={element.source_name}
                    date={element.published_datetime_utc}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  setProgress: PropTypes.func.isRequired,
};

export default News;
