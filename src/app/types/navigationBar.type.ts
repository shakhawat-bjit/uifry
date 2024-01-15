export type navigationbar = {
  title: string;
  links: {
    link: string;
    content: string;
  }[];
  logo: {
    link: string;
    imageSrc: string;
  };
  buttons: {
    link: string;
    content: string;
    class: string;
    size: "small" | "medium" | "large";
  }[];
};
