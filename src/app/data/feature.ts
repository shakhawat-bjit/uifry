import { feature } from "../components/Feature";

const features = [
  "Super useful and easy to use interface",
  "Easiest way to grow your business in days",
];

const image = "/assets/images/group/image-2.png";

export const featureData: feature = {
  heading: "Let your business thrive under our supervision",
  description1:
    "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
  description2: "We are making every business grow!",
  features: features,
  image: image,

  button: {
    link: "#",
    content: "Contact Now",
    class: "bg-bride-blush text-midnight-blue ",
    size: "medium" as "small" | "medium" | "large",
    image: "/assets/icons/icon/ArrowRight.png",
  },
};
