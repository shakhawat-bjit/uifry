"use client";
import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";
import profile from "../../../../public/assets/icons/icon/Profile.png";
import arrowRight from "../../../../public/assets/icons/icon/ArrowRight.png";
import send from "../../../../public/assets/icons/icon/Send.png";

type Props = {};

export default function ContactContent({}: Props) {
  return (
    <div className="contact-section__content">
      <h2 className="contact-section__content__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="contact-section__content__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
        <br />
        <br />
        <span className="contact-section__content__description--bold">
          We are making every business grow!
        </span>
      </p>

      <form className="contact-section__content__form">
        <div className="contact-section__content__form__input-wrapper">
          <Image src={profile.src} width={24} height={24} alt="profile" />
          <input
            placeholder="Full Name"
            className="contact-section__content__input"
          />
        </div>
        <div className="contact-section__content__form__input-wrapper">
          <Image src={send.src} width={24} height={24} alt="profile" />
          <input
            placeholder="Email address"
            className="contact-section__content__input"
          />
        </div>
        <div>
          <Button
            clickEvent={() => console.log("hi")}
            className="button--lg button--bg-bride-blush  button--text-midnight-blue"
          >
            <span style={{ marginRight: "8px" }}>Contact Now</span>
            <Image src={arrowRight.src} width={24} height={24} alt="profile" />
          </Button>
        </div>
      </form>
    </div>
  );
}
