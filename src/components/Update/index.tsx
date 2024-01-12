"use client";

import Image from "next/image";
import React from "react";
import "./index.scss";
import Button from "../Button";
import arrow from "../../../public/assets/icons/icon/ArrowRight.png";

type Props = {
  update: {
    tag: string;
    title: string;
    image: string;
  };
};

export default function Update({ update }: Props) {
  return (
    <div className="update-card">
      <div className="update-card__image">
        <Image
          width={410}
          height={269}
          src={update?.image}
          alt={update?.title}
          className="update-card__image__picture"
        />
      </div>

      <div className="update-card__body">
        <p className="update-card__body__tag">{update?.tag}</p>
        <h3 className="update-card__body__title">{update?.title}</h3>
      </div>

      <div className="update-card__button">
        <Button
          clickEvent={() => console.log("hi")}
          className="icon-button--sm  button--bg-white  button-border--bride-blush"
        >
          <Image src={arrow.src} width={24} height={24} alt=">" />
        </Button>
      </div>
    </div>
  );
}
