import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/group/image-1.png";

import Image from "next/image";
type Props = {};

export default function BannerImage({}: Props) {
  return (
    <div className="banner__image">
      <Image
        src={user.src}
        width={787}
        height={608}
        alt="user image"
        className="banner__image__picture"
      />
    </div>
  );
}
