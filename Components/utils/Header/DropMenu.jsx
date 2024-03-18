"use clinet"

import { useState, useEffect } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

const navLinks = [
  {
    id: "01",
    titleAr: "موشن جرافيك",
    titleEn: "",
    link: "/",
  },
  {
    id: "02",
    titleAr: "تطبيقات ومواقع",
    titleEn: "",
    link: "/",
  },
  {
    id: "03",
    titleAr: "تسويق ومشاهير",
    titleEn: "",
    link: "/",
  },
  {
    id: "04",
    titleAr: "خدمات الانتاج الفني",
    titleEn: "",
    link: "/",
  },
  {
    id: "05",
    titleAr: "تصوير منتجات",
    titleEn: "",
    link: "/",
  },
  {
    id: "06",
    titleAr: "دراسة المشاريع التقنية",
    titleEn: "",
    link: "/",
  },
  {
    id: "07",
    titleAr: "قاست كارت",
    titleEn: "",
    link: "/",
  },
  {
    id: "08",
    titleAr: "إدارة المشاريع ميديا",
    titleEn: "",
    link: "/",
  },
]

const DropMenu = ({ show }) => {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (show) {
      setIsHovered(true)
    } else {
      setIsHovered(false)
    }
  }, [show])

  return (
    <div className={`${styles.DropMenu} ${isHovered ? styles.show : ""}`}>
      {navLinks.map((item) => (
        <div key={item.id}>
          <Link href={item.link} className={styles.navmenu}>
            {item.titleAr}
          </Link>
        </div>
      ))}
    </div>
  )
}
export default DropMenu
