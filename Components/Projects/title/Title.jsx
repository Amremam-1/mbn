"use client"

// import { useState } from "react"
// import styles from "./styles.module.scss"
// import BarLine from "@/Components/Home/barLine/BarLine"
// import Image from "next/image"

// const projectContent = [
//   {
//     img: "/images/p8.jpg",
//     title: "أعمال موشن جرافيك",
//     subTitle: "موشن جرافيك",
//   },
//   {
//     img: "/images/p9.jpg",
//     title: "أعمال المواقع والتطبيقات",
//     subTitle: "تطبيقات ومواقع",
//   },
//   {
//     img: "/images/p10.jpg",
//     title: "أعمال وخدمات التسويق",
//     subTitle: "تسويق ومشاهير",
//   },
//   {
//     img: "/images/p11.jpg",
//     title: "أعمال وخدمات الانتاج الفني",
//     subTitle: "الانتاج الفني",
//   },
// ]

// const bar = [
//   {
//     btnbar: "الكل",
//   },
//   {
//     btnbar: "موشن جرفيك",
//   },
//   {
//     btnbar: "تطبيقات ومواقع",
//   },
//   {
//     btnbar: "تسويق الكتروني",
//   },
//   {
//     btnbar: "خدمات الانتاج الفني",
//   },
// ]

// const GridItem = ({ img }) => (
//   <>
//     <Image
//       src={img.img}
//       alt={img.title}
//       width={270}
//       height={270}
//       sizes="100vw"
//       loading="lazy"
//     />
//     <div>
//       <h3>{img.title}</h3>
//       <span>{img.subTitle}</span>
//     </div>
//   </>
// )

// const Title = () => {
//   const [activeBtn, setActiveBtn] = useState("الكل")

//   const handleBtn = (button) => {
//     setActiveBtn(activeBtn === button ? "" : button)
//   }

//   return (
//     <div className={styles.container}>
//       <div className={`${styles.Title} conTitle`}>
//         <h2>أعمالنا المنجزة</h2>
//         <div className="bar"></div>
//       </div>

//       <div className={styles.wrapper}>
//         <div className={styles.filtering_btns}>
//           <div className={styles.toolbar}>
//             {bar.map((item) => (
//               <button
//                 onClick={() => handleBtn(item.btnbar)}
//                 className={`${styles.navigation} ${
//                   activeBtn === item.btnbar ? styles.active : ""
//                 }`}
//                 key={item.btnbar}
//               >
//                 <span>{item.btnbar}</span>
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className={styles.uk_grid}>
//           {activeBtn === "الكل" &&
//             projectContent.map((item) => (
//               <div key={item.title}>
//                 <GridItem img={item} />
//               </div>
//             ))}
//           {activeBtn === "موشن جرفيك" && (
//             <div key={projectContent[0].title}>
//               <GridItem img={projectContent[0]} />
//             </div>
//           )}
//           {activeBtn === "تطبيقات ومواقع" && (
//             <div key={projectContent[1].title}>
//               <GridItem img={projectContent[1]} />
//             </div>
//           )}
//           {activeBtn === "تسويق الكتروني" && (
//             <div key={projectContent[2].title}>
//               <GridItem img={projectContent[2]} />
//             </div>
//           )}
//           {activeBtn === "خدمات الانتاج الفني" && (
//             <div key={projectContent[3].title}>
//               <GridItem img={projectContent[3]} />
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Title
import { useState } from "react"
import styles from "./styles.module.scss"
import BarLine from "@/Components/Home/barLine/BarLine"
import Image from "next/image"

const projectContent = [
  {
    id: "1",
    img: "/images/p8.jpg",
    title: "أعمال موشن جرافيك",
    subTitle: "موشن جرافيك",
  },
  {
    id: "2",
    img: "/images/p9.jpg",
    title: "أعمال المواقع والتطبيقات",
    subTitle: "تطبيقات ومواقع",
  },
  {
    id: "3",
    img: "/images/p10.jpg",
    title: "أعمال وخدمات التسويق",
    subTitle: "تسويق ومشاهير",
  },
  {
    id: "4",
    img: "/images/p11.jpg",
    title: "أعمال وخدمات الانتاج الفني",
    subTitle: "الانتاج الفني",
  },
]

const bar = [
  {
    id: "0",
    btnbar: "الكل",
  },
  {
    id: "1",
    btnbar: "موشن جرافيك",
  },
  {
    id: "2",
    btnbar: "تطبيقات ومواقع",
  },
  {
    id: "3",
    btnbar: "تسويق الكتروني",
  },
  {
    id: "4",
    btnbar: "خدمات الانتاج الفني",
  },
]

const GridItem = ({ img }) => (
  <>
    <Image
      src={img.img}
      alt={img.title}
      width={270}
      height={270}
      sizes="100vw"
      loading="lazy"
    />
    <div>
      <h3>{img.title}</h3>
      <span>{img.subTitle}</span>
    </div>
  </>
)

const Title = () => {
  const [activeBtn, setActiveBtn] = useState("0")

  const handleBtn = (buttonId) => {
    setActiveBtn(activeBtn === buttonId ? "" : buttonId)
  }

  return (
    <div className={styles.container}>
      <div className={`${styles.Title} conTitle`}>
        <h2>أعمالنا المنجزة</h2>
        <div className="bar"></div>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.filtering_btns}>
          <div className={styles.toolbar}>
            {bar.map((item) => (
              <button
                onClick={() => handleBtn(item.id)}
                className={`${styles.navigation} ${
                  activeBtn === item.id ? styles.active : ""
                }`}
                key={item.btnbar}
              >
                <span>{item.btnbar}</span>
              </button>
            ))}
          </div>
        </div>

        <div className={styles.uk_grid}>
          {projectContent
            .filter((item) => activeBtn === "0" || item.id === activeBtn)
            .map((item) => (
              <div key={item.title}>
                <GridItem img={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Title
