import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/human/image4.png";
import line from "../../../public/assets/images/shape/shape1.png";
import star from "../../../public/assets/images/shape/shape3.png";
import stat from "../../../public/assets/images/stat/stat3.png";
type Props = {};

export default function BusinessImage({}: Props) {
  return (
    <div className="business-image">
      <div className="business-image__box">
        <Image
          src={user.src}
          height={573}
          width={339}
          alt="user image"
          className="business-image__picture"
        />
        <Image
          src={line.src}
          height={97.53}
          width={158.3}
          alt="line image"
          className="business-image__line"
        />
        <Image
          src={star.src}
          height={76.1}
          width={80}
          alt="shape image"
          className="business-image__star"
        />
        <Image
          src={stat.src}
          width={251.12}
          height={198}
          alt="statistics"
          className="business-image__stat"
        />
      </div>
    </div>
  );
}
