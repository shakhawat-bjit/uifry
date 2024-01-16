"use client";
import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";

export type features = {
  featureList: {
    button: {
      link: string;
      content: string;
      image: string;
      imageAlt: string;
      class: string;
      size: "small" | "medium" | "large";
    };
    feaureTitle: string;
  }[];
};

type Props = {
  featuresListData: features;
};

export default function FeatureList({ featuresListData }: Props) {
  return (
    <div className="feature-list-section">
      <div className="feature-list-section__feature-wrapper">
        {featuresListData?.featureList?.map((feature, index) => (
          <div key={index} className="feature-list-section__feature">
            <Button
              size={feature?.button?.size}
              className={`feature-list-section__feature__button  ${feature?.button?.class}  `}
            >
              <Image
                src={feature?.button?.image}
                height={24}
                width={24}
                alt={feature?.button?.imageAlt}
              />
            </Button>
            <p className="feature-list-section__feature_title">
              {feature?.feaureTitle}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
