"use client";
import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
import upload from "../../../../public/assets/icons/icon/Upload.png";
import time from "../../../../public/assets/icons/icon/TimeCircle.png";

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
  featuresData: features;
};

export default function FeatureList({ featuresData }: Props) {
  return (
    <div className="feature-list-section">
      <div className="feature-list-section__feature-wrapper">
        {featuresData?.featureList?.map((feature) => (
          <div className="feature-list-section__feature">
            <Button
              size={feature?.button?.size}
              className="bg-bride-blush feature-list-section__feature__button"
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
