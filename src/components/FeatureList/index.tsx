import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../public/assets/icons/icon/TickSquare.png";
import upload from "../../../public/assets/icons/icon/Upload.png";
import time from "../../../public/assets/icons/icon/TimeCircle.png";

type Props = {};

export default function FeatureList({}: Props) {
  return (
    <div className="feature-list">
      <div className="feature-list__feature">
        <Button className="icon-button--sm--bride-blush">
          <Image src={tick.src} height={24} width={24} alt="tick" />
        </Button>
        <p className="feature-list__feature__text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
      <div className="feature-list__feature">
        <Button className="icon-button--sm--bride-blush">
          <Image src={time.src} height={24} width={24} alt="time" />
        </Button>
        <p className="feature-list__feature__text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
      <div className="feature-list__feature">
        <Button className="icon-button--sm--bride-blush">
          <Image src={upload.src} height={24} width={24} alt="upload" />
        </Button>
        <p className="feature-list__feature__text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
    </div>
  );
}
