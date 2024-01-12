import React from "react";
import "./index.scss";
import Button from "@/components/Button";
import Image from "next/image";
import arrow from "../../../public/assets/icons/icon/ArrowRight.png";
import star from "../../../public/assets/icons/icon/Star.png";

type Props = {};

export default function BannerContent({}: Props) {
  return (
    <div
      // style={{ background: "red" }}
      className="banner__content"
    >
      <h2 className="banner__heading">
        Launch a software businesses website today with us!
      </h2>
      <p className="banner__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
      </p>
      <div className="banner__buttons">
        <Button
          clickEvent={() => console.log("Contact Now")}
          className="banner__button button--md button--text-midnight-blue    button--bg-bride-blush"
        >
          Contact Now{" "}
        </Button>
        <Button
          clickEvent={() => console.log("Contact Now")}
          className=" banner__button icon-button--sm  button--bg-white  button-border--bride-blush"
        >
          <Image src={arrow.src} height={24} width={24} alt=">" />
        </Button>
        <Button
          clickEvent={() => console.log("Contact Now")}
          className="banner__button  button--md  button--bg-white   button--text-midnight-blue  button-padding-x--zero"
        >
          Book a Demo Today
        </Button>
      </div>
      <div className="banner__star">
        <Button
          clickEvent={() => console.log("Contact Now")}
          className=" icon-button--sm  button--bg-bride-blush"
        >
          <Image src={star.src} height={24} width={24} alt=">" />
        </Button>
        <span className="banner__star-text">Rated 4.9 out of 1200 reviews</span>
      </div>
    </div>
  );
}
