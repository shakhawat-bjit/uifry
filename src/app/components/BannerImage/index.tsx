import React from "react";
import "./index.scss";
import Image from "next/image";

type Props = {
  bannerImageData: string;
};

export default function BannerImage({ bannerImageData }: Props) {
  console.log(bannerImageData);
  return (
    <div className="banner-section__image-wrapper">
      <Image
        src={bannerImageData}
        width={787}
        height={608}
        alt="user image"
        className="banner-section__image"
      />
    </div>
  );
}
