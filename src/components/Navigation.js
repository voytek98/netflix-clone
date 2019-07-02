import React from "react";

import './Navigation.css'
import logo from '../assets/images/logo.svg';

import NavigationSettings from './NavigationSettings';

const Navigation = ({nav}) => {
  return (
    <nav className={`navigation${nav ? ' navigation--scrolled' : ''}`}>
      <div className="navigation__menu">
        <div className="navigation__menu__left">
          <div className="navigation__logo">
            <img src={logo} alt="logo"/>
          </div>
          <button className="navigation__item navigation__item--active">Home</button>
          <button className="navigation__item">TV Shows</button>
          <button className="navigation__item">Movies</button>
          <button className="navigation__item">Recently Added</button>
          <button className="navigation__item">My List</button>
        </div>
        <div className="navigation__menu__right">
          <button className="navigation__item navigation__icon"><i className="fas fa-search"></i></button>
          <button className="navigation__item">KIDS</button>
          <button className="navigation__item navigation__icon"><i className="fas fa-bell"></i></button>
          <NavigationSettings />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
