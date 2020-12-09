import React, { FC } from 'react';

import logo from '../../assets/images/logo.png';
import user from '../../assets/images/user.jpg';
import { ReactComponent as MagnifyingGlassSvg } from '../../assets/images/SVG/magnifying-glass.svg';
import { ReactComponent as BookmarkSvg } from '../../assets/images/SVG/bookmark.svg';
import { ReactComponent as ChatSvg } from '../../assets/images/SVG/chat.svg';

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
          <MagnifyingGlassSvg />
        </button>
      </form>
      <nav className="user-nav">
        <div className="user-nav__icon-box">
          <BookmarkSvg className="user-nav__icon" />
          <span className="user-nav__notification">7</span>
        </div>
        <div className="user-nav__icon-box">
          <ChatSvg className="user-nav__icon" />
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
