"use client";
import Image from "next/image";
import React, { useState } from "react";
import Button from "../Button";
import arrow from "../../../../public/assets/icons/icon/ArrowRight.png";

type posts = {
  tag: string;
  title: string;
  image: string;
  imageAlt: string;
}[];

type Props = {
  posts: posts;
};

export default function PostSlider({ posts }: Props) {
  const [curIndex, setCurIndex] = useState(0);

  const nextPost = () => {
    if (curIndex + 1 == posts?.length) {
      setCurIndex(0);
    } else {
      setCurIndex(curIndex + 1);
    }
  };
  const previousPost = () => {
    if (curIndex - 1 < 0) {
      setCurIndex(posts?.length - 1);
    } else {
      setCurIndex(curIndex - 1);
    }
  };

  return (
    <div className="update-section__post-slider">
      <div className="update-section__post-slider__image-wrapper">
        <Image
          width={410}
          height={269}
          src={posts?.[curIndex]?.image}
          alt={posts?.[curIndex]?.title}
          className="update-section__post-slider__image"
        />
      </div>

      <div className="update-section__post-slider__content">
        <p className="update-section__post-slider__content__tag">
          {posts?.[curIndex]?.tag}
        </p>
        <h3 className="update-section__post-slider__content__title">
          {posts?.[curIndex]?.title}
        </h3>
      </div>

      <div className="update-section__post-slider__content__button">
        <Button
          size="small"
          className=" bg-white  border-bride-blush"
          clickEvent={previousPost}
        >
          <Image src={arrow.src} width={24} height={24} alt=">" />
        </Button>
        <Button
          size="small"
          className=" bg-white  border-bride-blush"
          clickEvent={nextPost}
        >
          <Image src={arrow.src} width={24} height={24} alt=">" />
        </Button>
      </div>
    </div>
  );
}
