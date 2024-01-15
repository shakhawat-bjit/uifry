"use client";

import Image from "next/image";
import React from "react";
import "./index.scss";
import Button from "../Button";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";

type Props = {
  post: {
    tag: string;
    title: string;
    image: string;
  };
};

export default function Post({ post }: Props) {
  return (
    <div className="update-section__post">
      <div className="update-section__post__image-wrapper">
        <Image
          width={410}
          height={269}
          src={post?.image}
          alt={post?.title}
          className="update-section__post__image"
        />
      </div>

      <div className="update-section__post__content">
        <p className="update-section__post__content__tag">{post?.tag}</p>
        <h3 className="update-section__post__content__title">{post?.title}</h3>
      </div>

      <div className="update-section__post__content__button">
        <Button
          size="small"
          clickEvent={() => console.log("hi")}
          className=" bg-white  border-bride-blush"
        >
          <Image src={arrow.src} width={24} height={24} alt=">" />
        </Button>
      </div>
    </div>
  );
}
