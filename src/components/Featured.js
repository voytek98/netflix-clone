import React, { useState, useEffect} from "react";

import "./Featured.css"

import {randomNetflixTitle} from '../api/requests';

const Featured = () => {
  const [random, setRandom] = useState({})

  let mobileScreen = window.matchMedia('(max-width: 575.98px)');

  let baseImage = "https://image.tmdb.org/t/p/w1280";
  let posterImage = "https://image.tmdb.org/t/p/w500";
  
  useEffect(()=> {
    randomNetflixTitle().then(randomNetflixTitle => setRandom(randomNetflixTitle))  
  }, []);

  return (
    <div className="featured">
      <div className="featured__background">
        <img 
          src={
            mobileScreen.matches ? `${posterImage}${random.poster_path}` :
            `${baseImage}${random.backdrop_path}`
          } 
          alt=""
        />
      </div>
      <div className="featured__content">
        <div className="featured__image">
          <img src={`${baseImage}${random.backdrop_path}`} alt=""/>
        </div>
        <div className="featured__lead">
          <h2 className="lead__content__title">{random.title || random.name}</h2>
          <div className="lead__content__icons">
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon fas fa-play" />Play
            </button>
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon fas fa-plus" />My list
            </button>
          </div>
          <p className="lead__content__description">{random.overview}</p>
        </div>
      </div>
    </div>
  )
};

export default Featured;
