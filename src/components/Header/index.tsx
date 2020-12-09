import React, { FC } from 'react';

import logo from '../../assets/images/logo.png';
import magnifyingGlass from '../../assets/images/SVG/magnifying-glass.svg';
import bookmark from '../../assets/images/SVG/bookmark.svg';
import chat from '../../assets/images/SVG/chat.svg';
import user from '../../assets/images/user.jpg';
import './index.scss';

const Header: FC = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />
      <form className="search" action="#">
        <input
          className="search__input"
          type="text"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <img src={magnifyingGlass} alt="magnifying-glass" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <img className="user-nav__icon" src={bookmark} alt="bookmark" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <img className="user-nav__icon" src={chat} alt="chat" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img className="user-nav__user-photo" src={user} alt="user" />
          <span className="user-nav__user-name">John</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
