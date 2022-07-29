import { NextPage } from "next"
import Head from "next/head"
import styles from "../styles/Home.module.scss"

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Welcome to Next.js</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className={styles.main}>
      <h1>Welcome to Next.js</h1>
    </main>
  </div>
)

export default Home
