import Intro from "@/Components/Home/Intro/Intro"
import ServicePackage from "@/Components/Home/servicePackage/ServicePackage"
import Counter from "@/Components/Home/Counter/Counter"
import BarLine from "@/Components/Home/barLine/BarLine"
import Info from "@/Components/Home/info/Info"

export default function Home() {
  return (
    <main>
      <Intro />
      <ServicePackage />
      <BarLine />
      <Info />
      <BarLine />
      {/* <Counter /> */}
    </main>
  )
}
