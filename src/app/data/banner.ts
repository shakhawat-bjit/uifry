import { banner } from "../components/Banner";

const buttons = [
  {
    link: "/",
    content: "Contact Now",
    class: "text-midnight-blue bg-bride-blush ",
    size: "medium" as "small" | "medium" | "large",
  },
  {
    link: "/",
    content: "",
    class: "bg-white  border-bride-blush ",
    size: "small" as "small" | "medium" | "large",
    image: "/assets/icons/icon/ArrowRight.png",
    imageAlt:">"
  },
  {
    link: "/",
    content: "Book A Demo Today",
    class: "bg-white text-midnight-blue padding-x-zero",
    size: "medium" as "small" | "medium" | "large",
  },
];

const reviews = 1200;
const ratings = 4.9;

const image = "/assets/images/group/image-1.png";

export const bannerData: banner = {
  heading: "Launch a software businesses website today with us!",
  description:
    "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
  buttons: buttons,
  reviews: reviews,
  ratings: ratings,
  image: image,
};
