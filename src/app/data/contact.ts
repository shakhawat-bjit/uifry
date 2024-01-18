import { contact } from "../components/Contact";

const formInputs = [
  {
    inputImage: "/assets/icons/icon/Profile.png",
    inputImageAlt: "Profile",
    type: "text",
    placeholder: "Full Name",
  },
  {
    inputImage: "/assets/icons/icon/Send.png",
    inputImageAlt: "email",
    type: "Email",
    placeholder: "Email address",
  },
];

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
  },
  {
    link: "#",
    content: "Book A Demo Today",
    class: "bg-white text-midnight-blue padding-x-zero",
    size: "medium" as "small" | "medium" | "large",
  },
];

const image = "/assets/images/group/image-3.png";

export const contactData: contact = {
  heading: "Let your business thrive under our supervision",
  description1:
    "Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.",
  description2: "We are making every business grow!",
  buttons: buttons,
  formInputs: formInputs,
  submitButton: {
    link: "#",
    content: "Contact Now",
    class: "bg-bride-blush  text-midnight-blue ",
    size: "large" as "small" | "medium" | "large",
    image: "/assets/icons/icon/ArrowRight.png",
    imageAlt: ">",
  },
  image: image,
};
