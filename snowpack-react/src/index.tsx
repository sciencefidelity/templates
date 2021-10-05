import React from "react"
import ReactDOM from "react-dom"
import { Router } from "@reach/router"
import "sanitize.css/sanitize.css"
import "sanitize.css/assets.css"
import "sanitize.css/reduce-motion.css"
import "sanitize.css/typography.css"
import "@/styles/globals.scss"
import App from "@/pages/Home"
import Counter from "@/pages/Counter"
import About from "@/pages/About"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App path="/" title="home" />
      <Counter path="/counter" />
      <About path="/about" title="About" />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)

// https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept()
}
