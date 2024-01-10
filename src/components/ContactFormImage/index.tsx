import Image from "next/image";
import React from "react";
import "./index.scss";
import user from "../../../public/assets/images/human/image3.png";
import line from "../../../public/assets/images/shape/shape1.png";
import fire from "../../../public/assets/images/shape/fire.png";
import stat from "../../../public/assets/images/stat/stat2.png";

type Props = {};

export default function ContactFormImage({}: Props) {
  return (
    <div className="contact-form-image">
      <div className="contact-form-image__box">
        <Image
          src={user.src}
          width={379}
          height={553}
          alt="user image"
          className="contact-form-image__picture"
        />
        <Image
          src={line.src}
          height={97.53}
          width={155.8}
          alt="line image"
          className="contact-form-image__line"
        />
        <Image
          src={fire.src}
          height={79.3}
          width={62.8}
          alt="shape image"
          className="contact-form-image__fire"
        />
        <Image
          src={stat.src}
          width={267}
          height={216}
          alt="statistic"
          className="contact-form-image__stat"
        />
      </div>
    </div>
  );
}
