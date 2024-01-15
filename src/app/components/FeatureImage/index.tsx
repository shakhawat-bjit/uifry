import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
  featureImageData: string;
};

export default function FeatureImage({ featureImageData }: Props) {
  return (
    <div className="feature-section_image-wrapper">
      <Image
        src={featureImageData}
        width={565}
        height={573}
        alt="user image"
        className="feature-section__image"
      />
    </div>
  );
}
