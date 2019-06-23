import React from "react";
import "./Lead.css";

const Lead = ({movie}) => {
  // Set base url for image
  let baseImage = "https://image.tmdb.org/t/p/w1280";
  if(typeof movie.name !== "undefined") {
    // Change font size of title to smaller if title is too long
    if(movie.name.length >= 20 ) { document.querySelector('.lead__content__title').style.fontSize = "5em" }
  }

  return (
    <div 
      className="lead"
      style={{ backgroundImage: `url(${baseImage}${movie.backdrop_path}` }}
    >
      <div className="overlay--black"></div>
      <div className="lead__content">
        <h2 className="lead__content__title">{movie.title || movie.name}</h2>
        <div className="lead__content__icons">
          <button className="lead__content__icons__button">
            <i className="lead__content__icons__icon fas fa-play" />Play
          </button>
          <button className="lead__content__icons__button">
            <i className="lead__content__icons__icon fas fa-plus" />My list
          </button>
        </div>
        <p className="lead__content__description">{movie.overview}</p>
      </div>
    </div>
  );
}

// Lead.defaultProps = {
//   movie: []
// }

export default Lead;
