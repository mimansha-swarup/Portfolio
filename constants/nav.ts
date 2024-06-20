import { FiLinkedin, FiTwitter, FiGithub } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
export const navLinks = [
  {
    label: "Projects",
    endpoint: "/project",
    id: "projects",
  },
  {
    label: "Blogs",
    endpoint: "/blogs",
    id: "blogs",
  },
  {
    // url: "",
    id: "home",
  },
  {
    label: "Contact",
    endpoint: "/contact",
    id: "contact",
  },
  {
    label: "Cv",
    
    // endpoint: "/contact",
    // id:"contact",
    url: "",
  },
];
export const contactDetails = [
  {
    icon: FiLinkedin,
    href: "https://www.linkedin.com/in/mimansha-swarup",
  },
  {
    icon: RiTwitterXLine,
    href: "https://twitter.com/SwarupMimansha",
  },
  {
    icon: FiGithub,
    href: "https://github.com/mimansha-swarup",
  },
];
