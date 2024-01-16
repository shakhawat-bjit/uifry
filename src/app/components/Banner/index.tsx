"use client";
import React from "react";
import "./index.scss";
import BannerImage from "../BannerImage";
import BannerContent from "../BannerContent";

export type banner = {
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
  image: string;
};

type Props = {
  bannerData: banner;
};

export default function Banner({ bannerData }: Props) {
  const { image, ...content } = bannerData;

  return (
    <div className="banner-section">
      <BannerContent bannerContentData={content} />
      <BannerImage bannerImageData={image} />
    </div>
  );
}
