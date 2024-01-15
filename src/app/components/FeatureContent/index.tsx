"use client";
import Button from "../Button";
import Image from "next/image";
import React from "react";
import "./index.scss";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
type Props = {};

export default function FeatureContent({}: Props) {
  return (
    <div className="feature-section__content">
      <h2 className="feature-section__content__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="feature-section__content__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
        <br />
        <br />
        We are making every business grow!
      </p>
      <div className="feature-section__content__feature-wrapper">
        <div className="feature-section__feature">
          <Button
            size="small"
            clickEvent={() => console.log("hi")}
            className="bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="feature-section__feature__title">
            Super useful and easy to use interface
          </span>
        </div>
        <div className="feature-section__feature">
          <Button
            clickEvent={() => console.log("hi")}
            size="small"
            className="bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="feature-section__feature__title">
            Easiest way to grow your business in days
          </span>
        </div>
      </div>
    </div>
  );
}
