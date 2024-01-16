"use client";
import React, { useState } from "react";
import "./index.scss";
import Image from "next/image";
import Accordion from "../Accordion";
import Button from "../Button";

export type faq = {
  heading: string;
  description: string;
  headingImage: string;
  headingImageAlt: string;
  faqList: {
    id: string;
    title: string;
    description1: string;
    description2: string;
  }[];
  buttons: {
    link: string;
    content: string;
    image?: string;
    imageAlt?: string;
    class: string;
    size: "small" | "medium" | "large";
  }[];
};

type Props = {
  faqData: faq;
};

export default function Faq({ faqData }: Props) {
  const [active, setActive] = useState("0");

  const changeActive = (val: string) => {
    // console.log(val, active);
    if (active == val) {
      setActive("0");
      return;
    }
    setActive(val);
  };

  return (
    <div className="faq-section">
      <div className="faq-section__image-wrapper">
        <Image
          src={faqData?.headingImage}
          width={52.5}
          height={66.3}
          alt={faqData?.headingImageAlt}
          className="faq-section__image"
        />
      </div>
      <div className="faq-section__heading">
        <h2 className="faq-section__heading__title">{faqData?.heading}</h2>
        <p className="faq-section__heading__description">
          {faqData?.description}
        </p>
      </div>
      <div className="faq-section__accordion-wrapper">
        {faqData?.faqList?.map((faq, index) => (
          <Accordion
            data={faq}
            key={index}
            currentActive={active}
            clickEvent={changeActive}
          />
        ))}
      </div>
      <div className="faq-section__button-wrapper">
        {faqData?.buttons?.map((button, index) => (
          <Button
            key={index}
            size={button?.size}
            className={`${button?.class} faq-section__button`}
          >
            {button?.content}
            {button?.image && button?.imageAlt && (
              <Image
                src={button?.image}
                height={24}
                width={24}
                alt={button?.imageAlt}
              />
            )}
          </Button>
        ))}
      </div>
    </div>
  );
}
