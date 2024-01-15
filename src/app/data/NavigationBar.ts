import { navigationbar } from "../types/navigationBar.type";

const navbarTitle = "This is an announcement tagline for you to insert";

const navLinks = [
  { link: "/home", content: "Home" },
  { link: "/about", content: "About" },
  { link: "/pricing", content: "Pricing" },
  { link: "/blog", content: "Blog" },
];

const logo = {
  link: "/",
  imageSrc: "/assets/images/logo.png",
};

const buttons = [
  {
    link: "/",
    content: "Contact Now",
    class: "bg-bride-blush text-midnight-blue ",
    size: "small" as "small" | "medium" | "large",
  },
];

export const navigationBar: navigationbar = {
  title: navbarTitle,
  links: navLinks,
  logo: logo,
  buttons: buttons,
};
