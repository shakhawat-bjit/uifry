"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
import "./index.scss";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";

type businessContent = {
  heading: string;
  description: string;
  buttons: {
    link: string;
    content: string;
    image?: string;
    imageAlt?: string;
    class: string;
    size: "small" | "medium" | "large";
  }[];
  features: string[];
};

type Props = {
  businessContentData: businessContent;
};

export default function BusinessContent({ businessContentData }: Props) {
  return (
    <div className="business-section__content">
      <h2 className="business-section__content__heading">
        {businessContentData?.heading}
      </h2>
      <p className="business-section__content__description">
        {businessContentData?.description}
      </p>
      <div className="business-section__content__feature-wrapper">
        {businessContentData?.features?.map((feature, index) => (
          <div key={index} className="business-section__content__feature">
            <Button
              size="small"
              clickEvent={() => console.log("hi")}
              className="bg-bride-blush"
            >
              <Image src={tick.src} height={24} width={24} alt=">" />
            </Button>
            <span className="business-section__content__feature__title">
              {feature}
            </span>
          </div>
        ))}
      </div>
      <div className="business-section__content__button-wrapper">
        {businessContentData?.buttons?.map((button, index) => (
          <Button
            key={index}
            size={button.size}
            className={`${button?.class}  business-section__content__button`}
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
