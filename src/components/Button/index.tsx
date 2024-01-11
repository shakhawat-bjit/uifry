import React from "react";
import "./index.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
  clickEvent: any;
};

export default function Button({ className, children, clickEvent }: Props) {
  console.log(clickEvent);
  return (
    <button className={className} onClick={clickEvent}>
      {children}
    </button>
  );
}
