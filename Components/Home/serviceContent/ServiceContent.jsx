import styles from "./styles.module.scss"
import { IoColorFilterOutline } from "react-icons/io5"
import { HiOutlineMegaphone } from "react-icons/hi2"
import { HiOutlineFilm } from "react-icons/hi2"
import { IoCameraOutline } from "react-icons/io5"
import { HiOutlinePresentationChartBar } from "react-icons/hi"
import { HiOutlineArrowNarrowLeft } from "react-icons/hi"
import Link from "next/link"
import { MdOutlineLaptopMac } from "react-icons/md"
import { TiShoppingCart } from "react-icons/ti"
import { MdOutlineSettingsSuggest } from "react-icons/md"

const Content = [
  {
    title: "موشن جرافيك",
    icon: IoColorFilterOutline,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "تطبيقات ومواقع",
    icon: MdOutlineLaptopMac,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "تسويق ومشاهير",
    icon: HiOutlineMegaphone,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "خدمات الانتاج الفني",
    icon: HiOutlineFilm,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "تصوير المنتجات",
    icon: IoCameraOutline,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "دراسة المشاريع التقنية",
    icon: HiOutlinePresentationChartBar,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "فاست كارت",
    icon: TiShoppingCart,
    arrow: HiOutlineArrowNarrowLeft,
  },
  {
    title: "إداره سوشيال ميديا",
    icon: MdOutlineSettingsSuggest,
    arrow: HiOutlineArrowNarrowLeft,
  },
]

const ServiceContent = () => {
  return (
    <div className="secContainer">
      <div className={styles.container}>
        <div className="conTitle">
          <span>ماذا نقدم ؟</span>
          <h2>خدماتنا</h2>
          <div className="bar"></div>
        </div>

        <div className={styles.uk_grid}>
          {Content.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.single_services} key={index}>
              <div className={styles.item}>
                <span>
                  <item.icon className={styles.icon} />
                </span>
                <h3>{item.title}</h3>
                <Link href={""}>
                  <item.arrow className={styles.arrow} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServiceContent
