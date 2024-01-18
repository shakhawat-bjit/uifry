import { faq } from "../components/Faq";

const faqList = [
  {
    id: "1",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
          Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "2",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
          Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "3",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
          Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "4",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
          Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
  },
  {
    id: "5",
    title: "What is the best way to create a saas business today?",
    description1: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.
          Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
    description2: `Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond. Launch a business today with our help and get it done with amazing launch features, websites and more with uifry. We help business like yours thrive every day and beyond.`,
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
    imageAlt: ">",
  },
  {
    link: "#",
    content: "Book A Demo Today",
    class: "bg-white text-midnight-blue padding-x-zero",
    size: "medium" as "small" | "medium" | "large",
  },
];

export const faqData: faq = {
  heading: "Frequently asked questions",
  description: "Whats heppening around the World.",
  headingImage: "/assets/images/shape/fire.png",
  headingImageAlt: "fire",
  faqList: faqList,
  buttons: buttons,
};
