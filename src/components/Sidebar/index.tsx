import React, { FC } from 'react';

import { ReactComponent as HomeSvg } from '../../assets/images/SVG/home.svg';
import { ReactComponent as PlaneSvg } from '../../assets/images/SVG/aircraft-take-off.svg';
import { ReactComponent as KeySvg } from '../../assets/images/SVG/key.svg';
import { ReactComponent as MapSvg } from '../../assets/images/SVG/map.svg';
import './index.scss';

const Sidebar: FC = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a className="side-nav__link" href="#">
            <HomeSvg className="side-nav__icon" />
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a className="side-nav__link" href="#">
            <PlaneSvg className="side-nav__icon" />
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a className="side-nav__link" href="#">
            <KeySvg className="side-nav__icon" />
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a className="side-nav__link" href="#">
            <MapSvg className="side-nav__icon" />
            <span>Tours</span>
          </a>
        </li>
      </ul>
      <div className="legal">&copy; 2021 by Trillo. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
