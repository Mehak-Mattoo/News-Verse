import React, { useEffect, useState } from "react";

const Topheadlines = () => {
  const [headlines, setHeadlines] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    const url =
      "https://real-time-news-data.p.rapidapi.com/top-headlines?limit=10&country=US&lang=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f3fb94004emsh4e45e9d4d706ab3p1df26bjsn9c485daaa37c",
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

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news: {error.message}</div>;

  return (
    <div className="p-4 bg-[#C36A2D] dark:bg-[#1e293b]">
      <h2 className="text-center text-2xl font-bold text-white mb-4">
        Top Headlines
      </h2>
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