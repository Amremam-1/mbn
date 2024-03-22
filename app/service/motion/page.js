import ServiceDetail from "@/Components/motion/serviceDetails/ServiceDetail"
import PageHead from "@/Components/utils/PageHead/PageHead"

export default function Motion() {
  const linksList = [
    {
      id: "01",
      link: "/",
      titleAr: "الرئيسية/",
      titleEn: "",
    },
    {
      id: "02",
      link: "/",
      titleAr: "موشن جرافيك",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="خدماتنا" links={linksList} />
      <ServiceDetail />
    </main>
  )
}
