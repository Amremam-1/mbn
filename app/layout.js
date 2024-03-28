import Header from "@/Components/utils/Header/Header"
import "./globals.scss"
import { Inter, Cairo, Poppins } from "next/font/google"
import Footer from "@/Components/utils/Footer/Footer"
import NavBar from "@/Components/Home/navBar/NavBar"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
})

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MBN",
  description: "Mahercp website",
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>
        <Header />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
