import { footer } from "../components/Footer";

const logo = {
  link: "#",
  imageSrc: "/assets/images/logo.png",
};

const navLinks = [
  { link: "#", content: "Home" },
  { link: "#", content: "About" },
  { link: "#", content: "Pricing" },
  { link: "#", content: "Blog" },
  { link: "#", content: "Contact" },
];

const copyright =
  "All rights reserved ® uifry.com | Terms and conditions apply!";

const socialLinks = [
  {
    link: "#",
    image: "/assets/icons/social/instagram.png",
    imageAlt: "instagram",
  },

  {
    link: "#",
    image: "/assets/icons/social/flickr.png",
    imageAlt: "flickr",
  },
  {
    link: "#",
    image: "/assets/icons/social/instagram.png",
    imageAlt: "instagram",
  },
  {
    link: "#",
    image: "/assets/icons/social/pinterest.png",
    imageAlt: "pinterest",
  },
  {
    link: "#",
    image: "/assets/icons/social/twitter.png",
    imageAlt: "twitter",
  },
];

export const footerData: footer = {
  logo: logo,
  links: navLinks,
  copyright: copyright,
  socialLinks: socialLinks,
};
