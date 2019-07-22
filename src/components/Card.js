import React from "react";
import {Link} from "react-router-dom";

import './Card.css';
import placeholder from '../assets/images/placeholder-black.png';

const Card = ({ video, search }) => {
  // Base url for thumbnails
  let thumbnail = "https://image.tmdb.org/t/p/w342";

  return (
    <div className={`card ${search? `card--search` : null}`}>
      <div className="card__overlay overlay--black"></div>
      <div className="card__image">
        <img src={video.poster_path? `${thumbnail}${video.poster_path}` : placeholder} alt="thumbnail" />
      </div>
      <div className="card__content">
        <div className="card__content__description">
          <h2 className="card__content__description__header">{video.title || video.name}</h2>
          <span className="card__content__description__vote">{video.vote_average}/10</span>
          <p className="card__content__description__overview">{video.overview}</p>
        </div>
        <div className="card__content__icons">
          <button className="card__icon"><i className="far fa-thumbs-up"></i></button>
          <button className="card__icon"><i className="far fa-thumbs-down"></i></button>
          <Link to={
            video.title ? `/search/movie/${video.id}` :
            (video.name ? `/search/tv/${video.id}`: null)
          }>
            <button className="card__icon">
              <i className="fas fa-plus"></i>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;