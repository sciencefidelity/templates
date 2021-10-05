import React, { FC, useState } from "react"
import PropTypes from "prop-types"
import type { RouteComponentProps } from "@reach/router"

import { capitalize } from "@/lib/utils"
import Layout from "@/components/Layout"
import "@/styles/counter.scss"

interface Props extends RouteComponentProps {
  title: string
}

const Counter: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)
  const countDown = () => {
    setCount(count - 1)
  }
  const countUp = () => {
    setCount(count + 1)
  }
  return (
    <Layout>
      <div className={title}>
        <h1>{capitalize(title)}</h1>
        <button onClick={countDown}>–</button>
        <span className="count">{count}</span>
        <button onClick={countUp}>+</button>
        <p>
          The button has been pushed <code>{count}</code> times.
        </p>
      </div>
    </Layout>
  )
}

Counter.propTypes = {
  title: PropTypes.string.isRequired
}

export default Counter
