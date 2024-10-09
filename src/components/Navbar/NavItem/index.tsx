import Link from "next/link";
import Image from "next/image";
import { NavItemType } from "../types";

function NavItem({ id, title, isActive, endPoint, icon }: NavItemType) {
  return (
    <li
      className={`my-1 text-xl ${isActive ? "font-semibold " : "font-light"}`}
      key={id}
    >
      <Link href={endPoint}>
        <div className="w-fit">
          <div className="flex content-center gap-0.5 mb-0.25">
            {icon && <Image className="" src={icon} alt={title} />}
            {title}
          </div>
          <div
            className={` ${
              isActive ? "opacity-100" : "opacity-0"
            } h-[2.5px] bg-gradient-to-r from-gradient-start from-0% via-gradient-mid via-52% to-gradient-end to-100%`}
          />
        </div>
      </Link>
    </li>
  );
}

export default NavItem;
