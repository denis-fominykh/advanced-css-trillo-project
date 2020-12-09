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
      <img src={logo} alt="logo" className="logo" />
      <form action="#" className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search hotels"
        />
        <button className="search__button">
          <img src={magnifyingGlass} alt="magnifying-glass" />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <img src={bookmark} alt="bookmark" className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <img src={chat} alt="chat" className="user-nav__icon" />
          <span className="user-nav__notification">13</span>
        </div>
        <div className="user-nav__user">
          <img src={user} alt="user" className="user-nav__user-photo" />
          <span className="user-nav__user-name">John</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
