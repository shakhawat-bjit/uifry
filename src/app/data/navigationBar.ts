import { navigationBar } from "../components/NavigationBar";

const title = "This is an announcement tagline for you to insert";

const navLinks = [
  { link: "#", content: "Home" },
  { link: "#", content: "About" },
  { link: "#", content: "Pricing" },
  { link: "#", content: "Blog" },
];

const logo = {
  link: "#",
  imageSrc: "/assets/images/logo.png",
};

const buttons = [
  {
    link: "#",
    content: "Contact Now",
    class: "bg-bride-blush text-midnight-blue ",
    size: "small" as "small" | "medium" | "large",
  },
];

export const navigationBarData: navigationBar = {
  links: navLinks,
  title: title,
  logo: logo,
  buttons: buttons,
};
