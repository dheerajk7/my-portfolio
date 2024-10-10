import { NavigationOptionType } from "./types";

const NAVIGATION_OPTIONS: NavigationOptionType[] = [
  {
    id: "home",
    title: "Home",
    isLeft: true,
    href: "#home",
    isActive: true,
  },
  {
    id: "about",
    title: "About",
    isLeft: true,
    href: "#about",
  },
  {
    id: "experience",
    title: "Experience",
    isLeft: true,
    href: "#experience",
  },
  {
    id: "projects",
    title: "Project",
    isLeft: false,
    href: "#projects",
    isActive: true,
  },
  {
    id: "testmonials",
    title: "Testmonials",
    isLeft: false,
    href: "#testmonials",
  },
  {
    id: "contact",
    title: "Contact",
    isLeft: false,
    href: "#contact",
  },
];

export { NAVIGATION_OPTIONS };
