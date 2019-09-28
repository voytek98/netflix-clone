import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

import "./SearchTitle.css";
import moviesdb from "../api/moviedb";

const SearchTitle = ({ match }) => {
  const [title, setTitle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let baseImage = "https://image.tmdb.org/t/p/w1280";
  let posterImage = "https://image.tmdb.org/t/p/w500";

  let mobileScreen = window.matchMedia("(max-width: 575.98px)");
  let isTv = title.name;

  useEffect(() => {
    const type = match.path.includes("tv") ? "tv" : "movie";

    const findTitle = async () => {
      let res = await moviesdb.get(`${type}/${match.params.id}`, {
        params: { api_key: process.env.REACT_APP_API }
      });

      setTitle(res.data);
      setIsLoading(false)
      console.log(res.data);
    };

    if (title.length === 0) {
      window.scrollTo(0, 0);
      findTitle();
    }
    // eslint-disable-next-line 
  },[]);

  return (
    <div className="main-content">
      {isLoading ? (
        <div className="find__title">
          <div className="spinner">
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
          </div>
        </div>
        ) :
        (<div className="find__title">
          <div className="about__background">
            <img
              src={
                mobileScreen.matches
                  ? `${posterImage}${title.poster_path}`
                  : `${baseImage}${title.backdrop_path}`
              }
              alt=""
            />
          </div>
          <div className="about__title">
            <div className="about__title__poster">
              <img src={`${posterImage}${title.poster_path}`} alt="" />
            </div>
            <div className="about__title__description">
              <h1 className="show__title">{title.title || title.name}</h1>
              {title.original_title !== title.title ||
              title.original_name !== title.name ? (
                <h2 className="show__original-title">
                  {title.original_title || title.original_name}
                </h2>
              ) : null}
              <div className="show__dates">
                <h3 className="show__date">
                  {title.release_date ||
                    `${title.first_air_date} - ${title.last_air_date}`}
                </h3>
                {isTv ? (
                  <h3
                    className={`show__production show__production--${
                      title.in_production ? "airing" : "completed"
                    }`}
                  >
                    {title.in_production ? "In Production" : "completed"}
                  </h3>
                ) : null}
              </div>
              <div className="show__votes">
                <h3 className="show__vote-average">{`${
                  title.vote_average
                }/10`}</h3>
                <h3 className="show__vote-count">{`${
                  title.vote_count
                } votes`}</h3>
              </div>
              {title.tagline ? (
                <h2 className="show__tagline">{title.tagline}</h2>
              ) : null}
              {title.number_of_episodes ? (
                <h2 className="show__seasons">{`${
                  title.number_of_seasons
                } season(s) ${title.number_of_episodes} episodes`}</h2>
              ) : null}
              <p className="show__overview">{title.overview}</p>
              <div className="card__content__icons card__content__icons--result">
                <button className="card__icon"><i className="far fa-thumbs-up"></i></button>
                <button className="card__icon"><i className="far fa-thumbs-down"></i></button>
              </div>
            </div>
          </div>
        </div>
        )
      }
    </div>
  );
};

export default withRouter(SearchTitle);
