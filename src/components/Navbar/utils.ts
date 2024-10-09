import { NavItemType, NavbarFooterItemType } from "./types";

import HomeIcon from "@public/icons/home.svg";
import CallIcon from "@public/icons/call.svg";
import ExperienceIcon from "@public/icons/experience.svg";
import ProjectIcon from "@public/icons/project.svg";
import AboutIcon from "@public/icons/about.svg";

import LinkedInIcon from "@public/icons/linkedin.svg";
import GithubIcon from "@public/icons/github.svg";

const NAV_OPTIONS: NavItemType[] = [
  {
    title: "Home",
    id: "home",
    endPoint: "/",
    icon: HomeIcon,
  },
  {
    title: "About",
    id: "about",
    endPoint: "/about",
    icon: AboutIcon,
  },
  {
    title: "Experience",
    id: "experience",
    endPoint: "/experience",
    icon: ExperienceIcon,
  },
  {
    title: "Projects",
    id: "projects",
    endPoint: "/projects",
    icon: ProjectIcon,
  },
  {
    title: "Contact",
    id: "contact",
    endPoint: "/contact",
    icon: CallIcon,
  },
];

const NAVBAR_FOOTER_ITEMS: NavbarFooterItemType[] = [
  {
    id: "linkedin",
    title: "Linked In",
    icon: LinkedInIcon,
    endPoint: "https://www.linkedin.com/in/dheerajk7",
  },
  {
    id: "github",
    title: "Github",
    icon: GithubIcon,
    endPoint: "https://www.github.com/dheerajk7",
  },
];

export { NAV_OPTIONS, NAVBAR_FOOTER_ITEMS };
