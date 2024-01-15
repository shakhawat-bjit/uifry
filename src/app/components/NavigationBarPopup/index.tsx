"use client";
import React, { Dispatch, SetStateAction } from "react";
import "./index.scss";
import Link from "next/link";
import Button from "../Button";

type Props = {
  show: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
  links: {
    link: string;
    content: string;
  }[];
};

export default function NavigationBarPopup({ show, setShow, links }: Props) {
  // console.log("show ---- ", show);
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
          Close
        </Button>
      </div>

      <div className="navbar-popup__links">
        {links.map((link) => (
          <Link
            href={link?.link}
            className="navbar__body__link"
            key={link?.content}
          >
            {link?.content}
          </Link>
        ))}
      </div>
    </div>
  );
}
