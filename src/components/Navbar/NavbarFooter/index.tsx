import Link from "next/link";
import Image from "next/image";
import { NAVBAR_FOOTER_ITEMS } from "../utils";
import { NavbarFooterItemType } from "../types";

function NavbarFooter() {
  return (
    <ul className="flex flex-col lg:flex-row items-center mb-1 lg:mb-0 gap-0.5 lg:gap-2 justify-center">
      {NAVBAR_FOOTER_ITEMS.map((footerItem: NavbarFooterItemType) => (
        <li key={footerItem.id}>
          <Link href={footerItem.endPoint} target="_blank">
            <Image
              height={32}
              width={32}
              src={footerItem.icon}
              alt={footerItem.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NavbarFooter;
