"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import styles from "./navLink.module.css";

type NavLinkProps = {
  item: {
    title: string,
    path: string,
  }
}

export default function NavLink({ item }: NavLinkProps) {
  const pathName = usePathname();

  return (
    <Link href={item.path} className={`${styles.container} ${
      pathName === item.path && styles.active}`}>
        {item.title}
    </Link>
  );
}