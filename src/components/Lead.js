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
      {/* <div className="lead__background">
        <img onError={e => e.target.setAttribute("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/A_blank_black_picture.jpg/1536px-A_blank_black_picture.jpg")} src={`${baseImage}${movie.backdrop_path}`} alt="background" className="lead__background__image"/>
      </div> */}
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

export default Lead;
