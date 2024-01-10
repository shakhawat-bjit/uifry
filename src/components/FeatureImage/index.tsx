import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/human/image2.png";
import line from "../../../public/assets/images/shape/shape1.png";
import star from "../../../public/assets/images/shape/shape3.png";
import stat from "../../../public/assets/images/stat/stat1.png";
type Props = {};

export default function FeatureImage({}: Props) {
  return (
    <div className="feature-image">
      <div className="feature-image__box">
        <Image
          src={user.src}
          height={572}
          width={415}
          alt="user image"
          className="feature-image__picture"
        />
        <Image
          src={line.src}
          height={97.53}
          width={158.3}
          alt="line image"
          className="feature-image__line"
        />
        <Image
          src={star.src}
          height={76.1}
          width={80}
          alt="shape image"
          className="feature-image__star"
        />
        <Image
          src={stat.src}
          width={240.12}
          height={207}
          alt="arrow image"
          className="feature-image__stat"
        />
      </div>
    </div>
  );
}
