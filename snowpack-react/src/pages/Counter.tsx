import React, { FC } from "react"
import type { RouteComponentProps } from "@reach/router"

import Layout from "@/components/Layout"
import "@/styles/counter.scss"

const Counter: FC<RouteComponentProps> = () => {
  return (
    <Layout>
      <div className="counter">
      </div>
    </Layout>
  )
}

export default Counter
