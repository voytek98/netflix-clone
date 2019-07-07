import React from "react";

import "./NavigationSettings.css";
import profile from "../assets/images/profile.png";

const NavigationSettings = () => {
  return (
    <div className="navigation__profile">
      <div className="navigation__profile__account">
        <img
          className="navigation__profile__avatar"
          src={profile}
          alt="profile"
        />
        <i className="navigation__profile__icon fas fa-caret-down" />
      </div>
      <div className="navigation__profile__dropdown">
        <i className="navigation__profile__dropdown__icon fas fa-caret-up" />
        <div className="navigation__profile__dropdown__content">
          <ul className="navigation__profile__dropdown__list">
            <li className="navigation__profile__dropdown__item">
              <img className="navigation__profile__avatar" src={profile} alt="kids avatar"/>
              Kids
            </li>
            <li className="navigation__profile__dropdown__item">
              Manage Profiles
            </li>
          </ul>
          <hr/>
          <ul className="navigation__profile__dropdown__list">
            <li className="navigation__profile__dropdown__item">Account</li>
            <li className="navigation__profile__dropdown__item">Help Center</li>
            <li className="navigation__profile__dropdown__item">
              Sign out of Netflix
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default NavigationSettings;
