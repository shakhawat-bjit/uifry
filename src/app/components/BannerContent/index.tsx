import React from "react";
import "./index.scss";
import Image from "next/image";
import star from "../../../../public/assets/icons/icon/Star.png";
import Button from "../Button";

type bannerContent = {
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
  reviews: number;
  ratings: number;
};

type Props = {
  bannerContentData: bannerContent;
};

export default function BannerContent({ bannerContentData }: Props) {
  const { heading, description, buttons, reviews, ratings } = bannerContentData;
  return (
    <div
      // style={{ background: "red" }}
      className="banner-section__content"
    >
      <h2 className="banner-section__heading">{heading}</h2>
      <p className="banner-section__description">{description}</p>
      <div className="banner-section__button-wrapper">
        {buttons?.map((button, index) => (
          <Button
            key={index}
            size={button?.size}
            className={`${button?.class} banner-section__button`}
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
      <div className="banner-section__rating">
        <Button size="small" className="button bg-bride-blush">
          <Image src={star.src} height={24} width={24} alt=">" />
        </Button>
        <span className="banner-section__rating__description">
          Rated {ratings} out of {reviews} reviews
        </span>
      </div>
    </div>
  );
}
