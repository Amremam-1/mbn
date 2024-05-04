/* eslint-disable react/jsx-key */
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
const projects = [
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
  {
    image: "",
    title: "",
    link: "",
  },
]

const MotionProjects = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <span>تصميم البوسترات الاعلانيه</span>
          <h2 className="dark:text-white">أعمالنا</h2>
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

                <div
                  className={`${styles.project_content} color89 dark:bg-card`}
                >
                  <h3 className="dark:text-white">
                    <Link href={item.link}>{item.title}</Link>
                  </h3>
                  <ul>
                    <li className="color84 dark:text-white">
                      {item.subtitle1}
                    </li>
                    <li
                      className={`${styles.line} color84 dark:opacity-70 dark:text-white`}
                    >
                      {item.subtitle2}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.br_line}></div>
    </div>
  )
}

export default MotionProjects
