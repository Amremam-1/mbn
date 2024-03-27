"use client"
import Image from "next/image"
import styles from "./styles.module.scss"
import Link from "next/link"
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md"
import { IoAppsOutline } from "react-icons/io5"
import { useState , useEffect} from "react"
import DropMenu from "./DropMenu"

const navList = [
  {
    id: "01",
    titleAr: "الرئيسية",
    titleEn: "",
    link: "/",
    showMenu: false,
  },
  {
    id: "02",
    titleAr: "من نحن",
    titleEn: "",
    link: "/about",
    showMenu: false,
  },
  {
    id: "03",
    titleAr: "خدماتنا",
    titleEn: "",
    link: "/",
    showMenu: false,
  },
  {
    id: "04",
    titleAr: "أعمالنا",
    titleEn: "",
    link: "/project",
    showMenu: false,
  },
  {
    id: "05",
    titleAr: "أراء العملاء",
    titleEn: "",
    link: "/",
    showMenu: false,
  },
  {
    id: "06",
    titleAr: "فريق العمل",
    titleEn: "",
    link: "/team",
    showMenu: false,
  },
  {
    id: "07",
    titleAr: "إتصل بنا",
    titleEn: "",
    link: "/contact",
    showMenu: false,
  },
]

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [navItems, setNavItems] = useState(navList)

  const [scrollHeader, setScrollHeader] = useState("")

  const handleScroll = () => {
    const scrollPosition = window.scrollY

    if (scrollPosition > 1) {
      setScrollHeader(styles.whiteBackground)
    } else {
      setScrollHeader("")
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleItemClick = (idTitle) => () => {
    setActiveLink(activeLink === idTitle ? "" : idTitle)
  }

  const handleMouseEnter = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item.id === id ? { ...item, showMenu: true } : item
    )
    setNavItems(updatedNavItems)
  }

  const handleMouseLeave = (id) => {
    const updatedNavItems = navItems.map((item) =>
      item.id === id ? { ...item, showMenu: false } : item
    )
    setNavItems(updatedNavItems)
  }

  return (
    <header className={`${styles.header} ${scrollHeader}`}>
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
            {navItems.map((item) => (
              <li
                className={styles.navItem}
                key={item.id}
                onMouseEnter={() => handleMouseEnter(item.id)}
                onMouseLeave={() => handleMouseLeave(item.id)}
              >
                <Link
                  className={`${styles.navLink} ${
                    activeLink === item.id ? styles.active : ""
                  }`}
                  href={item.link}
                  onClick={handleItemClick(item.id)}
                >
                  {item.titleAr}
                </Link>
                {item.id === "03" && <DropMenu show={item.showMenu} />}
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
