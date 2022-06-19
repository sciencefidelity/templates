import { FC, ReactNode } from "react"
import { Header } from "components/Header"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import "styles/layout.scss"

interface Props {
  children: ReactNode
}

export const Layout: FC<Props> = ({ children }) => {
  return (
    <div className="parent">
      <div>
        <Header />
        <Navbar />
      </div>
      <div>
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

