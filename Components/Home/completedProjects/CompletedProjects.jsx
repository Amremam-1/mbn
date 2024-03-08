import React from "react"
import styles from "./styles.module.scss"
import Link from "next/link"

const projects = [
  {
    image: "/images/img4.png",
    title: "بي ستيم",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img5.png",
    title: " TIA",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img6.png",
    title: "متجر نص | Half",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img3.PNG",
    title: "BE-STEAM Parent",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img7.png",
    title: "D2020  موقع",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img1.png",
    title: "العربي للنشر والتوزيع",
    subtitle: "موقع الكتروني",
  },
  {
    image: "/images/img2.PNG",
    title: "متجر نص | Half",
    subtitle: "موقع الكتروني",
  },
]
const CompletedProjects = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div>
          <div className={`${styles.Title} conTitle`}>
            <span>مشاريعنا المنجزة</span>
            <h2>أحدث أعمالنا</h2>
            <div className="bar"></div>
          </div>
          <Link href={""}>
            <button className={`btn ${styles.contact}`}>عرض كل المشاريع</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CompletedProjects
