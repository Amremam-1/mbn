"use client"

import styles from "./styles.module.scss"
import { HiOutlineLightBulb } from "react-icons/hi"
import { GiBullseye } from "react-icons/gi"
import { TbWorldSearch } from "react-icons/tb"
import { useState } from "react"

const Services = [
  {
    icon: HiOutlineLightBulb,
    title: "الخدمات البرمجية",
    subtitle:
      "تصميم وبرمجة التطبيقات والموقع بأحدث التقنيات بأفضل الاسعار وبدعم فني مجاني",
    imgDot: "/images/dot.png",
    id: "01",
  },
  {
    icon: GiBullseye,
    title: "الخدمات الفنية",
    subtitle:
      "خدمات فنية متعددة من تصوير بأحدث الكاميرات ومونتاج وموشن جرافيك وهندسة صوتية وتصاميم بأحدث البرامج",
    imgDot: "/images/dot.png",
    id: "02",
  },
  {
    icon: TbWorldSearch,
    title: "الخدمات التسويقية",
    subtitle:
      "التسويق هو أساس أي مشروع لذالك لدينا امهر المسوقين بخبرات عالية ولدينا عدد كبير من مشاهير السوشيال ميديا للتسويق والإعلان",
    imgDot: "/images/dot.png",
    id: "03",
  },
]

const ServicePackage = () => {
  const [activeService, setActiveService] = useState("02")

  const handleActiveService = (serviceId) => {
    setActiveService(serviceId)
  }
  return (
    <div className={`${styles.ServicePackage} secContainer`}>
      {Services.map((item, index) => (
        // eslint-disable-next-line react/jsx-key
        <div
          className={`${styles.item} ${
            item.id === activeService ? styles.active : ""
          }`}
          key={index}
          onClick={() => handleActiveService(item.id)}
        >
          <div className={styles.features_box}>
            <div className={styles.icon}>
              <item.icon className={styles.icon_sv} />
            </div>
            <h3>{item.title}</h3>

            <div className={styles.bar}></div>

            <p>{item.subtitle}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ServicePackage
