"use client";
import { usePathname } from "next/navigation";

import NavItem from "./NavItem";
import { NAV_OPTIONS } from "./utils";
import { NavItemType } from "./types";
import NavbarFooter from "./NavbarFooter";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col justify-between h-screen bg-black p-2 w-[280px] min-w-[280px]">
      <header className="text-white text-2xl font-semibold pt-2">
        Dheeraj Kushwah
      </header>
      <ul className="text-white mb-15">
        {NAV_OPTIONS?.map((navItem: NavItemType) => (
          <NavItem
            key={navItem.id}
            id={navItem.id}
            title={navItem.title}
            endPoint={navItem.endPoint}
            icon={navItem.icon}
            isActive={navItem?.endPoint === pathname}
          />
        ))}
      </ul>
      <NavbarFooter />
    </nav>
  );
}

export default Navbar;
