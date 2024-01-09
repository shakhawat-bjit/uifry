import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

export default function Button({ className, children }: Props) {
  return <button>{children}</button>;
}
