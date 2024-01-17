import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
  contactImageData: string;
};

export default function ContactImage({ contactImageData }: Props) {
  return (
    <div className="contact-section__image-wrapper">
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
