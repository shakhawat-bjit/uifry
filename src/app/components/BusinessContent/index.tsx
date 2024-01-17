"use client";
import React from "react";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
import "./index.scss";

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
  projectCount: number;
  clientCount: number;
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
        <div className="business-section__content__feature">
          <Button
            size="small"
            clickEvent={() => console.log("hi")}
            className="bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business-section__content__feature__title">
            <p>
              <span className="business-section__content__feature__title__count">
                {" "}
                {businessContentData?.projectCount}+
              </span>
              <br />
              Successfull Projects{" "}
            </p>
          </span>
        </div>
        <div className="business-section__content__feature">
          <Button
            size="small"
            // clickEvent={() => console.log("hi")}
            className="bg-bride-blush"
          >
            <Image src={tick.src} height={24} width={24} alt=">" />
          </Button>
          <span className="business-section__content__feature__title">
            <p>
              <span className="business-section__content__feature__title__count">
                {" "}
                {businessContentData?.clientCount}+{" "}
              </span>
              <br />
              Clients Today{" "}
            </p>
          </span>
        </div>
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
