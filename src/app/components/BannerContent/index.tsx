import React from "react";
import "./index.scss";

import Image from "next/image";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";
import star from "../../../../public/assets/icons/icon/Star.png";
import Button from "../Button";

type Props = {};

export default function BannerContent({}: Props) {
  return (
    <div
      // style={{ background: "red" }}
      className="banner-section__content"
    >
      <h2 className="banner-section__heading">
        Launch a software businesses website today with us!
      </h2>
      <p className="banner-section__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <div className="banner-section__button-wrapper">
        <Button
          size="medium"
          className="banner-section__button button text-midnight-blue bg-bride-blush"
        >
          Contact Now{" "}
        </Button>
        <Button
          size="small"
          className=" button banner-section__button button bg-white  border-bride-blush"
        >
          <Image src={arrow.src} height={24} width={24} alt=">" />
        </Button>
        <Button
          size="medium"
          className="button banner-section__button bg-white text-midnight-blue padding-x-zero"
        >
          Book a Demo Today
        </Button>
      </div>
      <div className="banner-section__rating">
        <Button size="small" className="button bg-bride-blush">
          <Image src={star.src} height={24} width={24} alt=">" />
        </Button>
        <span className="banner-section__rating__description">
          Rated 4.9 out of 1200 reviews
        </span>
      </div>
    </div>
  );
}
