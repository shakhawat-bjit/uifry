import Image from "next/image";
import React from "react";
import "./index.scss";

type Props = {
  businessImageData: string;
};

export default function BusinessImage({ businessImageData }: Props) {
  return (
    <div className="business-image">
      <Image
        src={businessImageData}
        height={574}
        width={604}
        alt="user image"
        className="business-image__picture"
      />
    </div>
  );
}
