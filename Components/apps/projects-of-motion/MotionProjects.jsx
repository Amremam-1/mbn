/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
const projects = [
  {
    image: "",
    title: "متجر نص | Half",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "D2020  موقع",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "تطبيق sasty",
    subtitle: " تطبيق اندرويد و ios ",
  },
  {
    image: "",
    title: "نموذج لشرطة منطقة مكة",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "العربي للنشر والتوزيع",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "بي ستيم",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "TIA",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "متجر نص | Half",
    subtitle: " تطبيق اندرويد و ios ",
  },
  {
    image: "",
    title: "تطبيق سيارتك",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "تطبيق مطبخي",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "تطوير تطبيق بقالة",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "BE-STEAM Parent",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "تطبيق الاتحاد السعودي للجودو",
    subtitle: " تطبيق اندرويد و ios ",
  },
  {
    image: "",
    title: "تطبيق مياه تالا",
    subtitle: " تطبيق اندرويد و ios ",
  },
  {
    image: "",
    title: "موقع الاتحاد السعودي للملاكمة",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "تطبيق دليل 2020",
    subtitle: " تطبيق اندرويد و ios ",
  },
  {
    image: "",
    title: " موقع M11",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "منيو ومتجر حلبي ",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "tarboush",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "حج وعمرة البدل",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "Nafud",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "Fast son!c",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "Pwell",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "Ilya Tours",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "Ryalto",
    subtitle: "موقع الكتروني",
  },
  {
    image: "",
    title: "سيتم الرفع قريبا",
    subtitle: "الموقع قيد التطوير",
  },
]

const MotionProjects = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>موشن جرافيك</span>
          <h2>أعمالنا</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.wrapper}>
          {projects.map((item, index) => (
            <div className={styles.item} key={index}>
              <div className={styles.services_box}>
                <div className={styles.project_image}>
                  <Image
                    src={item.image}
                    className={styles.img}
                    width={0}
                    height={0}
                    alt=""
                    sizes="100vw"
                  />
                </div>

                <div className={styles.project_content}>
                  <h3>
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <ul>
                    <li className={styles.line}>{item.subtitle1}</li>
                    <li>{item.subtitle2}</li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MotionProjects
