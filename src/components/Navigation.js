import React from "react";

import logo from '../assets/images/logo.svg';
import profile from '../assets/images/profile.png';

const Navigation = () => {
  return (
    <nav>
      <div className="ui inverted segment">
        <div className="ui inverted secondary menu">
          <div className="item">
            <img src={logo} alt="logo"/>
          </div>
          <button className="active item">Home</button>
          <button className="item">TV Shows</button>
          <button className="item">Movies</button>
          <button className="item">Recently Added</button>
          <button className="item">My List</button>
          <div className="right menu">
            <button className="item"><i className="search icon"></i></button>
            <button className="item"><i className="bell outline icon"></i></button>
            <button className="item">KIDS</button>
            <img src={profile} alt="profile" style={{maxHeight: '40px'}}/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
