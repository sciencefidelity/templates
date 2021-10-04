import React, { FC, useState, useEffect } from "react"

import Layout from "@/components/Layout"
import logo from "@/images/logo.svg"
import "@/styles/index.scss"

const App: FC = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <Layout>
      <div className="app">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
      </div>
    </Layout>
  )
}

export default App
