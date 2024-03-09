import Intro from "@/Components/Home/Intro/Intro"
import ServicePackage from "@/Components/Home/servicePackage/ServicePackage"
// import Counter from "@/Components/Home/counter/Counter"
import BarLine from "@/Components/Home/barLine/BarLine"
import Info from "@/Components/Home/info/Info"
import ServiceContent from "@/Components/Home/serviceContent/ServiceContent"
import CompletedProjects from "@/Components/Home/completedProjects/CompletedProjects"

export default function Home() {
  return (
    <main>
      <Intro />
      <ServicePackage />
      <BarLine />
      <Info />
      <BarLine />
      <ServiceContent />
      <BarLine />
      {/* <Counter /> */}
      <CompletedProjects />
    </main>
  )
}
