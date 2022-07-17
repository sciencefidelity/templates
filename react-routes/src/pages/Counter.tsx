import { useState } from "react"
import { capitalize } from "lib/utils"
import { Layout } from "components/layout"
import styles from "styles/Counter.module.scss"

interface Props {
  title: string
}

export function Counter({ title }: Props) {
  const [count, setCount] = useState(0)
  const countDown = () => {
    setCount((prev) => prev - 1)
  }
  const countUp = () => {
    setCount((prev) => prev + 1)
  }
  return (
    <Layout>
      <div className={styles[title]}>
        <h1>{capitalize(title)}</h1>
        <button onClick={countDown} type="button">
          –
        </button>
        <div className={styles.count}>{count}</div>
        <button onClick={countUp} type="button">
          +
        </button>
        <p>
          The button has been pushed <code data-testid="count">{count}</code>{" "}
          times.
        </p>
      </div>
    </Layout>
  )
}
