import React, { FC, useState } from "react"
import type { RouteComponentProps } from "@reach/router"

import Layout from "@/components/Layout"
import "@/styles/counter.scss"

const Counter: FC<RouteComponentProps> = () => {
  const [count, setCount] = useState(0)
  const countDown = () => {
    setCount(count - 1)
  }
  const countUp = () => {
    setCount(count + 1)
  }
  return (
    <Layout>
      <div className="counter">
        <button onClick={countDown}>–</button>
        <button onClick={countUp}>+</button>
        <p>
          The button has been pushed <code>{count}</code> times.
        </p>
      </div>
    </Layout>
  )
}

export default Counter
