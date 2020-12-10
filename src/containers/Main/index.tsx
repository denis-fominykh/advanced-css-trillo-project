import React, { FC } from 'react';

import firstHotel from '../../assets/images/hotel-1.jpg';
import secondHotel from '../../assets/images/hotel-2.jpg';
import thirdHotel from '../../assets/images/hotel-3.jpg';

import { ReactComponent as StarSvg } from '../../assets/images/SVG/star.svg';
import { ReactComponent as LocationSvg } from '../../assets/images/SVG/location-pin.svg';

import './index.scss';

const Main: FC = () => {
  return (
    <main className="hotel-view">
      <div className="gallery">
        <figure className="gallery__item">
          <img className="gallery__photo" src={firstHotel} alt="hotel" />
        </figure>
        <figure className="gallery__item">
          <img className="gallery__photo" src={secondHotel} alt="hotel" />
        </figure>
        <figure className="gallery__item">
          <img className="gallery__photo" src={thirdHotel} alt="hotel" />
        </figure>
      </div>
      <div className="overview">
        <h1 className="overview__heading">Hotel Las Palmas</h1>
        <div className="overview__stars">
          <StarSvg className="overview__icon-star" />
          <StarSvg className="overview__icon-star" />
          <StarSvg className="overview__icon-star" />
          <StarSvg className="overview__icon-star" />
          <StarSvg className="overview__icon-star" />
        </div>
        <div className="overview__location">
          <LocationSvg className="overview__icon-location" />
          <button className="btn-inline">Albufeira, Portugal</button>
        </div>
        <div className="overview__rating">
          <div className="overview__rating-average">8.6</div>
          <div className="overview__rating-count">429 votes</div>
        </div>
      </div>
    </main>
  );
};

export default Main;
