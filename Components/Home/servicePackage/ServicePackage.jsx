"use client"

import styles from "./styles.module.scss"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiBullseye } from "react-icons/gi"
import { TbWorldSearch } from "react-icons/tb"
import Image from "next/image"
import { useState } from "react"

const ServicePackage = () => {
  const [isHovered, setIsHovered] = useState(null)

  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div
          className={styles.box_one}
          onMouseEnter={() => setIsHovered("box_one")}
          onMouseLeave={() => setIsHovered(null)}
        >
          <div className={styles.box_contant}>
            <HiOutlineLightBulb className={styles.icon} />

            <h3>الخدمات البرمجية</h3>

            <div className={styles.bar}></div>

            <p>
              تصميم وبرمجة التطبيقات والموقع بأحدث التقنيات بأفضل الاسعار وبدعم
              فني مجاني
            </p>
          </div>

          <div>
            <Image
              src={
                isHovered === "box_one"
                  ? "/images/white-dot.png"
                  : "/images/dot.png"
              }
              className={styles.dot}
              alt=""
              width={45}
              height={45}
              loading="lazy"
            />

            <Image
              src={"/images/shape2.svg"}
              className={styles.shape1}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape1.svg"}
              className={styles.shape2}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />

            <Image
              src={"/images/shape3.svg"}
              className={styles.shape3}
              alt=""
              width={25}
              height={25}
              loading="lazy"
            />
          </div>
        </div>
        <div className={styles.box_two}>
          <div className={styles.box_contant}>
            <GiBullseye className={styles.icon} />

            <h3>الخدمات الفنية</h3>

            <div className={styles.bar}></div>

            <p>
              خدمات فنية متعددة من تصوير بأحدث الكاميرات ومونتاج وموشن جرافيك
              وهندسة صوتية وتصاميم بأحدث البرامج
            </p>
          </div>

          <div>
            <Image
              src={"/images/white-dot.png"}
              className={styles.dot}
              alt=""
              width={45}
              height={45}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.box_three}>
          <div
            className={styles.box_contant}
            onMouseEnter={() => setIsHovered("box_three")}
            onMouseLeave={() => setIsHovered(null)}
          >
            <TbWorldSearch className={styles.icon} />

            <h3>الخدمات التسويقية</h3>

            <div className={styles.bar}></div>

            <p>
              التسويق هو أساس أي مشروع لذالك لدينا امهر المسوقين بخبرات عالية
              ولدينا عدد كبير من مشاهير السوشيال ميديا للتسويق والإعلان
            </p>
          </div>
          <div>
            <Image
              src={
                isHovered === "box_three"
                  ? "/images/white-dot.png"
                  : "/images/dot.png"
              }
              className={styles.dot}
              alt=""
              width={45}
              height={45}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicePackage
