import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
  featureImageData: string;
};

export default function FeatureImage({ featureImageData }: Props) {
  return (
    <div className="feature-section__image-wrapper">
      <Image
        src={featureImageData}
        width={532}
        height={573}
        alt="user image"
        className="feature-section__image"
      />
    </div>
  );
}
