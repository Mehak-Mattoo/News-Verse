import React from "react";

export default function NewsItem(props) {
  const imageStyle = {
    height: "14rem",
  };

  const buttonStyle = {
    backgroundColor: "#E86A33",
    color: "white",
  };

  const titleStyling = {
    color: "#41644A",
    fontWeight: "900",
  };

  const descriptionStyling = {
    fontWeight: "500",
  };

  const cardBodyStyle = {
    boxShadow: "10px 10px #AAC8A7",
  };

  const authorStyling = {
    fontSize: "0.7rem",
    marginTop: "0.5rem",
  };

  let { title, description, imgURL, newsURL, author, date } = props;

  return (
    <>
      <div className="card m-2 text-center" style={cardBodyStyle}>
        {/* if there is no image url, then a default image will be shown*/}
        <img
          src={
            !imgURL
              ? "https://cdn.pixabay.com/photo/2015/02/15/09/33/news-636978_1280.jpg"
              : imgURL
          }
          style={imageStyle}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title" style={titleStyling}>
            {title}{" "}
          </h5>

          <p className="card-text" style={descriptionStyling}>
            {description}...
          </p>
          <a
            rel="noreferrer"
            href={newsURL}
            style={buttonStyle}
            target="_blank"
            className="btn btn-sm"
          >
            Read More
          </a>
          <p className="card-text" style={authorStyling}>
            By {author ? author : "Unknown"}: on {new Date(date).toGMTString()}
          </p>
        </div>
      </div>
    </>
  );
}
