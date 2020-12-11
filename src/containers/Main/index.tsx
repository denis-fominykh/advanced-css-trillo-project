import React, { FC } from 'react';

import firstHotel from '../../assets/images/hotel-1.jpg';
import secondHotel from '../../assets/images/hotel-2.jpg';
import thirdHotel from '../../assets/images/hotel-3.jpg';

import firstUser from '../../assets/images/user-1.jpg';
import secondUser from '../../assets/images/user-2.jpg';
import thirdUser from '../../assets/images/user-3.jpg';
import fourthUser from '../../assets/images/user-4.jpg';
import fifthUser from '../../assets/images/user-5.jpg';
import sixthUser from '../../assets/images/user-6.jpg';

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
      <div className="detail">
        <div className="description">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
            dignissimos debitis ratione sapiente saepe. Accusantium cumque,
            quas, ut corporis incidunt deserunt quae architecto voluptate.
          </p>
          <p className="paragraph">
            Accusantium cumque, quas, ut corporis incidunt deserunt quae
            architecto voluptate delectus, inventore iure aliquid aliquam.
          </p>
          <ul className="list">
            <li className="list__item">Close to the beach</li>
            <li className="list__item">Breakfast included</li>
            <li className="list__item">Free airport shuttle</li>
            <li className="list__item">Free wifi in all rooms</li>
            <li className="list__item">Air conditioning and heating</li>
            <li className="list__item">Pets allowed</li>
            <li className="list__item">We speak all languages</li>
            <li className="list__item">Perfect for families</li>
          </ul>
          <div className="recommend">
            <p className="recommend__count">
              Lucy and 3 other friends recommend this hotel.
            </p>
            <div className="recommend__friends">
              <img
                className="recommend__photo"
                src={thirdUser}
                alt="Friend 3"
              />
              <img
                className="recommend__photo"
                src={fourthUser}
                alt="Friend 4"
              />
              <img
                className="recommend__photo"
                src={fifthUser}
                alt="Friend 5"
              />
              <img
                className="recommend__photo"
                src={sixthUser}
                alt="Friend 6"
              />
            </div>
          </div>
        </div>
        <div className="user-reviews">
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi, totam, itaque officia ex.
            </blockquote>
            <figcaption className="review__user">
              <img className="review__photo" src={firstUser} alt="User 1" />
              <div className="review__user-box">
                <p className="review__user-name">Nick Smith</p>
                <p className="review__user-date">Feb 23rd, 2021</p>
              </div>
              <div className="review__rating">7.8</div>
            </figcaption>
          </figure>
          <figure className="review">
            <blockquote className="review__text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
              doloremque architecto dicta animi.
            </blockquote>
            <figcaption className="review__user">
              <img className="review__photo" src={secondUser} alt="User 2" />
              <div className="review__user-box">
                <p className="review__user-name">Mary Thomas</p>
                <p className="review__user-date">Sep 13rd, 2021</p>
              </div>
              <div className="review__rating">9.3</div>
            </figcaption>
          </figure>
          <button className="btn-inline">
            Show all <span>&rarr;</span>
          </button>
        </div>
      </div>
      <div className="cta">
        <h2 className="cta__book-now">
          Good news! We have 4 free rooms for your selected dates!
        </h2>
        <button className="btn">
          <span className="btn__visible">Book now</span>
          <span className="btn__invisible">Only 4 rooms left</span>
        </button>
      </div>
    </main>
  );
};

export default Main;
