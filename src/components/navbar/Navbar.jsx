"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.css";
import Image from "next/image";
import { DarkModeToggle } from "../darkModeToggle/DarkModeToggle";
import { ThemeContext } from "@/src/context/ThemeContext";

const links = [
  {
    id: 1,
    href: "/",
    title: "Home",
  },
  {
    id: 2,
    href: "/portfolio",
    title: "Portfolio",
  },
  {
    id: 3,
    href: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    href: "/about",
    title: "About",
  },
  {
    id: 5,
    href: "/contact",
    title: "Contact",
  },
  {
    id: 6,
    href: "/dashboard",
    title: "Dashboard",
  },
];

function Navbar() {
  const { mode } = React.useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        <Image
          src={mode === "dark" ? "/logoTransparent.png" : "/logo.svg"}
          alt="logo"
          width={200}
          height={200}
        />
      </Link>

      <div className={styles.linkContainer}>
        <DarkModeToggle />
        {links.map((link) => (
          <Link key={link.id} href={link.href} className={styles.link}>
            {link.title}
          </Link>
        ))}
        <button
          className={styles.logoutButton}
          onClick={() => {
            console.log("Button clicked");
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;
