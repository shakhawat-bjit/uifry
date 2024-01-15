type navLink = {
  link: string;
  content: string;
};

type logo = {
  link: string;
  imageSrc: string;
};

type button = {
  link: string;
  content: string;
};

export const navLinks: navLink[] = [
  { link: "/home", content: "Home" },
  { link: "/about", content: "About" },
  { link: "/pricing", content: "Pricing" },
  { link: "/blog", content: "Blog" },
];

export const logo: logo = {
  link: "/",
  imageSrc: "/assets/images/logo.png",
};

export const buttons: button[] = [{ link: "/", content: "Contact Now" }];
