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
    <div className="featureList">
      <div className="featureList__feature">
        <Button className="iconBtn-sm-primary">
          <Image src={tick.src} height={24} width={24} alt="tick" />
        </Button>
        <p className="featureList__feature-text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
      <div className="featureList__feature">
        <Button className="iconBtn-sm-primary">
          <Image src={time.src} height={24} width={24} alt="time" />
        </Button>
        <p className="featureList__feature-text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
      <div className="featureList__feature">
        <Button className="iconBtn-sm-primary">
          <Image src={upload.src} height={24} width={24} alt="upload" />
        </Button>
        <p className="featureList__feature-text">
          Super useful and easy to with over 100+ customisations!
        </p>
      </div>
    </div>
  );
}
