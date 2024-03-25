import ServiceDetail from "@/Components/Art/serviceDetails/ServiceDetail"
import BarLine from "@/Components/Home/barLine/BarLine"
import BoxService from "@/Components/apps/servicesBoxs/BoxService"
import PageHead from "@/Components/utils/PageHead/PageHead"

export default function Art() {
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
      titleAr: "خدمات التصوير واالنتاج الفني",
      titleEn: "",
    },
  ]

  return (
    <main>
      <PageHead pageTitle="خدماتنا" links={linksList} />
      <ServiceDetail />
      <BarLine />
      <BoxService />
    </main>
  )
}
