import { BsHddNetwork } from "react-icons/bs";
import { IoLogoGoogle } from "react-icons/io5";
import { SiGoogleclassroom } from "react-icons/si";
import { VscOrganization } from "react-icons/vsc";
import { BiCodeCurly } from "react-icons/bi";

export const solutions = [
  {
    id: "software001",
    name: "Software & Web Development",
    description: "From idea to a working MVP",
    href: "/software",
    icon: BiCodeCurly,
    borderColor: "border-red-200",
    bgColor: "bg-red-200",
    textColor: "text-red-600",
    longDesc:
      "We don't write the code anymore. AI does. We take your idea and turn it into a fully fledged MVP you can put in front of real users.",
  },

  {
    id: "google001",
    name: "Google Services Partner",
    description: "Workspace setup for schools, NPOs, and SMEs",
    href: "/gservices",
    icon: IoLogoGoogle,
    borderColor: "border-blue-200",
    bgColor: "bg-blue-200",
    textColor: "text-blue-500",
    longDesc:
      "We set up Google Workspace so your school, nonprofit, or business can share mail, files, and calendars on one domain, with accounts, shared drives, and the people who use them ready on day one.",
  },
  {
    id: "training001",
    name: "Technology Training",
    description: "Practical skills your team can use next week",
    href: "/training",
    icon: SiGoogleclassroom,
    borderColor: "border-amber-200",
    bgColor: "bg-amber-200",
    textColor: "text-amber-600",
    longDesc:
      "Short, practical sessions for schools, nonprofits, and small teams. People leave knowing how to run the tools they already have, from Google Admin to a 30-day social media sprint.",
  },
  {
    id: "network001",
    name: "Network Solutions",
    description: "Networks that stay up for classrooms and offices",
    href: "/network",
    icon: BsHddNetwork,
    borderColor: "border-green-200",
    bgColor: "bg-green-200",
    textColor: "text-green-600",
    longDesc:
      "We design, install, and look after the network your school, nonprofit, or office actually uses: reliable Wi-Fi, wired labs, and a setup that stays secure when more people come online.",
  },
  {
    id: "npos001",
    name: "Tech Partner for NPOs",
    description: "A technology partner for the mission",
    href: "/npos",
    icon: VscOrganization,
    borderColor: "border-slate-200",
    bgColor: "bg-slate-200",
    textColor: "text-slate-600",
    longDesc:
      "We work alongside nonprofits as a technology partner: the office network, the computers, Google Workspace, and the simple systems that keep programmes running.",
  },
];
