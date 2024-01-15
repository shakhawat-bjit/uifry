"use client";
import React, { Dispatch, SetStateAction } from "react";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";
import close from "../../../../public/assets/icons/icon/cross.png";
import Image from "next/image";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  links: {
    link: string;
    content: string;
  }[];
};

export default function NavigationBarPopup({ show, setShow, links }: Props) {
  return (
    <div className={`navbar-popup ${show ? "visible" : "not-visible"}  `}>
      <div className="navbar-popup--close">
        <Button
          size="small"
          className=""
          clickEvent={() => {
            setShow(false);
          }}
        >
          <Image src={close?.src} width={20} height={20} alt="X" />
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
    </div>
  );
}
