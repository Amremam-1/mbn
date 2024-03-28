"use client"
/* eslint-disable react/jsx-key */
import Link from "next/link"
import styles from "./styles.module.scss"
import { AiOutlineClose } from "react-icons/ai"
import { useState } from "react"

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
    // showMenu: false,
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "",
    link: "/about",
    // showMenu: false,
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "/",
    // showMenu: false,
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/project",
    // showMenu: false,
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "",
    link: "/",
    // showMenu: false,
  },
  {
    id: "06",
    titleAr: "فريق العمل",
    titleEn: "",
    link: "/team",
    // showMenu: false,
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "",
    link: "/contact",
    // showMenu: false,
  },
]

const NavBar = () => {
  return (
    <div className={styles.navBar}>
      <button className={styles.close}>
        <AiOutlineClose className={styles.iconClose} />
      </button>

      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {navList.map((item) => (
            <li className={styles.navItem} key={item.id}>
              <Link className={styles.navLink} href={item.link}>
                {item.titleAr}
              </Link>
              {/* {item.id === "03" && <DropMenu show={item.showMenu} />} */}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
