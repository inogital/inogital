import { BsHddNetwork } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { BiCodeCurly } from "react-icons/bi";

export const solutions = [
  {
    id: "software001",
    name: "Software & Web Development",
    description: "Top-notch software services",
    href: "/software",
    icon: BiCodeCurly,
    bgColor: "bg-red-200",
    textColor: "text-red-600",
    longDesc:
      "inOgital offers top-notch software development services. We cater for the specific needs of each client, ensuring that the software is well tested, deployed and monitored according to defined industry standards.",
  },
  {
    id: "network001",
    name: "Network Engineering",
    description: "Build labs and ensure connectivity",
    href: "/network",
    icon: BsHddNetwork,
    bgColor: "bg-green-200",
    textColor: "text-green-600",
    longDesc:
      "inOgital provides robust network connectivity solutions tailored to the unique requirements of schools, NPOs, and SMEs. Our expert team designs, installs, and maintains secure and efficient networks, ensuring seamless communication and data transfer.",
  },
  {
    id: "google001",
    name: "Google Services Partner",
    description: "Google Workspace and other services",
    href: "/gservices",
    icon: IoLogoGoogle,
    bgColor: "bg-blue-200",
    textColor: "text-blue-600 ",
    longDesc:
      " inOgital assists educational institutions, NPOs, and SMEs in seamlessly integrating and deploying Google Workspace (formerly G Suite) solutions. This includes setting up collaborative tools such as Gmail, Google Drive, Google Docs, Sheets, and more, fostering enhanced communication and collaboration within organizations. ",
  },
  {
    id: "training001",
    name: "Technology Training",
    description: "Keep track of your growth",
    href: "/training",
    icon: SiGoogleclassroom,
    bgColor: "bg-amber-200 ",
    textColor: "text-amber-600 ",
    longDesc:
      "We recognizes the importance of staying up-to-date with the latest technological advancements. Therefore we conduct workshops and training sessions for schools and NPOs, equipping their staff with the necessary skills to embrace and utilize cutting-edge technologies effectively.",
  },
  {
    id: "npos001",
    name: "Tech Partner for NPOs",
    description: "Customized tech solutions for NPOs",
    href: "/npos",
    icon: VscOrganization,
    bgColor: "bg-slate-600",
    textColor: "text-slate-600",
    longDesc:" inOgital goes a step further by acting as a technology partner for NPOs. We collaborate closely with non-profits to understand their goals and challenges, devising customized tech solutions that align with their objectives. "
  },
];
