import React, { FC, useState, useEffect } from "react"
import type { RouteComponentProps } from "@reach/router"

import Layout from "@/components/Layout"
import logo from "@/images/logo.svg"
import "@/styles/home.scss"

const App: FC<RouteComponentProps> = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <Layout>
      <div className="home">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </div>
    </Layout>
  )
}

export default App
