"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
import "./index.scss";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";
type Props = {};

export default function BusinessContent({}: Props) {
  return (
    <div className="business-section__content">
      <h2 className="business-section__content__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="business-section__content__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <div className="business-section__content__feature-wrapper">
        <div className="business-section__content__feature">
          <Button
            clickEvent={() => console.log("hi")}
            className=" icon-button--sm  button--bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business-section__content__feature__title">
            Super useful and easy to use interface
          </span>
        </div>
        <div className="business-section__content__feature">
          <Button
            clickEvent={() => console.log("hi")}
            className=" icon-button--sm  button--bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business-section__content__feature__title">
            Easiest way to grow your business in days
          </span>
        </div>
      </div>
      <div className="business-section__content__button-wrapper">
        <Button
          clickEvent={() => console.log("hi")}
          className="business-section__content__button button--md button--text-midnight-blue    button--bg-bride-blush"
        >
          Contact Now{" "}
        </Button>
        <Button
          clickEvent={() => console.log("hi")}
          className=" business-section__content__button icon-button--sm  button--bg-white  button-border--bride-blush"
        >
          <Image src={arrow.src} height={24} width={24} alt=">" />
        </Button>
        <Button
          clickEvent={() => console.log("hi")}
          className="business-content__button  button--md  button--bg-white   button--text-midnight-blue  button-padding-x--zero"
        >
          Book a Demo Today
        </Button>
      </div>
    </div>
  );
}
