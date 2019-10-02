import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { LoadingCircle } from "./LoadingSpinners";

import "./Featured.css"
import placeholder from "../assets/images/placeholder-black.png";

const Featured = ({title}) => {
  const [random, setRandom] = useState({});

  let mobileScreen = window.matchMedia('(max-width: 575.98px)');

  let baseImage = "https://image.tmdb.org/t/p/w1280";
  let posterImage = "https://image.tmdb.org/t/p/w500";
  
  useEffect(()=> {
    title().then(title => setRandom(title))
  }, [title]);

  return (
    <div className="featured">
      {!random.id? <LoadingCircle /> :
      <>
        <div className="featured__background">
          <img 
            src={ 
              // Prevent 404 error
              typeof random.backdrop_path == ("undefined" || "null") ? placeholder :
              // Set background image depend on user screen size
              (mobileScreen.matches ? `${posterImage}${random.poster_path}` :
              `${baseImage}${random.backdrop_path}`)
            }
            alt=""
          />
        </div>
        <div className="featured__content">
        <div className="featured__image">
          <img 
            src={
              // Prevent 404 error
              typeof random.backdrop_path == ("undefined" || "null") ? placeholder :
              `${baseImage}${random.backdrop_path}`
            } 
            alt=""
          />
        </div>
        <div className="featured__lead">
          <h2 className="lead__content__title">{random.title || random.name}</h2>
          <div className="lead__content__icons">
            <Link className="lead__content__icons__button" to={
              random.title ? `/search/movie/${random.id}` : `/search/tv/${random.id}`
            }>
              <i className="lead__content__icons__icon fas fa-play" />Play
            </Link>
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon fas fa-plus" />My list
            </button>
          </div>
          <p className="lead__content__description">{random.overview}</p>
        </div>
      </div>
      </>
      }
    </div>
  )
};

export default Featured;
