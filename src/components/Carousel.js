import React from "react";
import "./Carousel.css";

const Carousel = () => {
  return (
    <div className="carousel">
      <h2 className="carousel__title">Trending Now</h2>
      <div className="carousel__list">
        <div className="carousel__card"></div>
        <div className="carousel__card"></div>
        <div className="carousel__card"></div>
        <div className="carousel__card"></div>
        <div className="carousel__card"></div>
      </div>
    </div>
  );
};

export default Carousel;
