import React from "react";
import "./Carousel.css";

import Card from './Card';

const Carousel = ({moviesList, title, first, noMargin}) => {
  let largeScreen = window.matchMedia('(min-width: 992px)');
  
  const renderedList = moviesList.map(video => {
    return <Card video={video} key={video.id}/>
  });
  
  return (
    // Check if carousel is first, and add class to it using inline if statement
    <div className={`carousel${first && largeScreen.matches ? ' carousel--first' : ''}${noMargin && largeScreen.matches ? ' carousel--no__margin' : ''}`}>
      <h2 className="carousel__title">{title}</h2>
      <div className="carousel__list">
        {renderedList}
      </div>
    </div>
  );
};

export default Carousel;
