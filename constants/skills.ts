import { v4 as uuid4 } from "uuid";
import { AiOutlineHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { FaCss3Alt, FaReact, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiAntdesign, SiMui, SiRedux } from "react-icons/si";

export const skillList = [
  {
    id: uuid4(),
    label: "HTML",
    icon: AiOutlineHtml5,
  },
  {
    id: uuid4(),
    label: "Css",
    icon: FaCss3Alt,
  },
  {
    id: uuid4(),
    label: "Javascript",
    icon: IoLogoJavascript,
  },
  {
    id: uuid4(),
    label: "React",
    icon: FaReact,
  },
  {
    id: uuid4(),
    label: "Next JS",
    icon: TbBrandNextjs,
  },
  {
    id: uuid4(),
    label: "Redux",
    icon: SiRedux,
  },
  {
    id: uuid4(),
    label: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    id: uuid4(),
    label: "Ant Design",
    icon: SiAntdesign,
  },
  {
    id: uuid4(),
    label: "Material UI",
    icon: SiMui,
  },
  {
    id: uuid4(),
    label: "Figma",
    icon: FaFigma,
  },
];
