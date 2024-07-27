import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `News Verse- ${capitalizeFirstLetter(props.category)} `;
    updateNews();
    // eslint-disable-next-line
  }, []);

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=${
      import.meta.env.VITE_NEWS_API_KEY
    }&page=${page + 1}&pageSize=${props.pageSize}`;
    setPage(page + 1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };

  return (
    <>
      <div className="bg-[#F7DCB9] min-h-screen dark:bg-[#0f172a]">
        <h1
          className="text-center"
          style={{
            padding: "3.5rem 0rem",
            paddingTop: "7rem",
            color: "#FF8225",
            fontWeight: "900",
            fontSize: "3.2rem",
          }}
        >
          {capitalizeFirstLetter(props.category)} News
        </h1>

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner />}
        >
          <div className="container mx-auto px-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {articles.map((element, index) => {
                return (
                  <div
                    className={`${
                      (index + 1) % 4 === 0
                        ? "md:col-span-1"
                        : "md:col-span-1 lg:col-span-1 xl:col-span-1"
                    }`}
                    key={`${element.url}-${index}`} // Ensure uniqueness
                  >
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      imgURL={element.urlToImage}
                      newsURL={element.url}
                      author={element.author}
                      date={element.publishedAt}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
