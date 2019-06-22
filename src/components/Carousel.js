import React from "react";
import "./Carousel.css";

const Carousel = ({moviesList, title, first}) => {
  // Base url for thumbnails
  let thumbnail = "https://image.tmdb.org/t/p/w300";

  const renderedList = moviesList.map(video => {
    return (
      <div className="ui card" key={video.id}>
        <div className="image">
          <img src={`${thumbnail}${video.backdrop_path}`} alt="thumbnail" />
        </div>
        <div className="content">
          <span className="right floated">{video.vote_average}/10</span>
          <h2 className="header">{video.title || video.name}</h2>
          <p className="description">{video.overview}</p>
        </div>
      </div>
    );
  });
  
  return (
    // Check if carousel is first, and add class to it using inline if statement
    <div className={`carousel${first ? ' carousel--first' : ''}`}>
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__list">
        {renderedList}
      </div>
    </div>
  );
};

export default Carousel;
