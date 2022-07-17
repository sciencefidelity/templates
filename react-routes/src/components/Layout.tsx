import { ReactNode } from "react"
import { Header } from "components/header"
import { Footer } from "components/footer"
import { Navbar } from "components/navbar"

interface Props {
  children: ReactNode
}

export function Layout({ children }: Props) {
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
