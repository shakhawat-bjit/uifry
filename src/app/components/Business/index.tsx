import React from "react";
import BusinessImage from "../BusinessImage";
import BusinessContent from "../BusinessContent";
import "./index.scss";

export type business = {
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

  image: string;
};

type Props = {
  businessData: business;
};

export default function Business({ businessData }: Props) {
  const { image, ...businessContent } = businessData;
  return (
    <div className="business-section">
      <BusinessContent businessContentData={businessContent} />
      <BusinessImage businessImageData={image} />
    </div>
  );
}
