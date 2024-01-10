import React from "react";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../public/assets/icons/icon/TickSquare.png";
import "./index.scss";
import arrow from "../../../public/assets/icons/icon/ArrowRight.png";
type Props = {};

export default function BusinessContent({}: Props) {
  return (
    <div className="business--content">
      <h2 className="business--content__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="business--content__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <div className="business--content__checks">
        <div className="business--content__check">
          <Button className=" icon-button--sm--primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business--content__check-text">
            Super useful and easy to use interface
          </span>
        </div>
        <div className="business--content__check">
          <Button className=" icon-button--sm--primary">
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business--content__check-text">
            Easiest way to grow your business in days
          </span>
        </div>
      </div>
      <div className="business--content__buttons">
        <Button className="business--content__button btn-md--primary">
          Contact Now{" "}
        </Button>
        <Button className=" business--content__button icon-button--sm-light button--border--bride-blush">
          <Image src={arrow.src} height={24} width={24} alt=">" />
        </Button>
        <Button className="business--content__button btn-md-light">
          Book a Demo Today
        </Button>
      </div>
    </div>
  );
}
