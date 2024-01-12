import React from "react";
import "./index.scss";
import intercom from "../../../public/assets/icons/clients/intercom.png";
import treehouse from "../../../public/assets/icons/clients/treehouse.png";
import zapier from "../../../public/assets/icons/clients/zapier.png";
import marvel from "../../../public/assets/icons/clients/marvel.png";
import notion from "../../../public/assets/icons/clients/notion.png";
import shazam from "../../../public/assets/icons/clients/shazam.png";
import Image from "next/image";

type Props = {};

export default function Clients({}: Props) {
  return (
    <div className="clients">
      {/* <div className="clients__content"> */}
      <p className="clients-text">Trusted by over 100+ businesses worldwide!</p>
      <div className="clients-logos">
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={intercom}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={treehouse}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={zapier}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={marvel}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={notion}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
        <div className="clients-logo">
          <Image
            className="clients-logo__image"
            src={shazam}
            height={63}
            width={63}
            alt="intercom"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
