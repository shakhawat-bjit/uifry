"use client";
import React, { useState } from "react";
import "./index.scss";
import Image from "next/image";
import fire from "../../../../public/assets/images/shape/fire.png";
import Accordion from "../Accordion";
import Button from "../Button";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";

type Props = {};

const data = [
  {
    id: "1",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "2",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "3",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "4",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "5",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
];

export default function Faq({}: Props) {
  const [active, setActive] = useState("1");

  const changeActive = (val: string) => {
    console.log(val, active);
    if (active == val) {
      setActive("0");
      return;
    }
    setActive(val);
  };

  return (
    <div className="faq-section">
      <div className="faq-section__image-container">
        <Image
          src={fire.src}
          width={52.5}
          height={66.3}
          alt="fire image"
          className="faq-section__image"
        />
      </div>

      <div className="faq-section__heading">
        <h2 className="faq-section__heading__title">
          Frequently asked questions
        </h2>
        <p className="faq-section__heading__description">
          Whats happening around the World.
        </p>
      </div>
      <div className="faq-section__accordion-wrapper">
        {data?.map((x) => (
          <Accordion
            data={x}
            key={x?.id}
            currentActive={active}
            clickEvent={changeActive}
          />
        ))}
      </div>
      <div className="faq-section__button-wrapper">
        <Button
          size="medium"
          className="faq-section__button  text-midnight-blue  bg-bride-blush"
        >
          Contact Now{" "}
        </Button>
        <Button
          size="small"
          className=" faq-section__button  bg-white  border--bride-blush"
        >
          <Image src={arrow.src} height={24} width={24} alt=">" />
        </Button>
        <Button
          size="medium"
          className="faq-section__button  bg-white   text-midnight-blue padding-x-zero"
        >
          Book a Demo Today
        </Button>
      </div>
    </div>
  );
}
