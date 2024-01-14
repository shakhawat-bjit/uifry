import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../../public/assets/images/group/image-3.png";

type Props = {};

export default function ContactForm({}: Props) {
  return (
    <div className="contact-section-image-wrapper">
      <Image
        src={user.src}
        width={679}
        height={553}
        alt="user image"
        className="contact-section__image"
      />
    </div>
  );
}
