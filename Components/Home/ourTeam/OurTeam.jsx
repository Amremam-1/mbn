"use client"

import React, { useRef, useState } from "react"
import styles from "./styles.module.scss"
import Link from "next/link"
import Image from "next/image"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const team = [
  {
    presonImg: "/images/team2.jpg",
    presonName: "م كريم حلمي",
    presonJop: "مدير المشاريع البرمجيه",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "هنادى",
    presonJop: "مسؤولة قسم التسويق",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "عواطف شيخ",
    presonJop: "مسؤولة الدعم الفني",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "هنادى",
    presonJop: "مسؤولة التسويق",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "عواطف شيخ",
    presonJop: "مسؤولة الدعم الفني",
    personSm: [""],
  },
  {
    presonImg: "/images/team1.jpg",
    presonName: "رغد علي",
    presonJop: "مسؤولة قسم التطوير والدراسات والترجمة",
    personSm: [""],
  },
]

const CompletedProjects = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  return (
    <section className={styles.section}>
      <div className="secContainer">
        <div className={styles.container}>
          <div>
            <div className={`${styles.Title} conTitle`}>
              <span>فريقنا المتميز سيفعل أي شيء من أجلك.</span>
              <h2>فريق العمل</h2>
              <div className="bar"></div>
            </div>
            <Link href="">
              <button className={`btn ${styles.contact}`}>عرض الكل</button>
            </Link>
          </div>

          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            autoPlaySpeed={2000}
            className={styles.carousel}
          >
            {team.map((item, index) => (
              // eslint-disable-next-line react/jsx-key
              <div className={styles.item} key={index}>
                <div className={styles.single_team}>
                  <Image
                    src={item.presonImg}
                    alt=""
                    className={styles.img}
                    width={0}
                    height={0}
                    sizes="100vw"
                  />

                  <div className={styles.team_content}>
                    <h3>{item.presonName}</h3>
                    <span>{item.presonJop}</span>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  )
}

export default CompletedProjects
