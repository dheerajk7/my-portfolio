import Link from "next/link";
import Image from "next/image";
import { NAVBAR_FOOTER_ITEMS } from "../utils";
import { NavbarFooterItemType } from "../types";

function NavbarFooter() {
  return (
    <ul className="flex justify-center gap-1">
      {NAVBAR_FOOTER_ITEMS.map((footerItem: NavbarFooterItemType) => (
        <li key={footerItem.id}>
          <Link href={footerItem.endPoint} target="_blank">
            <Image
              height={36}
              width={36}
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
