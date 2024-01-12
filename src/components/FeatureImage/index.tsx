import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/group/image-2.png";

type Props = {};

export default function FeatureImage({}: Props) {
  return (
    <div className="feature-image">
      <Image
        src={user.src}
        width={562.12}
        height={573}
        alt="user image"
        className="feature-image__picture"
      />
    </div>
  );
}
