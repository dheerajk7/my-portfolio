"use client";
import { usePathname } from "next/navigation";

import NavItem from "./NavItem";
import { NAV_OPTIONS } from "./utils";
import { NavItemType } from "./types";
import NavbarFooter from "./NavbarFooter";

function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="fixed left-0 flex flex-col justify-between h-screen bg-black lg:p-2 w-[48px] min-w-[48px] lg:w-[280px] lg:min-w-[280px]">
      <header className="hidden lg:block text-white text-2xl font-semibold pt-2">
        Dheeraj Kushwah
      </header>
      <header className="block text-center lg:hidden text-white text-2xl font-semibold pt-2">
        DK
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
