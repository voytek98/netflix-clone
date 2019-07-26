import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./SearchTitle.css";
import moviesdb from "../api/moviedb";

const SearchTitle = ({ match }) => {
  const [title, setTitle] = useState([]);

  let baseImage = "https://image.tmdb.org/t/p/w1280";
  let posterImage = "https://image.tmdb.org/t/p/w500";
  
  useEffect(() => {
    const type = match.path.includes("tv") ? "tv" : "movie";
    
    const findTitle = async() => {
      let res = await moviesdb.get(`${type}/${match.params.id}`, {
        params: { api_key: process.env.REACT_APP_API }
      });
      
      setTitle(res.data);
      console.log(res.data)
    }

    if (title.length === 0)  {
      window.scrollTo(0, 0);
      findTitle();
    }
  });

  const isTv = title.name;

  return (
    <div className="main-content">
      <div className="show__title">
        <div className="about__background">
          <img src={`${baseImage}${title.backdrop_path}`} alt="" />
        </div>
        <div className="about__title">
          <div className="about__title__poster">
            <img src={`${posterImage}${title.poster_path}`} alt="" />
          </div>
          <div className="about__title__description">
            <h1>{title.title || title.name}</h1>
            {(title.original_title !== title.title) || (title.original_name !== title.name) ? 
              <h2>
                {title.original_title || title.original_name}
              </h2>
            : null
            } 
            <h2>{title.release_date || `${title.first_air_date} - ${title.last_air_date}`}</h2>
            <h3>{`${title.vote_average}/10`}</h3>
            <h3>{`${title.vote_count} votes`}</h3>
            {title.tagline ? <h2>{title.tagline}</h2> : null}
            {title.number_of_episodes ? (
              <h2>{`${title.number_of_seasons} season(s) ${
                title.number_of_episodes
              } episodes`}</h2>
            ) : null}
            <p>{title.overview}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SearchTitle);
