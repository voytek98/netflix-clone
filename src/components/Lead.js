import React from "react";
import "./Lead.css";

class Lead extends React.Component {
  
  render() {

    return (
      <div 
        className="lead"
        style={{ backgroundImage: "url(" + "https://image.tmdb.org/t/p/w1280/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg" + ")" }}
      >
        <div className="lead__content">
          <h2 className="lead__content__title">Capitan Marvel</h2>
          <div className="lead__content__icons">
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon play icon" />Play
            </button>
            <button className="lead__content__icons__button">
              <i className="lead__content__icons__icon plus icon" />My list
            </button>
          </div>
          <p className="lead__content__description">
            Quis exercitation excepteur cillum anim est officia aliquip tempor
            culpa officia adipisicing est qui. Quis ex magna cillum irure
            pariatur. Nisi dolor do elit occaecat et in excepteur. Cillum
            aliquip nulla aute ipsum cillum sunt ea ut reprehenderit.
          </p>
        </div>
      </div>
    );
  }
}

export default Lead;
