import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/group/image-4.png";
type Props = {};

export default function BusinessImage({}: Props) {
  return (
    <div className="business-image">
      <Image
        src={user.src}
        height={574}
        width={604}
        alt="user image"
        className="business-image__picture"
      />
    </div>
  );
}
