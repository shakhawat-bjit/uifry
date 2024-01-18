import { banner } from "../components/Banner";
import { business } from "../components/Business";

const buttons = [
  {
    link: "#",
    content: "Contact Now",
    class: "text-midnight-blue bg-bride-blush ",
    size: "medium" as "small" | "medium" | "large",
  },
  {
    link: "#",
    content: "",
    class: "bg-white  border-bride-blush ",
    size: "small" as "small" | "medium" | "large",
    image: "/assets/icons/icon/ArrowRight.png",
    imageAlt: ">",
  },
  {
    link: "#",
    content: "Book A Demo Today",
    class: "bg-white text-midnight-blue padding-x-zero",
    size: "medium" as "small" | "medium" | "large",
  },
];

const projectCount = 100;
const clientCount = 978;

const image = "/assets/images/group/image-4.png";

export const businessData: business = {
  heading: "Let your business thrive under our supervision",
  description:
    "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
  buttons: buttons,

  projectCount: projectCount,
  clientCount: clientCount,
  image: image,
};
