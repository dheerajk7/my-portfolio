"use client";
import { useState } from "react";
import Image from "next/image";
import Button from "@components/Button";

import { NavigationOptionType } from "./types";
import { NAVIGATION_OPTIONS } from "./data";

import HamburgarIcon from "@public/icons/hamburgar.svg";
import CloseIcon from "@public/icons/menuclose.svg";

function Navbar() {
  const [activeNavOption, setActiveNavOption] = useState("home");
  const [isOptionListOpen, setIsOptionListOpen] = useState(false);

  const leftNavOptions = NAVIGATION_OPTIONS?.filter(
    (navOption: NavigationOptionType) => navOption.isLeft
  );
  const rightNavOptions = NAVIGATION_OPTIONS?.filter(
    (navOption: NavigationOptionType) => !navOption.isLeft
  );

  function handleNavClick(id: string) {
    const activeOption: NavigationOptionType | undefined =
      NAVIGATION_OPTIONS?.find(
        (navOption: NavigationOptionType) => id === navOption.id
      );
    if (activeOption) {
      setActiveNavOption(activeOption.id);
    }
  }

  return (
    <nav className="w-full px-0.25 py-0.5 text-xl text-white select-none">
      <div className="hidden md:flex items-center bg-black m-auto p-0.25 w-fit rounded-3xl">
        {leftNavOptions?.map((navItem: NavigationOptionType) => (
          <Button
            key={navItem.id}
            rounded
            variant={activeNavOption === navItem.id ? "active" : "transparent"}
            handleClick={() => handleNavClick(navItem.id)}
          >
            {navItem.title}
          </Button>
        ))}
        <div className="text-2xl font-bold text-orange px-2">
          Dheeraj Kushwah
        </div>
        {rightNavOptions?.map((navItem: NavigationOptionType) => (
          <Button
            rounded
            key={navItem.id}
            variant={activeNavOption === navItem.id ? "active" : "transparent"}
            handleClick={() => handleNavClick(navItem.id)}
          >
            {navItem.title}
          </Button>
        ))}
      </div>
      <div
        className={`md:hidden text-center bg-black m-auto p-0.25 w-full md:w-fit ${
          isOptionListOpen ? "rounded-3xl" : "rounded-3xl"
        }`}
      >
        <div className="relative text-2xl py-0.5 font-bold text-orange m-auto md:m-inherit px-2">
          {
            <div
              className="absolute cursor-pointer"
              onClick={() => {
                setIsOptionListOpen(!isOptionListOpen);
              }}
            >
              {isOptionListOpen ? (
                <Image
                  height={32}
                  width={32}
                  src={CloseIcon}
                  alt="close menu"
                />
              ) : (
                <Image
                  height={32}
                  width={32}
                  src={HamburgarIcon}
                  alt="open menu"
                />
              )}
            </div>
          }
          Dheeraj Kushwah
        </div>
        <ul
          className={`transition-all overflow-hidden ${
            isOptionListOpen ? "h-[244px]" : "h-0 "
          } `}
        >
          {NAVIGATION_OPTIONS.map((navItem: NavigationOptionType) => (
            <li
              key={navItem.id}
              className={`py-0.5 cursor-pointer rounded-3xl ${
                navItem.id === activeNavOption ? "bg-orange" : ""
              }`}
              onClick={() => handleNavClick(navItem.id)}
            >
              {navItem.title}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
