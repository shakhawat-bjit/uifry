"use client";
import React from "react";
import "./index.scss";
import Button from "../Button";
import Image from "next/image";
import tick from "../../../../public/assets/icons/icon/TickSquare.png";
import upload from "../../../../public/assets/icons/icon/Upload.png";
import time from "../../../../public/assets/icons/icon/TimeCircle.png";

type Props = {};

export default function FeatureList({}: Props) {
  return (
    <div className="feature-list-section">
      <div className="feature-list-section__feature-wrapper">
        <div className="feature-list-section__feature">
          <Button
            size="small"
            clickEvent={() => console.log("hi")}
            className="bg-bride-blush feature-list-section__feature__button"
          >
            <Image src={tick.src} height={24} width={24} alt="tick" />
          </Button>
          <p className="feature-list-section__feature_title">
            Super useful and easy to with over 100+ customisations!
          </p>
        </div>
        <div className="feature-list-section__feature">
          <Button
            size="small"
            clickEvent={() => console.log("hi")}
            className="bg-bride-blush  feature-list-section__feature__button"
          >
            <Image src={time.src} height={24} width={24} alt="time" />
          </Button>
          <p className="feature-list-section__feature_title">
            Super useful and easy to with over 100+ customisations!
          </p>
        </div>
        <div className="feature-list-section__feature">
          <Button
            size="small"
            clickEvent={() => console.log("hi")}
            className=" bg-bride-blush  feature-list-section__feature__button"
          >
            <Image src={upload.src} height={24} width={24} alt="upload" />
          </Button>
          <p className="feature-list-section__feature_title">
            Super useful and easy to with over 100+ customisations!
          </p>
        </div>
      </div>
    </div>
  );
}
