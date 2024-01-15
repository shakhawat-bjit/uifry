import { footer } from "../components/Footer";

const logo = {
    link: "/",
    imageSrc: "/assets/images/logo.png",
  };

const navLinks = [
    { link: "/home", content: "Home" },
    { link: "/about", content: "About" },
    { link: "/pricing", content: "Pricing" },
    { link: "/blog", content: "Blog" },
    { link: "/contact", content: "Contact" },
  ];

const copyright="All rights reserved ® uifry.com | Terms and conditions apply!";

const socialLinks = [
    { link: "/instagram", image:"/assets/icons/social/instagram.png",imageAlt:"instagram" },
    { link: "/flickr", image:"/assets/icons/social/flickr.png",imageAlt:"flickr" },
    { link: "/pinterest", image:"/assets/icons/social/pinterest.png",imageAlt:"pinterest" },
    { link: "/twitter", image:"/assets/icons/social/instagram.png",imageAlt:"twitter" },
  ];

  export const footerData:footer={
    logo:logo,
    links:navLinks,
    copyright:copyright,
    socialLinks:socialLinks
  }