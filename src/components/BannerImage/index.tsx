import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/human/image1.png";
import shape from "../../../public/assets/images/shape/shape2.png";
import stat from "../../../public/assets/images/stat/stat1.png";
import Image from "next/image";
type Props = {};

export default function BannerImage({}: Props) {
  return (
    <div className="banner__image">
      <div className="banner__image-box">
        <Image
          src={user.src}
          height={608}
          width={590}
          alt="user image"
          className="banner__image-picture"
        />
        <Image
          src={shape.src}
          height={136}
          width={131}
          alt="arrow image"
          className="banner__image-arrow"
        />
        <Image
          src={stat.src}
          height={167}
          width={193}
          alt="arrow image"
          className="banner__image-stat"
        />
      </div>
    </div>
  );
}
