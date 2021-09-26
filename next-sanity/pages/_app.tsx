import "sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "../styles/globals.scss"
import type { AppProps } from "next/app"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
