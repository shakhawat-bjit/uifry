import React from "react";
import "./index.scss";
import FeatureContent from "../FeatureContent";
import FeatureImage from "../FeatureImage";

export type feature = {
  heading: string;
  description1: string;
  description2: string;
  features: string[];
  image: string;
  button: {
    link: string;
    content: string;
    image: string;
    class: string;
    size: "small" | "medium" | "large";
  };
};

type Props = {
  featureData: feature;
};

export default function Feature({ featureData }: Props) {
  const { image, ...content } = featureData;
  return (
    <div className="feature-section">
      <FeatureImage featureImageData={image} />
      <FeatureContent featureContentData={content} />
    </div>
  );
}
