"use client";
import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";
import profile from "../../../../public/assets/icons/icon/Profile.png";
import arrowRight from "../../../../public/assets/icons/icon/ArrowRight.png";
import send from "../../../../public/assets/icons/icon/Send.png";

export type contactContent = {
  heading: string;
  description1: string;
  description2: string;
  buttons: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
    image?: string;
    imageAlt?: string;
  }[];
  formInputs: {
    inputImage: string;
    inputImageAlt: string;
    type: string;
    placeholder: string;
  }[];
  submitButton: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
    image?: string;
    imageAlt?: string;
  };
};

type Props = {
  contactContentData: contactContent;
};

export default function ContactContent({ contactContentData }: Props) {
  return (
    <div className="contact-section__content">
      <h2 className="contact-section__content__heading">
        {contactContentData?.heading}
      </h2>
      <p className="contact-section__content__description">
        {contactContentData?.description1}
        <br />
        <br />
        <span className="contact-section__content__description--bold">
          {contactContentData?.description2}
        </span>
      </p>

      <form className="contact-section__content__form">
        {contactContentData?.formInputs?.map((formInput, index) => (
          <div
            key={index}
            className="contact-section__content__form__input-wrapper"
          >
            <Image
              src={formInput?.inputImage}
              width={24}
              height={24}
              alt={formInput?.inputImageAlt}
            />
            <input
              placeholder={formInput?.placeholder}
              className="contact-section__content__input"
            />
          </div>
        ))}

        <div className="contact-section__content__form__button-wrapper">
          <Button
            size={contactContentData?.submitButton?.size}
            className="bg-bride-blush  text-midnight-blue"
          >
            <span style={{ marginRight: "8px" }}>
              {contactContentData?.submitButton?.content}
            </span>
            {contactContentData?.submitButton?.image &&
              contactContentData?.submitButton?.imageAlt && (
                <Image
                  src={contactContentData?.submitButton?.image}
                  width={24}
                  height={24}
                  alt={contactContentData?.submitButton?.imageAlt}
                />
              )}
          </Button>
        </div>
      </form>
    </div>
  );
}
