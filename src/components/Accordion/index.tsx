import React from "react";
import "./index.scss";

type Props = {
  data: {
    title: string;
    description1: string;
    description2: string;
  };
};

export default function Accordion({ data }: Props) {
  //   console.log(data?.description1);
  return (
    <div className="accordion">
      <div className="accordion__title">
        <p className="accordion__title__text">{data?.title}</p>
        <div className="accordion__title__icon">{/* + */}-</div>
      </div>
      <div className="accordion__body">
        <p className="accordion__body_text">{data?.description1}</p>
        <br />
        <br />
        <p className="accordion__body_text">{data?.description1}</p>
      </div>
    </div>
  );
}
