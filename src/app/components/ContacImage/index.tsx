import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../../public/assets/images/group/image-3.png";

type Props = {
  contactImageData: string;
};

export default function ContactImage({ contactImageData }: Props) {
  return (
    <div className="contact-section-image-wrapper">
      <Image
        src={contactImageData}
        width={679}
        height={553}
        alt="user image"
        className="contact-section__image"
      />
    </div>
  );
}
