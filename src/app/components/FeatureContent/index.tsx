"use client";
import Button from "../Button";
import Image from "next/image";
import React from "react";
import "./index.scss";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";

type featureContent = {
  heading: string;
  description1: string;
  description2: string;
  features: string[];
  button: {
    link: string;
    content: string;
    image: string;
    class: string;
    size: "small" | "medium" | "large";
  };
};

type Props = {
  featureContentData: featureContent;
};

export default function FeatureContent({ featureContentData }: Props) {
  return (
    <div className="feature-section__content">
      <h2 className="feature-section__content__heading">
        {featureContentData?.heading}
      </h2>
      <p className="feature-section__content__description">
        {featureContentData?.description1}
        <br />
        <br />
        {featureContentData?.description2}
      </p>
      <div className="feature-section__content__feature-wrapper">
        {featureContentData?.features?.map((feature) => (
          <div className="feature-section__feature" key={feature}>
            <Button size="small" className="bg-bride-blush text-midnight-blue">
              <Image src={tick.src} height={24} width={24} alt=">" />
            </Button>
            <span className="feature-section__feature__title">{feature}</span>
          </div>
        ))}

        <div className="feature-section__feature">
          <Button
            size={`${featureContentData?.button?.size}`}
            className={`${featureContentData?.button?.class}  `}
          >
            {featureContentData?.button?.content}
            <Image
              src={featureContentData?.button?.image}
              height={24}
              width={24}
              alt=">"
            />
          </Button>
        </div>
      </div>
    </div>
  );
}
