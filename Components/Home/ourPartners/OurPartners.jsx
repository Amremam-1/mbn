"use client"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"
import styles from "./styles.module.scss"
import Image from "next/image"

const partners = [
  {
    part_one: "/images/client1.png",
  },
  {
    part_one: "/images/client2.png",
  },
  {
    part_one: "/images/client3.png",
  },
  {
    part_one: "/images/client4.png",
  },
  {
    part_one: "/images/client5.png",
  },
  {
    part_one: "/images/client6.png",
  },
]

const OurPartners = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
    <div className="secContainer">
      <div className={styles.container}>
        <div className={`${styles.Title} conTitle`}>
          <h2>شركائنا فى النجاح</h2>
          <div className="bar"></div>
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
          {partners.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div className={styles.item} key={index}>
              <Image
                src={item.part_one}
                alt=""
                className={styles.img}
                width={120}
                height={120}
                sizes="100vw"
                loading="lazy"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default OurPartners
