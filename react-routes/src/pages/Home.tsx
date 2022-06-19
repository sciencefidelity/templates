import { FC, useState, useEffect } from "react"
import { Layout } from "components/Layout"
import { capitalize } from "lib/utils"
import logo from "images/logo.svg"
import styles from "styles/Home.module.scss"

interface Props {
  title: string
}

export const Home: FC<Props> = ({ title }) => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    const timer = setTimeout(() => setCount(prev => prev + 1), 1000)
    return () => clearTimeout(timer)
  }, [count, setCount])
  return (
    <Layout>
      <div className={styles[title]}>
        <h1>{capitalize(title)}</h1>
        <img src={logo} className={styles["app-logo"]} alt="logo" />
        <p>
          Page has been open for <code data-testid="count">{count}</code> seconds.
        </p>
      </div>
    </Layout>
  )
}
