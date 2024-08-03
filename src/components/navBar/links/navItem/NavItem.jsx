"use client";

import Link from "next/link";
import styles from "./NavItem.module.css";
import { usePathname } from "next/navigation";

const NavItem = ({ item }) => {
  const pathname = usePathname();
  return (
    <Link
      href={item.path}
      className={`flex items-center text-gray-300 font-sans text-lg text-center ${pathname === item.path && `bg-white rounded-3xl text-black p-3`}`}
    >
      {item.title}
    </Link>
  );
};

export default NavItem;
