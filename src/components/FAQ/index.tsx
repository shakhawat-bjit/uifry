import React from "react";
import "./index.scss";
import Image from "next/image";
import fire from "../../../public/assets/images/shape/fire.png";
import Accordion from "../Accordion";
type Props = {};

const data = [
  {
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
        Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
];

export default function FAQ({}: Props) {
  return (
    <div className="faq">
      <div className="faq__image">
        <Image src={fire.src} width={52.5} height={66.3} alt="fire image" />
      </div>

      <div className="faq__title">
        <h2 className="faq__title__heading">Frequently asked questions</h2>
        <p className="faq__title__description">
          Whats happening around the World.
        </p>
      </div>
      <div className="faq__accordion">
        <Accordion data={data[0]} />
      </div>
    </div>
  );
}
