import React from 'react';

import './NavigationSettings.css';
import profile from '../assets/images/profile.png';

const NavigationSettings = () => {
    return (
    <div className="navigation__profile">
        <img class="navigation__profile__avatar" src={profile} alt="profile"/>
        <i class="navigation__profile__icon fas fa-caret-down"></i>
        <div className="navigation__profile__dropdown">
          <ul className="navigation__profile__dropdown__list">
            <li className="navigation__profile__dropdown__item">Manage Profiles</li>
            <li className="navigation__profile__dropdown__item">Kids</li>
            <li className="navigation__profile__dropdown__item">Account</li>
            <li className="navigation__profile__dropdown__item">Help Center</li>
            <li className="navigation__profile__dropdown__item">Sign out of Netflix</li>
          </ul>
        </div>
    </div>
    )
}

export default NavigationSettings;