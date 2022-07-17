import { Link } from "wouter"
import { Layout } from "components/layout"
import styles from "styles/404.module.scss"

export function NotFound() {
  return (
    <Layout>
      <div className={styles["four-oh-four"]}>
        <h1>404 Not Found</h1>
        <p>
          You&apos;ve hit a path that does not exist,
          <br />
          oh the sadness!
        </p>
        <Link to="/">Home</Link>
      </div>
    </Layout>
  )
}
