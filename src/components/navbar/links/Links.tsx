"use client";

import { useState } from "react";
import Image from "next/image";

import styles from "./links.module.css"
import NavLink from "./navLink/navLink";
import { handleLogout } from "@/lib/action";
import { Session } from "next-auth";

const links = [
  {
    title: 'Homepage',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Contact',
    path: '/contact',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

type LinksProps = {
  session: Session;
}

export default function Links({ session }: LinksProps) {
  const [open, setOpen] = useState(false);

  //TEMPORARY
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {
          links.map(link => (
            <NavLink item={link} key={link.title} />
          ))
        }
        {
          session?.user ? (
            <>
              {
                session.user?.isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />
              }
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            <NavLink item={{ title: "Login", path: "/login" }} />
          )
        }
      </div>
      <Image src="/menu.png" alt="" width={30} height={30} onClick={() => setOpen(prev => !prev)} className={styles.menuButton} />
      {
        open && (
          <div className={styles.mobileLinks}>
            {links.map(link => (
              <NavLink item={link} key={link.title} />
            ))}
          </div> 
        )
      }
    </div>
  );
}