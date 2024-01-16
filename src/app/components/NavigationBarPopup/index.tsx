"use client";
import React, { Dispatch, SetStateAction } from "react";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";
import { ImCross } from "react-icons/im";
import Image from "next/image";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  links: {
    link: string;
    content: string;
  }[];
  buttons: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
  }[];
};

export default function NavigationBarPopup({
  show,
  setShow,
  links,
  buttons,
}: Props) {
  return (
    <div className={`navbar-popup ${show ? "visible" : "not-visible"}  `}>
      <div className="navbar-popup--close">
        <Button
          size="small"
          className="bg-inherit"
          clickEvent={() => {
            setShow(false);
          }}
        >
          {/* <Image src={close?.src} width={20} height={20} alt="X" /> */}
          <ImCross size={20} className="text-white" />
        </Button>
      </div>

      <div className="navbar-popup__link-wrapper">
        {links.map((link) => (
          <Link
            href={link?.link}
            className="navbar-popup__link"
            key={link?.content}
          >
            {link?.content}
          </Link>
        ))}
      </div>
      <div className="navbar-popup_body__button-wrapper">
        {buttons?.map((button, index) => (
          <Button
            key={index}
            size={button?.size}
            className="text-midnight-blue bg-bride-blush"
          >
            Contact Now
          </Button>
        ))}
      </div>
    </div>
  );
}
