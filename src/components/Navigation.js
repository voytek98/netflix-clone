import React from "react";
import { HashRouter as Router, NavLink } from "react-router-dom";

import "./Navigation.css";
import logo from "../assets/images/logo.svg";

import NavigationSettings from "./NavigationSettings";

const Navigation = ({ nav }) => {
  return (
    <nav className={`navigation${nav ? " navigation--scrolled" : ""}`}>
      <div className="navigation__menu">
        <Router>
          <div className="navigation__brand">
            <div className="navigation__collapse">
              <button className="navigation__hamburger">
                <i className="fas fa-bars" />
              </button>
            </div>
            <div className="navigation__logo">
              <NavLink exact to="/" className="navigation__link">
                <img src={logo} alt="logo" />
              </NavLink>
            </div>
          </div>
          <div className="navigation__menus">
            <div className="navigation__menu__left">
              <button className="navigation__item">
                <NavLink
                  exact
                  to="/"
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  Home
                </NavLink>
              </button>
              <button className="navigation__item">
                <NavLink
                  to="/tv-shows"
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  TV Shows
                </NavLink>
              </button>
              <button className="navigation__item">
                <NavLink
                  to="/movies"
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  Movies
                </NavLink>
              </button>
              <button className="navigation__item">
                <NavLink
                  to="/recently-added"
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  Recently Added
                </NavLink>
              </button>
              <button className="navigation__item">
                <NavLink
                  to="/my-list"
                  className="navigation__link"
                  activeClassName="navigation__link--active"
                >
                  My List
                </NavLink>
              </button>
            </div>
            <div className="navigation__menu__right">
              <button className="navigation__item navigation__icon">
                <i className="fas fa-search" />
              </button>
              <button className="navigation__item navigation__item__profile__name">
                KIDS
              </button>
              <button className="navigation__item navigation__icon">
                <i className="fas fa-bell" />
              </button>
              <NavigationSettings />
            </div>
          </div>
        </Router>
      </div>
    </nav>
  );
};

export default Navigation;
