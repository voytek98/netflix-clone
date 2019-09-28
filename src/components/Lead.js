import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Lead.css";
import placeholder from "../assets/images/placeholder-black.png";

const Lead = ({movie}) => {
  const [isLoading, setIsLoading] = useState(true);
  // Set base url for image
  let baseImage = "https://image.tmdb.org/t/p/w1280";
  // Change font size of title to smaller if title is too long
    // if((movie.name.length || movie.title.length) >= 20 ) { document.querySelector('.lead__content__title').style.fontSize = "5em" }
  useEffect(()=> {
    if(movie.id) {
      setIsLoading(false)
    }
  }, [movie])

  return (
    <div className="lead">
      {isLoading?
        (
          <div className="spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        ) :
        (<div className="lead-wrapper">
        <div className="lead__background">
          <img
            src={
              (movie.backdrop_path === null) ? placeholder : `${baseImage}${movie.backdrop_path}`
            }
            alt="background"
            className="lead__background__image"
          />
        </div>
        <div className="overlay--black"></div>
        <div className="lead__content">
          <h2 className="lead__content__title">{movie.title || movie.name}</h2>
          <div className="lead__content__icons">
            <Link className="lead__content__icons__button" to={
              movie.title ? `/search/movie/${movie.id}` : `/search/tv/${movie.id}`
            }>
              <i className="lead__content__icons__icon fas fa-play" />Play
            </Link>
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon fas fa-plus" />My list
            </button>
          </div>
          <p className="lead__content__description">{movie.overview}</p>
        </div>
      </div>)
      }
    </div>
  );
}

export default Lead;
