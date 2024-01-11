import React from "react";
import "./index.scss";
import Button from "@/components/Button";
import Image from "next/image";
import tick from "../../../public/assets/icons/icon/TickSquare.png";
import profile from "../../../public/assets/icons/icon/Profile.png";
import arrowRight from "../../../public/assets/icons/icon/ArrowRight.png";
import send from "../../../public/assets/icons/icon/Send.png";

type Props = {};

export default function ContactFormContent({}: Props) {
  return (
    <div className="contact-form-content__text">
      <h2 className="contact-form-content__heading">
        Let your business thrive under our supervision
      </h2>
      <p className="contact-form-content__description">
        Launch a business today with our help and get it done with amazing
        launch features, websites and more with uifry. We help business like
        yours thrive every day and beyond.
        <br />
        <br />
        <span className="contact-form-content__description--bold">
          We are making every business grow!
        </span>
      </p>

      <div className="contact-form-content__form">
        <form>
          <div className="contact-form-content__input-container">
            <Image src={profile.src} width={24} height={24} alt="profile" />
            <input
              placeholder="Full Name"
              className="contact-form-content__input"
            />
          </div>
          <div className="contact-form-content__input-container">
            <Image src={send.src} width={24} height={24} alt="profile" />
            <input
              placeholder="Email address"
              className="contact-form-content__input"
            />
          </div>
          <div>
            <Button className="button--lg--bride-blush ">
              <span style={{ marginRight: "8px" }}>Contact Now</span>
              <Image
                src={arrowRight.src}
                width={24}
                height={24}
                alt="profile"
              />
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
