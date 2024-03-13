"use client"

import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { IoAppsOutline } from "react-icons/io5"
import { useState } from "react"

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "",
    link: "/about",
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "/",
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/project",
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "",
    link: "/",
  },
  {
    id: "06",
    titleAr: "الأسعار",
    titleEn: "",
    link: "/",
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "",
    link: "/contact",
  },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState("")

  const handleItemClick = (idTitle) => () => {
    setActiveLink(activeLink === idTitle ? idTitle : "")
  }
  return (
    <header className={styles.header}>
      <div className={`${styles.container} secContainer`}>
        <div className={styles.logo}>
          <Image
            className={styles.logoImg}
            src="/images/logo.png"
            alt="logo"
            width={100}
            height={55}
          />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navList?.map((item, index) => (
              <li
                className={styles.navItem}
                key={index}
                onClick={() => handleItemClick(item.id)}
              >
                <Link
                  className={`${styles.navLink} ${
                    activeLink === item.id ? styles.active : ""
                  }`}
                  href={item.link}
                >
                  {item.titleAr}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.btns}>
          <div className={styles.modes}>
            <button className={styles.lightModeBtn}>
              <MdOutlineLightMode className={styles.lightModeIcon} />
            </button>
          </div>
          <div className={styles.apps}>
            <button className={styles.appsBtn}>
              <IoAppsOutline className={styles.appsIcon} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
