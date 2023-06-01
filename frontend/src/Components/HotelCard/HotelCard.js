import React from "react";
import "./HotelCard.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import {AiFillStar} from "react-icons/ai";
import {BsCartPlus} from "react-icons/bs";
const HotelCard = (props) => {
  const { placePic, ratings, address, name, extraInfo } = props;
  return (
    <div className="shop-product">
      <div className="shop-product__img-wrapper">
        <LazyLoadImage
          effect="blur"
          src={placePic}
          className="shop-product__img"
          alt={name}
          width="100%"
          height="100%"
        ></LazyLoadImage>
        <div className="shop-product__rate">
          <AiFillStar />
          <span>{ratings}</span>
        </div>
      </div>

      <div className="shop-product__content">
        <div className="shop-product__name">{name}</div>
        <p className="shop-product__description">{address}</p>
        <div className="shop-product__extra">
            <p>{extraInfo.length > 50 ? extraInfo.slice(0, 50) + "..." : extraInfo + "..."}</p>
          </div>
      </div>

      <div className="shop-product__btns">
        <div className="shop-product__btn__book">
          <a href="#">Book Now</a>
        </div>
        <div className="shop-product__btn">
          <BsCartPlus />
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
